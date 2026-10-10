---
title: DrawCtx
---

# DrawCtx

`DrawCtx` 封装 LVGL 的底层绘制接口，用于自绘组件的 `Painter::paint()` 回调。上下文由库在绘制事件中构造并传入，只在回调内有效，不保存到回调之外。

## 基本图元

接口覆盖矩形、圆、线、弧、文字和图像；路径接口（`DrawPath`、`fillPath`）在启用 `LV_USE_VECTOR_GRAPHIC` 后可用。颜色使用 `0xRRGGBB`，透明度范围为 `0` 到 `255`，坐标与线宽单位为物理像素。

```cpp
void drawPreview(DrawCtx &ctx) {
  ctx.fillRect({0, 0, 160, 100}, Color(0xFFFFFF));
  ctx.drawLine({8, 80}, {152, 20}, Color(0x3367D6), 2);
  ctx.drawText("CPU", {8, 8});
}
```

## 线段端点与浮点坐标

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `drawLine(Point, Point, Color, int width)` | `void` | 整数坐标，两端不使用圆角 |
| `drawLine(Point, Point, Color, int width, bool roundStart, bool roundEnd)` | `void` | 分别设置起点与终点圆角 |
| `drawLine(float x1, float y1, float x2, float y2, Color, int width, bool roundStart, bool roundEnd)` | `void` | 浮点物理像素端点，保留亚像素精度 |

以下线段使用半像素坐标，起点为圆角，终点不使用圆角。

```cpp
ctx.drawLine(8.5f, 20.5f, 80.5f, 20.5f, Color(0x3367D6), 2, true, false);
```

## 裁剪与透明度

`pushClip(rect)` 与 `popClip()` 成对使用，限制后续绘制的区域；`setOpacity(opa)` 设置后续绘制的整体透明度。

```cpp
ctx.pushClip(contentRect);
ctx.setOpacity(160);
drawSeries(ctx);
ctx.setOpacity(255);
ctx.popClip();
```

## 坐标

`Painter::paint()` 收到的上下文以组件左上角为原点，局部坐标自动转换到绘制层。`PaintCtx` 提供组件物理尺寸（`width`、`height`）、DPI 因子（`dpiScale`）和局部内容区（`content`），`pc.px(logical)` 把逻辑像素换算为当前组件的物理像素。

## C 接口

包含 `<hiyui/c/draw_ctx.h>`。C 绘制回调接收借用的 `hiyui_draw_ctx_t *`，生命周期限于当前回调。

| C++ 操作 | C 函数 |
| --- | --- |
| 整数坐标线段 | `hiyui_draw_ctx_draw_line()` |
| 带独立端点圆角的线段 | `hiyui_draw_ctx_draw_line_caps()` |
| 浮点坐标线段 | `hiyui_draw_ctx_draw_line_precise()` |

参数与其他图元见 [DrawCtx C 参考](/bindings/c/draw_ctx.h)。

完整方法列表见 [DrawCtx API](/api-reference/draw/drawctx)。
