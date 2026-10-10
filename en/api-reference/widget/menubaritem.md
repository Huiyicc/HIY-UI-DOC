---
title: "MenuBarItem"
---

# MenuBarItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/menu_bar.h>`

**Namespace:** `hiyui`

Top-level menu item. children is the dropdown content

## Public Members

### text

```cpp
const char * text
```

Top-level item text

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Top-level item icon codepoint, 0 = no icon

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style

### disabled

```cpp
bool disabled
```

Disabled. Clicking does not open the dropdown

### children

```cpp
std::vector< ContextMenuItem > children
```

Dropdown menu items

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

When set it overrides the original text and updates on language switch. The description is copied when passed to the widget.
