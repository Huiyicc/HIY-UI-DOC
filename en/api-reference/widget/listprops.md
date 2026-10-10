---
title: "ListProps"
---

# ListProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/list.h>`

**Namespace:** `hiyui`

List creation properties

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

### itemHeight

```cpp
int itemHeight
```

Height of each item

### maxHeight

```cpp
int maxHeight
```

Maximum height, effective when height=HIYUI_AUTO

### selectedIndex

```cpp
int selectedIndex
```

Initial selected index, -1 = no selection

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme

### hoverBg

```cpp
uint32_t hoverBg
```

Hover background color, HIYUI_DEFAULT = computed automatically

### selectedBg

```cpp
uint32_t selectedBg
```

Selected item background color, HIYUI_DEFAULT = follow theme Primary

### textColor

```cpp
uint32_t textColor
```

Text color, HIYUI_DEFAULT = follow theme

### selectedTextColor

```cpp
uint32_t selectedTextColor
```

Selected item text color, HIYUI_DEFAULT = white

### fontSize

```cpp
int fontSize
```

Font size, 0 = use the theme default

### radius

```cpp
uint32_t radius
```

Corner radius, HIYUI_DEFAULT = follow theme

### padding

```cpp
int padding
```

Padding
