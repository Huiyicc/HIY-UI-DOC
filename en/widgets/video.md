---
title: Video Playback
---

## Video Playback

`Video` plays local files or network video, with audio, pause, stop, and millisecond seeking. Enabling it requires `HIYUI_ENABLE_FFMPEG=ON`, a native SDL backend, and an FFmpeg 6 or newer LGPL shared-library SDK. Formats, decoders, and network protocols depend on the actual FFmpeg build.

### Header file

The widget declaration is in the following header; with FFmpeg enabled it is also included by `hiyui/hiyui.h`.

```cpp
#include <hiyui/widget/video.h>
```

### Minimal example

Run on the UI thread; `parent` is a mounted `Widget`. Pass the path as UTF-8.

```cpp
using namespace hiyui;
Video video({.src = "example.mp4", .height = 320});
video.init(parent);
video.play();
```

### Props

| Field | Type | Default | Description |
|---|---|---|---|
| `src` | `const char *` | `nullptr` | File path or network URL, copied at construction; a null pointer or empty string means no source |
| `width` | `int` | `HIYUI_AUTO` | Logical pixels; the auto value fills the parent container width |
| `height` | `int` | `HIYUI_AUTO` | Logical pixels; the auto value fills the parent container height |
| `fit` | `ImageFit` | `ImageFit::Contain` | Frame scaling and alignment |
| `autoplay` | `bool` | `false` | Whether to play after loading; when off, the first frame is shown paused |
| `loop` | `bool` | `false` | Restarts seekable media from the beginning after it ends; ignored for live streams |
| `muted` | `bool` | `false` | Mutes audio while keeping the saved volume |
| `volume` | `int` | `100` | Volume clamped to 0–100; 0 means silence |
| `ioTimeoutMs` | `int` | `10000` | Timeout in milliseconds for open and probe, a single seek, and consecutive packet-read waits; non-positive values use 10000 |
| `reconnectAttempts` | `int` | `0` | Maximum reconnect attempts per interruption; non-positive values disable it, and the count restarts after frames resume |
| `reconnectDelayMs` | `int` | `1000` | Milliseconds to wait before each reconnect; non-positive values use 1000 |

`HIYUI_AUTO` and the time sentinels are described in [Constants and Sentinel Values](/en/core/constants). The widget has no built-in control bar; combine `Button`, `Slider`, and `Switch`. The component gallery (`test/demo/component_gallery`) provides examples of file selection, URL input, and playback controls.

### Runtime methods

The chained methods in the table below return `Video &` for lvalues and `Video &&` for rvalues. All operations and event callbacks run on the UI thread; loading, playback, and seeking complete asynchronously.

| Method | Returns | Description |
|---|---|---|
| `init(parent)` | `Video &` / `Video &&` | Mounts to the parent widget and loads the initial source |
| `src(source)` | `Video &` / `Video &&` | Copies and loads a source, honoring the initial `autoplay`; the same source is reloaded, and a null pointer or empty string clears it |
| `play()` | `Video &` / `Video &&` | Starts or resumes; after stop, end, or error, reopens the saved source; no-op without a source |
| `pause()` | `Video &` / `Video &&` | Pauses audio and the playback clock while keeping the frame; during reconnection, sets the pause state applied after recovery; repeated calls have no additional effect |
| `stop()` | `Video &` / `Video &&` | Cancels reconnection, releases the session, and clears the frame and time while keeping the source; the next play starts from the beginning |
| `seek(positionMs)` | `Video &` / `Video &&` | Seeks to a millisecond position and keeps the playing or paused state; clamped to the media range, no-op when not loaded or not seekable |
| `fit(value)` | `Video &` / `Video &&` | Changes frame scaling and alignment |
| `loop(value)` | `Video &` / `Video &&` | Toggles looping; applies only to seekable media |
| `muted(value)` | `Video &` / `Video &&` | Toggles mute; the saved volume is unchanged |
| `volume(value)` | `Video &` / `Video &&` | Sets the volume, clamped to 0–100 |
| `playbackState()` | `VideoPlaybackState` | `Empty` when unmounted or the widget is no longer valid |
| `positionMs()` | `int64_t` | Current position in milliseconds; 0 when not loaded or invalid |
| `durationMs()` | `int64_t` | Total duration in milliseconds; `HIYUI_VIDEO_TIME_UNKNOWN` when unknown, not loaded, or invalid |
| `seekable()` | `bool` | `true` when loaded and seeking is supported |
| `errorMessage()` | `std::string` | An independent copy of the error text; an empty string when there is no error |
| `statistics()` | `VideoStatistics` | An independent copy of the current session statistics; all counters are zero when not loaded, stopped, or invalid |
| `onStateChanged(callback, handle)` | `Video &` / `Video &&` | Appends a state subscription; the callback receives `VideoPlaybackState` or no arguments |
| `onPositionChanged(callback, handle)` | `Video &` / `Video &&` | Appends a position subscription; the callback receives an `int64_t` millisecond position or no arguments; notified roughly every 100 ms during playback |
| `onError(callback, handle)` | `Video &` / `Video &&` | Appends an error subscription; the callback receives the error string or no arguments |

