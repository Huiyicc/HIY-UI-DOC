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

### hiyui_anim_exec_ex_fn

```c
typedef void(HIYUI_CALL * hiyui_anim_exec_ex_fn) (void *var, int32_t value)
```

### hiyui_anim_notify_ex_fn

```c
typedef void(HIYUI_CALL * hiyui_anim_notify_ex_fn) (void *var)
```

## Functions

### hiyui_anim_start

```c
HIYUI_API void HIYUI_CALL hiyui_anim_start(void *var, const hiyui_anim_props_t *props)
```

Starts an animation. After start it is managed by the underlying layer; the caller keeps no handle.

Animation target object, non-NULL, usually a widget handle. Configuration. Does not start when var, props, or exec_cb is empty.

### hiyui_anim_stop

```c
HIYUI_API void HIYUI_CALL hiyui_anim_stop(void *var, hiyui_anim_exec_fn cb)
```

Stops all animations matching exec_cb on the target. No-op when var or cb is empty.

### hiyui_anim_running

```c
HIYUI_API int HIYUI_CALL hiyui_anim_running(void *var, hiyui_anim_exec_fn cb)
```

Includes delayed animations; NULL cb matches all animations for var.

### hiyui_anim_stop_all

```c
HIYUI_API void HIYUI_CALL hiyui_anim_stop_all(void *var)
```

Stop all animations for a target; NULL is ignored.

### hiyui_anim_retarget

```c
HIYUI_API int HIYUI_CALL hiyui_anim_retarget(void *var, hiyui_anim_exec_fn cb, int32_t end)
```

### hiyui_anim_start_ex

```c
HIYUI_API void HIYUI_CALL hiyui_anim_start_ex(void *var, const hiyui_anim_props_ex_t *props)
```

Starts an animation with stdcall callbacks; fields match hiyui_anim_props_t. var, props, or exec_cb being empty does not start the animation.

### hiyui_anim_start_to

```c
HIYUI_API void HIYUI_CALL hiyui_anim_start_to(void *var, int32_t start, int32_t end, uint32_t duration, hiyui_ease_t ease, uint32_t delay, uint32_t playback, int32_t repeat_count, hiyui_anim_exec_ex_fn exec_cb, hiyui_anim_notify_ex_fn finished_cb, hiyui_anim_notify_ex_fn removed_cb)
```

Flat-parameter variant of hiyui_anim_start_ex that assembles the props struct internally. var 或 exec_cb 为空时不启动；duration、delay、playback 单位毫秒；repeat_count 1 单次，-1 无限，0 视为 1。
