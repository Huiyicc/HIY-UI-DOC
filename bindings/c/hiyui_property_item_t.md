---
title: "hiyui_property_item_t"
---

# hiyui_property_item_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/property_grid.h>`

使用 item_init 初始化；树必须无环且 ID 非零、全树唯一。 user_data 由调用方拥有，须存活至属性移除且相关回调结束。 has_default_value 为 TRUE 时复制 default_value，包括 EMPTY 默认值。 TUPLE 使用非空的标量叶子项序列，不支持嵌套 TUPLE 或空元组值；修改结构须 update 父属性。 TUPLE 的 EMPTY value 从子项汇总；显式元组值覆盖子项值。默认值同理，汇总要求每项均有默认值。 mixed 元组仍须提供符合各子项约束的代表值。 TUPLE 子项共享草稿、等待和冲突状态；提交、变更及状态回调使用父 ID 和完整元组。

## 公开成员

### id

```c
hiyui_property_id_t id
```

### name

```c
const char * name
```

### description

```c
const char * description
```

### kind

```c
hiyui_property_kind_t kind
```

### value

```c
hiyui_property_value_t value
```

### has_default_value

```c
hiyui_bool_t has_default_value
```

### default_value

```c
hiyui_property_value_t default_value
```

### constraints

```c
hiyui_property_constraints_t constraints
```

### options

```c
const hiyui_property_option_t * options
```

### option_count

```c
size_t option_count
```

### editor

```c
const char * editor
```

### children

```c
const struct hiyui_property_item_t * children
```

### child_count

```c
size_t child_count
```

### user_data

```c
void * user_data
```

### read_only

```c
hiyui_bool_t read_only
```

### enabled

```c
hiyui_bool_t enabled
```

### visible

```c
hiyui_bool_t visible
```

### expanded

```c
hiyui_bool_t expanded
```

### mixed

```c
hiyui_bool_t mixed
```

### modified

```c
hiyui_bool_t modified
```

### localized_name

```c
const hiyui_localized_text_t * localized_name
```

非 NULL 时复制描述并覆盖 name，用于显示、筛选和排序。

### localized_description

```c
const hiyui_localized_text_t * localized_description
```

非 NULL 时复制描述并覆盖 description，用于说明和筛选。
