---
title: "hiyui_win_background_t"
---

# hiyui_win_background_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/app.h>`

窗口背景，零初始化等于主题底色。 image.src 支持文件路径；blur 仅在设置了 image.src 时生效，blur_radius 为 0 显示原图。overlay 为 0xRRGGBB，0 表示不遮色。

## 公开成员

### image

```c
hiyui_bg_image_t image
```

### blur

```c
hiyui_backdrop_t blur
```

### overlay

```c
uint32_t overlay
```

### mode

```c
hiyui_win_background_mode_t mode
```
