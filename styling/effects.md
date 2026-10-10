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

## 主题切换过渡

`ThemeTransition::play(newTheme, dir)` 执行截图 → 切换主题 → 动画揭露的完整流程；全局动画关闭时直接切换主题，无过渡画面。默认效果为 `SlideRevealEffect`（旧画面按方向滑出），可用 `ThemeTransition::setEffect()` 换成自定义 `TransitionEffect` 子类。

```cpp
ThemeTransition::setEffect(std::make_unique<SlideRevealEffect>());
ThemeTransition::play(DarkTheme, TransitionDirection::LeftToRight);
```

`TransitionDirection` 有 `LeftToRight` 和 `RightToLeft` 两个值。

过渡画面覆盖整个屏幕。需要某块区域在过渡期间保持可见时，设置排除区域；排除区内像素始终透明。

```cpp
ThemeTransition::setExclusionZone({.x = 0, .y = 0, .w = 200, .h = 48,
                                   .circular = false});
ThemeTransition::clearExclusionZone();
```

`setExclusionObj(obj)` 从 LVGL 对象坐标自动生成矩形排除区域。`circular = true` 时以矩形中心为圆心、`min(w, h) / 2` 为半径。

## 背景图缩放

`BgImageFit::Fill`、`Contain` 和 `Cover` 由绘制回调实现。`BgImage.src` 指针在样式生效期间被保存使用，图像描述符和像素数据须保持有效至样式替换或组件销毁。
