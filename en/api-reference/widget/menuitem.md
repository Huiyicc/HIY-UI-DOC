---
title: "MenuItem"
---

# MenuItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/menu.h>`

**Namespace:** `hiyui`

Menu item configuration, supporting recursive submenus.

## Public Members

### text

```cpp
const char * text
```

Menu item text.

### iconSrc

```cpp
const void * iconSrc
```

Icon source, file path or lv_image_dsc_t*.

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols codepoint; overrides iconSrc when nonzero.

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style, fill/weight/grade/opticalSize.

### separator

```cpp
bool separator
```

Whether this item is a separator line.

### groupTag

```cpp
const char * groupTag
```

Group label above the separator line, valid only when separator=true.

### expanded

```cpp
bool expanded
```

Initial expanded state, valid only for parent items.

### data

```cpp
int data
```

User data, read by itemData().

### children

```cpp
std::vector< MenuItem > children
```

Submenu items; non-empty makes this an expandable parent item.
