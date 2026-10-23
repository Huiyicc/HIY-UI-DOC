---
title: "PropertyGridProps"
---

# PropertyGridProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_grid.h>`

**Namespace:** `hiyui`

Static configuration of the property grid, sizes use logical pixels.

## Public Members

### width

```cpp
int width
```

HIYUI_AUTO fills the parent width.

### height

```cpp
int height
```

HIYUI_AUTO fills the parent height, the parent must have a definite height.

### rowHeight

```cpp
int rowHeight
```

Logical height of one row, minimum 32, narrow-screen properties use two rows while groups keep one.

### nameWidth

```cpp
int nameWidth
```

Logical width of the name column, automatically limited to the available content width.

### narrowWidth

```cpp
int narrowWidth
```

Name and value split into two lines below this content width, 0 disables.

### headerBg

```cpp
uint32_t headerBg
```

Header background; HIYUI_DEFAULT follows the theme.

### groupBg

```cpp
uint32_t groupBg
```

Group row background; HIYUI_DEFAULT follows the theme.

### selectedBg

```cpp
uint32_t selectedBg
```

Selected row background; HIYUI_DEFAULT follows the theme.

### hoverBg

```cpp
uint32_t hoverBg
```

Row and action control hover background; HIYUI_DEFAULT follows the theme.

### pressedBg

```cpp
uint32_t pressedBg
```

Row and action control pressed background; HIYUI_DEFAULT follows the theme.

### borderColor

```cpp
uint32_t borderColor
```

Border and divider color; HIYUI_DEFAULT follows the theme.

### secondaryTextColor

```cpp
uint32_t secondaryTextColor
```

Description, read-only value, and disabled action text; HIYUI_DEFAULT follows the theme.
