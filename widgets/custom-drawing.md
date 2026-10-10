---
title: 自绘组件
---

# 自绘组件

自绘由两个类型配合完成：`CustomDraw` 是承载绘制的组件，`Painter` 是用户实现的绘制策略。绘制原语由 [DrawCtx](/widgets/draw-ctx) 提供。

## 最小示例

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

## CustomDraw Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `width` | `int` | [`HIYUI_AUTO`](/core/constants) | 宽度，自动值由布局决定 |
| `height` | `int` | [`HIYUI_AUTO`](/core/constants) | 高度，自动值由布局决定 |
| `fps` | `int` | `0` | `0` 为静态；大于 0 时按该帧率驱动动画 |
| `transparentBg` | `bool` | `true` | 是否透明背景 |
| `type` | `WidgetType` | `WidgetType::Base` | 关联组件类型；非 `Base` 时应用对应组件的主题 StyleSet |

## Painter 回调

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `paint(DrawCtx &ctx, const PaintCtx &pc)` | `void` | 纯虚。提交绘制，使用局部物理坐标；回调内不修改组件树、主题或尺寸 |
| `tick(float dt)` | `void` | 动画帧，仅 `fps > 0` 时周期调用；`dt` 单位秒 |
| `onEvent(Event &, const PaintCtx &)` | `void` | 输入与状态事件；返回后自动请求重绘。`Event` 不得保存到回调之外 |
| `onResize(const PaintCtx &)` | `void` | 安装策略及组件尺寸变化时调用，尺寸可以为零 |
| `onDpi(const PaintCtx &)` | `void` | 安装策略及 DPI 更新后调用 |
| `onTheme(const Theme &)` | `void` | 主题切换通知，库保证在下次 `paint()` 前调用 |

## CustomDraw 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `painter(std::unique_ptr<Painter>)` | `CustomDraw &` | 转移 Painter 所有权，`nullptr` 清空。替换或清空时，执行中的回调返回后才释放旧 Painter |
| `start()` / `stop()` | `CustomDraw &` | 启动或停止动画定时器，`start()` 幂等 |
| `running(bool on)` | `CustomDraw &` | `true` 启动，`false` 停止 |
| `fps(int f)` | `CustomDraw &` | 运行时修改帧率，`0` 停止；在跑则按新帧率重建定时器 |
| `redraw()` | `CustomDraw &` | 手动触发重绘 |

## 绘制坐标

`paint()` 收到的上下文以组件左上角为原点，单位为物理像素。`PaintCtx` 提供组件物理尺寸（`width`、`height`）、DPI 因子（`dpiScale`，dpr × uiScale）、当前交互状态（`state`）和局部内容区（`content`）。`pc.px(logical)` 将逻辑像素换算为当前组件的物理像素，绘制尺寸随 DPI 更新自动重算。

## 状态与生命周期

Painter 实例通过 `std::unique_ptr` 移交，生命周期与底层 LVGL 对象绑定，所有回调中可安全使用 `this`；动画相位、选中值等运行时状态直接存放在 Painter 成员中。

交互自绘需要接收输入时，将组件设为可点击并加入焦点组：

```cpp
draw.clickable(true).addToGroup();
```

数据变化后调用 `redraw()` 刷新。非矩形裁剪与命中测试使用 [Shape](/styling/shape)。

## C 接口

包含 `<hiyui/c/custom_draw.h>`。`hiyui_custom_draw_create(parent, props)` 创建组件，`hiyui_custom_draw_set_painter()` 以 `hiyui_painter_callbacks_t` 函数指针提供 paint、tick、event、resize、dpi、theme 回调；全部回调在 UI 线程调用，上下文只在当前回调内有效。绘制原语见 [DrawCtx C 参考](/bindings/c/draw_ctx.h)。
