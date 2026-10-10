---
title: "Video"
---

# Video <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/video.h>`

**Namespace:** `hiyui`

Plays file or network video; all public operations are confined to the UI thread. Loading, playback, and seeking complete asynchronously; events are delivered on the UI thread. Formats and protocols are provided by the linked FFmpeg. Deleting the parent widget stops playback and releases the playback session. clean() clears the frame and stops; play() again reloads the saved source. Properties and playback commands can be set before mounting; operations have no effect after the widget becomes invalid. Auto-reconnect applies to HTTP(S), RTSP(S), RTMP(S), TCP, UDP, RTP, SRT, and RIST. Seekable sources resume from the interrupted position; other sources reconnect and reset the timeline. Reconnection preserves the paused state and the latest seek request; exhausted retries or a permanent error enters Error. With reconnection enabled, the end of a non-seekable stream with unknown duration is treated as a stream interruption. During reconnection, pause() sets the paused state after recovery; stop(), a source change, and destruction cancel reconnection.

**Inherits:** `hiyui::Chainable< Video >`

## Public Methods

### src

```cpp
Video & src(const char *source) &
```

Replaces the playback source, copying the path and loading with the initial autoplay configuration. The same source is reloaded; nullptr or an empty string clears it. Can be configured before mounting.

### play

```cpp
Video & play() &
```

Starts or resumes playback; after stop, end, or error it reopens the saved source; an empty source is a no-op.

### pause

```cpp
Video & pause() &
```

Pauses audio and the playback clock and keeps the frame; repeated calls have no additional effect.

### stop

```cpp
Video & stop() &
```

Releases the playback session and clears the frame and time while keeping the source; the next play starts from the beginning.

### seek

```cpp
Video & seek(int64_t positionMs) &
```

Seeks to the given position in milliseconds and keeps the play or pause state. The position is clamped to the media range; no effect when not loaded or non-seekable. Consecutive requests keep only the last not-yet-executed one; old frames and audio are cleared on completion.

### volume

```cpp
Video & volume(int value) &
```

Sets the volume, clamped to 0-100; the setting is still stored while muted.

### playbackState

```cpp
VideoPlaybackState playbackState() const
```

Empty when unmounted or invalid.

### positionMs

```cpp
int64_t positionMs() const
```

Current position in milliseconds; 0 when not loaded or invalid.

### durationMs

```cpp
int64_t durationMs() const
```

Total duration in milliseconds; HIYUI_VIDEO_TIME_UNKNOWN when unknown, not loaded, or invalid.

### seekable

```cpp
bool seekable() const
```

true when loaded and seeking is allowed.

### errorMessage

```cpp
std::string errorMessage() const
```

An empty string when no error occurred; returns an independent copy.

### statistics

```cpp
VideoStatistics statistics() const
```

A copy of the current session statistics; all counters are zero when not loaded, stopped, or invalid.

### onStateChanged

```cpp
Video & onStateChanged(F &&f, EventHandle *handle=nullptr) &
```

Appends a playback state subscription; the callback takes a VideoPlaybackState or no arguments.

### onPositionChanged

```cpp
Video & onPositionChanged(F &&f, EventHandle *handle=nullptr) &
```

Appends a position subscription; the callback takes the position in milliseconds or no arguments. Notified about every 100 milliseconds during playback.

### onError

```cpp
Video & onError(F &&f, EventHandle *handle=nullptr) &
```

Appends an error subscription; the callback takes the error text or no arguments. Bindings can be unbound through EventHandle.
