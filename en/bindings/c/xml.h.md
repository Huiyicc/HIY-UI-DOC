---
title: "xml.h"
---

# xml.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/xml.h>`

The XML APIs and callbacks in this header must be called on the LVGL/Hiy-UI UI thread.

## Enums

### hiyui_xml_diagnostic_severity_t

| Value | Description |
|---|---|
| `HIYUI_XML_DIAGNOSTIC_WARNING` = 0 |  |
| `HIYUI_XML_DIAGNOSTIC_ERROR` |  |

### hiyui_xml_diagnostic_code_t

| Value | Description |
|---|---|
| `HIYUI_XML_PARSE_ERROR` = 0 |  |
| `HIYUI_XML_FILE_ERROR` |  |
| `HIYUI_XML_EMPTY_DOCUMENT` |  |
| `HIYUI_XML_UNKNOWN_TAG` |  |
| `HIYUI_XML_UNKNOWN_ATTRIBUTE` |  |
| `HIYUI_XML_INVALID_ATTRIBUTE` |  |
| `HIYUI_XML_DUPLICATE_ID` |  |
| `HIYUI_XML_FACTORY_FAILED` |  |
| `HIYUI_XML_INVALID_FACTORY_RESULT` |  |
| `HIYUI_XML_UNEXPECTED_CHILD` |  |
| `HIYUI_XML_ITEM_COLLECTION_FAILED` |  |
| `HIYUI_XML_UNKNOWN_HANDLER` |  |
| `HIYUI_XML_UNKNOWN_RESOURCE` |  |
| `HIYUI_XML_UNKNOWN_BINDING` |  |
| `HIYUI_XML_BINDING_ERROR` |  |
| `HIYUI_XML_DEPTH_LIMIT` |  |
| `HIYUI_XML_NODE_LIMIT` |  |
| `HIYUI_XML_INTERNAL_ERROR` |  |
| `HIYUI_XML_BYTE_LIMIT` |  |
| `HIYUI_XML_READER_ERROR` |  |
| `HIYUI_XML_INCLUDE_CYCLE` |  |
| `HIYUI_XML_INCLUDE_FAILED` |  |
| `HIYUI_XML_INCLUDE_DEPTH_LIMIT` |  |
| `HIYUI_XML_SCHEMA_ERROR` |  |

### hiyui_xml_child_mode_t

| Value | Description |
|---|---|
| `HIYUI_XML_CHILD_NONE` = 0 |  |
| `HIYUI_XML_CHILD_WIDGETS` |  |
| `HIYUI_XML_CHILD_ITEM_LIST` |  |
| `HIYUI_XML_CHILD_ITEM_TREE` |  |
| `HIYUI_XML_CHILD_TEMPLATE` |  |

### hiyui_xml_reload_status_t

| Value | Description |
|---|---|
| `HIYUI_XML_RELOAD_IDLE` = 0 |  |
| `HIYUI_XML_RELOAD_SUCCESS` |  |
| `HIYUI_XML_RELOAD_FAILED` |  |

### hiyui_xml_value_kind_t

| Value | Description |
|---|---|
| `HIYUI_XML_VALUE_NONE` = 0 |  |
| `HIYUI_XML_VALUE_INTEGER` |  |
| `HIYUI_XML_VALUE_BOOLEAN` |  |
| `HIYUI_XML_VALUE_NUMBER` |  |
| `HIYUI_XML_VALUE_STRING` |  |

### hiyui_xml_attribute_kind_t

| Value | Description |
|---|---|
| `HIYUI_XML_ATTRIBUTE_STRING` = 0 |  |
| `HIYUI_XML_ATTRIBUTE_INTEGER` |  |
| `HIYUI_XML_ATTRIBUTE_UNSIGNED_INTEGER` |  |
| `HIYUI_XML_ATTRIBUTE_NUMBER` |  |
| `HIYUI_XML_ATTRIBUTE_BOOLEAN` |  |
| `HIYUI_XML_ATTRIBUTE_COLOR` |  |
| `HIYUI_XML_ATTRIBUTE_ENUMERATION` |  |
| `HIYUI_XML_ATTRIBUTE_IDENTIFIER` |  |
| `HIYUI_XML_ATTRIBUTE_COMMAND` |  |
| `HIYUI_XML_ATTRIBUTE_RESOURCE` |  |
| `HIYUI_XML_ATTRIBUTE_SOURCE` |  |

