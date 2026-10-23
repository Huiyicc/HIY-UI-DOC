---
title: "table.h"
---

# table.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/table.h>`

Virtualized table widget.

Only visible rows are rendered, cells are drawn by a custom paint pipeline, and fixed columns use clip plus offset. Supports sorting, selection, fixed columns, editing, multi-level headers, nested subtables, and column width dragging.

## Enums

### hiyui_sort_direction_t

| Value | Description |
|---|---|
| `HIYUI_SORT_NONE` = 0 |  |
| `HIYUI_SORT_ASCEND` |  |
| `HIYUI_SORT_DESCEND` |  |

### hiyui_table_size_t

| Value | Description |
|---|---|
| `HIYUI_TABLE_SIZE_DEFAULT` = 0 |  |
| `HIYUI_TABLE_SIZE_MIDDLE` |  |
| `HIYUI_TABLE_SIZE_SMALL` |  |

### hiyui_cell_editor_type_t

| Value | Description |
|---|---|
| `HIYUI_CELL_EDITOR_NONE` = 0 |  |
| `HIYUI_CELL_EDITOR_INPUT` |  |
| `HIYUI_CELL_EDITOR_DROPDOWN` |  |
| `HIYUI_CELL_EDITOR_CHECKBOX` |  |
| `HIYUI_CELL_EDITOR_SWITCH` |  |
| `HIYUI_CELL_EDITOR_CUSTOM` |  |

### hiyui_column_fixed_t

| Value | Description |
|---|---|
| `HIYUI_COLUMN_FIXED_NONE` = 0 |  |
| `HIYUI_COLUMN_FIXED_LEFT` |  |
| `HIYUI_COLUMN_FIXED_RIGHT` |  |

### hiyui_table_part_t

| Value | Description |
|---|---|
| `HIYUI_TABLE_PART_HEADER` = 0 |  |
| `HIYUI_TABLE_PART_ROW` |  |
| `HIYUI_TABLE_PART_FOOTER` |  |

## Type Aliases

### hiyui_table_editor_t

```c
typedef struct hiyui_table_editor_t hiyui_table_editor_t
```

Editing session used on the UI thread. It becomes invalid when editing ends, the area is recycled, or the data structure changes.

### hiyui_table_editor_factory_fn

```c
typedef void(HIYUI_CALL * hiyui_table_editor_factory_fn) (hiyui_widget_t *host, const hiyui_table_editor_t *editor, void *user_data)
```

Builds child widgets inside a host owned by the table. editor is borrowed only for the duration of the call. Call hiyui_table_editor_clone before using it across callbacks. Must not destroy the host or change its parent. The factory only configures the host subtree and must not modify or destroy the table or its ancestors.

### hiyui_table_row_t

```c
typedef struct hiyui_table_row_t hiyui_table_row_t
```

## Functions

### hiyui_table_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_table_create(hiyui_widget_t *parent, const hiyui_table_props_t *props)
```

Creates a table. A NULL props means all defaults.

### hiyui_table_set_columns

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_columns(hiyui_widget_t *t, const hiyui_table_column_t *cols, int count)
```

Sets the column definitions and cancels the current edit. When a column's editor_factory_destroy is non-NULL it takes over editor_factory_ud, released when the columns are replaced or the table is destroyed. Release is deferred while a factory is running. A NULL t still releases the passed factory data.

### hiyui_table_set_data

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_data(hiyui_widget_t *t, const hiyui_table_row_t *rows, int count, hiyui_notify_t notify)
```

Sets the full dataset.

### hiyui_table_append_rows

```c
HIYUI_API void HIYUI_CALL hiyui_table_append_rows(hiyui_widget_t *t, const hiyui_table_row_t *rows, int count, hiyui_notify_t notify)
```

Appends rows.

### hiyui_table_update_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_update_row(hiyui_widget_t *t, int index, const hiyui_table_row_t *row, hiyui_notify_t notify)
```

Updates a single row.

### hiyui_table_remove_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_remove_row(hiyui_widget_t *t, int index, hiyui_notify_t notify)
```

Removes a single row.

### hiyui_table_clear_data

```c
HIYUI_API void HIYUI_CALL hiyui_table_clear_data(hiyui_widget_t *t, hiyui_notify_t notify)
```

Clears the data.

### hiyui_table_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_sort(hiyui_widget_t *t, int column_idx, hiyui_sort_direction_t dir)
```

Sorts the given column.

### hiyui_table_clear_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_clear_sort(hiyui_widget_t *t)
```

### hiyui_table_multi_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_multi_sort(hiyui_widget_t *t, const hiyui_sort_key_t *keys, int count)
```

Sorts by multiple columns, applied in the order of the key array.

