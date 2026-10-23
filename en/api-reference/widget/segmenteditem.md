---
title: "SegmentedItem"
---

# SegmentedItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/segmented.h>`

**Namespace:** `hiyui`

Segmented control item data

## Public Members

### text

```cpp
const char * text
```

Display text, UTF-8 encoded

### tooltip

```cpp
const char * tooltip
```

Tooltip text, UTF-8 encoded

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

Icon style: fill/weight/grade/opticalSize

### disabled

```cpp
bool disabled
```

Whether the item is disabled

### data

```cpp
int data
```

User data bound to the item, read via itemData()
