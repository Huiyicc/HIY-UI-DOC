---
title: "title_bar.h"
---

# title_bar.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/title_bar.h>`

Frameless window title bar

## Enums

### hiyui_title_bar_item_t

| Value | Description |
|---|---|
| `HIYUI_TITLE_BAR_ITEM_TITLE` = 1 << 0 |  |
| `HIYUI_TITLE_BAR_ITEM_MIN` = 1 << 1 |  |
| `HIYUI_TITLE_BAR_ITEM_MAX` = 1 << 2 |  |
| `HIYUI_TITLE_BAR_ITEM_CLOSE` = 1 << 3 |  |
| `HIYUI_TITLE_BAR_ITEM_DEFAULT` = 0x0F |  |

### hiyui_title_bar_layout_t

| Value | Description |
|---|---|
| `HIYUI_TITLE_BAR_LAYOUT_PLATFORM_DEFAULT` = 0 |  |
| `HIYUI_TITLE_BAR_LAYOUT_RIGHT` |  |
| `HIYUI_TITLE_BAR_LAYOUT_LEFT` |  |

### hiyui_title_bar_icon_t

| Value | Description |
|---|---|
| `HIYUI_TITLE_BAR_ICON_DEFAULT` = 0 |  |
| `HIYUI_TITLE_BAR_ICON_NONE` |  |
| `HIYUI_TITLE_BAR_ICON_SELF` |  |
| `HIYUI_TITLE_BAR_ICON_CUSTOM` |  |
| `HIYUI_TITLE_BAR_ICON_BYTES` |  |

## Functions

### hiyui_title_bar_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_title_bar_create(hiyui_widget_t *parent, const hiyui_title_bar_props_t *props)
```

Creates a title bar; icon_bytes must stay valid for the title bar lifetime.

### hiyui_title_bar_set_title

```c
HIYUI_API void HIYUI_CALL hiyui_title_bar_set_title(hiyui_widget_t *w, const char *title)
```

### hiyui_title_bar_set_maximized

```c
HIYUI_API void HIYUI_CALL hiyui_title_bar_set_maximized(hiyui_widget_t *w, int maximized)
```

A non-zero value shows the restore icon, 0 shows the maximize icon.

### hiyui_title_bar_get_layout

```c
HIYUI_API hiyui_title_bar_layout_t HIYUI_CALL hiyui_title_bar_get_layout(hiyui_widget_t *w)
```

Control button layout; returns the platform default when w is NULL.

### hiyui_title_bar_on_minimize

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_minimize(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_title_bar_on_maximize

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_maximize(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_title_bar_on_close

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_close(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_title_bar_on_double_click

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_double_click(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Fires when the title bar is double-clicked outside button areas.

### hiyui_title_bar_on_drag_begin

```c
HIYUI_API int HIYUI_CALL hiyui_title_bar_on_drag_begin(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Fires once when the title bar is pressed outside button areas, to start a window drag.
