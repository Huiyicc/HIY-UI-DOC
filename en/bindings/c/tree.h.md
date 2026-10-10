---
title: "tree.h"
---

# tree.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/tree.h>`

Tree virtual-list widget

Renders tens of millions of nodes in milliseconds. Supports checkboxes, multi-select, drag and drop, async loading, search filtering, connect lines, accordion mode, custom icons and fields, and context menus.

## Enums

### hiyui_tree_drop_position_t

| Value | Description |
|---|---|
| `HIYUI_TREE_DROP_BEFORE` = 0 |  |
| `HIYUI_TREE_DROP_INSIDE` |  |
| `HIYUI_TREE_DROP_AFTER` |  |

## Type Aliases

### hiyui_tree_node_t

```c
typedef struct hiyui_tree_node_t hiyui_tree_node_t
```

## Functions

### hiyui_tree_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tree_create(hiyui_widget_t *parent, const hiyui_tree_props_t *props)
```

Creates a tree; a NULL props uses all defaults

### hiyui_tree_set_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_tree_set_nodes(hiyui_widget_t *t, const hiyui_tree_node_t *nodes, int count, hiyui_notify_t notify)
```

Replaces all nodes

### hiyui_tree_set_children

```c
HIYUI_API void HIYUI_CALL hiyui_tree_set_children(hiyui_widget_t *t, uint32_t parent_id, const hiyui_tree_node_t *children, int count, hiyui_notify_t notify)
```

Replaces the children of the given parent; parent_id=0 replaces the root

### hiyui_tree_append_children

```c
HIYUI_API void HIYUI_CALL hiyui_tree_append_children(hiyui_widget_t *t, uint32_t parent_id, const hiyui_tree_node_t *children, int count, hiyui_notify_t notify)
```

Appends children without clearing existing ones; parent_id=0 appends at the root

### hiyui_tree_expand_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_expand_node(hiyui_widget_t *t, uint32_t id, int expanded)
```

Expands or collapses a node

### hiyui_tree_expand_all

```c
HIYUI_API void HIYUI_CALL hiyui_tree_expand_all(hiyui_widget_t *t)
```

### hiyui_tree_collapse_all

```c
HIYUI_API void HIYUI_CALL hiyui_tree_collapse_all(hiyui_widget_t *t)
```

### hiyui_tree_check_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_check_node(hiyui_widget_t *t, uint32_t id, int checked)
```

Checks or unchecks a node

### hiyui_tree_select_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_select_node(hiyui_widget_t *t, uint32_t id, hiyui_notify_t notify)
```

Selects a single node

### hiyui_tree_select_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_tree_select_nodes(hiyui_widget_t *t, const uint32_t *ids, int count, hiyui_notify_t notify)
```

Selects multiple nodes

### hiyui_tree_deselect_all

```c
HIYUI_API void HIYUI_CALL hiyui_tree_deselect_all(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_tree_disable_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_disable_node(hiyui_widget_t *t, uint32_t id, int disabled, hiyui_notify_t notify)
```

Disables or enables a node

### hiyui_tree_show_connect_line

```c
HIYUI_API void HIYUI_CALL hiyui_tree_show_connect_line(hiyui_widget_t *t, int show)
```

Shows or hides connect lines at runtime

### hiyui_tree_filter

```c
HIYUI_API void HIYUI_CALL hiyui_tree_filter(hiyui_widget_t *t, const char *keyword)
```

Applies a search filter; a NULL keyword clears it

### hiyui_tree_reset_lazy_load

```c
HIYUI_API void HIYUI_CALL hiyui_tree_reset_lazy_load(hiyui_widget_t *t, uint32_t id)
```

Resets the node async-load state so lazy_load can fire again

### hiyui_tree_clear_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_tree_clear_nodes(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_tree_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_change(hiyui_widget_t *widget, void(*cb)(const uint32_t *, int, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Selection change callback

### hiyui_tree_on_check

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_check(hiyui_widget_t *t, void(*cb)(uint32_t id, int checked, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Check state change callback

### hiyui_tree_on_expand

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_expand(hiyui_widget_t *t, void(*cb)(uint32_t id, int expanded, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Expand state change callback

### hiyui_tree_on_drop

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_drop(hiyui_widget_t *t, void(*cb)(uint32_t src, uint32_t target, hiyui_tree_drop_position_t pos, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Drop completion callback

### hiyui_tree_set_custom_field

```c
HIYUI_API void HIYUI_CALL hiyui_tree_set_custom_field(hiyui_widget_t *t, void(*cb)(hiyui_widget_t *area, const hiyui_tree_node_view_t *node, void *ud), void *ud)
```

Custom field render callback; the node view borrows internal storage and is valid inside the callback

### hiyui_tree_context_menu

```c
HIYUI_API void HIYUI_CALL hiyui_tree_context_menu(hiyui_widget_t *t, const hiyui_context_menu_item_t *items, int count)
```

Binds a context menu; effective on SDL desktop builds

### hiyui_tree_is_expanded

```c
HIYUI_API int HIYUI_CALL hiyui_tree_is_expanded(hiyui_widget_t *t, uint32_t id)
```

Whether the node is expanded

### hiyui_tree_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_tree_is_checked(hiyui_widget_t *t, uint32_t id)
```

Whether the node is checked

### hiyui_tree_is_selected

```c
HIYUI_API int HIYUI_CALL hiyui_tree_is_selected(hiyui_widget_t *t, uint32_t id)
```

Whether the node is selected

### hiyui_tree_get_checked_nodes

```c
HIYUI_API int HIYUI_CALL hiyui_tree_get_checked_nodes(hiyui_widget_t *t, uint32_t *out, int max_count)
```

Fills checked node ids and returns the total; at most max_count entries are written

### hiyui_tree_get_selected_nodes

```c
HIYUI_API int HIYUI_CALL hiyui_tree_get_selected_nodes(hiyui_widget_t *t, uint32_t *out, int max_count)
```

Fills selected node ids and returns the total; at most max_count entries are written

### hiyui_tree_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_activate(hiyui_widget_t *widget, void(*cb)(uint32_t, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
