---
title: "TiltParams"
---

# TiltParams <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/effect/tilt_effect.h>`

**Namespace:** `hiyui`

3D tilt parameters

**See also:** `TiltEffect`

## Public Members

### maxAngleX

```cpp
float maxAngleX
```

Maximum tilt around the X axis in degrees

### maxAngleY

```cpp
float maxAngleY
```

Maximum tilt around the Y axis in degrees

### perspective

```cpp
float perspective
```

View distance in pixels; larger values weaken the perspective

### followDurationMs

```cpp
uint32_t followDurationMs
```

Follow easing duration in milliseconds

### releaseDurationMs

```cpp
uint32_t releaseDurationMs
```

Release bounce duration in milliseconds

### animate

```cpp
bool animate
```

When false, angles jump to targets immediately and reset to zero on leave
