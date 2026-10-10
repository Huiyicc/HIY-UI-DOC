---
title: "TabsState"
---

# TabsState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs.h>`

**Namespace:** `hiyui`

Runtime state of the tabs component; its lifetime follows the LVGL object

## Public Members

### indicatorLine

```cpp
lv_obj_t * indicatorLine
```

Bottom indicator line, cigar shaped

### hoverLine

```cpp
lv_obj_t * hoverLine
```

Hover indicator line with low contrast

### animX

```cpp
lv_anim_t animX
```

Indicator X position animation

### animW

```cpp
lv_anim_t animW
```

Indicator width animation

### indicatorX

```cpp
int indicatorX
```

Current indicator X

### indicatorWidth

```cpp
int indicatorWidth
```

Current indicator width

### indicatorY

```cpp
int indicatorY
```

Current indicator Y for a vertical tab bar

### indicatorHeight

```cpp
int indicatorHeight
```

Current indicator height for a vertical tab bar

### activeIdx

```cpp
int activeIdx
```

Current active tab index

### itemDataList

```cpp
std::vector< int > itemDataList
```

User data bound to each tab

### tabBar

```cpp
lv_obj_t * tabBar
```

Tab bar object reference

### tabView

```cpp
lv_obj_t * tabView
```

tabview object reference

### pressedBtnIdx

```cpp
int pressedBtnIdx
```

Index of the tab being pressed; -1 = none

### stretching

```cpp
bool stretching
```

Whether the indicator line is stretched

### activeCol

```cpp
uint32_t activeCol
```

Resolved active color

### inactiveCol

```cpp
uint32_t inactiveCol
```

Resolved inactive color

### pos

```cpp
TabPosition pos
```

Current tab bar position

### leftArrow

```cpp
lv_obj_t * leftArrow
```

Left overflow scroll arrow

### rightArrow

```cpp
lv_obj_t * rightArrow
```

Right overflow scroll arrow

### leftArrowIcon

```cpp
lv_obj_t * leftArrowIcon
```

Left arrow icon object

### rightArrowIcon

```cpp
lv_obj_t * rightArrowIcon
```

Right arrow icon object

### scrollClip

```cpp
lv_obj_t * scrollClip
```

Clipping container

### overflowing

```cpp
bool overflowing
```

Whether the tab bar is overflowing

### destroying

```cpp
bool destroying
```

Destruction in progress; callbacks should skip handling

### scrollOffset

```cpp
int scrollOffset
```

Current scrollX offset

### animScroll

```cpp
lv_anim_t animScroll
```

Scroll animation instance

### initTimer

```cpp
lv_timer_t * initTimer
```

One-shot timer for initial positioning

### resizeTimer

```cpp
lv_timer_t * resizeTimer
```

One-shot timer for deferred positioning after resize
