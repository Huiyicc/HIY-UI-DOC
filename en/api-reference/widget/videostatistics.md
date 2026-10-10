---
title: "VideoStatistics"
---

# VideoStatistics <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/video.h>`

**Namespace:** `hiyui`

Cumulative statistics of the current session; not reset by seeks or auto-reconnect, reset on stop or on explicitly setting a new source.

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

Frames skipped for falling behind the playback clock, excluding seek pre-read.

### gpuFrames

```cpp
uint64_t gpuFrames
```

Hardware frames submitted directly to GPU composition, excluding repeated draws.

### readbackCount

```cpp
uint64_t readbackCount
```

Number of times a hardware frame or composition layer was read back to the CPU.

### decodeTimeUs

```cpp
uint64_t decodeTimeUs
```

Cumulative decode call time in microseconds, including in-call waits.

### conversionTimeUs

```cpp
uint64_t conversionTimeUs
```

Cumulative time spent on video frame preparation and CPU pixel conversion.
