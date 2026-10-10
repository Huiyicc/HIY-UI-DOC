---
title: "list.h"
---

# list.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/list.h>`

模板列表（虚表渲染，自定义模板 + 多状态样式 + 网格 + 展开）

回调驱动：set_count 返回数据总数，builder 按索引渲染。 数据由调用方维护，列表内部以索引序列驱动虚拟渲染。

## 枚举

### hiyui_list_layout_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_LIST_LAYOUT_LIST` = 0 |  |
| `HIYUI_LIST_LAYOUT_GRID` |  |

## 类型别名

### hiyui_list_count_fn

```c
typedef int(* hiyui_list_count_fn) (void *user_data)
```

### hiyui_list_build_fn

```c
typedef void(* hiyui_list_build_fn) (hiyui_widget_t *row, int idx, void *user_data)
```

### hiyui_list_click_fn

```c
typedef void(* hiyui_list_click_fn) (int idx, void *user_data)
```

## 函数

### hiyui_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_list_create(hiyui_widget_t *parent, const hiyui_list_props_t *props)
```

创建模板列表，props 为 NULL 时全默认

### hiyui_list_set_template

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_template(hiyui_widget_t *list, const hiyui_list_template_t *tpl)
```

设置 item 模板（构建函数、多状态样式、展开详情等）

### hiyui_list_set_count

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_count(hiyui_widget_t *list, hiyui_list_count_fn count, void *user_data)
```

设置数据总数回调，列表内部以索引序列驱动渲染

### hiyui_list_refresh

```c
HIYUI_API void HIYUI_CALL hiyui_list_refresh(hiyui_widget_t *list, hiyui_notify_t notify)
```

重建数据并全量刷新（数据增删改后调用）

### hiyui_list_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_selected(hiyui_widget_t *list, int idx, hiyui_notify_t notify)
```

### hiyui_list_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_list_get_selected(hiyui_widget_t *list)
```

### hiyui_list_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_list_on_change(hiyui_widget_t *widget, hiyui_list_click_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

选中变化回调

### hiyui_list_item_count

```c
HIYUI_API int HIYUI_CALL hiyui_list_item_count(hiyui_widget_t *list)
```

### hiyui_list_set_layout_mode

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_layout_mode(hiyui_widget_t *list, hiyui_list_layout_mode_t mode)
```

### hiyui_list_set_column_count

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_column_count(hiyui_widget_t *list, int count)
```

### hiyui_list_set_min_item_width

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_min_item_width(hiyui_widget_t *list, int width)
```

### hiyui_list_set_row_gap

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_row_gap(hiyui_widget_t *list, int gap)
```

### hiyui_list_set_column_gap

```c
HIYUI_API void HIYUI_CALL hiyui_list_set_column_gap(hiyui_widget_t *list, int gap)
```

### hiyui_list_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_list_on_activate(hiyui_widget_t *widget, hiyui_list_click_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
