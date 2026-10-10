---
title: "image_buffer.h"
---

# image_buffer.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/image_buffer.h>`

## Enums

### hiyui_pixel_format_t

Four bytes per pixel in B, G, R, A order, alpha is straight alpha.

| Value | Description |
|---|---|
| `HIYUI_PIXEL_XRGB8888` = 0 |  |
| `HIYUI_PIXEL_ARGB8888` |  |

## Type Aliases

### hiyui_image_buffer_t

```c
typedef struct hiyui_image_buffer_s hiyui_image_buffer_t
```

## Functions

### hiyui_image_buffer_create

```c
HIYUI_API hiyui_image_buffer_t *HIYUI_CALL hiyui_image_buffer_create(uint32_t width, uint32_t height, hiyui_pixel_format_t format, const uint8_t *pixels, size_t byte_count)
```

Creates an image by copying pixels, rows are top-down with no row padding.

Must equal width × height × 4, and width and height must be greater than 0. Returns NULL for invalid arguments. A successful handle must be freed by hiyui_image_buffer_destroy.

### hiyui_image_buffer_width

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_image_buffer_width(const hiyui_image_buffer_t *image)
```

Returns the width in physical pixels, NULL returns 0.

### hiyui_image_buffer_height

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_image_buffer_height(const hiyui_image_buffer_t *image)
```

Returns the height in physical pixels, NULL returns 0.

### hiyui_image_buffer_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_image_buffer_destroy(hiyui_image_buffer_t *image)
```

Frees the resources, NULL is safe. A non-null handle can be freed only once.
