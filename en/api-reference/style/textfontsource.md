---
title: "TextFontSource"
---

# TextFontSource <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/text_font.h>`

**Namespace:** `hiyui`

Memory source for the application default body font.

## Public Members

### data

```cpp
const unsigned char * data
```

Font file bytes; when both this and size are empty, the system font is used.

### lineHeight

```cpp
float lineHeight
```

Font size multiplier, 0 uses the font original line height; valid multipliers are 0.5 to 4.
