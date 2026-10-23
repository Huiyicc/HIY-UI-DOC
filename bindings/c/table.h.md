---
title: "table.h"
---

# table.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/table.h>`

虚拟化表格组件

仅渲染可见行，自绘管线绘制单元格，固定列通过 clip+offset 实现。 支持排序、选择、固定列、编辑、多级表头、嵌套子表格、列宽拖拽。

## 枚举

### hiyui_sort_direction_t

| 值 | 说明 |
|---|---|
| `HIYUI_SORT_NONE` = 0 |  |
| `HIYUI_SORT_ASCEND` |  |
| `HIYUI_SORT_DESCEND` |  |

### hiyui_table_size_t

| 值 | 说明 |
|---|---|
| `HIYUI_TABLE_SIZE_DEFAULT` = 0 |  |
| `HIYUI_TABLE_SIZE_MIDDLE` |  |
| `HIYUI_TABLE_SIZE_SMALL` |  |

### hiyui_cell_editor_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_CELL_EDITOR_NONE` = 0 |  |
| `HIYUI_CELL_EDITOR_INPUT` |  |
| `HIYUI_CELL_EDITOR_DROPDOWN` |  |
| `HIYUI_CELL_EDITOR_CHECKBOX` |  |
| `HIYUI_CELL_EDITOR_SWITCH` |  |
| `HIYUI_CELL_EDITOR_CUSTOM` |  |

### hiyui_column_fixed_t

| 值 | 说明 |
|---|---|
| `HIYUI_COLUMN_FIXED_NONE` = 0 |  |
| `HIYUI_COLUMN_FIXED_LEFT` |  |
| `HIYUI_COLUMN_FIXED_RIGHT` |  |

### hiyui_table_part_t

| 值 | 说明 |
|---|---|
| `HIYUI_TABLE_PART_HEADER` = 0 |  |
| `HIYUI_TABLE_PART_ROW` |  |
| `HIYUI_TABLE_PART_FOOTER` |  |

## 类型别名

### hiyui_table_editor_t

```c
typedef struct hiyui_table_editor_t hiyui_table_editor_t
```

UI 线程使用的编辑会话；编辑结束、区域回收或数据结构变化后失效。

### hiyui_table_editor_factory_fn

```c
typedef void(HIYUI_CALL * hiyui_table_editor_factory_fn) (hiyui_widget_t *host, const hiyui_table_editor_t *editor, void *user_data)
```

在表格拥有的 host 中构建子组件。 editor 仅在调用期间借用，跨回调使用前调用 hiyui_table_editor_clone。 不得销毁 host 或改变其父组件。 工厂只配置 host 子树，不得修改或销毁表格及其祖先。

### hiyui_table_row_t

```c
typedef struct hiyui_table_row_t hiyui_table_row_t
```

## 函数

### hiyui_table_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_table_create(hiyui_widget_t *parent, const hiyui_table_props_t *props)
```

创建表格，props 为 NULL 时全默认

### hiyui_table_set_columns

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_columns(hiyui_widget_t *t, const hiyui_table_column_t *cols, int count)
```

设置列定义并取消当前编辑。 每列的 editor_factory_destroy 非 NULL 时接管 editor_factory_ud，替换列或销毁表格时释放。 工厂正在执行时延迟释放；t 为 NULL 时也释放传入的工厂数据。

### hiyui_table_set_data

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_data(hiyui_widget_t *t, const hiyui_table_row_t *rows, int count, hiyui_notify_t notify)
```

设置全量数据

### hiyui_table_append_rows

```c
HIYUI_API void HIYUI_CALL hiyui_table_append_rows(hiyui_widget_t *t, const hiyui_table_row_t *rows, int count, hiyui_notify_t notify)
```

追加行

### hiyui_table_update_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_update_row(hiyui_widget_t *t, int index, const hiyui_table_row_t *row, hiyui_notify_t notify)
```

更新单行

### hiyui_table_remove_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_remove_row(hiyui_widget_t *t, int index, hiyui_notify_t notify)
```

删除单行

### hiyui_table_clear_data

```c
HIYUI_API void HIYUI_CALL hiyui_table_clear_data(hiyui_widget_t *t, hiyui_notify_t notify)
```

清空数据

### hiyui_table_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_sort(hiyui_widget_t *t, int column_idx, hiyui_sort_direction_t dir)
```

排序指定列

### hiyui_table_clear_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_clear_sort(hiyui_widget_t *t)
```

### hiyui_table_multi_sort

```c
HIYUI_API void HIYUI_CALL hiyui_table_multi_sort(hiyui_widget_t *t, const hiyui_sort_key_t *keys, int count)
```

多列排序，按键数组顺序应用

### hiyui_table_select_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_select_row(hiyui_widget_t *t, int index, int selected, hiyui_notify_t notify)
```

选中/取消单行

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

运行时切换边框

