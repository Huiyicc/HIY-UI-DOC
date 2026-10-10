---
title: "hiyui_context_menu_item_t"
---

# hiyui_context_menu_item_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/context_menu.h>`

Recursively nested menu items. When shortcut is NULL and accelerator is bound, a hint text is generated automatically. action_ex takes precedence over action, and action_ud is passed to action_ex.

## Public Members

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
