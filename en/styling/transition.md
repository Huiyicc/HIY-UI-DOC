---
title: Style Transitions
---

# Style Transitions

A style transition animates property changes during a state switch (such as hover or press) instead of applying them instantly.

The `Style.transition` field is the simplest entry point, in milliseconds. After it is set, state switches automatically animate background, border, and text colors and overall opacity; `0` means no animation.

```cpp
Style style{
    .transition = 180,
};

button.style(style);
```

## Custom transitions

To specify the property scope, delay, or easing, describe the transition with `TransitionCfg` and obtain the LVGL descriptor through `acquireTransition()`.

```cpp
auto *transition = acquireTransition({
    .props = TransitionProps::All,
    .duration = 180,
    .delay = 0,
    .ease = Ease::InOut,
});
```

### TransitionCfg fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `props` | `TransitionProps` | `TransitionProps::All` | Property set participating in the transition |
| `duration` | `uint32_t` | `0` | Duration in milliseconds; `0` uses the theme `AnimDuration` |
| `delay` | `uint32_t` | `0` | Delay in milliseconds |
| `ease` | `Ease` | `Ease::InOut` | Easing algorithm |

## Property groups

| Value | Property scope |
| --- | --- |
| `BgColor` | Background color and background opacity |
| `All` | Background, border, text color, and overall opacity |
| `Indicator` | Indicator background and border |
| `Scrollbar` | Scrollbar opacity, size, and offset |
| `Knob` | Knob padding and shadow |

## Lifetime

Configurations with identical values (property group, duration, delay, easing) share the same descriptor, and the returned pointer stays valid until process exit. When global animation is off, `acquireTransition()` returns `nullptr`. Test or hot-reload environments can call `clearTransitionPool()` to empty the descriptor pool.
