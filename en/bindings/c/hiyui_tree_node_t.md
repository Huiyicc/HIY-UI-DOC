---
title: "hiyui_tree_node_t"
---

# hiyui_tree_node_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/tree.h>`

## Public Members

### id

```c
uint32_t id
```

### text

```c
const char * text
```

### icon_codepoint

```c
uint32_t icon_codepoint
```

### expanded

```c
hiyui_bool_t expanded
```

### checked

```c
hiyui_bool_t checked
```

### disabled

```c
hiyui_bool_t disabled
```

### checkable

```c
hiyui_bool_t checkable
```

### user_data

```c
void * user_data
```

### children

```c
const struct hiyui_tree_node_t * children
```

### child_count

```c
int child_count
```

### lazy_load_ud

```c
void * lazy_load_ud
```

### localized_text

```c
const hiyui_localized_text_t * localized_text
```

The translation description is copied when called and overrides the plain text; a null or invalid description falls back to the plain text.

## Public Methods

### void

```c
void(HIYUI_CALL *lazy_load)(uint32_t id
```
