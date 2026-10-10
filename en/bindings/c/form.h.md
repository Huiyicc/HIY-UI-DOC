---
title: "form.h"
---

# form.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/form.h>`

Form widgets: Input / Slider / Switch / Checkbox / Radio / Dropdown

## Enums

### hiyui_arrow_side_t

| Value | Description |
|---|---|
| `HIYUI_ARROW_SIDE_RIGHT` = 0 |  |
| `HIYUI_ARROW_SIDE_LEFT` |  |
| `HIYUI_ARROW_SIDE_NONE` |  |

### hiyui_dropdown_align_t

| Value | Description |
|---|---|
| `HIYUI_DROPDOWN_ALIGN_LEFT` = 0 |  |
| `HIYUI_DROPDOWN_ALIGN_CENTER` |  |
| `HIYUI_DROPDOWN_ALIGN_RIGHT` |  |

### hiyui_dropdown_part_t

| Value | Description |
|---|---|
| `HIYUI_DROPDOWN_PART_POPUP` = 0 |  |
| `HIYUI_DROPDOWN_PART_ITEM` |  |
| `HIYUI_DROPDOWN_PART_SEARCH` |  |
| `HIYUI_DROPDOWN_PART_EMPTY` |  |

## Functions

### hiyui_input_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_input_create(hiyui_widget_t *parent, const hiyui_input_props_t *props)
```

### hiyui_input_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_input_set_text(hiyui_widget_t *input, const char *text, hiyui_notify_t notify)
```

### hiyui_input_get_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_input_get_text(hiyui_widget_t *input)
```

### hiyui_input_set_placeholder

```c
HIYUI_API void HIYUI_CALL hiyui_input_set_placeholder(hiyui_widget_t *input, const char *text)
```

### hiyui_input_clear

```c
HIYUI_API void HIYUI_CALL hiyui_input_clear(hiyui_widget_t *input, hiyui_notify_t notify)
```

### hiyui_input_set_read_only

```c
HIYUI_API void HIYUI_CALL hiyui_input_set_read_only(hiyui_widget_t *input, int read_only)
```

A non-zero value disables editing while selection and copy remain allowed.

### hiyui_slider_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_slider_create(hiyui_widget_t *parent, const hiyui_slider_props_t *props)
```

### hiyui_slider_set_value

```c
HIYUI_API void HIYUI_CALL hiyui_slider_set_value(hiyui_widget_t *s, int value, hiyui_notify_t notify)
```

### hiyui_slider_get_value

```c
HIYUI_API int HIYUI_CALL hiyui_slider_get_value(hiyui_widget_t *s)
```

### hiyui_switch_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_switch_create(hiyui_widget_t *parent, const hiyui_switch_props_t *props)
```

### hiyui_switch_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_switch_set_checked(hiyui_widget_t *s, int checked, hiyui_notify_t notify)
```

### hiyui_switch_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_switch_is_checked(hiyui_widget_t *s)
```

### hiyui_checkbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_checkbox_create(hiyui_widget_t *parent, const hiyui_checkbox_props_t *props)
```

### hiyui_checkbox_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_checkbox_set_checked(hiyui_widget_t *cb, int checked, hiyui_notify_t notify)
```

### hiyui_checkbox_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_checkbox_is_checked(hiyui_widget_t *cb)
```

### hiyui_radio_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_radio_create(hiyui_widget_t *parent, const hiyui_radio_props_t *props)
```

### hiyui_radio_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_radio_set_checked(hiyui_widget_t *r, int checked, hiyui_notify_t notify)
```

### hiyui_radio_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_radio_is_checked(hiyui_widget_t *r)
```

### hiyui_dropdown_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dropdown_create(hiyui_widget_t *parent, const hiyui_dropdown_props_t *props)
```

Creates a dropdown select widget.

NULL is equivalent to zero initialization. A popup_mode of zero and HIYUI_POPUP_MODE_WINDOW both open a floating popup; without floating-window capability the library falls back to inline.

### hiyui_dropdown_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_items(hiyui_widget_t *dd, const hiyui_dropdown_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_dropdown_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_selected(hiyui_widget_t *dd, int idx, hiyui_notify_t notify)
```

### hiyui_dropdown_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_dropdown_get_selected(hiyui_widget_t *dd)
```

### hiyui_dropdown_set_part

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_part(hiyui_widget_t *dd, hiyui_dropdown_part_t part, const hiyui_part_styles_t *styles, hiyui_part_event_fn on_activate, void *ud, hiyui_destroy_fn destroy)
```

Overrides Dropdown part styles and binds the activation callback invoked before default behavior. A NULL styles binds only the callback. A NULL on_activate releases user_data immediately.

### hiyui_dropdown_set_search_matcher

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_search_matcher(hiyui_widget_t *dd, int(*matcher)(const char *item_text, const char *query, void *ud), void *ud, hiyui_destroy_fn destroy)
```

Custom search matcher; a non-zero return means a match. A NULL matcher restores the default substring match.
