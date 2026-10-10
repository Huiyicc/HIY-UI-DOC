---
title: "TabItem"
---

# TabItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs.h>`

**Namespace:** `hiyui`

Tab item configuration

## Public Members

### text

```cpp
const char * text
```

Tab text

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Icon codepoint

### iconSrc

```cpp
const void * iconSrc
```

Image source

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style, fill/weight/grade/opticalSize

### data

```cpp
int data
```

User data bound to this item, read by itemData()
