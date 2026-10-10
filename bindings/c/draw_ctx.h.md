---
title: "draw_ctx.h"
---

# draw_ctx.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/draw_ctx.h>`

自绘上下文门面，对齐 hiyui::DrawCtx 公开方法

hiyui_draw_ctx_t 为不透明句柄，仅在自绘回调（如 Table customRender）里 由封装层透传，C 侧不可构造。颜色统一为 0xRRGGBB 的 uint32_t。

## 函数

### hiyui_draw_ctx_fill_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color)
```

填充矩形

### hiyui_draw_ctx_stroke_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_stroke_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color, int width)
```

描边矩形

### hiyui_draw_ctx_fill_round_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_round_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color, int radius)
```

填充圆角矩形

### hiyui_draw_ctx_stroke_round_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_stroke_round_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t color, int width, int radius)
```

描边圆角矩形

### hiyui_draw_ctx_fill_gradient

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_gradient(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t from, uint32_t to, int vertical)
```

填充线性渐变矩形，vertical 非 0 为垂直方向

### hiyui_draw_ctx_fill_gradient_round_rect

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_gradient_round_rect(hiyui_draw_ctx_t *ctx, hiyui_rect_t r, uint32_t from, uint32_t to, int radius, int vertical)
```

填充圆角渐变矩形

### hiyui_draw_ctx_fill_circle

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_fill_circle(hiyui_draw_ctx_t *ctx, hiyui_point_t center, int radius, uint32_t color)
```

填充圆形

### hiyui_draw_ctx_draw_line

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_line(hiyui_draw_ctx_t *ctx, hiyui_point_t p1, hiyui_point_t p2, uint32_t color, int width)
```

绘制直线

### hiyui_draw_ctx_draw_line_caps

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_line_caps(hiyui_draw_ctx_t *ctx, hiyui_point_t p1, hiyui_point_t p2, uint32_t color, int width, int round_start, int round_end)
```

绘制直线，可分别设置两端是否为圆角。

### hiyui_draw_ctx_draw_line_precise

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_line_precise(hiyui_draw_ctx_t *ctx, float x1, float y1, float x2, float y2, uint32_t color, int width, int round_start, int round_end)
```

使用物理像素浮点坐标绘制直线，保留亚像素端点。

### hiyui_draw_ctx_draw_arc

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_arc(hiyui_draw_ctx_t *ctx, hiyui_point_t center, int r, int start_angle, int end_angle, uint32_t color, int width)
```

绘制圆弧，角度单位为度

### hiyui_draw_ctx_draw_arc_rounded

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_arc_rounded(hiyui_draw_ctx_t *ctx, hiyui_point_t center, int r, int start_angle, int end_angle, uint32_t color, int width)
```

绘制圆角端点圆弧

### hiyui_draw_ctx_push_clip

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_push_clip(hiyui_draw_ctx_t *ctx, hiyui_rect_t r)
```

压入裁剪区域

### hiyui_draw_ctx_pop_clip

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_pop_clip(hiyui_draw_ctx_t *ctx)
```

弹出裁剪区域

### hiyui_draw_ctx_set_opacity

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_set_opacity(hiyui_draw_ctx_t *ctx, uint8_t opa)
```

设置后续绘制透明度 [0,255]

### hiyui_draw_ctx_draw_text

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_text(hiyui_draw_ctx_t *ctx, const char *text, hiyui_point_t pos)
```

绘制文本

### hiyui_draw_ctx_draw_text_ex

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_text_ex(hiyui_draw_ctx_t *ctx, const char *text, hiyui_rect_t area, uint32_t color, int font_size, int center_h, int center_v)
```

绘制带样式文本，center_h/center_v 非 0 表示居中

### hiyui_draw_ctx_draw_image

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_image(hiyui_draw_ctx_t *ctx, const void *src, hiyui_rect_t area, uint32_t recolor)
```

绘制图像，recolor 为着色颜色

### hiyui_draw_ctx_measure_text

```c
HIYUI_API int HIYUI_CALL hiyui_draw_ctx_measure_text(hiyui_draw_ctx_t *ctx, const char *text, int font_size, int max_width, hiyui_size_t *out)
```

测量 UTF-8 文本，字号及宽度为物理像素；max_width 为 0 时不限制宽度。

**返回值：** 成功返回 1；NULL 参数、非正字号或负宽度返回 0，非空输出清零。

### hiyui_draw_ctx_draw_image_buffer

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_image_buffer(hiyui_draw_ctx_t *ctx, const hiyui_image_buffer_t *image, hiyui_rect_t area)
```

居中绘制图片快照，调用返回后 image 可释放；仅用于显示刷新回调。

### hiyui_draw_ctx_draw_icon

```c
HIYUI_API void HIYUI_CALL hiyui_draw_ctx_draw_icon(hiyui_draw_ctx_t *ctx, uint32_t codepoint, hiyui_rect_t area, uint32_t color, int size, const hiyui_font_icon_style_t *style)
```

绘制字体图标，size 为物理像素，style 为 NULL 时使用默认图标样式。