### hiyui_xml_registration_status_t

| Value | Description |
|---|---|
| `HIYUI_XML_REGISTRATION_SUCCESS` = 0 |  |
| `HIYUI_XML_REGISTRATION_INVALID_SPEC` |  |
| `HIYUI_XML_REGISTRATION_DUPLICATE_NAMESPACE` |  |
| `HIYUI_XML_REGISTRATION_DUPLICATE_TAG` |  |
| `HIYUI_XML_REGISTRATION_NOT_FOUND` |  |
| `HIYUI_XML_REGISTRATION_OUT_OF_MEMORY` |  |

### hiyui_xml_attribute_list_t

| Value | Description |
|---|---|
| `HIYUI_XML_COMPONENT_ATTRIBUTES` = 0 |  |
| `HIYUI_XML_ITEM_ATTRIBUTES` |  |
| `HIYUI_XML_TOP_ITEM_ATTRIBUTES` |  |

### hiyui_xml_event_kind_t

| Value | Description |
|---|---|
| `HIYUI_XML_EVENT_CLICK` = 0 |  |
| `HIYUI_XML_EVENT_PRESS` |  |
| `HIYUI_XML_EVENT_LONG_PRESS` |  |
| `HIYUI_XML_EVENT_VALUE_CHANGED` |  |

### hiyui_xml_context_status_t

| Value | Description |
|---|---|
| `HIYUI_XML_CONTEXT_SUCCESS` = 0 |  |
| `HIYUI_XML_CONTEXT_INVALID_ARGUMENT` |  |
| `HIYUI_XML_CONTEXT_DUPLICATE_NAME` |  |
| `HIYUI_XML_CONTEXT_NOT_FOUND` |  |
| `HIYUI_XML_CONTEXT_OUT_OF_MEMORY` |  |

### hiyui_xml_binding_update_status_t

| Value | Description |
|---|---|
| `HIYUI_XML_BINDING_UPDATE_SUCCESS` = 0 |  |
| `HIYUI_XML_BINDING_UPDATE_INVALID_ARGUMENT` |  |
| `HIYUI_XML_BINDING_UPDATE_VALIDATION_FAILED` |  |
| `HIYUI_XML_BINDING_UPDATE_APPLY_FAILED` |  |
| `HIYUI_XML_BINDING_UPDATE_OUT_OF_MEMORY` |  |
| `HIYUI_XML_BINDING_UPDATE_INTERNAL_ERROR` |  |

### hiyui_xml_collection_update_status_t

| Value | Description |
|---|---|
| `HIYUI_XML_COLLECTION_UPDATE_SUCCESS` = 0 |  |
| `HIYUI_XML_COLLECTION_UPDATE_INVALID_ARGUMENT` |  |
| `HIYUI_XML_COLLECTION_UPDATE_VALIDATION_FAILED` |  |
| `HIYUI_XML_COLLECTION_UPDATE_OUT_OF_MEMORY` |  |
| `HIYUI_XML_COLLECTION_UPDATE_INTERNAL_ERROR` |  |

## Type Aliases

### hiyui_xml_layout_t

```c
typedef struct hiyui_xml_layout_s hiyui_xml_layout_t
```

### hiyui_xml_reload_host_t

```c
typedef struct hiyui_xml_reload_host_s hiyui_xml_reload_host_t
```

### hiyui_xml_context_t

```c
typedef struct hiyui_xml_context_s hiyui_xml_context_t
```

### hiyui_xml_binding_result_t

