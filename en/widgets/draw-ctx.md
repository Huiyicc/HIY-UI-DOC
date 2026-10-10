---
title: DrawCtx
---

# DrawCtx

`DrawCtx` wraps LVGL's low-level drawing interface for the `Painter::paint()` callback of custom-drawn widgets. The context is constructed and passed in by the library during the draw event; it is valid only within the callback and is not stored beyond it.

## Basic primitives

The interface covers rectangles, circles, lines, arcs, text, and images; the path interfaces (`DrawPath`, `fillPath`) are available when `LV_USE_VECTOR_GRAPHIC` is enabled. Colors use `0xRRGGBB`, opacity ranges from `0` to `255`, and coordinates and line widths are in physical pixels.

```cpp
void drawPreview(DrawCtx &ctx) {
  ctx.fillRect({0, 0, 160, 100}, Color(0xFFFFFF));
  ctx.drawLine({8, 80}, {152, 20}, Color(0x3367D6), 2);
  ctx.drawText("CPU", {8, 8});
}
```

## Line caps and floating-point coordinates

| Method | Returns | Description |
| --- | --- | --- |
| `drawLine(Point, Point, Color, int width)` | `void` | Integer coordinates, no rounded caps at either end |
| `drawLine(Point, Point, Color, int width, bool roundStart, bool roundEnd)` | `void` | Sets rounded start and end caps separately |
| `drawLine(float x1, float y1, float x2, float y2, Color, int width, bool roundStart, bool roundEnd)` | `void` | Floating-point physical pixel endpoints, preserving sub-pixel precision |

The following line uses half-pixel coordinates, a rounded start cap, and no rounded end cap.

```cpp
ctx.drawLine(8.5f, 20.5f, 80.5f, 20.5f, Color(0x3367D6), 2, true, false);
```

## Clipping and opacity

`pushClip(rect)` and `popClip()` are used in pairs to restrict the area of subsequent drawing; `setOpacity(opa)` sets the overall opacity of subsequent drawing.

```cpp
ctx.pushClip(contentRect);
ctx.setOpacity(160);
drawSeries(ctx);
ctx.setOpacity(255);
ctx.popClip();
```

## Coordinates

The context received by `Painter::paint()` uses the widget's top-left corner as the origin, and local coordinates are converted to the draw layer automatically. `PaintCtx` provides the widget's physical size (`width`, `height`), the DPI factor (`dpiScale`), and the local content area (`content`); `pc.px(logical)` converts logical pixels to the current widget's physical pixels.

## C interface

Include `<hiyui/c/draw_ctx.h>`. The C drawing callback receives a borrowed `hiyui_draw_ctx_t *` whose lifetime is limited to the current callback.

| C++ operation | C function |
| --- | --- |
| Integer-coordinate line | `hiyui_draw_ctx_draw_line()` |
| Line with separate end caps | `hiyui_draw_ctx_draw_line_caps()` |
| Floating-point-coordinate line | `hiyui_draw_ctx_draw_line_precise()` |

Parameters and other primitives are described in [DrawCtx C Reference](/en/bindings/c/draw_ctx.h).

The full method list is in [DrawCtx API](/en/api-reference/draw/drawctx).
