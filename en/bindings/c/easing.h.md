---
title: "easing.h"
---

# easing.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/easing.h>`

Easing function evaluation

The enum order matches C++ `hiyui::Ease`, values are compatible and the two can be converted directly.

## Enums

### hiyui_ease_t

| Value | Description |
|---|---|
| `HIYUI_EASE_LINEAR` |  |
| `HIYUI_EASE_IN` |  |
| `HIYUI_EASE_OUT` |  |
| `HIYUI_EASE_IN_OUT` |  |
| `HIYUI_EASE_OVERSHOOT` |  |
| `HIYUI_EASE_STEP` |  |
| `HIYUI_EASE_QUAD_IN` |  |
| `HIYUI_EASE_QUAD_OUT` |  |
| `HIYUI_EASE_QUAD_IN_OUT` |  |
| `HIYUI_EASE_CUBIC_IN` |  |
| `HIYUI_EASE_CUBIC_OUT` |  |
| `HIYUI_EASE_CUBIC_IN_OUT` |  |
| `HIYUI_EASE_QUART_IN` |  |
| `HIYUI_EASE_QUART_OUT` |  |
| `HIYUI_EASE_QUART_IN_OUT` |  |
| `HIYUI_EASE_QUINT_IN` |  |
| `HIYUI_EASE_QUINT_OUT` |  |
| `HIYUI_EASE_QUINT_IN_OUT` |  |
| `HIYUI_EASE_SINE_IN` |  |
| `HIYUI_EASE_SINE_OUT` |  |
| `HIYUI_EASE_SINE_IN_OUT` |  |
| `HIYUI_EASE_EXPO_IN` |  |
| `HIYUI_EASE_EXPO_OUT` |  |
| `HIYUI_EASE_EXPO_IN_OUT` |  |
| `HIYUI_EASE_CIRC_IN` |  |
| `HIYUI_EASE_CIRC_OUT` |  |
| `HIYUI_EASE_CIRC_IN_OUT` |  |
| `HIYUI_EASE_BOUNCE_IN` |  |
| `HIYUI_EASE_BOUNCE_OUT` |  |
| `HIYUI_EASE_BOUNCE_IN_OUT` |  |
| `HIYUI_EASE_BACK_IN` |  |
| `HIYUI_EASE_BACK_OUT` |  |
| `HIYUI_EASE_BACK_IN_OUT` |  |
| `HIYUI_EASE_ELASTIC_IN` |  |
| `HIYUI_EASE_ELASTIC_OUT` |  |
| `HIYUI_EASE_ELASTIC_IN_OUT` |  |
| `HIYUI_EASE_SPRING_OUT` |  |
| `HIYUI_EASE_ANGLE_LERP` |  |
| `HIYUI_EASE_IMPACT` |  |

## Functions

### hiyui_easing_at

```c
HIYUI_API double HIYUI_CALL hiyui_easing_at(hiyui_ease_t e, double t)
```

Normalized evaluation.

Easing function Normalized time in [0,1] Current progress ratio; Back/Elastic/Spring/Bounce may go out of range

### hiyui_easing_at_range

```c
HIYUI_API double HIYUI_CALL hiyui_easing_at_range(hiyui_ease_t e, double t, double start, double end)
```

Range evaluation.

Target interval; t in [0,1] maps onto this interval