```c
typedef struct hiyui_xml_binding_result_s hiyui_xml_binding_result_t
```

### hiyui_xml_collection_result_t

```c
typedef struct hiyui_xml_collection_result_s hiyui_xml_collection_result_t
```

### hiyui_xml_factory_context_t

```c
typedef struct hiyui_xml_factory_context_s hiyui_xml_factory_context_t
```

### hiyui_xml_value_writer_t

```c
typedef struct hiyui_xml_value_writer_s hiyui_xml_value_writer_t
```

Write interface for a value reader; valid only during the current callback.

### hiyui_xml_registry_snapshot_t

```c
typedef struct hiyui_xml_registry_snapshot_s hiyui_xml_registry_snapshot_t
```

### hiyui_xml_resolve_fn

```c
typedef int(* hiyui_xml_resolve_fn) (const char *referring_source, const char *requested_source, size_t max_bytes, hiyui_xml_source_t *out, void *user_data)
```

Returns non-zero on success; content may report oversize with max_bytes + 1 bytes.

### hiyui_xml_tree_item_t

```c
typedef struct hiyui_xml_tree_item_s hiyui_xml_tree_item_t
```

Read-only recursive view for ItemTree; all pointers are valid only during the collector callback.

### hiyui_xml_userdata_destroy_fn

```c
typedef void(* hiyui_xml_userdata_destroy_fn) (void *user_data)
```

### hiyui_xml_factory_fn

```c
typedef hiyui_xml_widget_result_t(* hiyui_xml_factory_fn) (hiyui_widget_t *parent, const hiyui_xml_attr_t *attrs, size_t attr_count, hiyui_xml_factory_context_t *context, void *user_data)
```

The loader applies common XML attributes uniformly after the factory returns; factories must not apply them again.

### hiyui_xml_item_collector_fn

```c
typedef int(* hiyui_xml_item_collector_fn) (hiyui_widget_t *widget, const hiyui_xml_item_t *items, size_t item_count, hiyui_xml_item_result_t *results, hiyui_xml_factory_context_t *context, void *user_data)
```

### hiyui_xml_tree_item_collector_fn

```c
typedef int(* hiyui_xml_tree_item_collector_fn) (hiyui_widget_t *widget, const hiyui_xml_tree_item_t *items, size_t item_count, hiyui_xml_factory_context_t *context, void *user_data)
```

Receives top-level items and their recursive children.

### hiyui_xml_property_validator_fn

```c
typedef int(* hiyui_xml_property_validator_fn) (hiyui_widget_t *widget, const char *attribute, const char *value, hiyui_xml_factory_context_t *context, void *user_data)
```

Validates a runtime bound value; the callback must not modify widgets or external state.

### hiyui_xml_property_setter_fn

```c
typedef int(* hiyui_xml_property_setter_fn) (hiyui_widget_t *widget, const char *attribute, const char *value, hiyui_xml_factory_context_t *context, void *user_data)
```

Applies a runtime bound value that already passed the validator of the same registration description.

### hiyui_xml_value_reader_fn

```c
typedef int(* hiyui_xml_value_reader_fn) (hiyui_widget_t *widget, hiyui_xml_value_writer_t *writer, hiyui_xml_factory_context_t *context, void *user_data)
```

On success the callback must write the value kind declared in the registration description; writer is valid only during the callback.

### hiyui_xml_command_fn

```c
typedef void(* hiyui_xml_command_fn) (const hiyui_xml_command_event_t *event, void *user_data)
```

### hiyui_xml_read_fn

```c
typedef ptrdiff_t(* hiyui_xml_read_fn) (char *buffer, size_t capacity, void *user_data)
```

Returns 0 for end, a negative value for failure, and a positive value that must not exceed capacity.

### hiyui_xml_window_t

```c
typedef struct hiyui_xml_window_s hiyui_xml_window_t
```

## Functions

