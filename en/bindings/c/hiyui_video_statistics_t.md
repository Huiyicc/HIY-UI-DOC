---
title: "hiyui_video_statistics_t"
---

# hiyui_video_statistics_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/video.h>`

Cumulative statistics for the current session. Seeks and automatic reconnection do not reset them; stopping or explicitly reopening the source does.

## Public Members

### decoder

```c
hiyui_video_decoder_t decoder
```

NONE before any frame has been decoded.

### width

```c
int width
```

Pixel width of the most recently decoded frame.

### height

```c
int height
```

Pixel height of the most recently decoded frame.

### decoded_frames

```c
uint64_t decoded_frames
```

### dropped_frames

```c
uint64_t dropped_frames
```

Frames skipped for falling behind the playback clock, excluding seek prefetch.

### gpu_frames

```c
uint64_t gpu_frames
```

Hardware frames submitted directly to GPU composition, excluding repeated draws.

### readback_count

```c
uint64_t readback_count
```

Number of times hardware frames or composited layers were read back to the CPU.

### decode_time_us

```c
uint64_t decode_time_us
```

Accumulated decode call time in microseconds, including waits inside the call.

### conversion_time_us

```c
uint64_t conversion_time_us
```

Accumulated video frame preparation and CPU pixel conversion time in microseconds.
