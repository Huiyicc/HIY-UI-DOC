---
title: "style.h"
---

# style.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/style.h>`

C style system: Style / StyleSet / Border / Shadow / Gradient.

## Enums

### hiyui_shadow_side_t

| Value | Description |
|---|---|
| `HIYUI_SHADOW_SIDE_NONE` = 0 |  |
| `HIYUI_SHADOW_SIDE_TOP` = 1 << 0 |  |
| `HIYUI_SHADOW_SIDE_RIGHT` = 1 << 1 |  |
| `HIYUI_SHADOW_SIDE_BOTTOM` = 1 << 2 |  |
| `HIYUI_SHADOW_SIDE_LEFT` = 1 << 3 |  |
| `HIYUI_SHADOW_SIDE_ALL` = HIYUI_SHADOW_SIDE_TOP \| HIYUI_SHADOW_SIDE_RIGHT \| HIYUI_SHADOW_SIDE_BOTTOM \| HIYUI_SHADOW_SIDE_LEFT |  |

Bitmask of edges where the shadow applies.

### hiyui_shadow_placement_t

| Value | Description |
|---|---|
| `HIYUI_SHADOW_PLACEMENT_OUTER` = 0 |  |
| `HIYUI_SHADOW_PLACEMENT_INSET` |  |

Shadow position relative to the widget edges.

### hiyui_grad_dir_t

| Value | Description |
|---|---|
| `HIYUI_GRAD_DIR_NONE` = 0 |  |
| `HIYUI_GRAD_DIR_VERTICAL` |  |
| `HIYUI_GRAD_DIR_HORIZONTAL` |  |

### hiyui_bg_image_fit_t

| Value | Description |
|---|---|
| `HIYUI_BG_IMAGE_FIT_NONE` = 0 |  |
| `HIYUI_BG_IMAGE_FIT_FILL` |  |
| `HIYUI_BG_IMAGE_FIT_CONTAIN` |  |
| `HIYUI_BG_IMAGE_FIT_COVER` |  |

## Functions

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

Returns a zero-initialized style.

### hiyui_style_set_default

```c
HIYUI_API hiyui_style_set_t HIYUI_CALL hiyui_style_set_default(void)
```

Returns a zero-initialized style_set.
