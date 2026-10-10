---
title: "property_grid.h"
---

# property_grid.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/property_grid.h>`

## 枚举

### hiyui_property_value_kind_t

| 值 | 说明 |
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

| 值 | 说明 |
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

| 值 | 说明 |
|---|---|
| `HIYUI_PROPERTY_SORT_CATEGORIZED` |  |
| `HIYUI_PROPERTY_SORT_ALPHABETICAL` |  |

### hiyui_property_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_PROPERTY_IDLE` |  |
| `HIYUI_PROPERTY_EDITING` |  |
| `HIYUI_PROPERTY_INVALID` |  |
| `HIYUI_PROPERTY_PENDING` |  |
| `HIYUI_PROPERTY_CONFLICT` |  |

### hiyui_property_change_origin_t

| 值 | 说明 |
|---|---|
| `HIYUI_PROPERTY_ORIGIN_USER` |  |
| `HIYUI_PROPERTY_ORIGIN_RESET` |  |
| `HIYUI_PROPERTY_ORIGIN_EXTERNAL` |  |

## 类型别名

### hiyui_property_id_t

```c
typedef uint64_t hiyui_property_id_t
```

### hiyui_property_value_t

```c
typedef struct hiyui_property_value_t hiyui_property_value_t
```

借用值视图；输入字符串和字节在调用期间有效，函数返回前复制。 text 允许 NULL，表示空字符串；custom.size 非零时 bytes 必须非空。 tuple 按子属性声明顺序保存；count 非零时 values 必须非空，值树必须无环。

### hiyui_property_item_t

```c
typedef struct hiyui_property_item_t hiyui_property_item_t
```

使用 item_init 初始化；树必须无环且 ID 非零、全树唯一。 user_data 由调用方拥有，须存活至属性移除且相关回调结束。 has_default_value 为 TRUE 时复制 default_value，包括 EMPTY 默认值。 TUPLE 使用非空的标量叶子项序列，不支持嵌套 TUPLE 或空元组值；修改结构须 update 父属性。 TUPLE 的 EMPTY value 从子项汇总；显式元组值覆盖子项值。默认值同理，汇总要求每项均有默认值。 mixed 元组仍须提供符合各子项约束的代表值。 TUPLE 子项共享草稿、等待和冲突状态；提交、变更及状态回调使用父 ID 和完整元组。

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
typedef void(* hiyui_property_commit_fn) (hiyui_property_request_t *request, void *user_data)
```

回调参数仅在回调期间有效，异步处理通过 request_defer 保存应答句柄。

### hiyui_property_editor_factory_fn

```c
typedef void(* hiyui_property_editor_factory_fn) (hiyui_widget_t *host, const hiyui_property_editor_t *editor, void *user_data)
```

只构建 host 子树，不得修改设计器或改变 host 所有权；保留 editor 前须 clone。

### hiyui_property_formatter_fn

```c
typedef const char *(* hiyui_property_formatter_fn) (const hiyui_property_item_t *item, const hiyui_property_value_t *value, void *user_data)
```

返回的字符串在回调返回时复制；回调期间不得修改设计器。

### hiyui_property_change_fn

```c
typedef void(* hiyui_property_change_fn) (const hiyui_property_change_t *change, void *user_data)
```

### hiyui_property_id_fn

```c
typedef void(* hiyui_property_id_fn) (hiyui_property_id_t id, void *user_data)
```

## 函数

### hiyui_property_grid_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_property_grid_props_init(hiyui_property_grid_props_t *props)
```

全部组件、会话及应答操作须在 UI 线程执行；NULL 句柄的写操作返回 0。 组件句柄由父组件拥有，销毁后不能使用；弱会话及应答仍可查询和释放。

### hiyui_property_item_init

```c
HIYUI_API void HIYUI_CALL hiyui_property_item_init(hiyui_property_item_t *item)
```

### hiyui_property_grid_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_property_grid_create(hiyui_widget_t *parent, const hiyui_property_grid_props_t *props)
```

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

返回独立拥有的快照，属性不存在返回 NULL；使用对应 snapshot_destroy 释放。

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

返回含结尾零的所需字节数；buffer 可空，容量不足时截断并补零。

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

回调状态的所有权转入组件；失败也调用 destroy，替换后最后一次回调结束时释放。 NULL factory 注销编辑器；NULL handler 恢复自动接受并取消旧等待请求。

### hiyui_property_grid_set_commit_handler

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_set_commit_handler(hiyui_widget_t *grid, hiyui_property_commit_fn handler, void *user_data, hiyui_destroy_fn destroy)
```

### hiyui_property_grid_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_property_grid_on_change(hiyui_widget_t *grid, hiyui_property_change_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out)
```

追加订阅；out 可空，否则 *out 必须为空，使用现有事件句柄解绑。

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

视图借用至快照销毁；所有快照和 clone 的返回值均由调用方释放，destroy 允许 NULL。

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

延迟应答并返回拥有句柄；异步结果须投递到 UI 线程后完成，最后调用 reply_destroy。

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
