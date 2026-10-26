---
title: "LottieProps"
---

# LottieProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/lottie.h>`

**命名空间：** `hiyui`

`Lottie` 动画创建属性

## 公开成员

### src

```cpp
const void * src
```

动画源，文件路径(const char*)或 JSON 数据，由 srcSize 区分

### srcSize

```cpp
uint32_t srcSize
```

大于 0 时 src 为 JSON 数据的字节数，等于 0 时 src 为 UTF-8 文件路径

### width

```cpp
int width
```

渲染宽度，主题逻辑像素，须大于 0

### height

```cpp
int height
```

渲染高度，主题逻辑像素，须大于 0

### autoplay

```cpp
bool autoplay
```

挂载后自动播放

### loop

```cpp
bool loop
```

无限循环播放

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
