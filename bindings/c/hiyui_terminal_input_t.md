---
title: "hiyui_terminal_input_t"
---

# hiyui_terminal_input_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/terminal.h>`

原始输入；text 可为 NULL，字节仅在调用或回调期间有效。

## 公开成员

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

Shift 为 1，Alt 为 2，Ctrl 为 4。

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