### hiyui_xml_attr_get

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_attr_get(const hiyui_xml_attr_t *attrs, size_t attr_count, const char *name)
```

Returns a borrowed attribute value; NULL when the name does not exist or arguments are invalid.

### hiyui_xml_context_create

```c
HIYUI_API hiyui_xml_context_t *HIYUI_CALL hiyui_xml_context_create(void)
```

Creates a standalone XML context; returns NULL on failure.

### hiyui_xml_context_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_context_destroy(hiyui_xml_context_t *context)
```

Destroys the context handle; commands and bindings held by loaded widgets stay valid until the widgets are destroyed.

### hiyui_xml_context_register_command

```c
HIYUI_API hiyui_xml_context_registration_t HIYUI_CALL hiyui_xml_context_register_command(hiyui_xml_context_t *context, const char *name, hiyui_xml_command_fn callback, void *user_data, hiyui_xml_userdata_destroy_fn destroy_user_data)
```

Registers a named command; on success the context takes ownership of user_data, and the command no longer fires after unregistration.

### hiyui_xml_context_unregister_command

```c
HIYUI_API hiyui_xml_context_status_t HIYUI_CALL hiyui_xml_context_unregister_command(hiyui_xml_context_t *context, uint64_t token)
```

### hiyui_xml_context_register_menu_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_register_menu_resource(hiyui_xml_context_t *context, const char *name, const hiyui_context_menu_item_t *items, int item_count, hiyui_popup_mode_t mode)
```

Registers a named menu resource; the name, menu structure, and texts are copied, and a same-name resource is replaced. Menu tree; resources pointed to by icon_src must stay valid until the menu resource is removed. Menu item count; may be 0, and items must not be NULL when non-zero. Non-zero when SDL3 is enabled, arguments are valid, and the resource is stored.

### hiyui_xml_context_remove_menu_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_menu_resource(hiyui_xml_context_t *context, const char *name)
```

Removes a named menu resource; returns zero when the resource does not exist or SDL3 is not enabled.

### hiyui_xml_context_set_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_set_resource(hiyui_xml_context_t *context, const char *name, const char *value)
```

Both name and value are copied.

### hiyui_xml_context_remove_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_resource(hiyui_xml_context_t *context, const char *name)
```

### hiyui_xml_context_set_style

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_set_style(hiyui_xml_context_t *context, const char *name, const hiyui_style_set_t *style)
```

Both name and style value are copied.

### hiyui_xml_context_remove_style

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_style(hiyui_xml_context_t *context, const char *name)
```

### hiyui_xml_context_set_binding

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_set_binding(hiyui_xml_context_t *context, const char *name, const char *value)
```

Sets the value and immediately updates runtime binding targets that are still alive.

### hiyui_xml_context_update_binding

```c
HIYUI_API hiyui_xml_binding_result_t *HIYUI_CALL hiyui_xml_context_update_binding(hiyui_xml_context_t *context, const char *name, const char *value)
```

Returns an independent result handle; on validation failure no value is saved and no setter is called. The caller must destroy the result with `hiyui_xml_binding_result_destroy`.

### hiyui_xml_context_last_binding_result

```c
HIYUI_API hiyui_xml_binding_result_t *HIYUI_CALL hiyui_xml_context_last_binding_result(const hiyui_xml_context_t *context)
```

Returns an independent result handle; the caller destroys it with `hiyui_xml_binding_result_destroy`.

### hiyui_xml_context_remove_binding

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_binding(hiyui_xml_context_t *context, const char *name)
```

### hiyui_xml_binding_result_status

```c
HIYUI_API hiyui_xml_binding_update_status_t HIYUI_CALL hiyui_xml_binding_result_status(const hiyui_xml_binding_result_t *result)
```

### hiyui_xml_binding_result_target_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_binding_result_target_count(const hiyui_xml_binding_result_t *result)
```

### hiyui_xml_binding_result_updated_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_binding_result_updated_count(const hiyui_xml_binding_result_t *result)
```

