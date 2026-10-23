---
title: "property_grid.h"
---

# property_grid.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/property_grid.h>`

## Enums

### hiyui_property_value_kind_t

| Value | Description |
|---|---|
| `HIYUI_PROPERTY_VALUE_EMPTY` |  |
| `HIYUI_PROPERTY_VALUE_BOOLEAN` |  |
| `HIYUI_PROPERTY_VALUE_INTEGER` |  |
| `HIYUI_PROPERTY_VALUE_UNSIGNED` |  |
| `HIYUI_PROPERTY_VALUE_NUMBER` |  |
| `HIYUI_PROPERTY_VALUE_TEXT` |  |
| `HIYUI_PROPERTY_VALUE_COLOR` |  |
| `HIYUI_PROPERTY_VALUE_DATE` |  |
| `HIYUI_PROPERTY_VALUE_TIME` |  |
| `HIYUI_PROPERTY_VALUE_CUSTOM` |  |
| `HIYUI_PROPERTY_VALUE_TUPLE` |  |

### hiyui_property_kind_t

| Value | Description |
|---|---|
| `HIYUI_PROPERTY_GROUP` |  |
| `HIYUI_PROPERTY_TEXT` |  |
| `HIYUI_PROPERTY_BOOLEAN` |  |
| `HIYUI_PROPERTY_INTEGER` |  |
| `HIYUI_PROPERTY_UNSIGNED` |  |
| `HIYUI_PROPERTY_NUMBER` |  |
| `HIYUI_PROPERTY_ENUM` |  |
| `HIYUI_PROPERTY_FLAGS` |  |
| `HIYUI_PROPERTY_COLOR` |  |
| `HIYUI_PROPERTY_DATE` |  |
| `HIYUI_PROPERTY_TIME` |  |
| `HIYUI_PROPERTY_CUSTOM` |  |
| `HIYUI_PROPERTY_TUPLE` |  |

### hiyui_property_sort_mode_t

| Value | Description |
|---|---|
| `HIYUI_PROPERTY_SORT_CATEGORIZED` |  |
| `HIYUI_PROPERTY_SORT_ALPHABETICAL` |  |

### hiyui_property_status_t

| Value | Description |
|---|---|
| `HIYUI_PROPERTY_IDLE` |  |
| `HIYUI_PROPERTY_EDITING` |  |
| `HIYUI_PROPERTY_INVALID` |  |
| `HIYUI_PROPERTY_PENDING` |  |
| `HIYUI_PROPERTY_CONFLICT` |  |

### hiyui_property_change_origin_t

| Value | Description |
|---|---|
| `HIYUI_PROPERTY_ORIGIN_USER` |  |
| `HIYUI_PROPERTY_ORIGIN_RESET` |  |
| `HIYUI_PROPERTY_ORIGIN_EXTERNAL` |  |

## Type Aliases

### hiyui_property_id_t

```c
typedef uint64_t hiyui_property_id_t
```

### hiyui_property_value_t

```c
typedef struct hiyui_property_value_t hiyui_property_value_t
```

A borrowed value view. Input strings and bytes are valid during the call and copied before the function returns. text may be NULL and means an empty string. When custom.size is non-zero, bytes must be non-NULL. tuple keeps children in declaration order. When count is non-zero, values must be non-NULL, and the value tree must be acyclic.

### hiyui_property_item_t

```c
typedef struct hiyui_property_item_t hiyui_property_item_t
```

Initialize with item_init. The tree must be acyclic, and IDs must be non-zero and unique across the tree. user_data is owned by the caller and must stay alive until the property is removed and related callbacks finish. When has_default_value is TRUE, default_value is copied, including an EMPTY default. TUPLE uses a non-empty sequence of scalar leaf items. Nested TUPLE and empty tuple values are not supported; structural changes must update the parent property. A TUPLE EMPTY value is aggregated from its children; an explicit tuple value overrides the child values. The same applies to defaults, and aggregation requires every child to have a default. A mixed tuple still requires a representative value satisfying each child constraint. TUPLE children share draft, pending, and conflict states. Commit, change, and status callbacks use the parent ID and the full tuple.

### hiyui_property_snapshot_t

```c
typedef struct hiyui_property_snapshot_t hiyui_property_snapshot_t
```

### hiyui_property_value_snapshot_t

```c
typedef struct hiyui_property_value_snapshot_t hiyui_property_value_snapshot_t
```

### hiyui_property_editor_t

```c
typedef struct hiyui_property_editor_t hiyui_property_editor_t
```

