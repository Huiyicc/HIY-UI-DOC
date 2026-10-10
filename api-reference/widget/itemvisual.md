---
title: "ItemVisual"
---

# ItemVisual <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/item_template.h>`

**命名空间：** `hiyui`

Item 单状态视觉定义

未设置的字段不会覆盖已有样式。

## 公开成员

### bg

```cpp
ItemStateColor bg
```

背景色

### bgOpa

```cpp
uint8_t bgOpa
```

背景透明度 [0,255]

### textColor

```cpp
ItemStateColor textColor
```

文字色，传播到子 label

### radius

```cpp
int radius
```

圆角，HIYUI_NONE_INT = 不设置

### borderWidth

```cpp
int borderWidth
```

边框宽度

### borderColor

```cpp
ItemStateColor borderColor
```

边框颜色

### height

```cpp
int height
```

行高，用于选中扩展
