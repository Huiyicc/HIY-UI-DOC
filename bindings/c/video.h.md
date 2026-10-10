---
title: "video.h"
---

# video.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/video.h>`

文件与网络视频播放，操作和回调均限于 UI 线程。 非 NULL 组件参数必须为尚未销毁的 Video；NULL 参数使命令无操作。 未启用 FFmpeg 时创建返回 NULL，查询返回空状态，订阅返回失败。

## 视频事件订阅

### hiyui_video_on_state_changed

```c
HIYUI_API int HIYUI_CALL hiyui_video_on_state_changed(hiyui_widget_t *widget, hiyui_video_state_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_video_on_position_changed

```c
HIYUI_API int HIYUI_CALL hiyui_video_on_position_changed(hiyui_widget_t *widget, hiyui_video_position_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

播放期间约每 100 毫秒通知位置，单位为毫秒。

### hiyui_video_on_error

```c
HIYUI_API int HIYUI_CALL hiyui_video_on_error(hiyui_widget_t *widget, hiyui_video_error_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

## 宏定义

### HIYUI_VIDEO_TIME_UNKNOWN

未知视频时长，单位为毫秒。

## 枚举

### hiyui_video_playback_state_t

| 值 | 说明 |
|---|---|
| `HIYUI_VIDEO_EMPTY` = 0 |  |
| `HIYUI_VIDEO_LOADING` |  |
| `HIYUI_VIDEO_PAUSED` |  |
| `HIYUI_VIDEO_PLAYING` |  |
| `HIYUI_VIDEO_STOPPED` |  |
| `HIYUI_VIDEO_ENDED` |  |
| `HIYUI_VIDEO_ERROR` |  |
| `HIYUI_VIDEO_RECONNECTING` | 等待或执行自动重连，保留最后画面与播放意图。 |

### hiyui_video_decoder_t

| 值 | 说明 |
|---|---|
| `HIYUI_VIDEO_DECODER_NONE` = 0 |  |
| `HIYUI_VIDEO_DECODER_SOFTWARE` |  |
| `HIYUI_VIDEO_DECODER_D3D11` |  |

## 类型别名

### hiyui_video_state_fn

```c
typedef void(* hiyui_video_state_fn) (hiyui_video_playback_state_t state, void *user_data)
```

### hiyui_video_position_fn

```c
typedef void(* hiyui_video_position_fn) (int64_t position_ms, void *user_data)
```

### hiyui_video_error_fn

```c
typedef void(* hiyui_video_error_fn) (const char *message, void *user_data)
```

message 仅在当前回调内有效，不得保存该指针。

## 函数

### hiyui_video_available

```c
HIYUI_API int HIYUI_CALL hiyui_video_available(void)
```

**返回值：** 编译时启用 FFmpeg 返回 1；不表示当前媒体或音频设备可用。

### hiyui_video_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_video_create(hiyui_widget_t *parent, const hiyui_video_props_t *props)
```

在父组件内创建视频组件，父组件删除时释放播放会话。 自动重连用于 HTTP(S)、RTSP(S)、RTMP(S)、TCP、UDP、RTP、SRT 和 RIST。 可寻址源恢复中断位置；其余源重新接入并重置时间线。 重连保留暂停状态和最新跳转请求，重试耗尽或永久错误进入 ERROR。 开启重连时，不可寻址且未知时长的流结束视为断流。 重连期间 pause 设置恢复后的暂停状态；stop、换源和销毁取消重连。

| 参数 | 说明 |
|---|---|
| `props` | NULL 使用默认配置。 |


**返回值：** 借用组件；parent 为 NULL、功能未启用或创建失败时返回 NULL。

### hiyui_video_set_src

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_src(hiyui_widget_t *widget, const char *source)
```

复制并异步加载源，遵循初始 autoplay；同源也重新加载，NULL 或空串清空。

### hiyui_video_play

```c
HIYUI_API void HIYUI_CALL hiyui_video_play(hiyui_widget_t *widget)
```

开始或恢复播放；停止、结束或错误后重新打开保存的源，空源无操作。

### hiyui_video_pause

```c
HIYUI_API void HIYUI_CALL hiyui_video_pause(hiyui_widget_t *widget)
```

暂停声音和时钟，保留画面；重复调用无额外效果。

### hiyui_video_stop

```c
HIYUI_API void HIYUI_CALL hiyui_video_stop(hiyui_widget_t *widget)
```

释放会话并清空画面和时间，保留源；再次播放从头开始。

### hiyui_video_seek

```c
HIYUI_API void HIYUI_CALL hiyui_video_seek(hiyui_widget_t *widget, int64_t position_ms)
```

异步跳转并保持播放或暂停状态，位置钳制到媒体范围。 未加载或不可寻址时无操作；连续请求以尚未执行的最后一次为准。

### hiyui_video_set_fit

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_fit(hiyui_widget_t *widget, hiyui_image_fit_t fit)
```

| 参数 | 说明 |
|---|---|
| `fit` | HIYUI_IMAGE_FIT_DEFAULT 使用 Contain。 |

### hiyui_video_set_loop

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_loop(hiyui_widget_t *widget, int loop)
```

非零启用循环，仅对可寻址媒体生效。

### hiyui_video_set_muted

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_muted(hiyui_widget_t *widget, int muted)
```

非零启用静音，保存的音量不变。

### hiyui_video_set_volume

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_volume(hiyui_widget_t *widget, int volume)
```

音量钳制到 0–100；0 表示无声，静音期间仍保存设置。

### hiyui_video_get_state

```c
HIYUI_API hiyui_video_playback_state_t HIYUI_CALL hiyui_video_get_state(hiyui_widget_t *widget)
```

**返回值：** NULL 或功能未启用时返回 HIYUI_VIDEO_EMPTY。

### hiyui_video_get_position_ms

```c
HIYUI_API int64_t HIYUI_CALL hiyui_video_get_position_ms(hiyui_widget_t *widget)
```

**返回值：** 毫秒位置；未加载、NULL 或功能未启用时返回 0。

### hiyui_video_get_duration_ms

```c
HIYUI_API int64_t HIYUI_CALL hiyui_video_get_duration_ms(hiyui_widget_t *widget)
```

**返回值：** 毫秒时长；未知、未加载、NULL 或功能未启用时返回 HIYUI_VIDEO_TIME_UNKNOWN。

### hiyui_video_seekable

```c
HIYUI_API int HIYUI_CALL hiyui_video_seekable(hiyui_widget_t *widget)
```

**返回值：** 已加载且可寻址时返回 1，其余返回 0。

### hiyui_video_get_error

```c
HIYUI_API size_t HIYUI_CALL hiyui_video_get_error(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

将错误文本复制到调用方缓冲，无错误、NULL 或功能未启用时为空串。

| 参数 | 说明 |
|---|---|
| `buffer` | 可为 NULL；非空且 capacity 大于 0 时始终以零结尾。 |
| `capacity` | 缓冲容量，单位为字节。 |


**返回值：** 完整文本所需字节数，包含结尾的零；缓冲不足时截断。

### hiyui_video_get_statistics

```c
HIYUI_API void HIYUI_CALL hiyui_video_get_statistics(hiyui_widget_t *widget, hiyui_video_statistics_t *statistics)
```

写入统计副本，NULL 组件、未加载、停止或功能未启用时输出全零。

| 参数 | 说明 |
|---|---|
| `statistics` | NULL 时无操作。 |
