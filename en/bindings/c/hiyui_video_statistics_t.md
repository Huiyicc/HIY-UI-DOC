---
title: "hiyui_video_statistics_t"
---

# hiyui_video_statistics_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/video.h>`

Cumulative statistics for the current session; seeking and automatic reconnection do not reset them, while stop or an explicit source change does.

## Public Members

### decoder

```c
hiyui_video_decoder_t decoder
```

NONE until a frame has been decoded.

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

Frames skipped for falling behind the playback clock, excluding seek pre-read.

### gpu_frames

```c
uint64_t gpu_frames
```

Hardware frames submitted directly to GPU composition, excluding repeated drawing.

### readback_count

```c
uint64_t readback_count
```

Number of times hardware frames or composited layers were read back to the CPU.

### decode_time_us

```c
uint64_t decode_time_us
```

Accumulated microseconds of decode calls, including waits inside the calls.

### conversion_time_us

```c
uint64_t conversion_time_us
```

Accumulated microseconds of video frame preparation and CPU pixel conversion.