### hiyui_table_set_striped

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_striped(hiyui_widget_t *t, int b)
```

运行时切换斑马纹

### hiyui_table_set_size

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_size(hiyui_widget_t *t, hiyui_table_size_t s)
```

运行时切换尺寸密度

### hiyui_table_toggle_expand

```c
HIYUI_API void HIYUI_CALL hiyui_table_toggle_expand(hiyui_widget_t *t, int flat_row_idx, hiyui_notify_t notify)
```

展开/折叠指定树形行

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

编辑单元格

### hiyui_table_edit_row

```c
HIYUI_API void HIYUI_CALL hiyui_table_edit_row(hiyui_widget_t *t, int flat_row_idx)
```

编辑整行

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

保留非拥有的会话，返回句柄须用 hiyui_table_editor_destroy 释放；NULL 返回 NULL。

### hiyui_table_editor_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_table_editor_destroy(hiyui_table_editor_t *editor)
```

释放保留的句柄，不提交或取消编辑；NULL 无操作。

### hiyui_table_editor_valid

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_valid(const hiyui_table_editor_t *editor)
```

会话失效或 NULL 时返回 0。

### hiyui_table_editor_row

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_row(const hiyui_table_editor_t *editor)
```

展平数据行索引，失效或 NULL 时返回 -1。

### hiyui_table_editor_column

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_column(const hiyui_table_editor_t *editor)
```

列索引，失效或 NULL 时返回 -1。

### hiyui_table_editor_inline

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_inline(const hiyui_table_editor_t *editor)
```

行内编辑返回 1；显式编辑、失效或 NULL 时返回 0。

### hiyui_table_editor_get_value

```c
HIYUI_API size_t HIYUI_CALL hiyui_table_editor_get_value(const hiyui_table_editor_t *editor, char *buffer, size_t capacity)
```

复制 UTF-8 草稿；失效或 NULL 会话按空字符串处理。

**返回值：** 完整字符串所需字节数，包含末尾零；capacity &gt; 0 且 buffer 非空时总是以零结尾。

### hiyui_table_editor_set_value

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_set_value(const hiyui_table_editor_t *editor, const char *value)
```

行内编辑立即回写，显式编辑只更新草稿；value 为 NULL 按空字符串处理，失效返回 0。

### hiyui_table_editor_commit

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_commit(const hiyui_table_editor_t *editor)
```

提交单元格或整行草稿；行内会话保持开启，失效或 NULL 返回 0。

### hiyui_table_editor_cancel

```c
HIYUI_API int HIYUI_CALL hiyui_table_editor_cancel(const hiyui_table_editor_t *editor)
```

丢弃单元格或整行草稿；行内会话不回滚已回写值，失效或 NULL 返回 0。

### hiyui_table_set_column_groups

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_column_groups(hiyui_widget_t *t, const hiyui_table_column_group_t *groups, int count)
```

多级表头分组

### hiyui_table_toggle_expanded_content

```c
HIYUI_API void HIYUI_CALL hiyui_table_toggle_expanded_content(hiyui_widget_t *t, int flat_row_idx)
```

展开/收起行内嵌内容

### hiyui_table_row_count

```c
HIYUI_API int HIYUI_CALL hiyui_table_row_count(hiyui_widget_t *t)
```

总行数

### hiyui_table_get_selected_row_indices

```c
HIYUI_API int HIYUI_CALL hiyui_table_get_selected_row_indices(hiyui_widget_t *t, int *out, int max_count)
```

取选中行原始索引，返回总数，至多填入 max_count 个

### hiyui_table_on_row_click

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_row_click(hiyui_widget_t *t, void(HIYUI_CALL *cb)(int row_idx, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

行点击回调

### hiyui_table_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_change(hiyui_widget_t *widget, void(HIYUI_CALL *cb)(const int *, int, void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

选择变化回调，indices 仅在回调内有效

### hiyui_table_on_sort_change

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_sort_change(hiyui_widget_t *t, void(HIYUI_CALL *cb)(const char *data_index, hiyui_sort_direction_t dir, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

排序变化回调

### hiyui_table_on_cell_edit

```c
HIYUI_API int HIYUI_CALL hiyui_table_on_cell_edit(hiyui_widget_t *t, void(HIYUI_CALL *cb)(int row, int col, const char *old_val, const char *new_val, void *ud), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

单元格编辑回调，old_val/new_val 仅在回调内有效

### hiyui_table_set_part

```c
HIYUI_API void HIYUI_CALL hiyui_table_set_part(hiyui_widget_t *t, hiyui_table_part_t part, const hiyui_part_styles_t *styles, hiyui_part_event_fn on_activate, void *ud, hiyui_destroy_fn destroy)
```

覆盖 Table 部件样式并绑定默认行为前的激活回调。 styles 为 NULL 仅绑定回调；on_activate 为 NULL 时立即释放 user_data。
