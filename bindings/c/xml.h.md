---
title: "xml.h"
---

# xml.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/xml.h>`

本头文件中的 XML API 和回调必须在 LVGL/Hiy-UI UI 线程调用。

## 枚举

### hiyui_xml_diagnostic_severity_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_DIAGNOSTIC_WARNING` = 0 |  |
| `HIYUI_XML_DIAGNOSTIC_ERROR` |  |

### hiyui_xml_diagnostic_code_t

| 值 | 说明 |
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

| 值 | 说明 |
|---|---|
| `HIYUI_XML_CHILD_NONE` = 0 |  |
| `HIYUI_XML_CHILD_WIDGETS` |  |
| `HIYUI_XML_CHILD_ITEM_LIST` |  |
| `HIYUI_XML_CHILD_ITEM_TREE` |  |
| `HIYUI_XML_CHILD_TEMPLATE` |  |

### hiyui_xml_reload_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_RELOAD_IDLE` = 0 |  |
| `HIYUI_XML_RELOAD_SUCCESS` |  |
| `HIYUI_XML_RELOAD_FAILED` |  |

### hiyui_xml_value_kind_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_VALUE_NONE` = 0 |  |
| `HIYUI_XML_VALUE_INTEGER` |  |
| `HIYUI_XML_VALUE_BOOLEAN` |  |
| `HIYUI_XML_VALUE_NUMBER` |  |
| `HIYUI_XML_VALUE_STRING` |  |

### hiyui_xml_attribute_kind_t

| 值 | 说明 |
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

| 值 | 说明 |
|---|---|
| `HIYUI_XML_REGISTRATION_SUCCESS` = 0 |  |
| `HIYUI_XML_REGISTRATION_INVALID_SPEC` |  |
| `HIYUI_XML_REGISTRATION_DUPLICATE_NAMESPACE` |  |
| `HIYUI_XML_REGISTRATION_DUPLICATE_TAG` |  |
| `HIYUI_XML_REGISTRATION_NOT_FOUND` |  |
| `HIYUI_XML_REGISTRATION_OUT_OF_MEMORY` |  |

### hiyui_xml_attribute_list_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_COMPONENT_ATTRIBUTES` = 0 |  |
| `HIYUI_XML_ITEM_ATTRIBUTES` |  |
| `HIYUI_XML_TOP_ITEM_ATTRIBUTES` |  |

### hiyui_xml_event_kind_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_EVENT_CLICK` = 0 |  |
| `HIYUI_XML_EVENT_PRESS` |  |
| `HIYUI_XML_EVENT_LONG_PRESS` |  |
| `HIYUI_XML_EVENT_VALUE_CHANGED` |  |

### hiyui_xml_context_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_CONTEXT_SUCCESS` = 0 |  |
| `HIYUI_XML_CONTEXT_INVALID_ARGUMENT` |  |
| `HIYUI_XML_CONTEXT_DUPLICATE_NAME` |  |
| `HIYUI_XML_CONTEXT_NOT_FOUND` |  |
| `HIYUI_XML_CONTEXT_OUT_OF_MEMORY` |  |

### hiyui_xml_binding_update_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_BINDING_UPDATE_SUCCESS` = 0 |  |
| `HIYUI_XML_BINDING_UPDATE_INVALID_ARGUMENT` |  |
| `HIYUI_XML_BINDING_UPDATE_VALIDATION_FAILED` |  |
| `HIYUI_XML_BINDING_UPDATE_APPLY_FAILED` |  |
| `HIYUI_XML_BINDING_UPDATE_OUT_OF_MEMORY` |  |
| `HIYUI_XML_BINDING_UPDATE_INTERNAL_ERROR` |  |

### hiyui_xml_collection_update_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_XML_COLLECTION_UPDATE_SUCCESS` = 0 |  |
| `HIYUI_XML_COLLECTION_UPDATE_INVALID_ARGUMENT` |  |
| `HIYUI_XML_COLLECTION_UPDATE_VALIDATION_FAILED` |  |
| `HIYUI_XML_COLLECTION_UPDATE_OUT_OF_MEMORY` |  |
| `HIYUI_XML_COLLECTION_UPDATE_INTERNAL_ERROR` |  |

## 类型别名

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

value reader 的写入接口，仅在当前回调期间有效。

### hiyui_xml_registry_snapshot_t

```c
typedef struct hiyui_xml_registry_snapshot_s hiyui_xml_registry_snapshot_t
```

### hiyui_xml_resolve_fn

