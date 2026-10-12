---
title: Visual Effects
---

# Visual Effects

## Frosted glass

`Backdrop` is the background blur field of `Style` and implements the frosted glass effect. `blurRadius` is in logical pixels with a valid range of [2, 254]; `0` disables the blur and [`HIYUI_NONE_INT`](/en/core/constants) leaves the field unset.

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

Blur has two modes. When `BlurSource` is empty, the already drawn content below the widget is blurred (backdrop-filter behavior); when `BlurSource` provides `BgFill` or `BgImage`, the base image is composited internally first and then blurred.

To control the effect directly and bypass `Style`, use `GlassEffect`:

```cpp
GlassEffect::attach(panel.raw(), {.blurRadius = 16, .opacity = 200});
GlassEffect::detach(panel.raw());
```

The blur cache is rebuilt automatically when the object size changes. In background sampling mode, the sampling updates on the next draw after the content below redraws; `GlassEffect::invalidateCache(obj)` explicitly requests a rebuild. `GlassEffect::isAttached(obj)` queries the attached state.

## 3D tilt hover

`TiltEffect::attach` attaches a mouse-follow 3D tilt effect to any widget. After the pointer enters the widget's layout rectangle, the widget subtree tilts in perspective around its center and follows the pointer; it springs back after the pointer leaves.

```cpp
TiltEffect::attach(card.raw(), {
    .maxAngleX = 12,
    .maxAngleY = 12,
    .perspective = 900,
});
TiltEffect::detach(card.raw());
```

`TiltParams` fields:

| Field | Type | Default | Description |
|---|---|---|---|
| maxAngleX | float | 10 | Maximum tilt around the X axis in degrees |
| maxAngleY | float | 10 | Maximum tilt around the Y axis in degrees |
| perspective | float | 900 | View distance in pixels; larger values weaken the perspective |
| followDurationMs | uint32_t | 160 | Follow easing duration in milliseconds |
| releaseDurationMs | uint32_t | 450 | Release bounce duration in milliseconds |
| animate | bool | true | When false, angles jump to targets immediately and reset to zero on leave |

Layout stays unchanged and pointer hit positions map onto the tilted visual. While tilting, the widget subtree re-renders at the refresh period; input and state changes on child widgets take effect immediately. Popups anchor to the widget's layout position, deviating from the tilted visual by no more than the perspective offset of the current angle. `TiltEffect::reset(obj)` flattens immediately and the effect stays attached. `GlassEffect` can be attached at the same time; the tilted visual includes the blur result. The effect auto-restores on widget size or style changes, and the tilted visual follows parent scrolling. Repeated `attach` calls only update parameters; `TiltEffect::isAttached(obj)` queries the attached state. The effect responds to mouse movement only; touch input does not trigger it.

## Theme switch transition

`ThemeTransition::play(newTheme, dir)` runs the full sequence of screenshot → theme switch → animated reveal; when global animation is off, the theme switches directly without a transition visual. The default effect is `SlideRevealEffect` (the old visual slides out in the transition direction); a custom `TransitionEffect` subclass is installed through `ThemeTransition::setEffect()`.

```cpp
ThemeTransition::setEffect(std::make_unique<SlideRevealEffect>());
ThemeTransition::play(DarkTheme, TransitionDirection::LeftToRight);
```

`TransitionDirection` has the two values `LeftToRight` and `RightToLeft`.

The transition visual covers the entire screen. To keep a region visible during the transition, set an exclusion zone; pixels inside the exclusion zone stay transparent.

```cpp
ThemeTransition::setExclusionZone({.x = 0, .y = 0, .w = 200, .h = 48,
                                   .circular = false});
ThemeTransition::clearExclusionZone();
```

`setExclusionObj(obj)` generates a rectangular exclusion zone from LVGL object coordinates. With `circular = true`, the zone is a circle centered at the rectangle center with radius `min(w, h) / 2`.

## Background image scaling

`BgImageFit::Fill`, `Contain`, and `Cover` are implemented by a draw callback. The `BgImage.src` pointer is saved and used while the style is in effect; the image descriptor and pixel data must stay valid until the style is replaced or the widget is destroyed.
