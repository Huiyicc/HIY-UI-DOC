---
title: "video.h"
---

# video.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/video.h>`

File and network video playback; operations and callbacks are limited to the UI thread. A non-NULL widget argument must be a Video that is not yet destroyed. NULL arguments make commands no-ops. When FFmpeg is not enabled, creation returns NULL, queries return an empty state, and subscriptions return failure.

## 视频事件订阅

### hiyui_video_on_state_changed

```c
HIYUI_API int HIYUI_CALL hiyui_video_on_state_changed(hiyui_widget_t *widget, hiyui_video_state_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_video_on_position_changed

```c
HIYUI_API int HIYUI_CALL hiyui_video_on_position_changed(hiyui_widget_t *widget, hiyui_video_position_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Notifies the position roughly every 100 milliseconds during playback. The unit is milliseconds.

### hiyui_video_on_error

```c
HIYUI_API int HIYUI_CALL hiyui_video_on_error(hiyui_widget_t *widget, hiyui_video_error_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

## Macros

### HIYUI_VIDEO_TIME_UNKNOWN

Unknown video duration, in milliseconds.

## Enums

### hiyui_video_playback_state_t

| Value | Description |
|---|---|
| `HIYUI_VIDEO_EMPTY` = 0 |  |
| `HIYUI_VIDEO_LOADING` |  |
| `HIYUI_VIDEO_PAUSED` |  |
| `HIYUI_VIDEO_PLAYING` |  |
| `HIYUI_VIDEO_STOPPED` |  |
| `HIYUI_VIDEO_ENDED` |  |
| `HIYUI_VIDEO_ERROR` |  |
| `HIYUI_VIDEO_RECONNECTING` | Waiting for or performing automatic reconnection; the last frame and the playback intent are kept. |

### hiyui_video_decoder_t

| Value | Description |
|---|---|
| `HIYUI_VIDEO_DECODER_NONE` = 0 |  |
| `HIYUI_VIDEO_DECODER_SOFTWARE` |  |
| `HIYUI_VIDEO_DECODER_D3D11` |  |

## Type Aliases

### hiyui_video_state_fn

```c
typedef void(HIYUI_CALL * hiyui_video_state_fn) (hiyui_video_playback_state_t state, void *user_data)
```

### hiyui_video_position_fn

```c
typedef void(HIYUI_CALL * hiyui_video_position_fn) (int64_t position_ms, void *user_data)
```

### hiyui_video_error_fn

```c
typedef void(HIYUI_CALL * hiyui_video_error_fn) (const char *message, void *user_data)
```

message is valid only within the current callback; the pointer must not be saved.

## Functions

### hiyui_video_available

```c
HIYUI_API int HIYUI_CALL hiyui_video_available(void)
```

Returns 1 when FFmpeg is enabled at compile time. Does not indicate that the current media or audio device is usable.

### hiyui_video_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_video_create(hiyui_widget_t *parent, const hiyui_video_props_t *props)
```

Creates a video widget inside the parent; the playback session is released when the parent is deleted. Automatic reconnection applies to HTTP(S), RTSP(S), RTMP(S), TCP, UDP, RTP, SRT, and RIST. Seekable sources resume from the interrupted position; other sources reconnect and reset the timeline. Reconnection keeps the paused state and the latest seek request; exhausted retries or permanent errors enter ERROR. With reconnection enabled, the end of a non-seekable stream with unknown duration is treated as a stream interruption. During reconnection, pause sets the paused state after recovery; stop, changing the source, and destruction cancel reconnection.

NULL uses the default configuration. A borrowed widget. Returns NULL when parent is NULL, the feature is not enabled, or creation fails.

### hiyui_video_set_src

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_src(hiyui_widget_t *widget, const char *source)
```

Copies and asynchronously loads the source, honoring the initial autoplay. The same source is reloaded too. NULL or an empty string clears it.

### hiyui_video_play

```c
HIYUI_API void HIYUI_CALL hiyui_video_play(hiyui_widget_t *widget)
```

Starts or resumes playback. After stop, end, or error, the saved source is reopened; an empty source is a no-op.

### hiyui_video_pause

```c
HIYUI_API void HIYUI_CALL hiyui_video_pause(hiyui_widget_t *widget)
```

Pauses audio and the clock while keeping the picture. Repeated calls have no additional effect.

### hiyui_video_stop

```c
HIYUI_API void HIYUI_CALL hiyui_video_stop(hiyui_widget_t *widget)
```

Releases the session and clears the picture and time, keeping the source. Playing again starts from the beginning.

### hiyui_video_seek

```c
HIYUI_API void HIYUI_CALL hiyui_video_seek(hiyui_widget_t *widget, int64_t position_ms)
```

Seeks asynchronously and keeps the playing or paused state; the position is clamped to the media range. No-op when not loaded or not seekable; among consecutive requests, only the last not-yet-executed one takes effect.

### hiyui_video_set_fit

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_fit(hiyui_widget_t *widget, hiyui_image_fit_t fit)
```

HIYUI_IMAGE_FIT_DEFAULT uses Contain.

### hiyui_video_set_loop

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_loop(hiyui_widget_t *widget, int loop)
```

A non-zero value enables looping; effective only for seekable media.

### hiyui_video_set_muted

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_muted(hiyui_widget_t *widget, int muted)
```

A non-zero value enables muting. The saved volume is unchanged.

### hiyui_video_set_volume

```c
HIYUI_API void HIYUI_CALL hiyui_video_set_volume(hiyui_widget_t *widget, int volume)
```

The volume is clamped to 0-100. 0 means silence, and the setting is saved even while muted.

### hiyui_video_get_state

```c
HIYUI_API hiyui_video_playback_state_t HIYUI_CALL hiyui_video_get_state(hiyui_widget_t *widget)
```

Returns HIYUI_VIDEO_EMPTY for NULL or when the feature is not enabled.

### hiyui_video_get_position_ms

```c
HIYUI_API int64_t HIYUI_CALL hiyui_video_get_position_ms(hiyui_widget_t *widget)
```

Position in milliseconds. Returns 0 when not loaded, NULL, or the feature is not enabled.

### hiyui_video_get_duration_ms

```c
HIYUI_API int64_t HIYUI_CALL hiyui_video_get_duration_ms(hiyui_widget_t *widget)
```

Duration in milliseconds. Returns HIYUI_VIDEO_TIME_UNKNOWN when the duration is unknown, the widget is not loaded or NULL, or the feature is not enabled.

### hiyui_video_seekable

```c
HIYUI_API int HIYUI_CALL hiyui_video_seekable(hiyui_widget_t *widget)
```

Returns 1 when loaded and seekable, otherwise 0.

### hiyui_video_get_error

```c
HIYUI_API size_t HIYUI_CALL hiyui_video_get_error(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

Copies the error text into a caller buffer. An empty string is written when there is no error, the widget is NULL, or the feature is not enabled.

May be NULL; when non-NULL and capacity is greater than 0, the text is always zero-terminated. Buffer capacity in bytes. Bytes needed for the full text, including the terminating zero. Truncated when the buffer is too small.

### hiyui_video_get_statistics

```c
HIYUI_API void HIYUI_CALL hiyui_video_get_statistics(hiyui_widget_t *widget, hiyui_video_statistics_t *statistics)
```

Writes a copy of the statistics. The output is all zeros for a NULL widget, when not loaded, stopped, or the feature is not enabled.

No-op when NULL.
