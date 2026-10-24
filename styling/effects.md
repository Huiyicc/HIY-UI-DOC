---
title: 视觉效果
---

# 视觉效果

## 毛玻璃

`Backdrop` 是 `Style` 的背景模糊字段，实现毛玻璃效果。`blurRadius` 单位为逻辑像素，有效范围 [2, 254]，`0` 禁用，[`HIYUI_NONE_INT`](/core/constants) 不设置。

```cpp
panel.style({
    .backdrop = {
        .blurRadius = 16,
        .opacity = 200,
        .tint = 0xFFFFFF,
        .tintOpacity = 32,
    },
});
```

模糊分两种模式。`BlurSource` 为空时模糊组件下方已绘制内容（backdrop-filter 行为）；`BlurSource` 提供 `BgFill` 或 `BgImage` 时，先在内部合成底图再模糊。

需要绕过 `Style` 直接控制时，使用 `GlassEffect`：

```cpp
GlassEffect::attach(panel.raw(), {.blurRadius = 16, .opacity = 200});
GlassEffect::detach(panel.raw());
```

对象尺寸变化时自动重建模糊缓存。背景采样模式下，下方内容重绘后下次绘制更新采样；`GlassEffect::invalidateCache(obj)` 可主动请求重建。`GlassEffect::isAttached(obj)` 查询挂载状态。

## 3D 倾斜悬停

`TiltEffect::attach` 为任意组件挂载鼠标跟随的 3D 倾斜效果。指针进入组件布局矩形后，组件子树绕中心做透视倾斜并跟随光标，指针移出后回弹复原。

### C++ API

头文件为 `<hiyui/effect/tilt_effect.h>`。为已创建的 `card` 设置两轴最大倾角：

```cpp
TiltEffect::attach(card.raw(), {
    .maxAngleX = 12,
    .maxAngleY = 12,
    .perspective = 900,
});
```

`TiltParams` 字段：

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| maxAngleX | float | 10 | 绕 X 轴最大倾角，度 |
| maxAngleY | float | 10 | 绕 Y 轴最大倾角，度 |
| perspective | float | 900 | 视距，像素，值越大透视越弱 |
| followDurationMs | uint32_t | 160 | 跟随缓动时长，毫秒 |
| releaseDurationMs | uint32_t | 450 | 移出回弹时长，毫秒 |
| animate | bool | true | false 时角度立即到位，移出立即归零 |

运行时方法：

| 方法 | 返回 | 说明 |
|---|---|---|
| `TiltEffect::attach(obj, params)` | `void` | 挂载效果；省略参数使用默认值，重复调用更新参数 |
| `TiltEffect::detach(obj)` | `void` | 移除效果，倾斜中立即复原；未挂载时无操作 |
| `TiltEffect::reset(obj)` | `void` | 立即回平并保持挂载，后续鼠标移动可再次触发；未挂载时无操作 |
| `TiltEffect::isAttached(obj)` | `bool` | 已挂载时返回 `true` |

布局保持不变，指针命中位置随倾斜画面映射。倾斜期间子组件的输入与状态变化即时显示，输入框光标和拖选跟随倾斜后的文字位置。弹出层按对象布局位置锚定，与倾斜画面的偏差不超过当前倾角的透视偏移。

倾斜画面保留组件透明度，退出时恢复原有变换矩阵和分层透明度。组件尺寸、样式或父容器变化时效果复原，父容器滚动时倾斜画面跟随移动。组件销毁时自动清理效果；解绑保留组件的其他鼠标移动监听。`GlassEffect` 可与倾斜效果同时挂载，倾斜画面包含模糊结果。

效果仅响应鼠标移动，触摸输入不触发。桌面 SDL 窗口中，鼠标移出窗口或窗口失焦后回平。运行中将 `animate` 改为 `false` 并重新调用 `attach`，悬停时立即到达目标角度，回弹时立即回平。

### C API

头文件为 `<hiyui/c/tilt.h>`，统一头文件 `<hiyui/c/hiyui.h>` 已包含它。为已创建的 `hiyui_widget_t *card` 关闭倾斜缓动：

```c
#include <hiyui/c/tilt.h>

hiyui_tilt_params_t params;
hiyui_tilt_params_init(&params);
params.animate = 0;
hiyui_tilt_attach(card, &params);
```

`hiyui_tilt_params_t` 的默认值由 `hiyui_tilt_params_init` 填入：

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| max_angle_x | float | 10 | 绕 X 轴最大倾角，度；0 固定此轴 |
| max_angle_y | float | 10 | 绕 Y 轴最大倾角，度；0 固定此轴 |
| perspective | float | 900 | 视距，像素，值越大透视越弱 |
| follow_duration_ms | uint32_t | 160 | 跟随缓动时长，毫秒 |
| release_duration_ms | uint32_t | 450 | 移出回弹时长，毫秒 |
| animate | int | 1 | 0 时角度立即到位、移出立即归零，非 0 启用缓动 |

