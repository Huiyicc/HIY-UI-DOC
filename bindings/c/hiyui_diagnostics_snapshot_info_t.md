---
title: "hiyui_diagnostics_snapshot_info_t"
---

# hiyui_diagnostics_snapshot_info_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

文本借用自快照；resources_time_us 是资源读取时刻，可晚于停止采集。

## 公开成员

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

overwritten_events 中被覆盖的 LVGL 明细条数。

### filtered_profiler_events

```c
uint64_t filtered_profiler_events
```

低于明细门限的已结束调用数，不计入 overwritten_events。

### event_loss_end_us

```c
uint64_t event_loss_end_us
```

被覆盖普通区间的最大结束时间，无覆盖时为 0。

### profiler_loss_end_us

```c
uint64_t profiler_loss_end_us
```

被覆盖 LVGL 明细的最大结束时间，无覆盖时为 0。

### incomplete_profiler_spans

```c
uint64_t incomplete_profiler_spans
```

incomplete_spans 中超出嵌套上限或停止时尚未结束的 LVGL 调用数。

### filtered_event_callbacks

```c
uint64_t filtered_event_callbacks
```

低于 event_min_duration_us 的已结束事件回调数，不计入 overwritten_events。
