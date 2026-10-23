---
title: "SegmentedItem"
---

# SegmentedItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/segmented.h>`

**命名空间：** `hiyui`

分段选择器单项数据

## 公开成员

### text

```cpp
const char * text
```

显示文本，UTF-8 编码

### tooltip

```cpp
const char * tooltip
```

悬浮提示文本，UTF-8 编码

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

图标码点

### iconSrc

```cpp
const void * iconSrc
```

图片源

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式，fill/weight/grade/opticalSize

### disabled

```cpp
bool disabled
```

是否禁用该项

### data

```cpp
int data
```

用户绑定数据，由 itemData() 读取
