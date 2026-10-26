---
title: State and Data Binding
---

# State and Data Binding

`State<T>` represents a subscribable business state. Widgets declare persistent bindings with the `bind*` and `model*` chainable methods; business events modify only the state and the interface follows it. All State reads, writes, subscriptions and dispatching run on the UI thread.

`State` supports `int32_t`, `bool` and `std::string`; other types are rejected at compile time.

## Minimal example

```cpp
struct SettingsModel {
  State<int32_t> volume = State<int32_t>::bounded(70, 0, 100);
  State<bool> wifi{false};
  State<std::string> name = State<std::string>::text(
      "Device", {.multiline = false, .maxLength = 32});
};

void buildSettings(Widget &parent) {
  SettingsModel vm;

  VBox({.padding = 16, .gap = 12}).init(parent)(
      Slider{}.model(vm.volume),
      Label{}.bindText(vm.volume, [](int32_t value) {
        return std::to_string(value) + "%";
      }),
      Switch{}.model(vm.wifi),
      Button({.text = "50%"}).onClick([volume = vm.volume]() mutable {
        volume.trySet(50);
      })
  );
}
```

Model fields may live in a page controller or inside the build function. Bindings and events capture State handles by value and stay valid after the build function returns.

## Creation and constraints

| Creation | Behavior |
| --- | --- |
| `State<T>{}` | Independent state with value `T{}`, no constraints |
| `State<T> s(initial)` | Independent state; the initial value is normalized by the fixed rules |
| `State<int32_t>::bounded(initial, min, max)` | Integer state with a fixed closed range; throws `StateError` when min is greater than max |
| `State<std::string>::text(initial, rules)` | String state with fixed text rules; throws `StateError` for an invalid initial value |

TextRules fields:

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `multiline` | bool | false | false converts each newline to a space, true normalizes newlines to LF; CRLF counts as one newline |
| `maxLength` | uint32_t | 0 | Maximum Unicode code points, 0 means unlimited; truncation lands on a code point boundary |

Constraints are immutable after creation and widget bindings never modify them. Text states reject writes containing invalid UTF-8 or an embedded NUL by returning `InvalidValue`. Business validation belongs to business code, not to the state layer.

## Reading and writing

| Method | Returns | Description |
| --- | --- | --- |
| `get()` | `T` | Returns a copy; throws `StateError` on an invalid handle |
| `set(value)` / `operator=(value)` | `State&` | Normalizes and commits synchronously; failures throw `StateError` |
| `trySet(value)` | `StateWriteResult` | Same commit path as `set`, returns the full result without throwing |
| `valid()` | bool | true while the handle still owns a state node |
| `watch(callback)` | `StateSubscription<T>` | Subscribes to later effective changes; no callback on registration |

`volume = 50` is identical to `volume.set(50)`. Use `trySet` inside event callbacks and LVGL entry points and handle the returned result; the `StateError` thrown by `set` applies to deliberate business writes.

StateWriteResult fields:

| Field | Type | Description |
| --- | --- | --- |
| `status` | `StateStatus` | Changed, Unchanged, InvalidState, InvalidValue, InvalidOperation, Cycle, OutOfMemory, CallbackFailed |
| `normalized` | bool | The candidate value was altered by the fixed rules |
| `committed` | bool | The candidate replaced the old value; may be true together with a failure status |

The observable order of a write is normalization, same-value comparison, cycle check, commit, widget bindings, then business subscriptions. A same-value write returns `Unchanged` and dispatches nothing. Writing a different value to a dispatching state returns `Cycle`; the same value returns `Unchanged`. There is no batching or deferred queue; consecutive writes produce separate synchronous commits.

## Copy and move

| Operation | Behavior |
| --- | --- |
| Copy construction | Shares one state node; no second business value is created |
| Move construction | Transfers the handle; `valid()` on the source becomes false |
| Assignment between State handles | Unavailable, rejected at compile time |
| `a = b.get()` | Commits the current value of b to a; the node and subscriptions of a stay intact |

Models containing State fields can be copy-constructed to share fields but not assigned as a whole; restore defaults by committing fields individually.

## Subscriptions

