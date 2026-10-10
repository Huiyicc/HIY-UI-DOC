---
title: "Style"
---

# Style <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/style.h>`

**命名空间：** `hiyui`

统一样式结构，描述组件的全部视觉属性

绘制顺序为 BgImage、BgFill、Backdrop、Overlay 和内容。 未设置字段不覆盖已有样式。



**参见：** `StyleSet` 多状态样式集合


**参见：** `Theme`

## 前景

### color

```cpp
RGBA color
```

文字颜色

### fontSize

```cpp
int fontSize
```

字体大小，HIYUI_NONE_INT = 不设置

### lineHeight

```cpp
float lineHeight
```

字号倍率，点阵字体按原始行高计算；负值不设置，0 恢复原始行高，有效倍率为 0.5 至 4。

## 背景

### bgImage

```cpp
BgImage bgImage
```

背景图

### bgFill

```cpp
BgFill bgFill
```

背景色与渐变

### backdrop

```cpp
Backdrop backdrop
```

背景模糊

### overlay

```cpp
Overlay overlay
```

前景覆盖色

## 布局

### radius

```cpp
int radius
```

圆角半径，HIYUI_NONE_INT = 不设置

### padH

```cpp
int padH
```

水平内边距，HIYUI_NONE_INT = 不设置

### padV

```cpp
int padV
```

垂直内边距，HIYUI_NONE_INT = 不设置

### marginH

```cpp
int marginH
```

水平外边距，HIYUI_NONE_INT = 不设置

### marginV

```cpp
int marginV
```

垂直外边距，HIYUI_NONE_INT = 不设置

### opacity

```cpp
int opacity
```

整体透明度 [0,255]，HIYUI_NONE_INT = 不设置，影响组件及子元素

### transition

```cpp
int transition
```

过渡动画时长，单位毫秒，HIYUI_NONE_INT = 不设置，0 = 无动画

## 装饰

### border

```cpp
Border border
```

边框配置

### shadow

```cpp
Shadow shadow
```

阴影配置

## 公开方法

### with

```cpp
Style with(Style override) const
```

编译期样式合并，返回合并后的新 `Style`

将 override 中已设置的字段覆盖到当前 `Style` 上。 未设置标记：颜色类用 HIYUI_NONE，数值类用 HIYUI_NONE_INT，bgImage 用 src 为空，gradient 用 dir 为 None；其余值（含 0）均覆盖。 backdrop、bgImage、gradient、shadow 设置后整组替换， shadow 以 opacity 已设置或 color 带 alpha 通道为设置标记。



**返回值：** 合并后的新样式，不修改 this

### applyTo

```cpp
void applyTo(_lv_obj_t *obj) const
```

将样式应用到 LVGL 对象
