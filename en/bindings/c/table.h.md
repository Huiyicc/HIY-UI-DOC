---
title: "table.h"
---

# table.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/table.h>`

Virtualized table widget

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

Edit session used on the UI thread; invalid after the edit ends, the area is recycled, or the data structure changes.

### hiyui_table_editor_factory_fn

```c
typedef void(* hiyui_table_editor_factory_fn) (hiyui_widget_t *host, const hiyui_table_editor_t *editor, void *user_data)
```

Builds child widgets in the table-owned host. editor is borrowed only for the duration of the call; call hiyui_table_editor_clone to use it beyond the callback. Do not destroy the host or change its parent. The factory configures only the host subtree and must not modify or destroy the table or its ancestors.

### hiyui_table_row_t

```c
typedef struct hiyui_table_row_t hiyui_table_row_t
```

## Functions

### hiyui_table_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_table_create(hiyui_widget_t *parent, const hiyui_table_props_t *props)
```

Creates a table; NULL props means all defaults

### hiyui_table_set_columns

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_columns(hiyui_widget_t *t, const hiyui_table_column_t *cols, int count)
```

Sets column definitions and cancels the current edit. When a column's editor_factory_destroy is non-NULL it takes ownership of editor_factory_ud and is released on column replacement or table destruction. Release is deferred while a factory is running; t being NULL still releases the passed factory data.

### hiyui_table_set_data

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_data(hiyui_widget_t *t, const hiyui_table_row_t *rows, int count, hiyui_notify_t notify)
```

Sets the full data set

### hiyui_table_append_rows

```c
HIYUI_API void HIYUI_CALL hiyui_table_append_rows(hiyui_widget_t *t, const hiyui_table_row_t *rows, int count, hiyui_notify_t notify)
```

Appends rows

### hiyui_table_update_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_update_row(hiyui_widget_t *t, int index, const hiyui_table_row_t *row, hiyui_notify_t notify)
```

Updates one row

### hiyui_table_remove_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_remove_row(hiyui_widget_t *t, int index, hiyui_notify_t notify)
```

Removes one row

### hiyui_table_clear_data

```c
HIYUI_API void HIYUI_CALL hiyui_table_clear_data(hiyui_widget_t *t, hiyui_notify_t notify)
```

Clears all data

### hiyui_table_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_sort(hiyui_widget_t *t, int column_idx, hiyui_sort_direction_t dir)
```

Sorts the given column

### hiyui_table_clear_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_clear_sort(hiyui_widget_t *t)
```

### hiyui_table_multi_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_multi_sort(hiyui_widget_t *t, const hiyui_sort_key_t *keys, int count)
```

Multi-column sort, applied in key array order

### hiyui_table_select_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_select_row(hiyui_widget_t *t, int index, int selected, hiyui_notify_t notify)
```

Selects or deselects one row

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

Toggles borders at runtime

### hiyui_table_set_striped

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_striped(hiyui_widget_t *t, int b)
```

Toggles striping at runtime

### hiyui_table_set_size

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_size(hiyui_widget_t *t, hiyui_table_size_t s)
```

Toggles size density at runtime

### hiyui_table_toggle_expand

```c
HIYUI_API void HIYUI_CALL hiyui_table_toggle_expand(hiyui_widget_t *t, int flat_row_idx, hiyui_notify_t notify)
```

Expands or collapses the given tree row

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

Edits a cell

### hiyui_table_edit_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_edit_row(hiyui_widget_t *t, int flat_row_idx)
```

Edits a whole row

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

Retains a non-owning session; the returned handle must be freed with hiyui_table_editor_destroy, and NULL returns NULL.

### hiyui_table_editor_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_table_editor_destroy(hiyui_table_editor_t *editor)
```

Frees a retained handle without committing or canceling the edit; NULL is a no-op.

### hiyui_table_editor_valid

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_valid(const hiyui_table_editor_t *editor)
```

Returns 0 when the session is invalid or NULL.

### hiyui_table_editor_row

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_row(const hiyui_table_editor_t *editor)
```

Flattened data row index; returns -1 when invalid or NULL.

### hiyui_table_editor_column

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_column(const hiyui_table_editor_t *editor)
```

Column index; returns -1 when invalid or NULL.

### hiyui_table_editor_inline

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_inline(const hiyui_table_editor_t *editor)
```

Returns 1 for inline editing; explicit edits, invalid, or NULL return 0.

### hiyui_table_editor_get_value

```c
HIYUI_API size_t HIYUI_CALL hiyui_table_editor_get_value(const hiyui_table_editor_t *editor, char *buffer, size_t capacity)
```

Copies the UTF-8 draft; an invalid or NULL session is treated as an empty string.

Bytes needed for the full string including the trailing zero; always zero-terminated when capacity &gt; 0 and buffer is non-NULL.

### hiyui_table_editor_set_value

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_set_value(const hiyui_table_editor_t *editor, const char *value)
```

Inline edits write back immediately while explicit edits only update the draft; a NULL value is treated as an empty string, and invalid returns 0.

### hiyui_table_editor_commit

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_commit(const hiyui_table_editor_t *editor)
```

Commits the cell or row draft; an inline session stays open, and invalid or NULL returns 0.

### hiyui_table_editor_cancel

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_cancel(const hiyui_table_editor_t *editor)
```

Discards the cell or row draft; an inline session does not roll back values already written back, and invalid or NULL returns 0.

### hiyui_table_set_column_groups

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_column_groups(hiyui_widget_t *t, const hiyui_table_column_group_t *groups, int count)
```

Sets multi-level header groups

### hiyui_table_toggle_expanded_content

```c
HIYUI_API void HIYUI_CALL hiyui_table_toggle_expanded_content(hiyui_widget_t *t, int flat_row_idx)
```

Expands or collapses inline embedded content

### hiyui_table_row_count

```c
HIYUI_API int HIYUI_CALL hiyui_table_row_count(hiyui_widget_t *t)
```

Total row count

### hiyui_table_get_selected_row_indices

```c
HIYUI_API int HIYUI_CALL hiyui_table_get_selected_row_indices(hiyui_widget_t *t, int *out, int max_count)
```

Fills raw indices of selected rows and returns the total, writing at most max_count entries

### hiyui_table_on_row_click

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_row_click(hiyui_widget_t *t, void(*cb)(int row_idx, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Row click callback

### hiyui_table_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_change(hiyui_widget_t *widget, void(*cb)(const int *, int, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Selection change callback; indices is valid only within the callback

### hiyui_table_on_sort_change

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_sort_change(hiyui_widget_t *t, void(*cb)(const char *data_index, hiyui_sort_direction_t dir, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Sort change callback

### hiyui_table_on_cell_edit

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_cell_edit(hiyui_widget_t *t, void(*cb)(int row, int col, const char *old_val, const char *new_val, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Cell edit callback; old_val/new_val are valid only within the callback

### hiyui_table_set_part

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_part(hiyui_widget_t *t, hiyui_table_part_t part, const hiyui_part_styles_t *styles, hiyui_part_event_fn on_activate, void *ud, hiyui_destroy_fn destroy)
```

Overrides Table part styles and binds an activation callback invoked before the default behavior. A NULL styles only binds the callback; a NULL on_activate releases user_data immediately.