### hiyui_property_reply_t

```c
typedef struct hiyui_property_reply_t hiyui_property_reply_t
```

### hiyui_property_request_t

```c
typedef struct hiyui_property_request_t hiyui_property_request_t
```

### hiyui_property_commit_fn

```c
typedef void(HIYUI_CALL * hiyui_property_commit_fn) (hiyui_property_request_t *request, void *user_data)
```

Callback arguments are valid only during the callback. For async handling, save the reply handle with request_defer.

### hiyui_property_editor_factory_fn

```c
typedef void(HIYUI_CALL * hiyui_property_editor_factory_fn) (hiyui_widget_t *host, const hiyui_property_editor_t *editor, void *user_data)
```

Builds only the host subtree. Must not modify the designer or change host ownership. Clone the editor before keeping it.

### hiyui_property_formatter_fn

```c
typedef const char *(HIYUI_CALL * hiyui_property_formatter_fn) (const hiyui_property_item_t *item, const hiyui_property_value_t *value, void *user_data)
```

The returned string is copied when the callback returns. The designer must not be modified during the callback.

### hiyui_property_change_fn

```c
typedef void(HIYUI_CALL * hiyui_property_change_fn) (const hiyui_property_change_t *change, void *user_data)
```

### hiyui_property_id_fn

```c
typedef void(HIYUI_CALL * hiyui_property_id_fn) (hiyui_property_id_t id, void *user_data)
```

## Functions

### hiyui_property_grid_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_property_grid_props_init(hiyui_property_grid_props_t *props)
```

All widget, session, and reply operations must run on the UI thread. Write operations on a NULL handle return 0. Widget handles are owned by the parent and unusable after destruction. Weak sessions and replies can still be queried and released.

### hiyui_property_item_init

```c
HIYUI_API void HIYUI_CALL hiyui_property_item_init(hiyui_property_item_t *item)
```

### hiyui_property_grid_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_property_grid_create(hiyui_widget_t *parent, const hiyui_property_grid_props_t *props)
```

### hiyui_property_grid_set_palette

```c
HIYUI_API void HIYUI_CALL hiyui_property_grid_set_palette(hiyui_widget_t *grid, const hiyui_property_grid_palette_t *palette)
```

Copies and applies the palette while preserving content and editing state; a NULL grid is a no-op and a NULL palette restores theme colors.

### hiyui_property_grid_set_properties

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_set_properties(hiyui_widget_t *grid, const hiyui_property_item_t *items, size_t count)
```

### hiyui_property_grid_insert

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_insert(hiyui_widget_t *grid, const hiyui_property_item_t *item, hiyui_property_id_t parent)
```

