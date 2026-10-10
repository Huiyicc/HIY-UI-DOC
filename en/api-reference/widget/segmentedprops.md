---
title: "SegmentedProps"
---

# SegmentedProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/segmented.h>`

**Namespace:** `hiyui`

Segmented control creation properties

## Public Members

### selectedIndex

```cpp
int selectedIndex
```

Initial selected index

### size

```cpp
SegmentedSize size
```

Size preset

### width

```cpp
int width
```

Width; HIYUI_AUTO = fillWidth

### height

```cpp
int height
```

Height; HIYUI_AUTO = determined by size

### activeColor

```cpp
uint32_t activeColor
```

Selected item text color

### activeBg

```cpp
uint32_t activeBg
```

Selected item thumb background color

### bg

```cpp
uint32_t bg
```

Overall background color

### textColor

```cpp
uint32_t textColor
```

Unselected item text color

### fontSize

```cpp
int fontSize
```

Font size; 0 = determined by size

### radius

```cpp
int radius
```

Corner radius; HIYUI_NONE_INT = determined by size

### animated

```cpp
bool animated
```

Thumb switch animation, ANDed with the global theme animation switch
