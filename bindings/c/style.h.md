---
title: "style.h"
---

# style.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/style.h>`

C 版样式系统：Style / StyleSet / Border / Shadow / Gradient

## 枚举

### hiyui_shadow_side_t

| 值 | 说明 |
|---|---|
| `HIYUI_SHADOW_SIDE_NONE` = 0 |  |
| `HIYUI_SHADOW_SIDE_TOP` = 1 << 0 |  |
| `HIYUI_SHADOW_SIDE_RIGHT` = 1 << 1 |  |
| `HIYUI_SHADOW_SIDE_BOTTOM` = 1 << 2 |  |
| `HIYUI_SHADOW_SIDE_LEFT` = 1 << 3 |  |
| `HIYUI_SHADOW_SIDE_ALL` = HIYUI_SHADOW_SIDE_TOP \| HIYUI_SHADOW_SIDE_RIGHT \| HIYUI_SHADOW_SIDE_BOTTOM \| HIYUI_SHADOW_SIDE_LEFT |  |

阴影生效边缘位掩码。

### hiyui_shadow_placement_t

| 值 | 说明 |
|---|---|
| `HIYUI_SHADOW_PLACEMENT_OUTER` = 0 |  |
| `HIYUI_SHADOW_PLACEMENT_INSET` |  |

阴影相对组件边缘的位置。

### hiyui_grad_dir_t

| 值 | 说明 |
|---|---|
| `HIYUI_GRAD_DIR_NONE` = 0 |  |
| `HIYUI_GRAD_DIR_VERTICAL` |  |
| `HIYUI_GRAD_DIR_HORIZONTAL` |  |

### hiyui_bg_image_fit_t

| 值 | 说明 |
|---|---|
| `HIYUI_BG_IMAGE_FIT_NONE` = 0 |  |
| `HIYUI_BG_IMAGE_FIT_FILL` |  |
| `HIYUI_BG_IMAGE_FIT_CONTAIN` |  |
| `HIYUI_BG_IMAGE_FIT_COVER` |  |

## 函数

### hiyui_rgb

```c
static hiyui_rgba_t hiyui_rgb(uint32_t rgb)
```

Creates a color without an explicit alpha value.

### hiyui_rgba

```c
static hiyui_rgba_t hiyui_rgba(uint32_t rgb, uint8_t alpha)
```

Creates a color with an explicit alpha value.

### hiyui_style_spec_default

```c
HIYUI_API hiyui_style_spec_t HIYUI_CALL hiyui_style_spec_default(void)
```

### hiyui_style_spec_set_default

```c
HIYUI_API hiyui_style_spec_set_t HIYUI_CALL hiyui_style_spec_set_default(void)
```

### hiyui_style_default

```c
HIYUI_API hiyui_style_t HIYUI_CALL hiyui_style_default(void)
```

返回零初始化的 style

### hiyui_style_set_default

```c
HIYUI_API hiyui_style_set_t HIYUI_CALL hiyui_style_set_default(void)
```

返回零初始化的 style_set