### hiyui_property_grid_update

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_update(hiyui_widget_t *grid, const hiyui_property_item_t *item)
```

### hiyui_property_grid_remove

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_remove(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_get_property

```c
HIYUI_API hiyui_property_snapshot_t *HIYUI_CALL hiyui_property_grid_get_property(hiyui_widget_t *grid, hiyui_property_id_t id)
```

Returns an independently owned snapshot. Returns NULL when the property does not exist. Release it with the corresponding snapshot_destroy.

### hiyui_property_grid_get_value

```c
HIYUI_API hiyui_property_value_snapshot_t *HIYUI_CALL hiyui_property_grid_get_value(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_set_value

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_set_value(hiyui_widget_t *grid, hiyui_property_id_t id, const hiyui_property_value_t *value, hiyui_notify_t notify)
```

### hiyui_property_grid_get_error

```c
HIYUI_API size_t HIYUI_CALL hiyui_property_grid_get_error(hiyui_widget_t *grid, hiyui_property_id_t id, char *buffer, size_t capacity)
```

Returns the required byte count including the terminating zero. buffer may be NULL; when the capacity is insufficient, the text is truncated and zero-terminated.

### hiyui_property_grid_last_error

```c
HIYUI_API size_t HIYUI_CALL hiyui_property_grid_last_error(hiyui_widget_t *grid, char *buffer, size_t capacity)
```

### hiyui_property_grid_get_status

```c
HIYUI_API hiyui_property_status_t HIYUI_CALL hiyui_property_grid_get_status(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_is_modified

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_is_modified(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_set_filter

```c
HIYUI_API void HIYUI_CALL hiyui_property_grid_set_filter(hiyui_widget_t *grid, const char *text)
```

### hiyui_property_grid_set_sort_mode

```c
HIYUI_API void HIYUI_CALL hiyui_property_grid_set_sort_mode(hiyui_widget_t *grid, hiyui_property_sort_mode_t mode)
```

### hiyui_property_grid_set_name_width

```c
HIYUI_API void HIYUI_CALL hiyui_property_grid_set_name_width(hiyui_widget_t *grid, int width)
```

### hiyui_property_grid_set_expanded

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_set_expanded(hiyui_widget_t *grid, hiyui_property_id_t id, int expanded)
```

### hiyui_property_grid_get_expanded

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_get_expanded(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_select

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_select(hiyui_widget_t *grid, hiyui_property_id_t id, hiyui_notify_t notify)
```

### hiyui_property_grid_get_selected

```c
HIYUI_API hiyui_property_id_t HIYUI_CALL hiyui_property_grid_get_selected(hiyui_widget_t *grid)
```

### hiyui_property_grid_edit

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_edit(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_commit_edit

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_commit_edit(hiyui_widget_t *grid)
```

### hiyui_property_grid_cancel_edit

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_cancel_edit(hiyui_widget_t *grid)
```

### hiyui_property_grid_reset

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_reset(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_cancel_request

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_cancel_request(hiyui_widget_t *grid, hiyui_property_id_t id)
```

### hiyui_property_grid_register_editor

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_register_editor(hiyui_widget_t *grid, const char *key, hiyui_property_editor_factory_fn factory, hiyui_property_formatter_fn formatter, void *user_data, hiyui_destroy_fn destroy)
```

Ownership of the callback state moves to the widget. destroy is called on failure too, and release happens when the last callback after replacement finishes. A NULL factory unregisters the editor. A NULL handler restores automatic acceptance and cancels old pending requests.

### hiyui_property_grid_set_commit_handler

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_set_commit_handler(hiyui_widget_t *grid, hiyui_property_commit_fn handler, void *user_data, hiyui_destroy_fn destroy)
```

### hiyui_property_grid_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_on_change(hiyui_widget_t *grid, hiyui_property_change_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out)
```

Appends a subscription. out may be NULL; otherwise *out must be NULL, and unbinding uses the existing event handle.

### hiyui_property_grid_on_select

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_on_select(hiyui_widget_t *grid, hiyui_property_id_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out)
```

### hiyui_property_grid_on_state_change

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_on_state_change(hiyui_widget_t *grid, hiyui_property_id_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out)
```

### hiyui_property_snapshot_view

```c
HIYUI_API const hiyui_property_item_t *HIYUI_CALL hiyui_property_snapshot_view(const hiyui_property_snapshot_t *snapshot)
```

The view is borrowed until the snapshot is destroyed. All snapshot and clone return values are released by the caller. destroy accepts NULL.

### hiyui_property_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_property_snapshot_destroy(hiyui_property_snapshot_t *snapshot)
```

### hiyui_property_value_clone

```c
HIYUI_API hiyui_property_value_snapshot_t *HIYUI_CALL hiyui_property_value_clone(const hiyui_property_value_t *value)
```

### hiyui_property_value_snapshot_view

```c
HIYUI_API hiyui_property_value_t HIYUI_CALL hiyui_property_value_snapshot_view(const hiyui_property_value_snapshot_t *snapshot)
```

### hiyui_property_value_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_property_value_snapshot_destroy(hiyui_property_value_snapshot_t *snapshot)
```

### hiyui_property_grid_get_editor

```c
HIYUI_API hiyui_property_editor_t *HIYUI_CALL hiyui_property_grid_get_editor(hiyui_widget_t *grid)
```

### hiyui_property_editor_clone

```c
HIYUI_API hiyui_property_editor_t *HIYUI_CALL hiyui_property_editor_clone(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_property_editor_destroy(hiyui_property_editor_t *editor)
```

### hiyui_property_editor_valid

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_valid(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_id

```c
HIYUI_API hiyui_property_id_t HIYUI_CALL hiyui_property_editor_id(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_get_property

```c
HIYUI_API hiyui_property_snapshot_t *HIYUI_CALL hiyui_property_editor_get_property(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_get_value

```c
HIYUI_API hiyui_property_value_snapshot_t *HIYUI_CALL hiyui_property_editor_get_value(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_property_editor_get_text(const hiyui_property_editor_t *editor, char *buffer, size_t capacity)
```

### hiyui_property_editor_set_value

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_set_value(const hiyui_property_editor_t *editor, const hiyui_property_value_t *value)
```

### hiyui_property_editor_set_text

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_set_text(const hiyui_property_editor_t *editor, const char *text)
```

### hiyui_property_editor_set_error

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_set_error(const hiyui_property_editor_t *editor, const char *message)
```

### hiyui_property_editor_commit

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_commit(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_cancel

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_cancel(const hiyui_property_editor_t *editor)
```

### hiyui_property_editor_focus_target

```c
HIYUI_API int HIYUI_CALL hiyui_property_editor_focus_target(const hiyui_property_editor_t *editor, hiyui_widget_t *target)
```

### hiyui_property_request_change

```c
HIYUI_API const hiyui_property_change_t *HIYUI_CALL hiyui_property_request_change(const hiyui_property_request_t *request)
```

### hiyui_property_request_accept

```c
HIYUI_API int HIYUI_CALL hiyui_property_request_accept(hiyui_property_request_t *request)
```

### hiyui_property_request_accept_value

```c
HIYUI_API int HIYUI_CALL hiyui_property_request_accept_value(hiyui_property_request_t *request, const hiyui_property_value_t *value)
```

### hiyui_property_request_reject

```c
HIYUI_API int HIYUI_CALL hiyui_property_request_reject(hiyui_property_request_t *request, const char *message)
```

### hiyui_property_request_defer

```c
HIYUI_API hiyui_property_reply_t *HIYUI_CALL hiyui_property_request_defer(hiyui_property_request_t *request)
```

Defers the reply and returns an owned handle. The async result must be posted to the UI thread before completion, and reply_destroy is called last.

### hiyui_property_reply_clone

```c
HIYUI_API hiyui_property_reply_t *HIYUI_CALL hiyui_property_reply_clone(const hiyui_property_reply_t *reply)
```

### hiyui_property_reply_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_property_reply_destroy(hiyui_property_reply_t *reply)
```

### hiyui_property_reply_valid

```c
HIYUI_API int HIYUI_CALL hiyui_property_reply_valid(const hiyui_property_reply_t *reply)
```

### hiyui_property_reply_accept

```c
HIYUI_API int HIYUI_CALL hiyui_property_reply_accept(const hiyui_property_reply_t *reply)
```

### hiyui_property_reply_accept_value

```c
HIYUI_API int HIYUI_CALL hiyui_property_reply_accept_value(const hiyui_property_reply_t *reply, const hiyui_property_value_t *value)
```

### hiyui_property_reply_reject

```c
HIYUI_API int HIYUI_CALL hiyui_property_reply_reject(const hiyui_property_reply_t *reply, const char *message)
```

### hiyui_property_value_snapshot_view_ptr

```c
HIYUI_API const hiyui_property_value_t *HIYUI_CALL hiyui_property_value_snapshot_view_ptr(const hiyui_property_value_snapshot_t *snapshot)
```

Pointer form of the snapshot value view for languages that cannot receive structs by value. NULL for a NULL snapshot; the view dies with the snapshot.

### hiyui_property_value_view_kind

```c
HIYUI_API hiyui_property_value_kind_t HIYUI_CALL hiyui_property_value_view_kind(const hiyui_property_value_t *view)
```

Reads the value kind; NULL returns HIYUI_PROPERTY_VALUE_EMPTY.

### hiyui_property_value_view_integer

```c
HIYUI_API int64_t HIYUI_CALL hiyui_property_value_view_integer(const hiyui_property_value_t *view)
```

Reads the integer or unsigned value; a kind mismatch or NULL returns 0.

### hiyui_property_value_view_number

```c
HIYUI_API double HIYUI_CALL hiyui_property_value_view_number(const hiyui_property_value_t *view)
```

Reads the numeric value; a kind mismatch or NULL returns 0.

### hiyui_property_value_view_boolean

```c
HIYUI_API int HIYUI_CALL hiyui_property_value_view_boolean(const hiyui_property_value_t *view)
```

Reads the boolean value; a kind mismatch or NULL returns 0.

### hiyui_property_value_view_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_property_value_view_text(const hiyui_property_value_t *view)
```

Reads the text; a kind mismatch or NULL returns NULL, and the text dies with the snapshot.

### hiyui_property_value_snapshot_view_to

```c
HIYUI_API void HIYUI_CALL hiyui_property_value_snapshot_view_to(const hiyui_property_value_snapshot_t *snapshot, hiyui_property_value_kind_t *kind, int64_t *integer, double *number, int *boolean, const char **text)
```

Writes the common fields of the snapshot value in one call; every output pointer may be NULL. kind 总是写出；integer、number、boolean、text 仅在类型匹配时写出对应槽，否则写 0 或 NULL。
