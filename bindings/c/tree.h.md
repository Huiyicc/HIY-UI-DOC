---
title: "tree.h"
---

# tree.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/tree.h>`

树形虚表组件

千万级节点毫秒渲染，支持勾选、多选、拖拽、异步加载、 搜索过滤、连接线、手风琴、自定义图标/字段、右键菜单。

## 枚举

### hiyui_tree_drop_position_t

| 值 | 说明 |
|---|---|
| `HIYUI_TREE_DROP_BEFORE` = 0 |  |
| `HIYUI_TREE_DROP_INSIDE` |  |
| `HIYUI_TREE_DROP_AFTER` |  |

## 类型别名

### hiyui_tree_node_t

```c
typedef struct hiyui_tree_node_t hiyui_tree_node_t
```

## 函数

### hiyui_tree_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tree_create(hiyui_widget_t *parent, const hiyui_tree_props_t *props)
```

创建树，props 为 NULL 时全默认

### hiyui_tree_set_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_tree_set_nodes(hiyui_widget_t *t, const hiyui_tree_node_t *nodes, int count, hiyui_notify_t notify)
```

设置全量节点

### hiyui_tree_set_children

```c
HIYUI_API void HIYUI_CALL hiyui_tree_set_children(hiyui_widget_t *t, uint32_t parent_id, const hiyui_tree_node_t *children, int count, hiyui_notify_t notify)
```

替换指定父节点的子节点，parent_id=0 替换根

### hiyui_tree_append_children

```c
HIYUI_API void HIYUI_CALL hiyui_tree_append_children(hiyui_widget_t *t, uint32_t parent_id, const hiyui_tree_node_t *children, int count, hiyui_notify_t notify)
```

追加子节点，不清空已有，parent_id=0 追加为根

### hiyui_tree_expand_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_expand_node(hiyui_widget_t *t, uint32_t id, int expanded)
```

展开/折叠节点

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

勾选/取消节点

### hiyui_tree_select_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_select_node(hiyui_widget_t *t, uint32_t id, hiyui_notify_t notify)
```

选中单节点

### hiyui_tree_select_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_tree_select_nodes(hiyui_widget_t *t, const uint32_t *ids, int count, hiyui_notify_t notify)
```

选中多个节点

### hiyui_tree_deselect_all

```c
HIYUI_API void HIYUI_CALL hiyui_tree_deselect_all(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_tree_disable_node

```c
HIYUI_API void HIYUI_CALL hiyui_tree_disable_node(hiyui_widget_t *t, uint32_t id, int disabled, hiyui_notify_t notify)
```

禁用/启用节点

### hiyui_tree_show_connect_line

```c
HIYUI_API void HIYUI_CALL hiyui_tree_show_connect_line(hiyui_widget_t *t, int show)
```

运行时开关连接线

### hiyui_tree_filter

```c
HIYUI_API void HIYUI_CALL hiyui_tree_filter(hiyui_widget_t *t, const char *keyword)
```

搜索过滤，keyword 为 NULL 清除

### hiyui_tree_reset_lazy_load

```c
HIYUI_API void HIYUI_CALL hiyui_tree_reset_lazy_load(hiyui_widget_t *t, uint32_t id)
```

重置节点异步加载状态，允许再次触发 lazy_load

### hiyui_tree_clear_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_tree_clear_nodes(hiyui_widget_t *t, hiyui_notify_t notify)
```

### hiyui_tree_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_change(hiyui_widget_t *widget, void(HIYUI_CALL *cb)(const uint32_t *, int, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

选中变化回调

### hiyui_tree_on_check

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_check(hiyui_widget_t *t, void(HIYUI_CALL *cb)(uint32_t id, int checked, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

勾选变化回调

### hiyui_tree_on_expand

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_expand(hiyui_widget_t *t, void(HIYUI_CALL *cb)(uint32_t id, int expanded, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

展开变化回调

### hiyui_tree_on_drop

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_drop(hiyui_widget_t *t, void(HIYUI_CALL *cb)(uint32_t src, uint32_t target, hiyui_tree_drop_position_t pos, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

拖拽完成回调

### hiyui_tree_set_custom_field

```c
HIYUI_API void HIYUI_CALL hiyui_tree_set_custom_field(hiyui_widget_t *t, void(HIYUI_CALL *cb)(hiyui_widget_t *area, const hiyui_tree_node_view_t *node, void *ud), void *ud)
```

自定义字段渲染回调，node 视图借用内部，回调内有效

### hiyui_tree_context_menu

```c
HIYUI_API void HIYUI_CALL hiyui_tree_context_menu(hiyui_widget_t *t, const hiyui_context_menu_item_t *items, int count)
```

绑定右键菜单（SDL 桌面端生效）

### hiyui_tree_is_expanded

```c
HIYUI_API int HIYUI_CALL hiyui_tree_is_expanded(hiyui_widget_t *t, uint32_t id)
```

节点是否展开

### hiyui_tree_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_tree_is_checked(hiyui_widget_t *t, uint32_t id)
```

节点是否勾选

### hiyui_tree_is_selected

```c
HIYUI_API int HIYUI_CALL hiyui_tree_is_selected(hiyui_widget_t *t, uint32_t id)
```

节点是否选中

### hiyui_tree_get_checked_nodes

```c
HIYUI_API int HIYUI_CALL hiyui_tree_get_checked_nodes(hiyui_widget_t *t, uint32_t *out, int max_count)
```

取已勾选节点 id，返回总数，至多填入 max_count 个

### hiyui_tree_get_selected_nodes

```c
HIYUI_API int HIYUI_CALL hiyui_tree_get_selected_nodes(hiyui_widget_t *t, uint32_t *out, int max_count)
```

取已选中节点 id，返回总数，至多填入 max_count 个

### hiyui_tree_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_tree_on_activate(hiyui_widget_t *widget, void(HIYUI_CALL *cb)(uint32_t, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
