---
title: "tabs_ex.h"
---

# tabs_ex.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/tabs_ex.h>`

Session tab card

Session tab bar with connection state, close, rename, pin, horizontal scrolling, and drag reorder.

## Enums

### hiyui_tab_connection_state_t

| Value | Description |
|---|---|
| `HIYUI_TAB_CONNECTION_CONNECTED` = 0 |  |
| `HIYUI_TAB_CONNECTION_DISCONNECTED` |  |
| `HIYUI_TAB_CONNECTION_ERROR` |  |
| `HIYUI_TAB_CONNECTION_CONNECTING` |  |

### hiyui_tab_indicator_side_t

| Value | Description |
|---|---|
| `HIYUI_TAB_INDICATOR_BOTTOM` = 0 |  |
| `HIYUI_TAB_INDICATOR_TOP` |  |

### hiyui_tabs_ex_event_type_t

| Value | Description |
|---|---|
| `HIYUI_TABS_EX_EVENT_CHANGED` = 0 |  |
| `HIYUI_TABS_EX_EVENT_CLOSE_REQUEST` |  |
| `HIYUI_TABS_EX_EVENT_NEW_REQUEST` |  |
| `HIYUI_TABS_EX_EVENT_RIGHT_CLICK` |  |
| `HIYUI_TABS_EX_EVENT_RENAME` |  |
| `HIYUI_TABS_EX_EVENT_REORDER` |  |

## Type Aliases

### hiyui_tabs_ex_event_fn

```c
typedef void(* hiyui_tabs_ex_event_fn) (const hiyui_tabs_ex_event_t *event, void *user_data)
```

Event callback. `event-&gt;text` is valid only while the callback runs.

## Functions

### hiyui_tabs_ex_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tabs_ex_create(hiyui_widget_t *parent, const hiyui_tabs_ex_props_t *props)
```

### hiyui_tabs_ex_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_set_items(hiyui_widget_t *tabs, const hiyui_tabs_ex_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_tabs_ex_append

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_append(hiyui_widget_t *tabs, const hiyui_tabs_ex_item_t *item, hiyui_notify_t notify)
```

### hiyui_tabs_ex_remove

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_remove(hiyui_widget_t *tabs, int index, hiyui_notify_t notify)
```

### hiyui_tabs_ex_set_active

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_set_active(hiyui_widget_t *tabs, int index, hiyui_notify_t notify)
```

### hiyui_tabs_ex_get_active

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_ex_get_active(hiyui_widget_t *tabs)
```

### hiyui_tabs_ex_scroll_to_tab

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_scroll_to_tab(hiyui_widget_t *tabs, int index)
```

### hiyui_tabs_ex_count

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_ex_count(hiyui_widget_t *tabs)
```

### hiyui_tabs_ex_item_data

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_ex_item_data(hiyui_widget_t *tabs, int index)
```

### hiyui_tabs_ex_get_title

```c
HIYUI_API const char *HIYUI_CALL hiyui_tabs_ex_get_title(hiyui_widget_t *tabs, int index)
```

### hiyui_tabs_ex_set_connection

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_set_connection(hiyui_widget_t *tabs, int index, hiyui_tab_connection_state_t state)
```

### hiyui_tabs_ex_set_closable

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_set_closable(hiyui_widget_t *tabs, int index, hiyui_bool_t closable)
```

### hiyui_tabs_ex_set_pinned

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_set_pinned(hiyui_widget_t *tabs, int index, hiyui_bool_t pinned, hiyui_notify_t notify)
```

### hiyui_tabs_ex_is_pinned

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_tabs_ex_is_pinned(hiyui_widget_t *tabs, int index)
```

### hiyui_tabs_ex_rename

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_rename(hiyui_widget_t *tabs, int index, const char *title)
```

### hiyui_tabs_ex_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_ex_on_change(hiyui_widget_t *widget, hiyui_tabs_ex_event_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_tabs_ex_on_close_request

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_on_close_request(hiyui_widget_t *tabs, hiyui_tabs_ex_event_fn cb, void *ud)
```

### hiyui_tabs_ex_on_new_request

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_on_new_request(hiyui_widget_t *tabs, hiyui_tabs_ex_event_fn cb, void *ud)
```

### hiyui_tabs_ex_on_right_click

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_on_right_click(hiyui_widget_t *tabs, hiyui_tabs_ex_event_fn cb, void *ud)
```

### hiyui_tabs_ex_on_rename

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_on_rename(hiyui_widget_t *tabs, hiyui_tabs_ex_event_fn cb, void *ud)
```

### hiyui_tabs_ex_on_reorder

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_ex_on_reorder(hiyui_widget_t *tabs, hiyui_tabs_ex_event_fn cb, void *ud)
```
