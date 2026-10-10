---
title: "SlotContent"
---

# SlotContent <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/slot_content.h>`

**Namespace:** `hiyui`

Widget content slot description

When iconCodepoint is nonzero, the font icon is used; otherwise iconSrc is used.

## Public Members

### text

```cpp
const char * text
```

Text content

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols codepoint

### iconSrc

```cpp
const void * iconSrc
```

Image source. File path or lv_image_dsc_t*

### iconSize

```cpp
uint32_t iconSize
```

Icon size. 0 = follow the widget default

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style. fill/weight/grade/opticalSize

### iconColor

```cpp
uint32_t iconColor
```

Icon color. HIYUI_DEFAULT = follow the parent text color