### hiyui_xml_binding_result_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_binding_result_diagnostic_count(const hiyui_xml_binding_result_t *result)
```

### hiyui_xml_binding_result_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_binding_result_get_diagnostic(const hiyui_xml_binding_result_t *result, size_t index, hiyui_xml_diagnostic_t *out)
```

out must be initialized with `HIYUI_XML_DIAGNOSTIC_INIT`.

### hiyui_xml_binding_result_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_binding_result_destroy(hiyui_xml_binding_result_t *result)
```

### hiyui_xml_context_set_collection

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_set_collection(hiyui_xml_context_t *context, const char *name, const hiyui_xml_collection_item_t *items, size_t item_count)
```

Deep-copies all fields. `index` is a reserved field name. If any Repeater construction fails, the original collection and UI are kept.

### hiyui_xml_context_append_collection_item

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_append_collection_item(hiyui_xml_context_t *context, const char *name, const hiyui_xml_collection_item_t *item)
```

### hiyui_xml_context_insert_collection_item

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_insert_collection_item(hiyui_xml_context_t *context, const char *name, size_t index, const hiyui_xml_collection_item_t *item)
```

### hiyui_xml_context_replace_collection_item

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_replace_collection_item(hiyui_xml_context_t *context, const char *name, size_t index, const hiyui_xml_collection_item_t *item)
```

### hiyui_xml_context_remove_collection_item

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_remove_collection_item(hiyui_xml_context_t *context, const char *name, size_t index)
```

### hiyui_xml_context_clear_collection

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_clear_collection(hiyui_xml_context_t *context, const char *name)
```

### hiyui_xml_collection_result_status

```c
HIYUI_API hiyui_xml_collection_update_status_t HIYUI_CALL hiyui_xml_collection_result_status(const hiyui_xml_collection_result_t *result)
```

### hiyui_xml_collection_result_item_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_collection_result_item_count(const hiyui_xml_collection_result_t *result)
```

### hiyui_xml_collection_result_updated_repeater_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_collection_result_updated_repeater_count(const hiyui_xml_collection_result_t *result)
```

### hiyui_xml_collection_result_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_collection_result_diagnostic_count(const hiyui_xml_collection_result_t *result)
```

### hiyui_xml_collection_result_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_collection_result_get_diagnostic(const hiyui_xml_collection_result_t *result, size_t index, hiyui_xml_diagnostic_t *out)
```

out must be initialized with `HIYUI_XML_DIAGNOSTIC_INIT`.

### hiyui_xml_collection_result_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_collection_result_destroy(hiyui_xml_collection_result_t *result)
```

