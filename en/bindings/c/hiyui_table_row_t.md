---
title: "hiyui_table_row_t"
---

# hiyui_table_row_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/table.h>`

## Public Members

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

### flat_row_idx

```c
int flat_row_idx
```

### user_data

```c
int void * user_data
```

### expanded_content_ud

```c
void * expanded_content_ud
```

## Public Methods

### int

```c
int(HIYUI_CALL *expanded_content)(hiyui_widget_t *parent
```
