---
title: "anim.h"
---

# anim.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/anim.h>`

Animations, a C wrapper over the lv_anim chained builder

## Type Aliases

### hiyui_anim_exec_fn

```c
typedef void(* hiyui_anim_exec_fn) (void *var, int32_t value)
```

Per-frame callback. var is the target object and value the current value.

### hiyui_anim_notify_fn

```c
typedef void(* hiyui_anim_notify_fn) (void *var)
```

Receives the animation target.

## Functions

### hiyui_anim_start

```c
void hiyui_anim_start(void *var, const hiyui_anim_props_t *props)
```

Starts an animation. After start it is managed by the underlying layer; the caller keeps no handle.

Animation target object, non-NULL, usually a widget handle. Configuration. Does not start when var, props, or exec_cb is empty.

### hiyui_anim_stop

```c
void hiyui_anim_stop(void *var, hiyui_anim_exec_fn cb)
```

Stops all animations matching exec_cb on the target. No-op when var or cb is empty.

### hiyui_anim_running

```c
int hiyui_anim_running(void *var, hiyui_anim_exec_fn cb)
```

Includes delayed animations; NULL cb matches all animations for var.

### hiyui_anim_stop_all

```c
void hiyui_anim_stop_all(void *var)
```

Stop all animations for a target; NULL is ignored.

### hiyui_anim_retarget

```c
int hiyui_anim_retarget(void *var, hiyui_anim_exec_fn cb, int32_t end)
```
