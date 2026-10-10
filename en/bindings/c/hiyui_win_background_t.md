---
title: "hiyui_win_background_t"
---

# hiyui_win_background_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/app.h>`

Window background, zero initialization equals the theme base color. image.src supports file paths. blur takes effect only when image.src is set, and blur_radius 0 shows the original image. overlay is 0xRRGGBB, and 0 means no overlay color.

## Public Members

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
