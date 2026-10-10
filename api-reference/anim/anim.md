---
title: "Anim"
---

# Anim <Badge type="info" text="类" />

**头文件：** `#include <hiyui/anim/anim.h>`

**命名空间：** `hiyui`

lv_anim 链式构建器

默认缓动 Ease::InOut。链式配置后 `start()` 启动。

## 公开方法

### Anim

```cpp
Anim(void *var, AnimExecCb execCb)
```

内部存储，构建器自持 lv_anim_t，start 后由 LVGL 管理副本

### Anim

```cpp
Anim(lv_anim_t &external, void *var, AnimExecCb execCb)
```

外部绑定，操作传入的 lv_anim_t 成员，用于组件既有成员 anim

### ease

```cpp
Anim & ease(Ease e)
```

设置缓动算法，覆盖默认 `Ease::InOut`

### playback

```cpp
Anim & playback(uint32_t ms)
```

设置回放时长，毫秒，0 = 不回放

### repeat

```cpp
Anim & repeat(int32_t count)
```

设置重复次数，LVGL 语义，1 = 单次，LV_ANIM_REPEAT_INFINITE = 无限

### onReady

```cpp
Anim & onReady(AnimReadyCb cb)
```

设置动画离开运行集回调，自然完成、被 stop 或被同目标新动画替换时触发

### onCompleted

```cpp
Anim & onCompleted(AnimReadyCb cb)
```

设置自然完成回调，全部 repeat / playback 结束后触发一次

### onFinished

```cpp
Anim & onFinished(AnimTargetCb cb)
```

全部回放和重复自然结束时调用；停止和替换不调用。

### onRemoved

```cpp
Anim & onRemoved(AnimTargetCb cb)
```

自然结束、停止或替换时调用一次，可用于释放目标资源。

### start

```cpp
lv_anim_t * start()
```

启动动画，返回 LVGL 动画句柄

## 静态方法

### stop

```cpp
static void stop(void *var, AnimExecCb cb)
```

停止目标上匹配 execCb 的所有动画

### running

```cpp
static bool running(void *var, AnimExecCb cb=nullptr)
```

是否存在匹配的动画，包含延迟阶段；cb 为空时匹配目标上所有动画。

### retarget

```cpp
static bool retarget(void *var, AnimExecCb cb, int32_t to)
```

更新运行中动画的终点，保留已用时间；未找到时返回 false。