The event `handle` is an optional `EventHandle *`, default `nullptr`; call `off()` to unbind. Destroying `EventHandle` does not unbind automatically; subscriptions are cleaned up when the widget is deleted.

### Playback states

| Value | Description |
|---|---|
| `VideoPlaybackState::Empty` | No source set |
| `VideoPlaybackState::Loading` | Opening the media or preparing the first frame |
| `VideoPlaybackState::Paused` | Paused, keeping the frame at the current position |
| `VideoPlaybackState::Playing` | Playing |
| `VideoPlaybackState::Stopped` | Stopped and the session released; the saved source can be reopened |
| `VideoPlaybackState::Ended` | Media playback finished |
| `VideoPlaybackState::Error` | Loading or playback failed; the reason is available through `errorMessage()` |
| `VideoPlaybackState::Reconnecting` | Waiting for or performing automatic reconnection, keeping the last frame and the playback intent |

Playback state is independent of widget interaction state such as `Widget::enabled()`. Hiding or disabling the widget is not the same as pausing; call `pause()` or `stop()` when the application needs to stop audio.

### Network timeout and reconnection

`ioTimeoutMs` limits open and probe, a single seek, and consecutive packet-read waits; waiting while paused does not count toward the packet-read timeout. Automatic reconnection is disabled by default and is enabled by setting a positive `reconnectAttempts`; the initial connection does not count toward reconnect attempts.

Automatic reconnection applies to HTTP(S), RTSP(S), RTMP(S), TCP, UDP, RTP, SRT, and RIST URLs. Retryable connection or read failures move the widget to `Reconnecting`; after frames resume, the widget continues playing or stays paused, and the retry count for that interruption restarts. When retries are exhausted or a permanent error occurs, the widget enters `Error` and reports the error through `onError()`.

A seekable source resumes from the interrupted position or the latest `seek()` request; a non-seekable source reconnects and resets its timeline. With reconnection enabled, the end of a non-seekable network stream of unknown duration is treated as a stream interruption; the normal end of media with a known duration is still `Ended`.

`pause()` can set the pause state applied after recovery during reconnection. `stop()`, replacing or clearing the source, and destroying the widget all cancel reconnection.

The following sets a 10-second I/O timeout for network video, up to 3 reconnects per interruption with a 1-second interval; replace the URL with the actual service.

```cpp
Video stream({.src = "https://example.com/live.ts",
              .autoplay = true,
              .ioTimeoutMs = 10000,
              .reconnectAttempts = 3,
              .reconnectDelayMs = 1000});
stream.init(parent);
```

### Frame fit

| Value | Description |
|---|---|
| `ImageFit::Default` | Original display size, aligned to the top-left corner |
| `ImageFit::Center` | Original display size, centered |
| `ImageFit::Stretch` | Stretched to the widget content area |
| `ImageFit::Contain` | Keeps the aspect ratio, fully visible and centered; the remaining area shows the widget background |
| `ImageFit::Cover` | Keeps the aspect ratio, covers the content area with centered cropping |
| `ImageFit::Tile` | Tiles the frame across the content area |

The default background is black and can be changed through the widget style. Widget size follows layout and DPI updates; after the parent container size changes, the frame is re-fitted with the current `fit`.

### Hardware decoding and presentation

