---
title: "color_picker.h"
---

# color_picker.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/color_picker.h>`

Color picker, aligned with hiyui::ColorPicker

## Enums

### hiyui_color_picker_size_t

| Value | Description |
|---|---|
| `HIYUI_COLOR_PICKER_SIZE_SMALL` = 0 |  |
| `HIYUI_COLOR_PICKER_SIZE_MEDIUM` |  |
| `HIYUI_COLOR_PICKER_SIZE_LARGE` |  |

## Type Aliases

### hiyui_color_picker_change_fn

```c
typedef void(* hiyui_color_picker_change_fn) (uint32_t color, uint8_t alpha, void *ud)
```

## Functions

### hiyui_color_picker_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_color_picker_create(hiyui_widget_t *parent, const hiyui_color_picker_props_t *props)
```

### hiyui_color_picker_set_color

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_set_color(hiyui_widget_t *w, uint32_t color, hiyui_notify_t notify)
```

Sets the current color at runtime, 0xRRGGBB

### hiyui_color_picker_get_color

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_color_picker_get_color(hiyui_widget_t *w)
```

### hiyui_color_picker_set_alpha

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_set_alpha(hiyui_widget_t *w, uint8_t alpha, hiyui_notify_t notify)
```

Sets alpha at runtime in [0,255]; requires show_alpha to be enabled

### hiyui_color_picker_get_alpha

```c
HIYUI_API uint8_t HIYUI_CALL hiyui_color_picker_get_alpha(hiyui_widget_t *w)
```

### hiyui_color_picker_open

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_open(hiyui_widget_t *w)
```

Opens or closes the popup panel; valid only when panel_mode is off

### hiyui_color_picker_close

```c
HIYUI_API void HIYUI_CALL hiyui_color_picker_close(hiyui_widget_t *w)
```

### hiyui_color_picker_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_color_picker_on_change(hiyui_widget_t *widget, hiyui_color_picker_change_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Color change callback; fires when dragging the palette or typing a color
