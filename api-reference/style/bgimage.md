---
title: "BgImage"
---

# BgImage <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/style.h>`

**命名空间：** `hiyui`

背景图

## 公开成员

### src

```cpp
const void * src
```

图片源，文件路径(const char*) 或 lv_image_dsc_t*

### fit

```cpp
BgImageFit fit
```

缩放模式

### opacity

```cpp
uint8_t opacity
```

背景图透明度 [0,255]

### recolor

```cpp
RGBA recolor
```

重着色颜色

### recolorOpa

```cpp
uint8_t recolorOpa
```

重着色透明度 [0,255]

### tiled

```cpp
bool tiled
```

是否平铺
