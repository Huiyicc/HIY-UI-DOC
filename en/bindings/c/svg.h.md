---
title: "svg.h"
---

# svg.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/svg.h>`

SVG resource handles rasterized to bitmaps via lunasvg.

## Type Aliases

### hiyui_svg_t

```c
typedef struct hiyui_svg_s hiyui_svg_t
```

## Functions

### hiyui_svg_from_file

```c
HIYUI_API hiyui_svg_t *HIYUI_CALL hiyui_svg_from_file(const char *path, int w, int h, uint32_t tint)
```

Loads an SVG from a file and rasterizes it.

LVGL fs path, must include the drive letter, such as "D:res/x.svg" Render width, HIYUI_AUTO means the intrinsic SVG size Render height, HIYUI_AUTO means the intrinsic SVG size Accent color overlay, HIYUI_NONE means no overlay Handle, NULL on failure, the caller is responsible for hiyui_svg_destroy

### hiyui_svg_from_data

```c
HIYUI_API hiyui_svg_t *HIYUI_CALL hiyui_svg_from_data(const void *data, unsigned int size, int w, int h, uint32_t tint)
```

Loads an SVG from memory data and rasterizes it.

SVG text Number of bytes in data Render width, HIYUI_AUTO means the intrinsic SVG size Render height, HIYUI_AUTO means the intrinsic SVG size Accent color overlay, HIYUI_NONE means no overlay Handle, NULL on failure, the caller is responsible for hiyui_svg_destroy

### hiyui_svg_src

```c
HIYUI_API const void *HIYUI_CALL hiyui_svg_src(hiyui_svg_t *svg)
```

Gets the bitmap descriptor to pass to hiyui_avatar_props_t::src or hiyui_image_props_t::src.

lv_image_dsc_t pointer, valid while the handle is alive

### hiyui_svg_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_svg_destroy(hiyui_svg_t *svg)
```

Frees the handle, its src must not be used afterwards.
