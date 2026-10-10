---
title: "Easing"
---

# Easing <Badge type="info" text="Class" />

**Header:** `#include <hiyui/anim/easing.h>`

**Namespace:** `hiyui`

Easing utility class, static-only interface

## Static Methods

### path

```cpp
static lv_anim_path_cb_t path(Ease e) noexcept
```

Returns the LVGL path callback

AngleLerp and Impact map to Linear. Classic variants return a pointer equal to the corresponding lv_anim_path_* value, same origin and equivalent.

### at

```cpp
static double at(Ease e, double t) noexcept
```

Normalized evaluation, t in [0,1] to the current progress ratio; Back/Elastic/Spring/Bounce may exceed the range

### at

```cpp
static double at(Ease e, double t, double start, double end) noexcept
```

Range evaluation, t in [0,1] to the current value mapped into [start,end]
