---
title: Container and Ref
---

# Container and Ref

## Definition

The container `operator()` declares parent-child relations and mounts child widgets. `Ref<T>` is a non-owning widget reference: after the wrapper is moved or leaves scope, the `Ref` still points to the same mounted widget.

## Comparison table

| Operation | Mounting and lifetime |
|---|---|
| `container(children...)` | Assembling before mounting is supported; an unmounted container holds child configurations, and after mounting the subtree is managed by the parent widget |
| `container(std::move(child))` | Named child widgets must be moved explicitly; the original wrapper is emptied, and associated Refs stay associated |
| Adding a mounted child to a mounted container | The child is remounted to that container; under the same parent its previous position and order are kept |
| `widget.ref()`, `widget.ref(out)` | The association can be established before mounting; validity of a pre-mount reference evaluates to `false` |
| Copying a Ref | The copy targets the same widget and does not extend the widget lifetime |
| Target or an ancestor requests destruction | The reference becomes invalid immediately and never points to a new widget through address reuse |

Ref queries and operations run on the UI thread. While the reference is not yet mounted, has been moved out, or its target is invalid, access through `operator->` is not allowed; check `operator bool` first or use `with()`.

### Ref methods

| Method | Returns | Description |
|---|---|---|
| `Ref<T>(widget)` | New reference | Associates a widget; can be created before mounting |
| `bind(widget)` | `void` | Replaces the current association without changing references copied out earlier |
| `reset()` | `void` | Clears the current reference without deleting the widget or clearing other copies |
| `operator bool()` | `bool` | True when mounted and neither the target nor its ancestors requested destruction |
| `operator->()` | Temporary access proxy | Calls widget methods; the obtained wrapper reference is valid only within the current full expression |
| `with(callback)` | `bool` | When valid, synchronously calls `void(T &)` and returns true; when invalid, calls nothing and returns false |
| `destroy()` | `void` | Requests deletion of the target and its subtree and invalidates the reference immediately; actual release completes in the UI main loop; no-op on an empty reference and on repeated calls |
| `raw()` | `lv_obj_t *` | Returns nullptr when invalid; for low-level interoperation |
| `bind(raw)` | `void` | Binds an existing low-level object; nullptr clears the current reference; for low-level interoperation |

The wrapper passed to `with()` is borrowed only until the callback returns; do not store its pointer or reference for later calls.

## Code example

Assemble the subtree first, then mount it to an initialized `parent`; initializing each child individually is not required.

```cpp
auto form = VBox{.padding = 16, .gap = 8}(
    Label{.text = "名称"},
    Input{.placeholder = "显示名称"},
    Button{.text = "保存"}
);
form.init(parent);
```

Callbacks capture associated Refs by value. After local variables leave scope, the callback can still access the live target.

```cpp
Label status({.text = "待机"});
const auto statusRef = status.ref();
auto form = VBox{.gap = 8}(
    std::move(status),
    Button{.text = "运行"}.onClick([statusRef] {
        statusRef.with([](Label &label) { label.text("运行中"); });
    })
);
form.init(parent);
```

Capturing must happen after the Ref is associated with its target. Capturing an empty Ref and then assigning to the original variable does not update the copy held by the callback. Business state is owned by the application or a page controller; a Ref only provides widget access.

## Related pages

- [Widget Syntax](/en/core/syntax-design)
- [Events](/en/core/event-system)
- [Cross-Platform Tasks & Layout](/en/guide/cross-platform)
- [List Detail](/en/widgets/list-detail)
