---
title: Styling Overview
---

# Styling Overview

The Hiy-UI styling interface has three layers.

| Layer | Type | Purpose |
| --- | --- | --- |
| Single state | `Style` | Background, text, border, shadow, spacing, and opacity of one state |
| Multi-state | `StyleSet` | Nine states: normal, hovered, pressed, focused, checked, disabled, focusKey, mixed, and expanded |
| Theme | `Theme` | Token value table and per-widget-type default StyleSets |

## Usage

```cpp
Style panel{
    .bgFill = {.color = 0xFFFFFF},
    .border = {.width = 1, .color = 0xDADCE0},
    .radius = 8,
};

Card card;
card.init(parent);
card.style(panel);
```

A fixed appearance for a single widget uses a local `Style`. Write colors as `ThemeRole` semantic roles (such as `ThemeRole::Primary`) instead of fixed RGB, so the color follows the new theme after a theme switch. The default style of a widget category goes into a `Theme`.

## Updates

`setTheme()` switches the global theme and refreshes registered widgets and theme bindings. Fixed RGB values stay unchanged; `ThemeRole` bindings take their values from the new theme.

Size values in a style participate in DPI scaling and are in theme logical pixels. After layout-related style properties change at runtime, LVGL updates coordinates in the next layout cycle.

## Related pages

- [Style](/en/styling/style): all fields of a single-state style.
- [StyleSet](/en/styling/style-set): multi-state styles.
- [Theme](/en/styling/theme): tokens, predefined themes, and switching.
- [Style Transitions](/en/styling/transition): state change animations.
- [Visual Effects](/en/styling/effects): frosted glass and theme switch transitions.
- [Shape](/en/styling/shape): non-rectangular clipping and hit testing.
