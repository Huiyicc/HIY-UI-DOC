---
title: "hiyui_context_menu_item_t"
---

# hiyui_context_menu_item_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/context_menu.h>`

Recursively nested menu item; the shortcut text is generated automatically when shortcut is NULL and an accelerator is bound. action_ex takes precedence over action, and action_ud is passed to action_ex.

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

### icon_style

```c
hiyui_font_icon_style_t icon_style
```

### accelerator

```c
hiyui_hotkey_t accelerator
```

### user_data

```c
void * user_data
```

### action_ud

```c
void * action_ud
```

## Public Methods

### void

```c
void(HIYUI_CALL *action)(hiyui_widget_t *owner)
```

### void

```c
void(HIYUI_CALL *action_ex)(hiyui_widget_t *owner
```
