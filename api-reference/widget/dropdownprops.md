---
title: "DropdownProps"
---

# DropdownProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/dropdown.h>`

**命名空间：** `hiyui`

下拉选择创建属性

## 公开成员

### selectedIndex

```cpp
int selectedIndex
```

初始选中索引

### placeholder

```cpp
const char * placeholder
```

空选提示文本

### width

```cpp
int width
```

下拉框宽度

### height

```cpp
int height
```

下拉框高度，HIYUI_AUTO = 自适应

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### textColor

```cpp
uint32_t textColor
```

文字颜色，HIYUI_DEFAULT = 跟随主题

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### radius

```cpp
uint32_t radius
```

圆角半径，HIYUI_DEFAULT = 跟随主题

### maxHeight

```cpp
int maxHeight
```

下拉列表最大高度，单位主题逻辑像素，小于等于 0 不限制

### arrowSide

```cpp
ArrowSide arrowSide
```

箭头位置

### align

```cpp
DropdownAlign align
```

文字对齐方式

### itemHeight

```cpp
int itemHeight
```

列表项高度

### popupMode

```cpp
PopupMode popupMode
```

弹出模式，Window 在无浮窗能力或创建失败时回退内嵌

### searchable

```cpp
bool searchable
```

搜索过滤开关，默认关闭；可编辑模式输入即过滤，不可编辑模式在弹出列表顶部显示搜索框

### editable

```cpp
bool editable
```

可编辑模式，闭合态可直接输入自由文本
