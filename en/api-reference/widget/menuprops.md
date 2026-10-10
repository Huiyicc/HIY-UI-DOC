---
title: "MenuProps"
---

# MenuProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/menu.h>`

**Namespace:** `hiyui`

Menu creation properties

## Public Members

### width

```cpp
int width
```

Menu width

### height

```cpp
int height
```

Menu height, HIYUI_AUTO = fit content

### itemHeight

```cpp
int itemHeight
```

Height of each item

### selectedIndex

```cpp
int selectedIndex
```

Initial selected leaf index

### indentPerLevel

```cpp
int indentPerLevel
```

Indent per submenu level

### accordion

```cpp
bool accordion
```

Accordion mode, expanding an item collapses its siblings

### iconFillOnSelected

```cpp
bool iconFillOnSelected
```

Icon fill changes from 0 to 1 when selected

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme

### activeColor

```cpp
uint32_t activeColor
```

Selection indicator background color

### activeTextColor

```cpp
uint32_t activeTextColor
```

Selected item text color

### hoverColor

```cpp
uint32_t hoverColor
```

Hover highlight color

### textColor

```cpp
uint32_t textColor
```

Unselected item text color

### fontSize

```cpp
int fontSize
```

Font size, 0 = use the theme default

### iconSize

```cpp
int iconSize
```

Icon size

### padding

```cpp
int padding
```

Inner padding

### mode

```cpp
MenuMode mode
```

Initial display mode

### collapsedWidth

```cpp
int collapsedWidth
```

Narrow mode width, NarrowIcon

### narrowIconTextWidth

```cpp
int narrowIconTextWidth
```

Medium mode width, NarrowIconText

### showToggleBtn

```cpp
bool showToggleBtn
```

Whether to show the collapse/expand toggle button

### toggleBtnPos

```cpp
ToggleBtnPos toggleBtnPos
```

Toggle button position

### toggleIcon

```cpp
uint32_t toggleIcon
```

Toggle button icon codepoint, 0 = default arrow
