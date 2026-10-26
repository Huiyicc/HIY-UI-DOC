---
title: "lottie.h"
---

# lottie.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/lottie.h>`

Lottie 矢量动画组件

## 函数

### hiyui_lottie_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_lottie_create(hiyui_widget_t *parent, const hiyui_lottie_props_t *props)
```

创建 Lottie 动画组件

src_size 大于 0 时 src 为 JSON 数据并在创建时复制，等于 0 时 src 为 UTF-8 文件路径并复制。props 为 NULL 时使用默认值，autoplay / loop 零值视为 TRUE，width / height 零值视为 96。



**返回值：** 组件句柄，parent 为 NULL 时返回 NULL

### hiyui_lottie_set_src

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_src(hiyui_widget_t *lottie, const char *path)
```

切换动画文件，路径复制；NULL 无操作

### hiyui_lottie_set_src_data

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_src_data(hiyui_widget_t *lottie, const void *data, uint32_t size)
```

切换内嵌 JSON 数据，返回前复制，调用后数据可释放；NULL 或 size 为 0 无操作

### hiyui_lottie_play

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_play(hiyui_widget_t *lottie)
```

恢复播放；NULL 无操作

### hiyui_lottie_pause

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_pause(hiyui_widget_t *lottie)
```

暂停播放；NULL 无操作

### hiyui_lottie_restart

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_restart(hiyui_widget_t *lottie)
```

回到第 0 帧并播放；NULL 无操作

### hiyui_lottie_is_playing

```c
HIYUI_API int HIYUI_CALL hiyui_lottie_is_playing(hiyui_widget_t *lottie)
```

是否正在播放

**返回值：** 1 = 播放中，0 = 暂停或句柄为 NULL

### hiyui_lottie_set_loop

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_loop(hiyui_widget_t *lottie, hiyui_bool_t loop)
```

设置循环模式，HIYUI_BOOL_DEFAULT 视为 TRUE；NULL 无操作

### hiyui_lottie_set_speed

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_speed(hiyui_widget_t *lottie, float multiplier)
```

设置播放速度倍率，须大于 0，否则无操作；NULL 无操作

### hiyui_lottie_set_recolor

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_recolor(hiyui_widget_t *lottie, uint32_t color, uint8_t opa)
```

设置重着色，作用于每一帧；NULL 无操作

### hiyui_lottie_get_progress

```c
HIYUI_API int HIYUI_CALL hiyui_lottie_get_progress(hiyui_widget_t *lottie, float *out)
```

读取当前循环进度

| 参数 | 说明 |
|---|---|
| `out` | 接收 0..1，未加载源时为 0 |


**返回值：** 1 = 成功，0 = 参数为 NULL

### hiyui_lottie_get_duration

```c
HIYUI_API int HIYUI_CALL hiyui_lottie_get_duration(hiyui_widget_t *lottie, uint32_t *out)
```

读取单次循环时长

| 参数 | 说明 |
|---|---|
| `out` | 接收毫秒，含速度倍率，未加载源时为 0 |


**返回值：** 1 = 成功，0 = 参数为 NULL