`HIYUI_VIDEO_HARDWARE` defaults to `ON`. D3D11VA hardware decoding is available with FFmpeg enabled, the Windows native SDL backend, and `HIYUI_RENDER_BACKEND` set to `AUTO` or `SW`. At runtime it also requires a D3D11 renderer, a shareable device, and support for the current codec in both the GPU and the FFmpeg build; software decoding is used when the conditions are not met. Other platforms, other render backends, or an `OFF` setting use software decoding.

NV12/P010 hardware frames can be composited on the GPU. Image effects that require CPU processing, some frame formats, and per-pixel transparent windows produce readbacks; hardware decoding does not mean zero readbacks. The GPU presentation path includes a copy within video memory and provides no end-to-end zero-copy guarantee.

### Playback statistics

`statistics()` returns `VideoStatistics`. Counters accumulate within the current session; seek and automatic reconnection do not reset them, and stop or an explicit source reopen resets them. The decoder reflects the frames actually produced.

| Value | Description |
|---|---|
| `VideoDecoder::None` | No video frame decoded yet |
| `VideoDecoder::Software` | Software decoding |
| `VideoDecoder::D3D11` | D3D11VA hardware decoding |

| Field | Type | Default | Description |
|---|---|---|---|
| `decoder` | `VideoDecoder` | `VideoDecoder::None` | Decoder used for the most recently decoded frame |
| `width` | `int` | `0` | Pixel width of the most recently decoded frame |
| `height` | `int` | `0` | Pixel height of the most recently decoded frame |
| `decodedFrames` | `uint64_t` | `0` | Number of decoded video frames |
| `droppedFrames` | `uint64_t` | `0` | Frames skipped for falling behind the playback clock, excluding seek prefetch |
| `gpuFrames` | `uint64_t` | `0` | Hardware frames submitted directly for GPU composition, excluding repeated draws |
| `readbackCount` | `uint64_t` | `0` | Number of times hardware frames or composited layers were read back to the CPU |
| `decodeTimeUs` | `uint64_t` | `0` | Cumulative microseconds in decode calls, including waits inside the call |
| `conversionTimeUs` | `uint64_t` | `0` | Cumulative microseconds for video frame preparation and CPU pixel conversion |

`gpuFrames` does not represent the actual displayed frame rate, and the two duration fields do not represent GPU execution time. `readbackCount` counts readback operations and cannot be converted into a number of video frames.

### Advanced usage

Adds a play button to a mounted `video`; the callback stores the `Ref` by value and stops playing once the target is deleted.

```cpp
Ref<Video> player(video);
Button({.text = "播放"}).init(parent).onClick([player] {
    if (player)
        player->play();
});
```

Seeks to the 10th second after the media loads; seeking while paused updates the frame and stays paused.

```cpp
if (video.seekable())
    video.seek(10'000);
```

For consecutive seek requests, only the last one not yet executed applies. A progress bar enables proportional dragging only when `seekable()` is `true` and `durationMs()` is greater than 0; live streams or unknown durations cannot compute a percentage from the duration.

Shows error text for a mounted `video`; the label reference becomes invalid when the page is deleted.

```cpp
Ref<Label> errorText;
Label().init(parent).ref(errorText).textColor(ThemeRole::Danger);
video.onError([errorText](const std::string &message) {
    if (errorText)
        errorText->text(message);
});
```

### Lifetime and scope

Deleting the parent widget stops playback and releases the session. `clean()` clears the internal frame and stops; a later `play()` reloads the saved source. The wrapper going out of scope does not delete a mounted widget; long-lived callbacks use `Ref<Video>` and check its validity before access.

Source, properties, and play, pause, and stop commands can be used before mounting; `seek()` requires the media to be loaded. Operations on an invalid wrapper have no effect, and queries return empty state.

The current version provides no camera enumeration, runtime decoder selection, or standalone player plugin loading API. Network playback capability depends on the protocol support of the linked libraries and on server behavior.

### C interface

The header is `hiyui/c/video.h`, also included by `hiyui/c/hiyui.h`. `hiyui_video_available()` reports whether the build enabled FFmpeg. When disabled it returns 0, creation returns `NULL`, and commands are no-ops; when enabled, opening media requires version-matched shared libraries.

Creates and plays a video in a C UI callback; `parent` is a valid parent widget handle.

