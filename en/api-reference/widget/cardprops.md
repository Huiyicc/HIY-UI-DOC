---
title: "CardProps"
---

# CardProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/card.h>`

**Namespace:** `hiyui`

Card creation properties

## Public Members

### title

```cpp
const char * title
```

Card title. nullptr = no title

### width

```cpp
int width
```

Width. HIYUI_AUTO = fit content

### height

```cpp
int height
```

Height. HIYUI_AUTO = fit content

### padding

```cpp
int padding
```

Inner padding

### gap

```cpp
int gap
```

Gap between children

### margin

```cpp
int margin
```

Outer margin of the container within its parent layout

### bg

```cpp
uint32_t bg
```

Background color. HIYUI_DEFAULT = follow theme Surface

### radius

```cpp
uint32_t radius
```

Corner radius. HIYUI_DEFAULT = follow theme

### shadow

```cpp
bool shadow
```

Whether to show a shadow

### titleColor

```cpp
uint32_t titleColor
```

Title color. HIYUI_DEFAULT = follow theme

### titleFontSize

```cpp
int titleFontSize
```

Title font size. 0 = use the theme default
