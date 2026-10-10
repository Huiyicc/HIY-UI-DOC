---
title: "hiyui_style_t"
---

# hiyui_style_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/style.h>`

## 公开成员

### color

```c
uint32_t color
```

文字颜色 0xRRGGBB

### font_size

```c
int font_size
```

字体大小，0 = 主题默认

### bg_fill

```c
hiyui_bg_fill_t bg_fill
```

背景

### radius

```c
int radius
```

圆角

### pad_h

```c
int pad_h
```

水平内边距

### pad_v

```c
int pad_v
```

垂直内边距

### opacity

```c
uint8_t opacity
```

整体透明度 [0,255]

### border

```c
hiyui_border_t border
```

### shadow

```c
hiyui_shadow_t shadow
```

### transition_ms

```c
int transition_ms
```

过渡动画时长，0 = 无动画

### bg_image

```c
hiyui_bg_image_t bg_image
```

### backdrop

```c
hiyui_backdrop_t backdrop
```

### overlay

```c
uint32_t overlay
```

### overlay_alpha

```c
uint8_t overlay_alpha
```

overlay 透明度 [0,255]，0 = 不透明
