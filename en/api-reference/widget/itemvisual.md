---
title: "ItemVisual"
---

# ItemVisual <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/item_template.h>`

**Namespace:** `hiyui`

Single-state visual definition of an item.

Unset fields do not override existing styles.

## Public Members

### bg

```cpp
ItemStateColor bg
```

Background color

### bgOpa

```cpp
uint8_t bgOpa
```

Background opacity [0,255]

### textColor

```cpp
ItemStateColor textColor
```

Text color, propagated to child labels

### radius

```cpp
int radius
```

Corner radius, HIYUI_NONE_INT = not set

### borderWidth

```cpp
int borderWidth
```

Border width

### borderColor

```cpp
ItemStateColor borderColor
```

Border color

### height

```cpp
int height
```

Row height, used for the selected expansion
