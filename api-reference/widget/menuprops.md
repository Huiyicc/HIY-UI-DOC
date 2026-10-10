---
title: "MenuProps"
---

# MenuProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/menu.h>`

**命名空间：** `hiyui`

菜单创建属性

## 公开成员

### width

```cpp
int width
```

菜单宽度

### height

```cpp
int height
```

菜单高度，HIYUI_AUTO = 自适应

### itemHeight

```cpp
int itemHeight
```

每项高度

### selectedIndex

```cpp
int selectedIndex
```

初始选中叶节点索引

### indentPerLevel

```cpp
int indentPerLevel
```

每级子菜单缩进量

### accordion

```cpp
bool accordion
```

手风琴模式，展开时折叠同级其他项

### iconFillOnSelected

```cpp
bool iconFillOnSelected
```

选中时图标 fill 从 0 变为 1

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### activeColor

```cpp
uint32_t activeColor
```

选中指示器背景色

### activeTextColor

```cpp
uint32_t activeTextColor
```

选中项文字色

### hoverColor

```cpp
uint32_t hoverColor
```

悬停高亮色

### textColor

```cpp
uint32_t textColor
```

未选中项文字色

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### iconSize

```cpp
int iconSize
```

图标大小

### padding

```cpp
int padding
```

内边距

### mode

```cpp
MenuMode mode
```

初始显示模式

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

是否显示折叠/展开切换按钮

### toggleBtnPos

```cpp
ToggleBtnPos toggleBtnPos
```

切换按钮位置

### toggleIcon

```cpp
uint32_t toggleIcon
```

切换按钮图标码点，0=默认箭头
