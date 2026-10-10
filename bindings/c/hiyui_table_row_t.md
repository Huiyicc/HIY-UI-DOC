---
title: "hiyui_table_row_t"
---

# hiyui_table_row_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/table.h>`

## 公开成员

### cells

```c
const char *const  * cells
```

### cell_count

```c
int cell_count
```

### disabled

```c
hiyui_bool_t disabled
```

### user_data

```c
void * user_data
```

### spans

```c
const hiyui_cell_span_t * spans
```

### expanded

```c
hiyui_bool_t expanded
```

### children

```c
const struct hiyui_table_row_t * children
```

### child_count

```c
int child_count
```

### expanded_content

```c
int(* expanded_content
```

### expanded_content_ud

```c
void * expanded_content_ud
```
