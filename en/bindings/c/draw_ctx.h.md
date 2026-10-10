---
title: "draw_ctx.h"
---

# draw_ctx.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/draw_ctx.h>`

Custom draw context facade mirroring the hiyui::DrawCtx public methods

hiyui_draw_ctx_t is an opaque handle passed through by the wrapper only inside custom draw callbacks such as Table customRender. It cannot be constructed on the C side. Colors are uniformly uint32_t in 0xRRGGBB.

## Functions

### hiyui_draw_ctx_fill_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color)
```

Fills a rectangle.

### hiyui_draw_ctx_stroke_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_stroke_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color, int width)
```

Strokes a rectangle.

### hiyui_draw_ctx_fill_round_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_round_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color, int radius)
```

Fills a rounded rectangle.

### hiyui_draw_ctx_stroke_round_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_stroke_round_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color, int width, int radius)
```

Strokes a rounded rectangle.

### hiyui_draw_ctx_fill_gradient

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_gradient(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t from, uint32_t to, int vertical)
```

Fills a rectangle with a linear gradient. A non-zero vertical selects the vertical direction.

### hiyui_draw_ctx_fill_gradient_round_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_gradient_round_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t from, uint32_t to, int radius, int vertical)
```

Fills a rounded rectangle with a gradient.

### hiyui_draw_ctx_fill_circle

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_circle(hiyui_draw_ctx_t *ctx, hiyui_point_t center, int radius, uint32_t color)
```

Fills a circle.

### hiyui_draw_ctx_draw_line

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_line(hiyui_draw_ctx_t *ctx, hiyui_point_t p1, hiyui_point_t p2, uint32_t color, int width)
```

Draws a line.

### hiyui_draw_ctx_draw_line_caps

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_line_caps(hiyui_draw_ctx_t *ctx, hiyui_point_t p1, hiyui_point_t p2, uint32_t color, int width, int round_start, int round_end)
```

Draws a line with independently rounded ends.

### hiyui_draw_ctx_draw_line_precise

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_line_precise(hiyui_draw_ctx_t *ctx, float x1, float y1, float x2, float y2, uint32_t color, int width, int round_start, int round_end)
```

Draws a line using floating-point physical pixel coordinates, preserving subpixel endpoints.

### hiyui_draw_ctx_draw_arc

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_arc(hiyui_draw_ctx_t *ctx, hiyui_point_t center, int r, int start_angle, int end_angle, uint32_t color, int width)
```

Draws an arc; angles are in degrees.

### hiyui_draw_ctx_draw_arc_rounded

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_arc_rounded(hiyui_draw_ctx_t *ctx, hiyui_point_t center, int r, int start_angle, int end_angle, uint32_t color, int width)
```

Draws an arc with rounded endpoints.

### hiyui_draw_ctx_push_clip

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_push_clip(hiyui_draw_ctx_t *ctx, hiyui_rect_t r)
```

Pushes a clip region.

### hiyui_draw_ctx_pop_clip

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_pop_clip(hiyui_draw_ctx_t *ctx)
```

Pops the clip region.

### hiyui_draw_ctx_set_opacity

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_set_opacity(hiyui_draw_ctx_t *ctx, uint8_t opa)
```

Sets the opacity of subsequent drawing, [0,255].

### hiyui_draw_ctx_draw_text

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_text(hiyui_draw_ctx_t *ctx, const char *text, hiyui_point_t pos)
```

Draws text.

### hiyui_draw_ctx_draw_text_ex

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_text_ex(hiyui_draw_ctx_t *ctx, const char *text, hiyui_rect_t area, uint32_t color, int font_size, int center_h, int center_v)
```

Draws styled text. Non-zero center_h/center_v centers horizontally/vertically.

### hiyui_draw_ctx_draw_image

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_image(hiyui_draw_ctx_t *ctx, const void *src, hiyui_rect_t area, uint32_t recolor)
```

Draws an image; recolor is the tint color.

### hiyui_draw_ctx_measure_text

```c
HIYUI_API int HIYUI_CALL hiyui_draw_ctx_measure_text(hiyui_draw_ctx_t *ctx, const char *text, int font_size, int max_width, hiyui_size_t *out)
```

Measures UTF-8 text. Font size and width are physical pixels. A max_width of 0 imposes no width limit.

Returns 1 on success. Returns 0 on NULL arguments, non-positive font size, or negative width, with non-NULL output zeroed.

### hiyui_draw_ctx_draw_image_buffer

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_image_buffer(hiyui_draw_ctx_t *ctx, const hiyui_image_buffer_t *image, hiyui_rect_t area)
```

Draws an image snapshot centered. image may be released after the call returns. For use only in display refresh callbacks.

### hiyui_draw_ctx_draw_icon

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_icon(hiyui_draw_ctx_t *ctx, uint32_t codepoint, hiyui_rect_t area, uint32_t color, int size, const hiyui_font_icon_style_t *style)
```

Draws a font icon. size is in physical pixels. A NULL style uses the default icon style.
