---
title: StyleSet
---

# StyleSet

`StyleSet` combines the widget styles for nine interaction states.

Sets the default, hover, pressed, focus, and disabled styles of a button separately.

```cpp
StyleSet buttonStyle{
    .normal = {.bgFill = {.color = 0x3367D6}},
    .hovered = {.bgFill = {.color = 0x2855B4}},
    .pressed = {.bgFill = {.color = 0x1F438F}},
    .focused = {.border = {.width = 2, .color = 0x8AB4F8}},
    .disabled = {.opacity = 96},
};

button.style(buttonStyle);
```

## State fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `normal` | `Style` | `{}` | Default state |
| `hovered` | `Style` | `{}` | Mouse hover |
| `pressed` | `Style` | `{}` | Pressed |
| `focused` | `Style` | `{}` | Focused |
| `checked` | `Style` | `{}` | Checked |
| `disabled` | `Style` | `{}` | Disabled |
| `focusKey` | `Style` | `{}` | Keyboard focus |
| `mixed` | `Style` | `{}` | Mixed selection |
| `expanded` | `Style` | `{}` | Expanded |

An empty `Style` (left at the default `{}`) does not modify that state. Use `widget.style(styles)` to apply the state set; use calls such as `widget.state(StyleState::Checked, true)` to set individual states.

## Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `applyTo(lv_obj_t *obj)` | `void` | Binds each state style to the corresponding LVGL state flag |
| `applyColorsOnly(lv_obj_t *obj, bool skipTextColor = false, bool skipBgColor = false)` | `void` | Refreshes only background, text, and border colors without changing structural properties such as radius, padding, and fontSize; used for a safe refresh during theme switches |

## Default and explicit styles

`widget.themeStyle(provider)` applies the `StyleSet` returned by the provider at registration, on theme changes, and on DPI updates. Explicit values set through `widget.style(styles)` override the provider result.

## C styles

`hiyui_style_spec_t` and `hiyui_style_spec_set_t` represent a single style and a nine-state style set respectively. Initialize with `hiyui_style_spec_default()` or `hiyui_style_spec_set_default()`, then call `hiyui_wdg_apply_style_spec()` or `hiyui_wdg_apply_style_spec_set()`.

A color is left unset when its `rgb` is `HIYUI_NONE`; integer sizes, opacity, and transition durations are left unset when `HIYUI_NONE_INT`. Explicit zero values, black, and alpha are preserved. `line_height` is left unset when negative. Sizes are in logical pixels, opacity ranges from 0 to 255, and transition durations are in milliseconds. Sentinel definitions are in [Constants](/en/core/constants).

The following C code sets a transparent background and zero padding; other properties keep their current values.

```c
hiyui_style_spec_t style = hiyui_style_spec_default();
style.bg_fill.color = hiyui_rgba(0x000000, 0);
style.pad_h = 0;
style.pad_v = 0;
hiyui_wdg_apply_style_spec(widget, &style);
```

`hiyui_wdg_bind_theme_style()` takes an initialized state set that the callback fills in. The callback runs immediately and runs again on theme or DPI updates; explicit styles override its result. The callback must not change the theme or delete widgets, and output images and paths must stay valid until they are replaced or the widget is destroyed.
