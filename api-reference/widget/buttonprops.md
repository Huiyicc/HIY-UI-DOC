---
title: "ButtonProps"
---

# ButtonProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/button.h>`

**命名空间：** `hiyui`

按钮创建属性

## 公开成员

### text

```cpp
const char * text
```

按钮文本，UTF-8 编码

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

文字前图标码点

### iconSrc

```cpp
const void * iconSrc
```

文字前图片源

### iconSize

```cpp
uint32_t iconSize
```

图标大小，0 = 默认 18

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式，fill/weight/grade/opticalSize

### variant

```cpp
ButtonVariant variant
```

按钮变体

### width

```cpp
int width
```

宽度，HIYUI_AUTO = 自适应内容

### height

```cpp
int height
```

高度，HIYUI_AUTO = 自适应内容

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

### underline

```cpp
bool underline
```

文字下划线，仅 Link 变体生效，默认开

### normalSrc

```cpp
const void * normalSrc
```

正常状态底图，文件路径(const char*) 或 lv_image_dsc_t*，状态选择优先级为禁止&gt;按下&gt;点燃&gt;正常，设置任意状态底图后背景默认完全透明

### hoveredSrc

```cpp
const void * hoveredSrc
```

点燃(悬停)状态底图，指针悬停时进入，未设置时回退低优先级底图

### pressedSrc

```cpp
const void * pressedSrc
```

按下状态底图，未设置时回退低优先级底图

### disabledSrc

```cpp
const void * disabledSrc
```

禁止状态底图，未设置时回退低优先级底图

### fit

```cpp
ImageFit fit
```

底图缩放模式，尺寸被布局约束时生效
