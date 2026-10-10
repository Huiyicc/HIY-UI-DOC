---
title: "MenuState"
---

# MenuState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/menu.h>`

**命名空间：** `hiyui`

## 公开成员

### nodes

```cpp
std::vector< MenuItemNode > nodes
```

所有节点的扁平列表

### selectedLeafIdx

```cpp
int selectedLeafIdx
```

当前选中叶节点索引

### hoveredNodeIdx

```cpp
int hoveredNodeIdx
```

当前悬停节点索引

### indicatorTargetNodeIdx

```cpp
int indicatorTargetNodeIdx
```

指示器跟随的目标节点索引

### props

```cpp
MenuProps props
```

原始配置，逻辑值，DPI 变更时据此重算物理尺寸

### iconFillOnSelected

```cpp
bool iconFillOnSelected
```

选中时图标 fill 变为 1

### menuObj

```cpp
lv_obj_t * menuObj
```

菜单容器指针

### mode

```cpp
MenuMode mode
```

当前显示模式

### expandedWidth

```cpp
int expandedWidth
```

宽模式宽度，缓存 props_.width

### collapsedWidth

```cpp
int collapsedWidth
```

窄模式宽度，NarrowIcon

### narrowIconTextWidth

```cpp
int narrowIconTextWidth
```

中模式宽度，NarrowIconText

### showToggleBtn

```cpp
bool showToggleBtn
```

是否显示切换按钮

### toggleBtnPos

```cpp
ToggleBtnPos toggleBtnPos
```

切换按钮位置

### toggleBtnObj

```cpp
lv_obj_t * toggleBtnObj
```

切换按钮行对象

### toggleIconObj

```cpp
lv_obj_t * toggleIconObj
```

切换按钮箭头图标

### toggleDivider

```cpp
lv_obj_t * toggleDivider
```

切换按钮上方分隔线

### widthAnim

```cpp
lv_anim_t widthAnim
```

宽度过渡动画

### currentWidth

```cpp
int currentWidth
```

动画中的当前宽度

### hoverPopup

```cpp
lv_obj_t * hoverPopup
```

当前悬停弹出面板

### hoverPopupNodeIdx

```cpp
int hoverPopupNodeIdx
```

弹出面板关联的节点索引