| 方法 | 返回 | 说明 |
|---|---|---|
| `hiyui_tilt_params_init(params)` | `void` | 填入默认参数；`NULL` 时无操作 |
| `hiyui_tilt_attach(obj, params)` | `void` | 挂载或更新全部参数；`params` 为 `NULL` 时使用默认值 |
| `hiyui_tilt_detach(obj)` | `void` | 移除效果，倾斜中立即复原；未挂载时无操作 |
| `hiyui_tilt_reset(obj)` | `void` | 立即回平并保持挂载；未挂载时无操作 |
| `hiyui_tilt_is_attached(obj)` | `int` | 已挂载返回 1，未挂载返回 0 |

非空参数在 `attach` 返回前复制全部字段，零值按原值生效；自定义参数使用初始化函数后再修改字段。组件操作须在 UI 线程调用，非空句柄须指向存活组件，销毁后不得继续使用。`obj` 为 `NULL` 时修改操作无效果，查询返回 0。

## 主题切换过渡

`ThemeTransition::play(newTheme, dir)` 执行截图 → 切换主题 → 动画揭露的完整流程；全局动画关闭时直接切换主题，无过渡画面。效果通过 `ThemeTransition::setEffect()` 设置，默认为 `SlideRevealEffect`。

内置效果：

| 效果 | 时长 | 说明 |
|---|---|---|
| `SlideRevealEffect` | 200ms | 旧画面按方向滑出，分割线处 1px 半透明边界 |
| `CrossFadeEffect` | 300ms | 旧画面整体渐隐 |
| `RectRevealEffect` | 240ms | 从触发控件矩形起步，快速过渡为圆形扩散 |

```cpp
ThemeTransition::setEffect(std::make_unique<SlideRevealEffect>());
ThemeTransition::play(DarkTheme, TransitionDirection::LeftToRight);
```

`CrossFadeEffect` 无构造参数。`RectRevealEffect` 的构造参数为触发控件，扩散区域从该控件的圆角矩形轮廓起步，随即变为以控件中心为圆心的圆形向外扩张直至覆盖全屏，控件自身在动画开始时即显示新主题；矩形坐标与圆角在构造时读取，传入 `nullptr` 时以屏幕中心为起点。

```cpp
ThemeTransition::setEffect(
    std::make_unique<RectRevealEffect>(themeDropdown.raw()));
ThemeTransition::play(DarkTheme, TransitionDirection::LeftToRight);
```

`TransitionDirection` 有 `LeftToRight` 和 `RightToLeft` 两个值。自定义效果继承 `TransitionEffect`，实现 `prepare()` 与 `update()` 后传给 `setEffect()`。

### C API

头文件为 `<hiyui/c/theme.h>`，统一头文件 `<hiyui/c/hiyui.h>` 已包含它。为已创建的 `hiyui_widget_t *themeDropdown` 选择矩形扩散：

```c
hiyui_theme_transition_set_effect(HIYUI_TRANSITION_KIND_EXPAND,
                                  themeDropdown);
hiyui_theme_transition_play_preset(HIYUI_THEME_PRESET_DARK,
                                   HIYUI_TRANSITION_DIRECTION_LEFT_TO_RIGHT);
```

| 值 | 说明 |
|---|---|
| HIYUI_TRANSITION_KIND_SLIDE | 旧画面左右滑动揭露 |
| HIYUI_TRANSITION_KIND_FADE | 旧画面整体渐隐 |
| HIYUI_TRANSITION_KIND_EXPAND | 以 origin 矩形为起点向外扩散 |

`origin` 仅 `HIYUI_TRANSITION_KIND_EXPAND` 使用，`NULL` 时以屏幕中心为起点。

过渡画面覆盖整个屏幕。需要某块区域在过渡期间保持可见时，设置排除区域；排除区内像素始终透明。

```cpp
ThemeTransition::setExclusionZone({.x = 0, .y = 0, .w = 200, .h = 48,
                                   .circular = false});
ThemeTransition::clearExclusionZone();
```

`setExclusionObj(obj)` 从 LVGL 对象坐标自动生成矩形排除区域。`circular = true` 时以矩形中心为圆心、`min(w, h) / 2` 为半径。

## 背景图缩放

`BgImageFit::Fill`、`Contain` 和 `Cover` 由绘制回调实现。`BgImage.src` 指针在样式生效期间被保存使用，图像描述符和像素数据须保持有效至样式替换或组件销毁。