```c
typedef int(HIYUI_CALL * hiyui_xml_resolve_fn) (const char *referring_source, const char *requested_source, size_t max_bytes, hiyui_xml_source_t *out, void *user_data)
```

成功返回非零；内容可用 max_bytes + 1 字节报告超限。

### hiyui_xml_tree_item_t

```c
typedef struct hiyui_xml_tree_item_s hiyui_xml_tree_item_t
```

ItemTree 的只读递归视图；全部指针仅在 collector 回调期间有效。

### hiyui_xml_userdata_destroy_fn

```c
typedef void(HIYUI_CALL * hiyui_xml_userdata_destroy_fn) (void *user_data)
```

### hiyui_xml_factory_fn

```c
typedef hiyui_xml_widget_result_t(HIYUI_CALL * hiyui_xml_factory_fn) (hiyui_widget_t *parent, const hiyui_xml_attr_t *attrs, size_t attr_count, hiyui_xml_factory_context_t *context, void *user_data)
```

加载器在工厂返回后统一应用通用 XML 属性，工厂不得重复应用。

### hiyui_xml_item_collector_fn

```c
typedef int(HIYUI_CALL * hiyui_xml_item_collector_fn) (hiyui_widget_t *widget, const hiyui_xml_item_t *items, size_t item_count, hiyui_xml_item_result_t *results, hiyui_xml_factory_context_t *context, void *user_data)
```

### hiyui_xml_tree_item_collector_fn

```c
typedef int(HIYUI_CALL * hiyui_xml_tree_item_collector_fn) (hiyui_widget_t *widget, const hiyui_xml_tree_item_t *items, size_t item_count, hiyui_xml_factory_context_t *context, void *user_data)
```

接收顶层 item 及其递归 children。

### hiyui_xml_property_validator_fn

```c
typedef int(HIYUI_CALL * hiyui_xml_property_validator_fn) (hiyui_widget_t *widget, const char *attribute, const char *value, hiyui_xml_factory_context_t *context, void *user_data)
```

验证运行时绑定值；回调不得修改组件或外部状态。

### hiyui_xml_property_setter_fn

```c
typedef int(HIYUI_CALL * hiyui_xml_property_setter_fn) (hiyui_widget_t *widget, const char *attribute, const char *value, hiyui_xml_factory_context_t *context, void *user_data)
```

应用已经通过同一注册描述 validator 的运行时绑定值。

### hiyui_xml_value_reader_fn

```c
typedef int(HIYUI_CALL * hiyui_xml_value_reader_fn) (hiyui_widget_t *widget, hiyui_xml_value_writer_t *writer, hiyui_xml_factory_context_t *context, void *user_data)
```

回调成功时必须写入注册描述声明的值类型；writer 仅在回调期间有效。

### hiyui_xml_command_fn

```c
typedef void(HIYUI_CALL * hiyui_xml_command_fn) (const hiyui_xml_command_event_t *event, void *user_data)
```

### hiyui_xml_read_fn

```c
typedef ptrdiff_t(HIYUI_CALL * hiyui_xml_read_fn) (char *buffer, size_t capacity, void *user_data)
```

返回 0 表示结束，负值表示失败，正值不得超过 capacity。

### hiyui_xml_window_t

```c
typedef struct hiyui_xml_window_s hiyui_xml_window_t
```

## 函数

### hiyui_xml_attr_get

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_attr_get(const hiyui_xml_attr_t *attrs, size_t attr_count, const char *name)
```

返回借用属性值；名称不存在或参数无效时返回 NULL。

### hiyui_xml_context_create

```c
HIYUI_API hiyui_xml_context_t *HIYUI_CALL hiyui_xml_context_create(void)
```

创建独立 XML 上下文；失败时返回 NULL。

### hiyui_xml_context_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_context_destroy(hiyui_xml_context_t *context)
```

销毁上下文句柄；已加载组件持有的命令和绑定保持有效，直到组件销毁。

### hiyui_xml_context_register_command

```c
HIYUI_API hiyui_xml_context_registration_t HIYUI_CALL hiyui_xml_context_register_command(hiyui_xml_context_t *context, const char *name, hiyui_xml_command_fn callback, void *user_data, hiyui_xml_userdata_destroy_fn destroy_user_data)
```

注册具名命令；成功后上下文接管 user_data，注销后不再触发该命令。

### hiyui_xml_context_unregister_command

```c
HIYUI_API hiyui_xml_context_status_t HIYUI_CALL hiyui_xml_context_unregister_command(hiyui_xml_context_t *context, uint64_t token)
```