```c
hiyui_video_props_t props = {0};
props.src = "example.mp4";
props.height = 320;
hiyui_widget_t *video = hiyui_video_create(parent, &props);
if (video)
    hiyui_video_play(video);
```

| Field | Type | Default | Description |
|---|---|---|---|
| `src` | `const char *` | `NULL` | Copies the UTF-8 path or URL at creation; an empty string means no source |
| `width` | `int` | `0` | Logical pixels; 0 or `HIYUI_AUTO` fills the parent container width |
| `height` | `int` | `0` | Logical pixels; 0 or `HIYUI_AUTO` fills the parent container height |
| `fit` | `hiyui_image_fit_t` | `HIYUI_IMAGE_FIT_DEFAULT` | Uses Contain; other values select the corresponding fit |
| `autoplay` | `hiyui_bool_t` | `HIYUI_BOOL_DEFAULT` | Treated as false |
| `loop` | `hiyui_bool_t` | `HIYUI_BOOL_DEFAULT` | Treated as false |
| `muted` | `hiyui_bool_t` | `HIYUI_BOOL_DEFAULT` | Treated as false |
| `volume` | `int` | `0` | Uses the default volume 100; other values are clamped to 0–100 |
| `io_timeout_ms` | `int` | `0` | Timeout in milliseconds for open and probe, a single seek, and consecutive packet-read waits; non-positive values use 10000 |
| `reconnect_attempts` | `int` | `0` | Maximum reconnect attempts per interruption; non-positive values disable it, and the count restarts after frames resume |
| `reconnect_delay_ms` | `int` | `0` | Milliseconds to wait before each reconnect; non-positive values use 1000 |

Default values in the C Props table come from zero initialization. Set `muted = HIYUI_BOOL_TRUE` for initial mute; at runtime, `hiyui_video_set_volume(video, 0)` sets the volume to 0. Boolean runtime methods use `int`, where 0 is off and non-zero is on.

| Method | Returns | Description |
|---|---|---|
| `hiyui_video_available()` | `int` | 1 when FFmpeg is enabled; does not indicate media or audio device availability |
| `hiyui_video_create(parent, props)` | `hiyui_widget_t *` | Borrowed widget; `props` may be `NULL`; returns `NULL` on a null parent, disabled FFmpeg, or failure |
| `hiyui_video_set_src(video, source)` | `void` | Copies and loads a source; honors the initial autoplay, the same source is reloaded, and a null pointer or empty string clears it |
| `hiyui_video_play(video)` | `void` | Starts or resumes; after stop, end, or error, reopens the source |
| `hiyui_video_pause(video)` | `void` | Pauses audio and the playback clock while keeping the frame; during reconnection, sets the pause state applied after recovery |
| `hiyui_video_stop(video)` | `void` | Cancels reconnection, releases the session, clears the frame and time, and keeps the source |
| `hiyui_video_seek(video, position_ms)` | `void` | Seeks asynchronously to a millisecond position and keeps the playing or paused state; no-op when not loaded or not seekable |
| `hiyui_video_set_fit(video, fit)` | `void` | Sets the frame fit; DEFAULT uses Contain |
| `hiyui_video_set_loop(video, loop)` | `void` | Toggles looping for seekable media |
| `hiyui_video_set_muted(video, muted)` | `void` | Toggles mute; the saved volume is unchanged |
| `hiyui_video_set_volume(video, volume)` | `void` | Clamps the volume to 0–100 |
| `hiyui_video_get_state(video)` | `hiyui_video_playback_state_t` | `HIYUI_VIDEO_EMPTY` for a null widget or disabled FFmpeg |
| `hiyui_video_get_position_ms(video)` | `int64_t` | Position in milliseconds; 0 when not loaded, a null widget, or disabled |
| `hiyui_video_get_duration_ms(video)` | `int64_t` | Duration in milliseconds; `HIYUI_VIDEO_TIME_UNKNOWN` when unknown, not loaded, a null widget, or disabled |
| `hiyui_video_seekable(video)` | `int` | 1 when loaded and seekable, otherwise 0 |
| `hiyui_video_get_error(video, buffer, capacity)` | `size_t` | Copies the error text; returns the byte count needed for the full text, including the terminating zero |
| `hiyui_video_get_statistics(video, statistics)` | `void` | Writes a copy of the statistics; no-op when the output pointer is `NULL`; all zeros for a null widget, not loaded, stopped, or disabled |
| `hiyui_video_on_state_changed(video, callback, user_data, destroy, out_handle)` | `int` | Appends a state subscription; 1 on success, 0 on failure |
| `hiyui_video_on_position_changed(video, callback, user_data, destroy, out_handle)` | `int` | Appends a millisecond position subscription; 1 on success, 0 on failure |
| `hiyui_video_on_error(video, callback, user_data, destroy, out_handle)` | `int` | Appends an error text subscription; 1 on success, 0 on failure; the text is valid only inside the callback |

