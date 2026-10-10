---
title: "TabsExProps"
---

# TabsExProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs_ex.h>`

**Namespace:** `hiyui`

Session tab card creation properties.

## Public Members

### activeIndex

```cpp
int activeIndex
```

Initial active tab index.

### width

```cpp
int width
```

Width, HIYUI_AUTO = fill the parent container.

### height

```cpp
int height
```

Container height in theme logical pixels.

### fontSize

```cpp
int fontSize
```

Title font size, 0 = use the theme default font.

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme.

### activeBg

```cpp
uint32_t activeBg
```

Active background color, HIYUI_DEFAULT = follow theme.

### indicatorColor

```cpp
uint32_t indicatorColor
```

Indicator bar color, HIYUI_DEFAULT = use the theme Primary.

### indicatorSide

```cpp
TabIndicatorSide indicatorSide
```

Indicator bar position.

### animated

```cpp
bool animated
```

Whether the activation indicator and positioning scroll animations are enabled.
