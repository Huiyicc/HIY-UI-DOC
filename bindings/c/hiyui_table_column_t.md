---
title: "hiyui_table_column_t"
---

# hiyui_table_column_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/table.h>`

## 公开成员

### title

```c
const char * title
```

### data_index

```c
const char * data_index
```

### width

```c
int width
```

### min_width

```c
int min_width
```

### ellipsis

```c
hiyui_bool_t ellipsis
```

### icon_codepoint

```c
uint32_t icon_codepoint
```

### fixed

```c
hiyui_column_fixed_t fixed
```

### sortable

```c
hiyui_bool_t sortable
```

### default_sort_order

```c
hiyui_sort_direction_t default_sort_order
```

### sorter

```c
int(* sorter
```

### sorter_ud

```c
void * sorter_ud
```

### col_span

```c
int col_span
```

### editor_type

```c
hiyui_cell_editor_type_t editor_type
```

### dropdown_options

```c
const char *const  * dropdown_options
```

### dropdown_option_count

```c
int dropdown_option_count
```

### resizable

```c
hiyui_bool_t resizable
```

### editor_factory

```c
hiyui_table_editor_factory_fn editor_factory
```

### editor_factory_ud

```c
void * editor_factory_ud
```

### editor_factory_destroy

```c
hiyui_destroy_fn editor_factory_destroy
```

### custom_render

```c
void(* custom_render
```

### custom_render_ud

```c
void * custom_render_ud
```

### localized_title

```c
const hiyui_localized_text_t * localized_title
```

调用时复制翻译描述并覆盖普通文字；空值或无效描述使用普通文字。
