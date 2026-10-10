---
title: "hiyui_diagnostics_snapshot_info_t"
---

# hiyui_diagnostics_snapshot_info_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Text is borrowed from the snapshot. resources_time_us is the moment resources were read, which can be later than the collection stop.

## Public Members

### status

```c
hiyui_diagnostics_status_t status
```

### config

```c
hiyui_diagnostics_config_t config
```

### session

```c
uint64_t session
```

### duration_us

```c
uint64_t duration_us
```

### overwritten_events

```c
uint64_t overwritten_events
```

### overwritten_frames

```c
uint64_t overwritten_frames
```

### overwritten_samples

```c
uint64_t overwritten_samples
```

### overwritten_resources

```c
uint64_t overwritten_resources
```

### overwritten_displays

```c
uint64_t overwritten_displays
```

### incomplete_spans

```c
uint64_t incomplete_spans
```

### open_spans

```c
uint64_t open_spans
```

### incomplete_frames

```c
uint64_t incomplete_frames
```

### truncated_names

```c
uint64_t truncated_names
```

### untracked_resources

```c
uint64_t untracked_resources
```

### recorder_bytes

```c
uint64_t recorder_bytes
```

### resources_time_us

```c
uint64_t resources_time_us
```

### recording

```c
int recording
```

### objects_included

```c
int objects_included
```

### lvgl_profiler

```c
int lvgl_profiler
```

### build

```c
const char * build
```

### backend

```c
const char * backend
```

### span_count

```c
size_t span_count
```

### frame_count

```c
size_t frame_count
```

### sample_count

```c
size_t sample_count
```

### display_count

```c
size_t display_count
```

### resource_count

```c
size_t resource_count
```

### overwritten_profiler_events

```c
uint64_t overwritten_profiler_events
```

Number of LVGL detail entries overwritten within overwritten_events.

### filtered_profiler_events

```c
uint64_t filtered_profiler_events
```

Number of finished calls below the detail threshold; not counted in overwritten_events.

### event_loss_end_us

```c
uint64_t event_loss_end_us
```

Latest end time of overwritten normal spans; 0 when nothing was overwritten.

### profiler_loss_end_us

```c
uint64_t profiler_loss_end_us
```

Latest end time of overwritten LVGL detail spans; 0 when nothing was overwritten.

### incomplete_profiler_spans

```c
uint64_t incomplete_profiler_spans
```

Number of LVGL calls in incomplete_spans that exceeded the nesting limit or had not ended when collection stopped.

### filtered_event_callbacks

```c
uint64_t filtered_event_callbacks
```

Number of finished event callbacks below event_min_duration_us; not counted in overwritten_events.
