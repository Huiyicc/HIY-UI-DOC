---
title: "Video"
---

# Video <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/video.h>`

**Namespace:** `hiyui`

Play a file or network video; all public operations are confined to the UI thread. Loading, playback and seeks complete asynchronously; events are delivered on the UI thread. Formats and protocols are provided by the linked FFmpeg. Deleting the parent widget stops and releases the playback session. clean() clears the frame and stops; calling play() again reloads the saved source. Properties and playback commands can be set before mounting; operations have no effect after the widget becomes invalid. Automatic reconnection applies to HTTP(S), RTSP(S), RTMP(S), TCP, UDP, RTP, SRT and RIST. Seekable sources resume from the interruption position; other sources reconnect and reset the timeline. Reconnection preserves the paused state and the latest seek request; exhausted retries or a permanent error enters Error. With reconnection enabled, the end of a non-seekable stream with unknown duration is treated as a stream interruption. During reconnection, pause() sets the paused state for after recovery; stop(), changing the source and destruction cancel reconnection.

**Inherits:** `hiyui::Chainable< Video >`

## Public Methods

### src

```cpp
Video & src(const char *source) &
```

Replace the playback source; copies the path and loads with the initial autoplay setting. The same source is reloaded too; nullptr or an empty string clears it. Can be configured before mounting.

### play

```cpp
Video & play() &
```

Starts or resumes playback; reopens the saved source after stop, end or error; no-op on an empty source.

### pause

```cpp
Video & pause() &
```

Pauses audio and the playback clock, keeping the frame; repeated calls have no extra effect.

### stop

```cpp
Video & stop() &
```

Releases the playback session and clears the frame and time, keeping the source; calling play again starts from the beginning.

### seek

```cpp
Video & seek(int64_t positionMs) &
```

Seek to the given millisecond position, keeping the play or pause state. The position is clamped to the media range; no-op when not loaded or not seekable. Concurrent requests keep only the last not-yet-executed one; old frames and audio are cleared after completion.

### volume

```cpp
Video & volume(int value) &
```

Sets the volume, clamped to 0-100; the setting is still saved while muted.

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

Total duration in milliseconds; HIYUI_VIDEO_TIME_UNKNOWN when unknown, not loaded or invalid.

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

A copy of the current session statistics; all counters are zero when not loaded, stopped or invalid.

### onStateChanged

```cpp
Video & onStateChanged(F &&f, EventHandle *handle=nullptr) &
```

Appends a playback state subscription; the callback takes a VideoPlaybackState or no argument.

### onPositionChanged

```cpp
Video & onPositionChanged(F &&f, EventHandle *handle=nullptr) &
```

Appends a position subscription, taking a millisecond position or no argument. Notified about every 100 ms during playback.

### onError

```cpp
Video & onError(F &&f, EventHandle *handle=nullptr) &
```

Appends an error subscription, taking the error text or no argument. Bindings can be unbound via EventHandle.
