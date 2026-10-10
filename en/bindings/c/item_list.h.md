---
title: "item_list.h"
---

# item_list.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/item_list.h>`

List widget taking full item arrays with virtual rendering

Accepts a full items array and supports separators, icons, selection highlight, append, and batch updates. Complements hiyui_list, which is driven by count/build callbacks.

## Functions

### hiyui_item_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_item_list_create(hiyui_widget_t *parent, const hiyui_item_list_props_t *props)
```

Creates a list; a NULL props uses all defaults

### hiyui_item_list_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_set_items(hiyui_widget_t *l, const hiyui_list_item_t *items, int count, hiyui_notify_t notify)
```

Sets the list items in bulk

### hiyui_item_list_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_set_selected(hiyui_widget_t *l, int idx, hiyui_notify_t notify)
```

Sets the selected item; idx is a logical index excluding separators, -1 clears selection

### hiyui_item_list_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_get_selected(hiyui_widget_t *l)
```

Returns the current selected index, -1 when nothing is selected

### hiyui_item_list_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_on_change(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Selection change callback

### hiyui_item_list_item_count

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_item_count(hiyui_widget_t *l)
```

Total data item count, excluding separators

### hiyui_item_list_append_item

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_append_item(hiyui_widget_t *l, const hiyui_list_item_t *item, hiyui_notify_t notify)
```

Appends one data item

### hiyui_item_list_begin_update

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_begin_update(hiyui_widget_t *l)
```

Pauses view refresh for batch appends

### hiyui_item_list_end_update

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_end_update(hiyui_widget_t *l)
```

Resumes view refresh and updates immediately

### hiyui_item_list_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_on_activate(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