The `watch` callback signature is `void(const T &current, const T &previous)`; the references are valid only during the callback. Writing other states inside a callback is allowed; writing the dispatching state follows the cycle rules above.

`StateSubscription` is a move-only scoped owner: destruction, move assignment and explicit `off()` cancel the subscription, and `off()` is repeatable. `connected()` reports the connection state and `error()` returns `InvalidState` for an invalid handle or `CallbackFailed` after a callback exception deactivates the subscription. Keep subscription handles as members of a page controller or business object.

Subscriptions added inside a callback do not join the current dispatch; subscriptions cancelled inside a callback are skipped. When a callback throws, that subscription is deactivated and marked `CallbackFailed`, the remaining subscriptions of the same write continue, and the write result reports `CallbackFailed`.

## Widget bindings

`bind*` is always one-way: State changes update the property while user actions and program writes do not write the state. `model*` is always two-way: widget input is normalized by the model and synced to all connections, and the model constraints are installed.

| Widget | Method | Direction | Constraint |
| --- | --- | --- | --- |
| Label | `bindText(State<std::string>)` | State → text | none |
| Label | `bindText(State<T>, converter)` | State → text or translated text | none |
| Slider | `bindValue(State<int32_t>)` | State → value | none |
| Slider | `model(State<int32_t>)` | two-way | `bounded` state |
| Switch | `bindChecked(State<bool>)` | State → checked | none |
| Switch | `model(State<bool>)` | two-way | none |
| Input | `model(State<std::string>)` | two-way over committed text | `text`-rule state |

Each method accepts an optional `BindingHandle *` out parameter. `clearValueBinding()`, `clearCheckedBinding()` and `clearTextBinding()` remove the binding and keep the currently displayed value; repeated calls do nothing.

Converters return `std::string` or `LocalizedText`; a `LocalizedText` output retranslates on language change without triggering business subscriptions. Writing any State inside a converter returns `InvalidOperation`.

Binding rules:

- Calls before mounting are saved; the connection is established and the current value applied at mount completion. Post-mount calls apply immediately.
- One property has at most one top-level source; rebinding replaces the previous connection, and static text, translation bindings and data bindings replace one another.
- Under a two-way binding the program setters (`value`, `checked`, `text`) write the model; `Notify` only controls whether that program operation emits the widget's public change event.
- Under a one-way binding a program setter unbinds and then applies the manual value; an effective Slider `range()` change unbinds `model` but not the one-way binding.
- An effective Input `multiline()` change unbinds `model`.
- Input binds committed text; IME pre-edit is not written to the state. When the model value equals the source content the rewrite is skipped, preserving caret, selection and the undo stack.
- Slider `model` installs the model range and current value without intermediate public events; user drags and key steps write the state in real time.

A widget changed by user interaction under a one-way binding diverges from the state until the next Changed write overwrites the widget. Writing the value the state already holds returns `Unchanged` and does not refresh the widget. Use `model` when the widget must always equal the state.

## BindingHandle

`BindingHandle` is a move-only unbind handle; destruction does not unbind.

| Method | Returns | Description |
| --- | --- | --- |
| `off()` | void | Unbinds; repeated calls and calls after widget deletion have no extra effect |
| `connected()` | bool | true while the binding is connected and the target is valid |
| `phase()` | `BindingPhase` | Pending, Connected, Disconnected, TargetGone, Failed |
| `error()` | `BindingFailReason` | None, InvalidState, ConstraintMismatch, ConvertFailed, ApplyFailed |

After rebinding a property, an old handle refers only to the old connection. The handle enters `TargetGone` after widget deletion or a destroy request and `Failed` with deactivation after an apply or convert failure.

## Notes

:::warning
`set` and assignment throw `StateError` on failure; use `trySet` inside LVGL event callbacks. Binding methods throw `BindingError` when constraints are missing (Slider `model` without a range, Input `model` without text rules).
:::

:::warning
State holds no theme colors, coordinates, fonts or animation intermediates; theme and DPI changes do not rebuild models. State writes apply properties synchronously while layout and drawing are handled by the main loop.
:::

## Related pages

- [Events](/en/core/event-system.md)
- [Widget Syntax](/en/core/syntax-design.md)
- [Internationalization](/en/core/i18n.md)
