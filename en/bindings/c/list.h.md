---
title: "list.h"
---

# list.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/list.h>`

Templated list with virtual rendering, custom templates, multi-state styles, grid layout, and expandable items

Callback driven: set_count returns the total data count and builder renders by index. The caller owns the data; the list drives virtual rendering internally with index sequences.

## Enums

### hiyui_list_layout_mode_t

| Value | Description |
|---|---|
| `HIYUI_LIST_LAYOUT_LIST` = 0 |  |
| `HIYUI_LIST_LAYOUT_GRID` |  |

## Type Aliases

### hiyui_list_count_fn

```c
typedef int(HIYUI_CALL * hiyui_list_count_fn) (void *user_data)
```

### hiyui_list_build_fn

```c
typedef void(HIYUI_CALL * hiyui_list_build_fn) (hiyui_widget_t *row, int idx, void *user_data)
```

### hiyui_list_click_fn

```c
typedef void(HIYUI_CALL * hiyui_list_click_fn) (int idx, void *user_data)
```

## Functions

### hiyui_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_create(hiyui_widget_t *parent, const hiyui_list_props_t *props)
```

Creates a templated list; a NULL props uses all defaults

### hiyui_list_set_template

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_template(hiyui_widget_t *list, const hiyui_list_template_t *tpl)
```

Sets the item template: build function, multi-state styles, expanded detail, and more

### hiyui_list_set_count

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_count(hiyui_widget_t *list, hiyui_list_count_fn count, void *user_data)
```

Sets the total data count callback; the list drives rendering internally with index sequences

### hiyui_list_refresh

```c
HIYUI_API void HIYUI_CALL hiyui_list_refresh(hiyui_widget_t *list, hiyui_notify_t notify)
```

Rebuilds the data and fully refreshes; call after data is added, removed, or changed

### hiyui_list_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_selected(hiyui_widget_t *list, int idx, hiyui_notify_t notify)
```

### hiyui_list_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_list_get_selected(hiyui_widget_t *list)
```

### hiyui_list_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_list_on_change(hiyui_widget_t *widget, hiyui_list_click_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Selection change callback

### hiyui_list_item_count

```c
HIYUI_API int HIYUI_CALL hiyui_list_item_count(hiyui_widget_t *list)
```

### hiyui_list_set_layout_mode

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_layout_mode(hiyui_widget_t *list, hiyui_list_layout_mode_t mode)
```

### hiyui_list_set_column_count

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_column_count(hiyui_widget_t *list, int count)
```

### hiyui_list_set_min_item_width

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_min_item_width(hiyui_widget_t *list, int width)
```

### hiyui_list_set_row_gap

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_row_gap(hiyui_widget_t *list, int gap)
```

### hiyui_list_set_column_gap

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_column_gap(hiyui_widget_t *list, int gap)
```

### hiyui_list_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_list_on_activate(hiyui_widget_t *widget, hiyui_list_click_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
