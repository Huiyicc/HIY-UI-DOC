---
title: "SegmentedProps"
---

# SegmentedProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/segmented.h>`

**命名空间：** `hiyui`

分段选择器创建属性

## 公开成员

### selectedIndex

```cpp
int selectedIndex
```

初始选中索引

### size

```cpp
SegmentedSize size
```

尺寸预设

### display

```cpp
SegmentedDisplay display
```

内容形态

### width

```cpp
int width
```

宽度，HIYUI_AUTO = fillWidth

### height

```cpp
int height
```

高度，HIYUI_AUTO = 由 size 决定

### activeColor

```cpp
uint32_t activeColor
```

选中项文字色

### activeBg

```cpp
uint32_t activeBg
```

选中项滑块背景色

### bg

```cpp
uint32_t bg
```

整体背景色

### textColor

```cpp
uint32_t textColor
```

未选中项文字色

### fontSize

```cpp
int fontSize
```

字体大小，0 = 由 size 决定

### radius

```cpp
int radius
```

圆角，HIYUI_NONE_INT = 由 size 决定

### animated

```cpp
bool animated
```

滑块切换动画，与主题全局开关 AND
