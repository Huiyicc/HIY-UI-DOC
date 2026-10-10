---
title: "hiyui_menu_bar_item_t"
---

# hiyui_menu_bar_item_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/nav.h>`

A top-level menu bar item and its drop-down items.

## Public Members

### text

```c
const char * text
```

### icon_codepoint

```c
uint32_t icon_codepoint
```

### disabled

```c
hiyui_bool_t disabled
```

### children

```c
const hiyui_context_menu_item_t * children
```

### child_count

```c
int child_count
```

### localized_text

```c
const hiyui_localized_text_t * localized_text
```

Copies the translation description on call and overrides the plain text. Null or invalid descriptions use the plain text.

### icon_style

```c
hiyui_font_icon_style_t icon_style
```
