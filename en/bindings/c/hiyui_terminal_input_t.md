---
title: "hiyui_terminal_input_t"
---

# hiyui_terminal_input_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/terminal.h>`

Raw input; text may be NULL and the bytes are valid only during the call or callback.

## Public Members

### type

```c
hiyui_terminal_input_type_t type
```

### key

```c
hiyui_terminal_key_t key
```

### character

```c
uint32_t character
```

### modifiers

```c
uint8_t modifiers
```

Shift is 1, Alt is 2, Ctrl is 4.

### text

```c
const char * text
```

### text_size

```c
size_t text_size
```

### row

```c
int row
```

### column

```c
int column
```

### button

```c
int button
```

### pressed

```c
hiyui_bool_t pressed
```
