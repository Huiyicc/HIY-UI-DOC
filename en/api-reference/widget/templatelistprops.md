---
title: "TemplateListProps"
---

# TemplateListProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/template_list.h>`

**Namespace:** `hiyui`

TemplateList creation properties.

## Public Members

### width

```cpp
int width
```

List width

### height

```cpp
int height
```

List height, HIYUI_AUTO = fit content

### maxHeight

```cpp
int maxHeight
```

Maximum height, effective when height=HIYUI_AUTO, 0 = unlimited

### padding

```cpp
int padding
```

Container padding

### gap

```cpp
int gap
```

Item spacing, used as vertical spacing in List mode

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme Surface

### radius

```cpp
uint32_t radius
```

Corner radius, HIYUI_DEFAULT = follow theme

### selectedIndex

```cpp
int selectedIndex
```

Initial selected index, -1 = no selection

### columnCount

```cpp
int columnCount
```

Fixed column count in Grid mode, &lt;=0 means adaptive

### minItemWidth

```cpp
int minItemWidth
```

Adaptive minimum column width in Grid mode

### rowGap

```cpp
int rowGap
```

Grid mode vertical spacing, HIYUI_NONE_INT = reuse gap

### columnGap

```cpp
int columnGap
```

Grid mode horizontal spacing, HIYUI_NONE_INT = reuse gap
