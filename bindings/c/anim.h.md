---
title: "anim.h"
---

# anim.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/anim.h>`

动画（lv_anim 链式构建器的 C 封装）

## 类型别名

### hiyui_anim_exec_fn

```c
typedef void(* hiyui_anim_exec_fn) (void *var, int32_t value)
```

每帧执行回调，var 为目标对象，value 为当前值。

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

## 函数

### hiyui_anim_start

```c
HIYUI_API void HIYUI_CALL hiyui_anim_start(void *var, const hiyui_anim_props_t *props)
```

启动动画；启动后由底层管理，无需调用方维护句柄。

| 参数 | 说明 |
|---|---|
| `var` | 动画目标对象（非空，通常为 widget 句柄） |
| `props` | 配置；var 或 props 或 exec_cb 为空时不启动 |

### hiyui_anim_stop

```c
HIYUI_API void HIYUI_CALL hiyui_anim_stop(void *var, hiyui_anim_exec_fn cb)
```

停止目标上匹配 exec_cb 的所有动画；var 或 cb 为空时无操作。

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

启动动画，回调以 stdcall 调用，字段语义同 hiyui_anim_props_t。

### hiyui_anim_start_to

```c
HIYUI_API void HIYUI_CALL hiyui_anim_start_to(void *var, int32_t start, int32_t end, uint32_t duration, hiyui_ease_t ease, uint32_t delay, uint32_t playback, int32_t repeat_count, hiyui_anim_exec_ex_fn exec_cb, hiyui_anim_notify_ex_fn finished_cb, hiyui_anim_notify_ex_fn removed_cb)
```

hiyui_anim_start_ex 的平铺参数版，内部组装属性结构体。
