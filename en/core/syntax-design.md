---
title: Widget Syntax
---

# Widget Syntax

HIY-UI builds interfaces with three forms of expression. Props aggregate initialization (C++20 designated initializers) configures static properties, `operator()` composes parent and child widgets, and chained member methods modify runtime state.

```cpp
VBox{.padding = 12, .gap = 8}(
    Label{.text = "Account"},
    Button{.text = "Save"}.onClick(save));
```

## Props

Each widget has a corresponding Props aggregate type. All fields have default values; designated initializers written in declaration order can omit unchanged fields.

```cpp
ButtonProps props{
    .text = "Save",
    .width = 120,
    .bg = HIYUI_DEFAULT,
};
Button button(props);
```

Color fields default to `HIYUI_DEFAULT` and follow the current theme; size fields default to `HIYUI_AUTO` and are determined by content. Sentinel definitions are in [Constants and Sentinel Values](/en/core/constants).

## Composition

Widgets derived from `Container<T>` support `operator()` to mount children. After mounting, the underlying object of a child is owned by the LVGL parent object.

```cpp
Card{.title = "Network"}(
    Label{.text = "Connected"},
    Switch{.checked = true});
```

## Runtime methods

Chained methods return the widget itself for event binding, styling, and state configuration.

```cpp
Button{.text = "Delete"}
    .bg(0xB3261E)
    .enabled(canDelete)
    .onClick(removeItem);
```

Bind a `Ref<T>` to keep accessing a widget after mounting; see [Container and Ref](/en/core/container-ref).

## Override precedence

When the same field is set multiple times, the setting applied later overrides the earlier one. The complete order from lowest to highest:

1. `themeStyle(WidgetType)` widget theme
2. `themeStyle(provider)` default style provider
3. Explicit Props fields
4. Chained methods and `style()` explicit styles

Setting the default-state background explicitly (`bg()`, the background fields of `style()`) removes the `surface()` material binding. Explicit size and padding setters remove the `layoutRules()` control of the corresponding fields while other fields keep adapting; `clearLayoutRules()` does not restore removed fields.

Color fields accept `HIYUI_DEFAULT` to restore the theme default. `fontSize()`, `radius()`, `padding()`, `margin()`, `opacity()`, `borderWidth()`, and per-side padding and margin methods accept `HIYUI_DEFAULT_INT` to restore the component default. Sentinel definitions are in [Constants and Sentinel Values](/en/core/constants).
