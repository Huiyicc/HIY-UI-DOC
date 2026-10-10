---
title: "hiyui_context_menu_item_t"
---

# hiyui_context_menu_item_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/context_menu.h>`

递归嵌套的菜单项；shortcut 为 NULL 且 accelerator 已绑定时自动生成提示文本。 action_ex 优先于 action，action_ud 透传给 action_ex。

## 公开成员

### text

```c
const char * text
```

### shortcut

```c
const char * shortcut
```

### icon_codepoint

```c
uint32_t icon_codepoint
```

### icon_src

```c
const void * icon_src
```

### separator

```c
hiyui_bool_t separator
```

### disabled

```c
hiyui_bool_t disabled
```

### children

```c
const struct hiyui_context_menu_item_t * children
```

### child_count

```c
int child_count
```

### action

```c
void(* action
```

### icon_style

```c
hiyui_font_icon_style_t icon_style
```

### accelerator

```c
hiyui_hotkey_t accelerator
```

### action_ex

```c
void(* action_ex
```

### action_ud

```c
void * action_ud
```
