---
title: "hiyui_table_column_group_t"
---

# hiyui_table_column_group_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/table.h>`

## Public Members

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

Copies the translation description at call time and overrides the plain text; a null or invalid description falls back to the plain text.
