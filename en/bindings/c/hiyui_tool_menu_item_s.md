---
title: "hiyui_tool_menu_item_s"
---

# hiyui_tool_menu_item_s <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/tool_bar.h>`

Menu input is copied recursively during the set_menu call; non-separator ids are non-zero and unique across the whole menu.

## Public Members

### id

```c
int id
```

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

### enabled

```c
hiyui_bool_t enabled
```

### visible

```c
hiyui_bool_t visible
```

### separator

```c
hiyui_bool_t separator
```

### children

```c
const struct hiyui_tool_menu_item_s * children
```

### child_count

```c
size_t child_count
```