The error buffer may be `NULL` or have capacity 0, in which case only the required byte count is queried. A non-null buffer with capacity greater than 0 is always zero-terminated; content is truncated when capacity is insufficient. With no error, a null widget, or a disabled build, the text is an empty string and the required capacity is 1.

A subscription takes ownership of `user_data` together with its `destroy` callback and releases it even on failure; it is released on unbind or widget deletion, and a callback already in progress finishes before release. `out_handle` may be `NULL`; when non-null, `*out_handle` must be set to `NULL` first, and after success released separately with `hiyui_event_handle_destroy()`. A C widget handle must not be passed to these functions again after destruction.

#### C playback states

State queries and state subscriptions use `hiyui_video_playback_state_t`.

| Value | Description |
|---|---|
| `HIYUI_VIDEO_EMPTY` | No source set |
| `HIYUI_VIDEO_LOADING` | Opening the media or preparing the first frame |
| `HIYUI_VIDEO_PAUSED` | Paused, keeping the frame at the current position |
| `HIYUI_VIDEO_PLAYING` | Playing |
| `HIYUI_VIDEO_STOPPED` | Stopped and the session released; the saved source can be reopened |
| `HIYUI_VIDEO_ENDED` | Media playback finished |
| `HIYUI_VIDEO_ERROR` | Loading or playback failed; the error text is readable |
| `HIYUI_VIDEO_RECONNECTING` | Waiting for or performing automatic reconnection, keeping the last frame and the playback intent |

#### C playback statistics

Reads a copy of the statistics of a valid video widget on the UI thread.

```c
hiyui_video_statistics_t statistics = {0};
hiyui_video_get_statistics(video, &statistics);
```

Counters in `hiyui_video_statistics_t` accumulate within the current session; seek and automatic reconnection do not reset them, and stop or an explicit source reopen resets them. Default values in the table below represent the zero-initialized state.

| Field | Type | Default | Description |
|---|---|---|---|
| `decoder` | `hiyui_video_decoder_t` | `HIYUI_VIDEO_DECODER_NONE` | Decoder used for the most recently decoded frame |
| `width` | `int` | `0` | Pixel width of the most recently decoded frame |
| `height` | `int` | `0` | Pixel height of the most recently decoded frame |
| `decoded_frames` | `uint64_t` | `0` | Number of decoded video frames |
| `dropped_frames` | `uint64_t` | `0` | Frames skipped for falling behind the playback clock, excluding seek prefetch |
| `gpu_frames` | `uint64_t` | `0` | Hardware frames submitted directly for GPU composition, excluding repeated draws |
| `readback_count` | `uint64_t` | `0` | Number of times hardware frames or composited layers were read back to the CPU |
| `decode_time_us` | `uint64_t` | `0` | Cumulative microseconds in decode calls, including waits inside the call |
| `conversion_time_us` | `uint64_t` | `0` | Cumulative microseconds for video frame preparation and CPU pixel conversion |

Decoder values use the following enumeration.

| Value | Description |
|---|---|
| `HIYUI_VIDEO_DECODER_NONE` | No video frame decoded yet |
| `HIYUI_VIDEO_DECODER_SOFTWARE` | Software decoding |
| `HIYUI_VIDEO_DECODER_D3D11` | D3D11VA hardware decoding |

## Related pages

- [C++ Gallery and FFmpeg Deployment](/en/build/cpp-gallery)
- [Video Automated Tests and Statistics Sampling](/en/build/cpp-gallery#video-automated-tests)
- [Build Options](/en/build/options)
- [Constants and Sentinel Values](/en/core/constants)
- [Container and Ref](/en/core/container-ref)
- [Events](/en/core/event-system)
