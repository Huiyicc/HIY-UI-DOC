---
title: "PropertyGridProps"
---

# PropertyGridProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/property_grid.h>`

**Namespace:** `hiyui`

Static configuration of the property grid; sizes use logical pixels.

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

HIYUI_AUTO fills the parent height; the parent must have a definite height.

### rowHeight

```cpp
int rowHeight
```

Logical height of one row, minimum 32. Narrow properties use two rows; groups keep one row.

### nameWidth

```cpp
int nameWidth
```

Name column logical width, automatically limited to the available content width.

### narrowWidth

```cpp
int narrowWidth
```

Below this content width the name and value split into two lines; 0 disables.
