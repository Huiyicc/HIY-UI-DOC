---
title: "hiyui_table_column_group_t"
---

# hiyui_table_column_group_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/table.h>`

## 公开成员

### title

```c
const char * title
```

### column_indices

```c
const int * column_indices
```

### column_index_count

```c
int column_index_count
```

### localized_title

```c
const hiyui_localized_text_t * localized_title
```

调用时复制翻译描述并覆盖普通文字；空值或无效描述使用普通文字。
