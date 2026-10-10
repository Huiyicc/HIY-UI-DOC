---
title: "Anim"
---

# Anim <Badge type="info" text="Class" />

**Header:** `#include <hiyui/anim/anim.h>`

**Namespace:** `hiyui`

Chained builder for lv_anim

Defaults to Ease::InOut easing. After chained configuration, start() launches the animation.

## Public Methods

### Anim

```cpp
Anim(void *var, AnimExecCb execCb)
```

Internal storage; the builder owns the lv_anim_t, and LVGL manages a copy after start

### Anim

```cpp
Anim(lv_anim_t &external, void *var, AnimExecCb execCb)
```

External binding, operates on the passed lv_anim_t member, for an existing component member anim

### ease

```cpp
Anim & ease(Ease e)
```

Sets the easing algorithm, overriding the default Ease::InOut

### playback

```cpp
Anim & playback(uint32_t ms)
```

Sets the playback duration in milliseconds; 0 = no playback

### repeat

```cpp
Anim & repeat(int32_t count)
```

Sets the repeat count with LVGL semantics; 1 = once, LV_ANIM_REPEAT_INFINITE = infinite

### onReady

```cpp
Anim & onReady(AnimReadyCb cb)
```

Sets the callback for when the animation leaves the running set; fires on natural completion, on stop, or on replacement by a new animation on the same target

### onCompleted

```cpp
Anim & onCompleted(AnimReadyCb cb)
```

Sets the natural completion callback; fires once after all repeat and playback runs finish

### onFinished

```cpp
Anim & onFinished(AnimTargetCb cb)
```

Called when all playback and repeat runs finish naturally; not called on stop or replacement.

### onRemoved

```cpp
Anim & onRemoved(AnimTargetCb cb)
```

Called once on natural finish, stop, or replacement; can be used to release target resources.

### start

```cpp
lv_anim_t * start()
```

Starts the animation and returns the LVGL animation handle

## Static Methods

### stop

```cpp
static void stop(void *var, AnimExecCb cb)
```

Stops all animations on the target matching execCb

### running

```cpp
static bool running(void *var, AnimExecCb cb=nullptr)
```

Whether a matching animation exists, including the delay phase; when cb is null, matches all animations on the target.

### retarget

```cpp
static bool retarget(void *var, AnimExecCb cb, int32_t to)
```

Updates the end value of a running animation, keeping elapsed time; returns false when not found.
