---
title: "hiyui_win_background_t"
---

# hiyui_win_background_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/app.h>`

Window background. Zero initialization equals the theme base color. image.src accepts file paths. blur applies only when image.src is set. A blur_radius of 0 shows the original image. overlay is 0xRRGGBB; 0 applies no overlay.

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
