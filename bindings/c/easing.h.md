---
title: "easing.h"
---

# easing.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/easing.h>`

缓动算法求值

枚举顺序与 C++ `hiyui::Ease` 一致，数值兼容，可直接互转。

## 枚举

### hiyui_ease_t

| 值 | 说明 |
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

## 函数

### hiyui_easing_at

```c
HIYUI_API double HIYUI_CALL hiyui_easing_at(hiyui_ease_t e, double t)
```

归一化求值。

| 参数 | 说明 |
|---|---|
| `e` | 缓动算法 |
| `t` | 归一化时间，[0,1] |


**返回值：** 当前进度比，Back/Elastic/Spring/Bounce 可能越界

### hiyui_easing_at_range

```c
HIYUI_API double HIYUI_CALL hiyui_easing_at_range(hiyui_ease_t e, double t, double start, double end)
```

区间求值。

| 参数 | 说明 |
|---|---|
| `start/end` | 目标区间；t∈[0,1] 映射到该区间 |
