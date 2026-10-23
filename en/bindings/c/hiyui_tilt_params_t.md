---
title: "hiyui_tilt_params_t"
---

# hiyui_tilt_params_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/tilt.h>`

Tilt parameters; initialize with hiyui_tilt_params_init before changing fields.

## Public Members

### max_angle_x

```c
float max_angle_x
```

Maximum tilt around the X axis in degrees; 0 keeps this axis fixed.

### max_angle_y

```c
float max_angle_y
```

Maximum tilt around the Y axis in degrees; 0 keeps this axis fixed.

### perspective

```c
float perspective
```

View distance in pixels; larger values weaken perspective.

### follow_duration_ms

```c
uint32_t follow_duration_ms
```

Follow easing duration in milliseconds.

### release_duration_ms

```c
uint32_t release_duration_ms
```

Release duration in milliseconds.

### animate

```c
int animate
```

0 applies angles immediately and resets on leave; nonzero enables easing.