### hiyui_xml_context_register_menu_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_register_menu_resource(hiyui_xml_context_t *context, const char *name, const hiyui_context_menu_item_t *items, int item_count, hiyui_popup_mode_t mode)
```

注册具名菜单资源；名称、菜单结构和文本均被复制，同名资源被替换。
| 参数 | 说明 |
|---|---|
| `items` | 菜单树；icon_src 指向的资源在菜单资源移除前必须保持有效。 |
| `item_count` | 菜单项数量；可为 0，非零时 items 不得为 NULL。 |


**返回值：** SDL3 已启用且参数有效并存入资源时返回非零。

### hiyui_xml_context_remove_menu_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_menu_resource(hiyui_xml_context_t *context, const char *name)
```

移除具名菜单资源；资源不存在或 SDL3 未启用时返回零。

### hiyui_xml_context_set_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_set_resource(hiyui_xml_context_t *context, const char *name, const char *value)
```

名称和值均被复制。

### hiyui_xml_context_remove_resource

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_resource(hiyui_xml_context_t *context, const char *name)
```

### hiyui_xml_context_set_style

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_set_style(hiyui_xml_context_t *context, const char *name, const hiyui_style_set_t *style)
```

名称和样式值均被复制。

### hiyui_xml_context_remove_style

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_remove_style(hiyui_xml_context_t *context, const char *name)
```

### hiyui_xml_context_set_binding

```c
HIYUI_API int HIYUI_CALL hiyui_xml_context_set_binding(hiyui_xml_context_t *context, const char *name, const char *value)
```

设置并同步更新当前仍有效的运行时绑定目标。

### hiyui_xml_context_update_binding

```c
HIYUI_API hiyui_xml_binding_result_t *HIYUI_CALL hiyui_xml_context_update_binding(hiyui_xml_context_t *context, const char *name, const char *value)
```

返回独立结果句柄；验证失败时不保存值且不调用 setter。调用方必须使用 `hiyui_xml_binding_result_destroy` 销毁结果。

### hiyui_xml_context_last_binding_result

```c
HIYUI_API hiyui_xml_binding_result_t *HIYUI_CALL hiyui_xml_context_last_binding_result(const hiyui_xml_context_t *context)
```

返回独立结果句柄；调用方使用 `hiyui_xml_binding_result_destroy` 销毁。

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

out 必须使用 `HIYUI_XML_DIAGNOSTIC_INIT` 初始化。

### hiyui_xml_binding_result_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_binding_result_destroy(hiyui_xml_binding_result_t *result)
```

### hiyui_xml_context_set_collection

```c
HIYUI_API hiyui_xml_collection_result_t *HIYUI_CALL hiyui_xml_context_set_collection(hiyui_xml_context_t *context, const char *name, const hiyui_xml_collection_item_t *items, size_t item_count)
```

深拷贝全部字段；`index` 为保留字段名；任一 Repeater 构造失败时保留原集合和 UI。

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

out 必须使用 `HIYUI_XML_DIAGNOSTIC_INIT` 初始化。

### hiyui_xml_collection_result_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_collection_result_destroy(hiyui_xml_collection_result_t *result)
```

