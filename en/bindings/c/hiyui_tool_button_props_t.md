---
title: "hiyui_tool_button_props_t"
---

# hiyui_tool_button_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/tool_bar.h>`

Strings and image paths are copied at creation. The image descriptor is borrowed until the widget is destroyed.

## Public Members

### text

```c
const char * text
```

### icon_codepoint

```c
uint32_t icon_codepoint
```

### icon_src

```c
const void * icon_src
```

### icon_style

```c
hiyui_font_icon_style_t icon_style
```

### kind

```c
hiyui_tool_button_kind_t kind
```

### checked

```c
hiyui_tool_check_state_t checked
```

### radio_group

```c
uint32_t radio_group
```

### command_id

```c
int command_id
```

### overflow

```c
hiyui_tool_overflow_t overflow
```

### display

```c
hiyui_tool_display_t display
```

### width

```c
int width
```

### height

```c
int height
```

### icon_size

```c
int icon_size
```
