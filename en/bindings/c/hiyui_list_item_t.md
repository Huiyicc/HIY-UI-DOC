---
title: "hiyui_list_item_t"
---

# hiyui_list_item_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/item_list.h>`

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

### separator

```c
hiyui_bool_t separator
```

### localized_text

```c
const hiyui_localized_text_t * localized_text
```

The translation description is copied when called and overrides the plain text; a null or invalid description falls back to the plain text.