### hiyui_xml_layout_from_file

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_file(hiyui_widget_t *parent, const char *path, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

Loads through the host file system; options must be initialized when non-NULL.

### hiyui_xml_layout_from_string

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_string(hiyui_widget_t *parent, const char *xml, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

When options is non-NULL it must be initialized with `HIYUI_XML_LOAD_OPTIONS_INIT`.

### hiyui_xml_layout_from_memory

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_memory(hiyui_widget_t *parent, const char *xml, size_t size, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

The input buffer only needs to be valid during the synchronous call; options must be initialized when non-NULL.

### hiyui_xml_layout_from_reader

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_reader(hiyui_widget_t *parent, hiyui_xml_read_fn reader, void *reader_user_data, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

reader and user_data are used only during the synchronous call; external resources are managed by the caller.

### hiyui_xml_layout_valid

```c
HIYUI_API int HIYUI_CALL hiyui_xml_layout_valid(const hiyui_xml_layout_t *layout)
```

### hiyui_xml_layout_get_by_id

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_xml_layout_get_by_id(const hiyui_xml_layout_t *layout, const char *id)
```

Returns a borrowed widget handle; the layout does not own the widget.

### hiyui_xml_layout_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_layout_diagnostic_count(const hiyui_xml_layout_t *layout)
```

### hiyui_xml_layout_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_layout_get_diagnostic(const hiyui_xml_layout_t *layout, size_t index, hiyui_xml_diagnostic_t *out)
```

out must be initialized with `HIYUI_XML_DIAGNOSTIC_INIT`.

### hiyui_xml_layout_source_id

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_layout_source_id(const hiyui_xml_layout_t *layout)
```

Returns a borrowed source ID, valid until the layout is destroyed; NULL when there is no source ID.

### hiyui_xml_layout_dependency_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_layout_dependency_count(const hiyui_xml_layout_t *layout)
```

### hiyui_xml_layout_dependency

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_layout_dependency(const hiyui_xml_layout_t *layout, size_t index)
```

Returns a borrowed source ID, valid until the layout is destroyed.

### hiyui_xml_layout_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_layout_destroy(hiyui_xml_layout_t *layout)
```

Destroys the query handle without destroying the widget tree already attached to parent.

### hiyui_xml_reload_host_create

```c
HIYUI_API hiyui_xml_reload_host_t *HIYUI_CALL hiyui_xml_reload_host_create(hiyui_widget_t *parent, hiyui_xml_context_t *context)
```

Creates a whole-tree transactional reload host. The host copies the shared state of context and owns the XML root tree committed afterwards. On reload failure the candidate tree is destroyed and the current root tree is kept.

### hiyui_xml_reload_host_reload_file

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_file(hiyui_xml_reload_host_t *host, const char *path, const hiyui_xml_load_options_t *options)
```

options must be initialized when non-NULL; loading always uses strict mode regardless of the strict field.

### hiyui_xml_reload_host_reload_string

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_string(hiyui_xml_reload_host_t *host, const char *xml, const hiyui_xml_load_options_t *options)
```

options must be initialized when non-NULL; on success the current root tree is replaced.

### hiyui_xml_reload_host_reload_memory

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_memory(hiyui_xml_reload_host_t *host, const char *xml, size_t size, const hiyui_xml_load_options_t *options)
```

The input buffer only needs to be valid during the synchronous call.

### hiyui_xml_reload_host_reload_reader

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_reader(hiyui_xml_reload_host_t *host, hiyui_xml_read_fn reader, void *reader_user_data, const hiyui_xml_load_options_t *options)
```

reader and user_data are used only during the synchronous call.

### hiyui_xml_reload_host_valid

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_valid(const hiyui_xml_reload_host_t *host)
```

Non-zero when a valid committed layout currently exists.

### hiyui_xml_reload_host_status

```c
HIYUI_API hiyui_xml_reload_status_t HIYUI_CALL hiyui_xml_reload_host_status(const hiyui_xml_reload_host_t *host)
```

Returns the status of the most recent reload; `HIYUI_XML_RELOAD_IDLE` after creation and reset.

### hiyui_xml_reload_host_get_by_id

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_xml_reload_host_get_by_id(const hiyui_xml_reload_host_t *host, const char *id)
```

Returns a borrowed widget handle; invalidated by a successful reload, reset, or host destruction.

### hiyui_xml_reload_host_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_reload_host_diagnostic_count(const hiyui_xml_reload_host_t *host)
```

Returns the diagnostic count of the most recent reload.

### hiyui_xml_reload_host_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_get_diagnostic(const hiyui_xml_reload_host_t *host, size_t index, hiyui_xml_diagnostic_t *out)
```

Strings in out are valid until the next reload, reset, or host destruction.

### hiyui_xml_reload_host_source_id

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_reload_host_source_id(const hiyui_xml_reload_host_t *host)
```

Returns a borrowed source ID; invalidated by the next reload, reset, or host destruction.

### hiyui_xml_reload_host_dependency_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_reload_host_dependency_count(const hiyui_xml_reload_host_t *host)
```

### hiyui_xml_reload_host_dependency

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_reload_host_dependency(const hiyui_xml_reload_host_t *host, size_t index)
```

Returns a borrowed Include source ID; invalidated by the next reload, reset, or host destruction.

### hiyui_xml_reload_host_reset

```c
HIYUI_API void HIYUI_CALL hiyui_xml_reload_host_reset(hiyui_xml_reload_host_t *host)
```

Destroys the current root tree and clears the last load result, keeping the host and shared context.

### hiyui_xml_reload_host_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_reload_host_destroy(hiyui_xml_reload_host_t *host)
```

Destroys the host and its current root tree.

### hiyui_xml_register_module

```c
HIYUI_API hiyui_xml_registration_t HIYUI_CALL hiyui_xml_register_module(const hiyui_xml_module_spec_t *spec)
```

spec must be initialized with `HIYUI_XML_MODULE_SPEC_INIT`; the registry deep-copies all strings.

### hiyui_xml_unregister_module

```c
HIYUI_API hiyui_xml_registration_status_t HIYUI_CALL hiyui_xml_unregister_module(uint64_t token)
```

Unregisters the module and all its widgets; new loads no longer resolve that namespace.

### hiyui_xml_register_widget

```c
HIYUI_API hiyui_xml_registration_t HIYUI_CALL hiyui_xml_register_widget(uint64_t module_token, const hiyui_xml_widget_spec_t *spec)
```

spec must be initialized with `HIYUI_XML_WIDGET_SPEC_INIT`. The registry deep-copies the local name and attribute metadata. On success it takes ownership of user_data; on failure ownership stays with the caller.

### hiyui_xml_unregister_widget

```c
HIYUI_API hiyui_xml_registration_status_t HIYUI_CALL hiyui_xml_unregister_widget(uint64_t token)
```

After unregistration new layouts no longer use the tag, and existing custom attribute bindings no longer call the setter.

### hiyui_xml_registry_snapshot_create

```c
HIYUI_API hiyui_xml_registry_snapshot_t *HIYUI_CALL hiyui_xml_registry_snapshot_create(void)
```

Creates a deep-copy snapshot of the registry; returns NULL on failure.

### hiyui_xml_registry_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_registry_snapshot_destroy(hiyui_xml_registry_snapshot_t *snapshot)
```

### hiyui_xml_registry_snapshot_revision

```c
HIYUI_API uint64_t HIYUI_CALL hiyui_xml_registry_snapshot_revision(const hiyui_xml_registry_snapshot_t *snapshot)
```

### hiyui_xml_registry_snapshot_module_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_registry_snapshot_module_count(const hiyui_xml_registry_snapshot_t *snapshot)
```

### hiyui_xml_registry_snapshot_get_module

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_module(const hiyui_xml_registry_snapshot_t *snapshot, size_t module_index, hiyui_xml_module_metadata_t *out)
```

### hiyui_xml_registry_snapshot_widget_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_registry_snapshot_widget_count(const hiyui_xml_registry_snapshot_t *snapshot, size_t module_index)
```

### hiyui_xml_registry_snapshot_get_widget

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_widget(const hiyui_xml_registry_snapshot_t *snapshot, size_t module_index, size_t widget_index, hiyui_xml_widget_metadata_t *out)
```

out must be initialized with `HIYUI_XML_WIDGET_METADATA_INIT`.

### hiyui_xml_registry_snapshot_common_attribute_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_registry_snapshot_common_attribute_count(const hiyui_xml_registry_snapshot_t *snapshot)
```

### hiyui_xml_registry_snapshot_get_common_attribute

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_common_attribute(const hiyui_xml_registry_snapshot_t *snapshot, size_t attribute_index, hiyui_xml_attribute_metadata_t *out)
```

Returns borrowed strings, valid until the snapshot is destroyed.

### hiyui_xml_registry_snapshot_get_common_enum_value

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_common_enum_value(const hiyui_xml_registry_snapshot_t *snapshot, size_t attribute_index, size_t enum_value_index, hiyui_xml_enum_value_metadata_t *out)
```

### hiyui_xml_registry_snapshot_get_widget_attribute

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_widget_attribute(const hiyui_xml_registry_snapshot_t *snapshot, size_t module_index, size_t widget_index, hiyui_xml_attribute_list_t list, size_t attribute_index, hiyui_xml_attribute_metadata_t *out)
```

### hiyui_xml_registry_snapshot_get_widget_enum_value

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_widget_enum_value(const hiyui_xml_registry_snapshot_t *snapshot, size_t module_index, size_t widget_index, hiyui_xml_attribute_list_t list, size_t attribute_index, size_t enum_value_index, hiyui_xml_enum_value_metadata_t *out)
```

### hiyui_xml_value_writer_reset

```c
HIYUI_API void HIYUI_CALL hiyui_xml_value_writer_reset(hiyui_xml_value_writer_t *writer)
```

### hiyui_xml_value_writer_set_integer

```c
HIYUI_API void HIYUI_CALL hiyui_xml_value_writer_set_integer(hiyui_xml_value_writer_t *writer, int64_t value)
```

### hiyui_xml_value_writer_set_boolean

```c
HIYUI_API void HIYUI_CALL hiyui_xml_value_writer_set_boolean(hiyui_xml_value_writer_t *writer, int value)
```

### hiyui_xml_value_writer_set_number

```c
HIYUI_API void HIYUI_CALL hiyui_xml_value_writer_set_number(hiyui_xml_value_writer_t *writer, double value)
```

### hiyui_xml_value_writer_set_string

```c
HIYUI_API int HIYUI_CALL hiyui_xml_value_writer_set_string(hiyui_xml_value_writer_t *writer, const char *value)
```

Copies the string; returns non-zero on success.

### hiyui_xml_factory_context_error

```c
HIYUI_API void HIYUI_CALL hiyui_xml_factory_context_error(hiyui_xml_factory_context_t *context, hiyui_xml_diagnostic_code_t code, const char *attribute, const char *message)
```

Reports an error for the current element, only during a factory or item collector callback.

### hiyui_xml_set_debug_outline

```c
HIYUI_API void HIYUI_CALL hiyui_xml_set_debug_outline(int enabled)
```

When enabled, all widgets from subsequent XML loads draw a 1px debug outline.

### hiyui_xml_get_debug_outline

```c
HIYUI_API int HIYUI_CALL hiyui_xml_get_debug_outline(void)
```

Returns the current state of the debug outline switch.

### hiyui_xml_window_from_file

```c
HIYUI_API hiyui_xml_window_t *HIYUI_CALL hiyui_xml_window_from_file(const char *path, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

Transactionally loads a \&lt;Window\&gt; from a file; options must be initialized when non-NULL.

### hiyui_xml_window_from_string

```c
HIYUI_API hiyui_xml_window_t *HIYUI_CALL hiyui_xml_window_from_string(const char *xml, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

Transactionally loads a \&lt;Window\&gt; from an in-memory string; options must be initialized when non-NULL.

### hiyui_xml_window_window

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_xml_window_window(const hiyui_xml_window_t *window)
```

Returns the created window, or NULL when no window was created.

### hiyui_xml_window_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_window_diagnostic_count(const hiyui_xml_window_t *window)
```

Returns the number of diagnostics produced by the load.

### hiyui_xml_window_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_window_get_diagnostic(const hiyui_xml_window_t *window, size_t index, hiyui_xml_diagnostic_t *out)
```

out must be initialized with `HIYUI_XML_DIAGNOSTIC_INIT`.

### hiyui_xml_window_source_id

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_window_source_id(const hiyui_xml_window_t *window)
```

### hiyui_xml_window_dependency_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_window_dependency_count(const hiyui_xml_window_t *window)
```

### hiyui_xml_window_dependency

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_window_dependency(const hiyui_xml_window_t *window, size_t index)
```

### hiyui_xml_window_valid

```c
HIYUI_API int HIYUI_CALL hiyui_xml_window_valid(const hiyui_xml_window_t *window)
```

Non-zero only when the window was created and there are no error diagnostics.

### hiyui_xml_window_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_window_destroy(hiyui_xml_window_t *window)
```

Destroys the load handle without destroying the created window.
