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

### C++ API

Include `<hiyui/effect/tilt_effect.h>`. Set the maximum angles for an existing `card`:

```cpp
TiltEffect::attach(card.raw(), {
    .maxAngleX = 12,
    .maxAngleY = 12,
    .perspective = 900,
});
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

Runtime methods:

| Method | Returns | Description |
|---|---|---|
| `TiltEffect::attach(obj, params)` | `void` | Attaches the effect; omitted parameters use defaults, and repeated calls update parameters |
| `TiltEffect::detach(obj)` | `void` | Removes the effect and restores immediately while tilted; no-op when unattached |
| `TiltEffect::reset(obj)` | `void` | Flattens immediately while staying attached; subsequent mouse movement can trigger tilt again; no-op when unattached |
| `TiltEffect::isAttached(obj)` | `bool` | Returns `true` when attached |

Layout stays unchanged and pointer hit positions map onto the tilted visual. Input and state changes on child widgets appear immediately while tilting; input carets and drag selections follow the tilted text. Popups anchor to the widget's layout position, deviating from the tilted visual by no more than the perspective offset of the current angle.

The tilted visual preserves widget opacity, and leaving the effect restores the original transform matrix and layered opacity. The effect restores when the widget's size, style, or parent changes; the tilted visual follows parent scrolling. Widget destruction cleans up the effect automatically, and detaching preserves other mouse move listeners on the widget. `GlassEffect` can be attached at the same time; the tilted visual includes the blur result.

Only mouse movement triggers the effect; touch input does not. In desktop SDL windows, leaving the window or losing window focus flattens the widget. Setting `animate` to `false` and calling `attach` again applies the target angles immediately while hovering, or flattens immediately during release.

### C API

Include `<hiyui/c/tilt.h>`, which is also included by `<hiyui/c/hiyui.h>`. Disable tilt easing for an existing `hiyui_widget_t *card`:

```c
#include <hiyui/c/tilt.h>

hiyui_tilt_params_t params;
hiyui_tilt_params_init(&params);
params.animate = 0;
hiyui_tilt_attach(card, &params);
```

`hiyui_tilt_params_init` fills `hiyui_tilt_params_t` with these defaults:

| Field | Type | Default | Description |
|---|---|---|---|
| max_angle_x | float | 10 | Maximum tilt around the X axis in degrees; 0 keeps this axis fixed |
| max_angle_y | float | 10 | Maximum tilt around the Y axis in degrees; 0 keeps this axis fixed |
| perspective | float | 900 | View distance in pixels; larger values weaken perspective |
| follow_duration_ms | uint32_t | 160 | Follow easing duration in milliseconds |
| release_duration_ms | uint32_t | 450 | Release duration in milliseconds |
| animate | int | 1 | 0 applies angles immediately and resets on leave; nonzero enables easing |

| Method | Returns | Description |
|---|---|---|
| `hiyui_tilt_params_init(params)` | `void` | Fills in defaults; no-op for `NULL` |
| `hiyui_tilt_attach(obj, params)` | `void` | Attaches or updates all parameters; `NULL` parameters use defaults |
| `hiyui_tilt_detach(obj)` | `void` | Removes the effect and restores immediately while tilted; no-op when unattached |
| `hiyui_tilt_reset(obj)` | `void` | Flattens immediately while staying attached; no-op when unattached |
| `hiyui_tilt_is_attached(obj)` | `int` | Returns 1 when attached or 0 when unattached |

When parameters are non-NULL, all fields are copied before `attach` returns and zero values are applied as supplied. Initialize custom parameters before changing fields. Widget operations must run on the UI thread with live widget handles; handles must not be used after destruction. For a `NULL` widget, mutating operations are no-ops and the query returns 0.

## Theme switch transition

`ThemeTransition::play(newTheme, dir)` runs the full sequence of screenshot → theme switch → animated reveal; when global animation is off, the theme switches directly without a transition visual. The effect is installed through `ThemeTransition::setEffect()` and defaults to `SlideRevealEffect`.

Built-in effects:

| Effect | Duration | Behavior |
|---|---|---|
| `SlideRevealEffect` | 200ms | The old visual slides out in the transition direction with a 1px translucent divider |
| `CrossFadeEffect` | 300ms | The old visual fades out as a whole |
| `RectRevealEffect` | 240ms | Starts from the trigger widget's rectangle and quickly becomes an expanding circle |

```cpp
ThemeTransition::setEffect(std::make_unique<SlideRevealEffect>());
ThemeTransition::play(DarkTheme, TransitionDirection::LeftToRight);
```

`CrossFadeEffect` takes no constructor arguments. `RectRevealEffect` takes the trigger widget as its constructor argument; the reveal area starts from the widget's rounded rectangle, immediately becomes a circle centered on the widget, and expands until it covers the screen, with the widget itself showing the new theme from the start of the animation. The rectangle and corner radius are read at construction, and a null pointer starts from the screen center.

```cpp
ThemeTransition::setEffect(
    std::make_unique<RectRevealEffect>(themeDropdown.raw()));
ThemeTransition::play(DarkTheme, TransitionDirection::LeftToRight);
```

`TransitionDirection` has the two values `LeftToRight` and `RightToLeft`. Custom effects derive from `TransitionEffect`, implement `prepare()` and `update()`, and are passed to `setEffect()`.

### C API

The header is `<hiyui/c/theme.h>`, already included by the umbrella header `<hiyui/c/hiyui.h>`. Selecting the rect expand reveal for an existing `hiyui_widget_t *themeDropdown`:

```c
hiyui_theme_transition_set_effect(HIYUI_TRANSITION_KIND_EXPAND,
                                  themeDropdown);
hiyui_theme_transition_play_preset(HIYUI_THEME_PRESET_DARK,
                                   HIYUI_TRANSITION_DIRECTION_LEFT_TO_RIGHT);
```

| Value | Behavior |
|---|---|
| HIYUI_TRANSITION_KIND_SLIDE | The old visual slides out horizontally |
| HIYUI_TRANSITION_KIND_FADE | The old visual fades out as a whole |
| HIYUI_TRANSITION_KIND_EXPAND | A rounded rectangle expands from the origin widget's bounds |

`origin` is used by `HIYUI_TRANSITION_KIND_EXPAND` only; `NULL` starts from the screen center.

The transition visual covers the entire screen. To keep a region visible during the transition, set an exclusion zone; pixels inside the exclusion zone stay transparent.

```cpp
ThemeTransition::setExclusionZone({.x = 0, .y = 0, .w = 200, .h = 48,
                                   .circular = false});
ThemeTransition::clearExclusionZone();
```

`setExclusionObj(obj)` generates a rectangular exclusion zone from LVGL object coordinates. With `circular = true`, the zone is a circle centered at the rectangle center with radius `min(w, h) / 2`.

## Background image scaling

`BgImageFit::Fill`, `Contain`, and `Cover` are implemented by a draw callback. The `BgImage.src` pointer is saved and used while the style is in effect; the image descriptor and pixel data must stay valid until the style is replaced or the widget is destroyed.