### hiyui_table_select_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_select_row(hiyui_widget_t *t, int index, int selected, hiyui_notify_t notify)
```

Selects or deselects a single row.

### hiyui_table_select_all

```c
HIYUI_API void HIYUI_CALL hiyui_table_select_all(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_table_deselect_all

```c
HIYUI_API void HIYUI_CALL hiyui_table_deselect_all(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_table_invert_selection

```c
HIYUI_API void HIYUI_CALL hiyui_table_invert_selection(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_table_set_bordered

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_bordered(hiyui_widget_t *t, int b)
```

Toggles borders at runtime.

### hiyui_table_set_striped

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_striped(hiyui_widget_t *t, int b)
```

Toggles stripes at runtime.

### hiyui_table_set_size

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_size(hiyui_widget_t *t, hiyui_table_size_t s)
```

Switches the size density at runtime.

### hiyui_table_toggle_expand

```c
HIYUI_API void HIYUI_CALL hiyui_table_toggle_expand(hiyui_widget_t *t, int flat_row_idx, hiyui_notify_t notify)
```

Expands or collapses the given tree row.

### hiyui_table_expand_all

```c
HIYUI_API void HIYUI_CALL hiyui_table_expand_all(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_table_collapse_all

```c
HIYUI_API void HIYUI_CALL hiyui_table_collapse_all(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_table_edit_cell

```c
HIYUI_API void HIYUI_CALL hiyui_table_edit_cell(hiyui_widget_t *t, int flat_row_idx, int col_idx)
```

Edits a cell.

### hiyui_table_edit_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_edit_row(hiyui_widget_t *t, int flat_row_idx)
```

Edits a whole row.

### hiyui_table_commit_edit

```c
HIYUI_API void HIYUI_CALL hiyui_table_commit_edit(hiyui_widget_t *t)
```

### hiyui_table_cancel_edit

```c
HIYUI_API void HIYUI_CALL hiyui_table_cancel_edit(hiyui_widget_t *t)
```

### hiyui_table_editor_clone

```c
HIYUI_API hiyui_table_editor_t *HIYUI_CALL hiyui_table_editor_clone(const hiyui_table_editor_t *editor)
```

Retains a non-owning session. The returned handle must be released with hiyui_table_editor_destroy. NULL returns NULL.

### hiyui_table_editor_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_table_editor_destroy(hiyui_table_editor_t *editor)
```

Releases a retained handle without committing or canceling the edit. NULL is a no-op.

### hiyui_table_editor_valid

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_valid(const hiyui_table_editor_t *editor)
```

Returns 0 for an invalid or NULL session.

### hiyui_table_editor_row

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_row(const hiyui_table_editor_t *editor)
```

Flat data row index. Returns -1 when invalid or NULL.

### hiyui_table_editor_column

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_column(const hiyui_table_editor_t *editor)
```

Column index. Returns -1 when invalid or NULL.

### hiyui_table_editor_inline

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_inline(const hiyui_table_editor_t *editor)
```

Returns 1 for inline editing. Returns 0 for explicit editing, invalid, or NULL.

### hiyui_table_editor_get_value

```c
HIYUI_API size_t HIYUI_CALL hiyui_table_editor_get_value(const hiyui_table_editor_t *editor, char *buffer, size_t capacity)
```

Copies the UTF-8 draft. An invalid or NULL session is treated as an empty string.

Bytes needed for the full string, including the terminating zero. With capacity greater than 0 and a non-NULL buffer, the text is always zero-terminated.

### hiyui_table_editor_set_value

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_set_value(const hiyui_table_editor_t *editor, const char *value)
```

Inline edits write back immediately; explicit edits only update the draft. A NULL value is treated as an empty string. Returns 0 when invalid.

### hiyui_table_editor_commit

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_commit(const hiyui_table_editor_t *editor)
```

Commits the cell or row draft. An inline session stays open. Returns 0 when invalid or NULL.

### hiyui_table_editor_cancel

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_cancel(const hiyui_table_editor_t *editor)
```

Discards the cell or row draft. An inline session does not roll back values already written back. Returns 0 when invalid or NULL.

### hiyui_table_set_column_groups

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_column_groups(hiyui_widget_t *t, const hiyui_table_column_group_t *groups, int count)
```

Multi-level header groups.

### hiyui_table_toggle_expanded_content

```c
HIYUI_API void HIYUI_CALL hiyui_table_toggle_expanded_content(hiyui_widget_t *t, int flat_row_idx)
```

Expands or collapses the embedded row content.

### hiyui_table_row_count

```c
HIYUI_API int HIYUI_CALL hiyui_table_row_count(hiyui_widget_t *t)
```

Total row count.

### hiyui_table_get_selected_row_indices

```c
HIYUI_API int HIYUI_CALL hiyui_table_get_selected_row_indices(hiyui_widget_t *t, int *out, int max_count)
```

Fills original indices of selected rows and returns the total count. At most max_count entries are written.

### hiyui_table_on_row_click

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_row_click(hiyui_widget_t *t, void(HIYUI_CALL *cb)(int row_idx, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Row click callback.

### hiyui_table_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_change(hiyui_widget_t *widget, void(HIYUI_CALL *cb)(const int *, int, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Selection change callback. indices is valid only inside the callback.

### hiyui_table_on_sort_change

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_sort_change(hiyui_widget_t *t, void(HIYUI_CALL *cb)(const char *data_index, hiyui_sort_direction_t dir, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Sort change callback.

### hiyui_table_on_cell_edit

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_cell_edit(hiyui_widget_t *t, void(HIYUI_CALL *cb)(int row, int col, const char *old_val, const char *new_val, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Cell edit callback. old_val/new_val are valid only inside the callback.

### hiyui_table_set_part

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_part(hiyui_widget_t *t, hiyui_table_part_t part, const hiyui_part_styles_t *styles, hiyui_part_event_fn on_activate, void *ud, hiyui_destroy_fn destroy)
```

Overrides Table part styles and binds an activation callback that runs before the default behavior. A NULL styles only binds the callback. A NULL on_activate releases user_data immediately.
