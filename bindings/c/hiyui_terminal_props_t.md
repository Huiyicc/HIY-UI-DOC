---
title: "hiyui_terminal_props_t"
---

# hiyui_terminal_props_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/terminal.h>`

终端属性；NULL 使用 C++ 默认值，显式结构体的 scrollback_lines 可为零，颜色零值跟随主题。

## 公开成员

### width

```c
int width
```

### height

```c
int height
```

### font_size

```c
int font_size
```

### scrollback_lines

```c
int scrollback_lines
```

### bg

```c
uint32_t bg
```

### text_color

```c
uint32_t text_color
```

### animated

```c
hiyui_bool_t animated
```

### read_only

```c
hiyui_bool_t read_only
```
