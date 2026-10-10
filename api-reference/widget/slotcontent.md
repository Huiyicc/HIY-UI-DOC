---
title: "SlotContent"
---

# SlotContent <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/slot_content.h>`

**命名空间：** `hiyui`

组件内容插槽描述

iconCodepoint 非零时使用字体图标，否则使用 iconSrc。

## 公开成员

### text

```cpp
const char * text
```

文本内容

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols 码点

### iconSrc

```cpp
const void * iconSrc
```

图片源，文件路径或 lv_image_dsc_t*

### iconSize

```cpp
uint32_t iconSize
```

图标大小，0 = 跟随组件默认值

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式，fill/weight/grade/opticalSize

### iconColor

```cpp
uint32_t iconColor
```

图标颜色，HIYUI_DEFAULT = 跟随父容器文字色
