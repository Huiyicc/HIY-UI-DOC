---
title: "item_list.h"
---

# item_list.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/item_list.h>`

列表组件（全量数据式，虚表渲染）

接收全量 items 数组，支持 separator、图标、选中高亮、追加、批量更新。 与 hiyui_list（count/build 回调式）互补。

## 函数

### hiyui_item_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_item_list_create(hiyui_widget_t *parent, const hiyui_item_list_props_t *props)
```

创建列表，props 为 NULL 时全默认

### hiyui_item_list_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_set_items(hiyui_widget_t *l, const hiyui_list_item_t *items, int count, hiyui_notify_t notify)
```

批量设置列表项

### hiyui_item_list_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_set_selected(hiyui_widget_t *l, int idx, hiyui_notify_t notify)
```

设置选中项，idx 为逻辑索引（不含 separator），-1 = 取消选中

### hiyui_item_list_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_get_selected(hiyui_widget_t *l)
```

获取当前选中索引，-1 = 无选中

### hiyui_item_list_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_on_change(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

选择变化回调

### hiyui_item_list_item_count

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_item_count(hiyui_widget_t *l)
```

数据项总数（不含 separator）

### hiyui_item_list_append_item

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_append_item(hiyui_widget_t *l, const hiyui_list_item_t *item, hiyui_notify_t notify)
```

追加一条数据项

### hiyui_item_list_begin_update

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_begin_update(hiyui_widget_t *l)
```

暂停视图刷新，用于批量追加

### hiyui_item_list_end_update

```c
HIYUI_API void HIYUI_CALL hiyui_item_list_end_update(hiyui_widget_t *l)
```

恢复视图刷新并立即更新

### hiyui_item_list_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_item_list_on_activate(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
