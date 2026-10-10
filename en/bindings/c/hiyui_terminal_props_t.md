---
title: "hiyui_terminal_props_t"
---

# hiyui_terminal_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/terminal.h>`

Terminal properties; NULL uses the C++ defaults, an explicit struct may set scrollback_lines to zero, and zero color values follow the theme.

## Public Members

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
