---
title: "MenuState"
---

# MenuState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/menu.h>`

**Namespace:** `hiyui`

## Public Members

### nodes

```cpp
std::vector< MenuItemNode > nodes
```

Flat list of all nodes.

### selectedLeafIdx

```cpp
int selectedLeafIdx
```

Current selected leaf index.

### hoveredNodeIdx

```cpp
int hoveredNodeIdx
```

Current hovered node index.

### indicatorTargetNodeIdx

```cpp
int indicatorTargetNodeIdx
```

Target node index the indicator follows.

### props

```cpp
MenuProps props
```

Original configuration in logical values; physical sizes are recomputed from it on DPI changes.

### iconFillOnSelected

```cpp
bool iconFillOnSelected
```

Icon fill becomes 1 when selected.

### menuObj

```cpp
lv_obj_t * menuObj
```

Menu container pointer.

### mode

```cpp
MenuMode mode
```

Current display mode.

### expandedWidth

```cpp
int expandedWidth
```

Wide mode width, cached props_.width.

### collapsedWidth

```cpp
int collapsedWidth
```

Narrow mode width, NarrowIcon.

### narrowIconTextWidth

```cpp
int narrowIconTextWidth
```

NarrowIconText mode width.

### showToggleBtn

```cpp
bool showToggleBtn
```

Whether to show the toggle button.

### toggleBtnPos

```cpp
ToggleBtnPos toggleBtnPos
```

Toggle button position.

### toggleBtnObj

```cpp
lv_obj_t * toggleBtnObj
```

Toggle button row object.

### toggleIconObj

```cpp
lv_obj_t * toggleIconObj
```

Toggle button arrow icon.

### toggleDivider

```cpp
lv_obj_t * toggleDivider
```

Separator line above the toggle button.

### widthAnim

```cpp
lv_anim_t widthAnim
```

Width transition animation.

### currentWidth

```cpp
int currentWidth
```

Current width during the animation.

### hoverPopup

```cpp
lv_obj_t * hoverPopup
```

Current hover popup panel.

### hoverPopupNodeIdx

```cpp
int hoverPopupNodeIdx
```

Node index associated with the popup panel.
