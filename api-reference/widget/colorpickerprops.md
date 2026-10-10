---
title: "ColorPickerProps"
---

# ColorPickerProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/color_picker.h>`

**命名空间：** `hiyui`

颜色选择器创建属性

## 公开成员

### color

```cpp
uint32_t color
```

初始颜色 0xRRGGBB

### size

```cpp
ColorPickerSize size
```

指示器尺寸

### panelMode

```cpp
bool panelMode
```

面板内嵌模式

### extended

```cpp
bool extended
```

扩展面板，同时显示 RGB/HSL/HSV 全通道输入

### showAlpha

```cpp
bool showAlpha
```

显示 Alpha 通道

### alpha

```cpp
uint8_t alpha
```

初始 Alpha 值

### presentation

```cpp
PickerPresentation presentation
```

面板呈现方式，panelMode 时忽略

### bg

```cpp
uint32_t bg
```

背景色

### radius

```cpp
uint32_t radius
```

圆角