### hiyui_xml_layout_from_file

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_file(hiyui_widget_t *parent, const char *path, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

通过宿主文件系统加载；options 非空时必须初始化。

### hiyui_xml_layout_from_string

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_string(hiyui_widget_t *parent, const char *xml, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

options 非空时必须使用 `HIYUI_XML_LOAD_OPTIONS_INIT` 初始化。

### hiyui_xml_layout_from_memory

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_memory(hiyui_widget_t *parent, const char *xml, size_t size, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

输入缓冲区仅需在同步调用期间有效；options 非空时必须初始化。

### hiyui_xml_layout_from_reader

```c
HIYUI_API hiyui_xml_layout_t *HIYUI_CALL hiyui_xml_layout_from_reader(hiyui_widget_t *parent, hiyui_xml_read_fn reader, void *reader_user_data, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

reader 和 user_data 仅在同步调用期间使用，外部资源由调用方管理。

### hiyui_xml_layout_valid

```c
HIYUI_API int HIYUI_CALL hiyui_xml_layout_valid(const hiyui_xml_layout_t *layout)
```

### hiyui_xml_layout_get_by_id

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_xml_layout_get_by_id(const hiyui_xml_layout_t *layout, const char *id)
```

返回借用组件句柄；布局不拥有该组件。

### hiyui_xml_layout_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_layout_diagnostic_count(const hiyui_xml_layout_t *layout)
```

### hiyui_xml_layout_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_layout_get_diagnostic(const hiyui_xml_layout_t *layout, size_t index, hiyui_xml_diagnostic_t *out)
```

out 必须使用 `HIYUI_XML_DIAGNOSTIC_INIT` 初始化。

### hiyui_xml_layout_source_id

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_layout_source_id(const hiyui_xml_layout_t *layout)
```

返回借用 source ID，在 layout 销毁前有效；无 source ID 时返回 NULL。

### hiyui_xml_layout_dependency_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_layout_dependency_count(const hiyui_xml_layout_t *layout)
```

### hiyui_xml_layout_dependency

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_layout_dependency(const hiyui_xml_layout_t *layout, size_t index)
```

返回借用 source ID，在 layout 销毁前有效。

### hiyui_xml_layout_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_layout_destroy(hiyui_xml_layout_t *layout)
```

销毁查询句柄，不销毁已经挂载到 parent 的组件树。

### hiyui_xml_reload_host_create

```c
HIYUI_API hiyui_xml_reload_host_t *HIYUI_CALL hiyui_xml_reload_host_create(hiyui_widget_t *parent, hiyui_xml_context_t *context)
```

创建整树事务重载宿主。宿主复制 context 的共享状态并拥有后续提交的 XML 根树。 reload 失败时销毁候选树并保留当前根树。

### hiyui_xml_reload_host_reload_file

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_file(hiyui_xml_reload_host_t *host, const char *path, const hiyui_xml_load_options_t *options)
```

options 非空时必须初始化；无论 strict 字段为何值都按严格模式加载。

### hiyui_xml_reload_host_reload_string

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_string(hiyui_xml_reload_host_t *host, const char *xml, const hiyui_xml_load_options_t *options)
```

options 非空时必须初始化；成功时替换当前根树。

### hiyui_xml_reload_host_reload_memory

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_memory(hiyui_xml_reload_host_t *host, const char *xml, size_t size, const hiyui_xml_load_options_t *options)
```

输入缓冲区仅需在同步调用期间有效。

### hiyui_xml_reload_host_reload_reader

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_reload_reader(hiyui_xml_reload_host_t *host, hiyui_xml_read_fn reader, void *reader_user_data, const hiyui_xml_load_options_t *options)
```

reader 和 user_data 仅在同步调用期间使用。

### hiyui_xml_reload_host_valid

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_valid(const hiyui_xml_reload_host_t *host)
```

当前存在有效已提交布局时返回非零。

### hiyui_xml_reload_host_status

```c
HIYUI_API hiyui_xml_reload_status_t HIYUI_CALL hiyui_xml_reload_host_status(const hiyui_xml_reload_host_t *host)
```

返回最近一次 reload 状态；创建后和 reset 后为 `HIYUI_XML_RELOAD_IDLE`。

### hiyui_xml_reload_host_get_by_id

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_xml_reload_host_get_by_id(const hiyui_xml_reload_host_t *host, const char *id)
```

返回借用组件句柄；成功 reload、reset 或 host 销毁后失效。

### hiyui_xml_reload_host_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_reload_host_diagnostic_count(const hiyui_xml_reload_host_t *host)
```

返回最近一次 reload 的诊断数量。

### hiyui_xml_reload_host_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_reload_host_get_diagnostic(const hiyui_xml_reload_host_t *host, size_t index, hiyui_xml_diagnostic_t *out)
```

out 中的字符串在下次 reload、reset 或 host 销毁前有效。

### hiyui_xml_reload_host_source_id

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_reload_host_source_id(const hiyui_xml_reload_host_t *host)
```

返回借用 source ID；下次 reload、reset 或 host 销毁后失效。

### hiyui_xml_reload_host_dependency_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_reload_host_dependency_count(const hiyui_xml_reload_host_t *host)
```

### hiyui_xml_reload_host_dependency

```c
HIYUI_API const char *HIYUI_CALL hiyui_xml_reload_host_dependency(const hiyui_xml_reload_host_t *host, size_t index)
```

返回借用 Include source ID；下次 reload、reset 或 host 销毁后失效。

### hiyui_xml_reload_host_reset

```c
HIYUI_API void HIYUI_CALL hiyui_xml_reload_host_reset(hiyui_xml_reload_host_t *host)
```

销毁当前根树并清除最近加载结果，保留宿主和共享上下文。

### hiyui_xml_reload_host_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_reload_host_destroy(hiyui_xml_reload_host_t *host)
```

销毁宿主及其当前根树。

### hiyui_xml_register_module

```c
HIYUI_API hiyui_xml_registration_t HIYUI_CALL hiyui_xml_register_module(const hiyui_xml_module_spec_t *spec)
```

spec 必须使用 `HIYUI_XML_MODULE_SPEC_INIT` 初始化；注册表深拷贝全部字符串。

### hiyui_xml_unregister_module

```c
HIYUI_API hiyui_xml_registration_status_t HIYUI_CALL hiyui_xml_unregister_module(uint64_t token)
```

注销模块及其全部组件，新加载不再解析该 namespace。

### hiyui_xml_register_widget

```c
HIYUI_API hiyui_xml_registration_t HIYUI_CALL hiyui_xml_register_widget(uint64_t module_token, const hiyui_xml_widget_spec_t *spec)
```

spec 必须使用 `HIYUI_XML_WIDGET_SPEC_INIT` 初始化。注册表深拷贝 local name 和属性元数据。 成功后接管 user_data，失败时所有权仍归调用方。

### hiyui_xml_unregister_widget

```c
HIYUI_API hiyui_xml_registration_status_t HIYUI_CALL hiyui_xml_unregister_widget(uint64_t token)
```

注销后新布局不再使用该标签，已有自定义属性绑定不再调用 setter。

### hiyui_xml_registry_snapshot_create

```c
HIYUI_API hiyui_xml_registry_snapshot_t *HIYUI_CALL hiyui_xml_registry_snapshot_create(void)
```

创建注册表深拷贝快照；失败时返回 NULL。

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

out 必须使用 `HIYUI_XML_WIDGET_METADATA_INIT` 初始化。

### hiyui_xml_registry_snapshot_common_attribute_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_registry_snapshot_common_attribute_count(const hiyui_xml_registry_snapshot_t *snapshot)
```

### hiyui_xml_registry_snapshot_get_common_attribute

```c
HIYUI_API int HIYUI_CALL hiyui_xml_registry_snapshot_get_common_attribute(const hiyui_xml_registry_snapshot_t *snapshot, size_t attribute_index, hiyui_xml_attribute_metadata_t *out)
```

返回借用字符串，在 snapshot 销毁前有效。

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

复制字符串；成功返回非零。

### hiyui_xml_factory_context_error

```c
HIYUI_API void HIYUI_CALL hiyui_xml_factory_context_error(hiyui_xml_factory_context_t *context, hiyui_xml_diagnostic_code_t code, const char *attribute, const char *message)
```

仅在工厂或 item collector 回调期间报告当前元素错误。

### hiyui_xml_set_debug_outline

```c
HIYUI_API void HIYUI_CALL hiyui_xml_set_debug_outline(int enabled)
```

开启后，所有后续 XML 加载的组件绘制 1px 调试边框。

### hiyui_xml_get_debug_outline

```c
HIYUI_API int HIYUI_CALL hiyui_xml_get_debug_outline(void)
```

返回 debug 边界框开关的当前状态。

### hiyui_xml_window_from_file

```c
HIYUI_API hiyui_xml_window_t *HIYUI_CALL hiyui_xml_window_from_file(const char *path, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

从文件事务加载 &lt;Window&gt;；options 非空时必须初始化。

### hiyui_xml_window_from_string

```c
HIYUI_API hiyui_xml_window_t *HIYUI_CALL hiyui_xml_window_from_string(const char *xml, hiyui_xml_context_t *context, const hiyui_xml_load_options_t *options)
```

从内存字符串事务加载 &lt;Window&gt;；options 非空时必须初始化。

### hiyui_xml_window_window

```c
HIYUI_API hiyui_win_t *HIYUI_CALL hiyui_xml_window_window(const hiyui_xml_window_t *window)
```

返回已创建窗口，窗口未创建时返回 NULL。

### hiyui_xml_window_diagnostic_count

```c
HIYUI_API size_t HIYUI_CALL hiyui_xml_window_diagnostic_count(const hiyui_xml_window_t *window)
```

返回加载产生的诊断数量。

### hiyui_xml_window_get_diagnostic

```c
HIYUI_API int HIYUI_CALL hiyui_xml_window_get_diagnostic(const hiyui_xml_window_t *window, size_t index, hiyui_xml_diagnostic_t *out)
```

out 必须使用 `HIYUI_XML_DIAGNOSTIC_INIT` 初始化。

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

仅当窗口已创建且无错误诊断时返回非零。

### hiyui_xml_window_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_xml_window_destroy(hiyui_xml_window_t *window)
```

销毁加载句柄，不销毁已创建的窗口。
