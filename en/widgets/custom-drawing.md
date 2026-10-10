---
title: Custom Drawing
---

# Custom Drawing

Custom drawing is done by two types working together: `CustomDraw` is the widget that carries the drawing, and `Painter` is the drawing strategy implemented by the user. Drawing primitives are provided by [DrawCtx](/en/widgets/draw-ctx).

## Minimal example

```cpp
struct GradientPainter : Painter {
  void paint(DrawCtx &ctx, const PaintCtx &pc) override {
    Rect area{0, 0, pc.width, pc.height};
    ctx.fillGradientRoundRect(area, Color(pc.theme.primary()),
                              Color(pc.theme.secondary()), pc.px(12), true);
    ctx.drawText("CustomDraw", area, Color(0xFFFFFF), pc.px(20), true, true);
  }
};

CustomDraw draw({.width = 220, .height = 64});
draw.init(parent).painter(std::make_unique<GradientPainter>());
```

## CustomDraw Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `int` | [`HIYUI_AUTO`](/en/core/constants) | Width; the auto value is determined by layout |
| `height` | `int` | [`HIYUI_AUTO`](/en/core/constants) | Height; the auto value is determined by layout |
| `fps` | `int` | `0` | `0` for static; a value greater than 0 drives animation at that frame rate |
| `transparentBg` | `bool` | `true` | Whether the background is transparent |
| `type` | `WidgetType` | `WidgetType::Base` | Associated widget type; other than `Base`, applies the corresponding widget's theme StyleSet |

## Painter callbacks

| Method | Returns | Description |
| --- | --- | --- |
| `paint(DrawCtx &ctx, const PaintCtx &pc)` | `void` | Pure virtual. Submits drawing, using local physical coordinates; the widget tree, theme, and sizes must not be modified inside the callback |
| `tick(float dt)` | `void` | Animation frame, called periodically only when `fps > 0`; `dt` is in seconds |
| `onEvent(Event &, const PaintCtx &)` | `void` | Input and state events; a redraw is requested automatically after returning. `Event` must not be stored beyond the callback |
| `onResize(const PaintCtx &)` | `void` | Called when the strategy is installed and when the widget size changes; the size can be zero |
| `onDpi(const PaintCtx &)` | `void` | Called when the strategy is installed and after a DPI update |
| `onTheme(const Theme &)` | `void` | Theme change notification; the library guarantees the call before the next `paint()` |

## CustomDraw runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `painter(std::unique_ptr<Painter>)` | `CustomDraw &` | Transfers Painter ownership; `nullptr` clears it. On replacement or clearing, the old Painter is released only after an in-progress callback returns |
| `start()` / `stop()` | `CustomDraw &` | Starts or stops the animation timer; `start()` is idempotent |
| `running(bool on)` | `CustomDraw &` | `true` starts, `false` stops |
| `fps(int f)` | `CustomDraw &` | Changes the frame rate at runtime; `0` stops; while running, the timer is rebuilt at the new frame rate |
| `redraw()` | `CustomDraw &` | Manually triggers a redraw |

## Drawing coordinates

The context received by `paint()` uses the widget's top-left corner as the origin, in physical pixels. `PaintCtx` provides the widget's physical size (`width`, `height`), the DPI factor (`dpiScale`, dpr × uiScale), the current interaction state (`state`), and the local content area (`content`). `pc.px(logical)` converts logical pixels to the current widget's physical pixels; drawing sizes are recomputed automatically on DPI updates.

## State and lifetime

A Painter instance is handed over through `std::unique_ptr`, and its lifetime is bound to the underlying LVGL object; `this` is safe to use in all callbacks. Runtime state such as animation phase or selected value is stored directly in Painter members.

For interactive drawing that needs input, make the widget clickable and add it to a focus group:

```cpp
draw.clickable(true).addToGroup();
```

Call `redraw()` to refresh after data changes. Non-rectangular clipping and hit testing use [Shape](/en/styling/shape).

## C interface

Include `<hiyui/c/custom_draw.h>`. `hiyui_custom_draw_create(parent, props)` creates the widget, and `hiyui_custom_draw_set_painter()` supplies the paint, tick, event, resize, dpi, and theme callbacks as `hiyui_painter_callbacks_t` function pointers; all callbacks are called on the UI thread, and the context is valid only within the current callback. Drawing primitives are described in [DrawCtx C Reference](/en/bindings/c/draw_ctx.h).
