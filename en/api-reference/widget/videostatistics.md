---
title: "VideoStatistics"
---

# VideoStatistics <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/video.h>`

**Namespace:** `hiyui`

Cumulative statistics of the current session. Seek and auto-reconnect do not reset them; stop or an explicit source change resets them.

## Public Members

### decoder

```cpp
VideoDecoder decoder
```

None until a frame has been decoded.

### width

```cpp
int width
```

Pixel width of the most recently decoded frame.

### height

```cpp
int height
```

Pixel height of the most recently decoded frame.

### droppedFrames

```cpp
uint64_t droppedFrames
```

Frames skipped for falling behind the playback clock, excluding seek prefetch.

### gpuFrames

```cpp
uint64_t gpuFrames
```

Hardware frames submitted directly to GPU composition, excluding repeated drawing.

### readbackCount

```cpp
uint64_t readbackCount
```

Times hardware frames or composition layers were read back to the CPU.

### decodeTimeUs

```cpp
uint64_t decodeTimeUs
```

Cumulative decode call time in microseconds, including waits inside the call.

### conversionTimeUs

```cpp
uint64_t conversionTimeUs
```

Cumulative time for video frame preparation and CPU pixel conversion.
