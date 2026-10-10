---
title: "ImageProps"
---

# ImageProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/image.h>`

**命名空间：** `hiyui`

图片组件创建属性

## 公开成员

### src

```cpp
const void * src
```

图片源，文件路径(const char*) 或 lv_image_dsc_t*

### width

```cpp
int width
```

显示宽度，HIYUI_AUTO = 图片原始宽度

### height

```cpp
int height
```

显示高度，HIYUI_AUTO = 图片原始高度

### fit

```cpp
ImageFit fit
```

缩放/对齐模式

### opacity

```cpp
uint8_t opacity
```

透明度 [0,255]，255 = 不透明

### recolor

```cpp
uint32_t recolor
```

重着色颜色，HIYUI_NONE = 不重着色

### recolorOpa

```cpp
uint8_t recolorOpa
```

重着色强度 [0,255]

### gif

```cpp
bool gif
```

GIF 动画模式，true = 使用 lv_gif widget
