---
title: "hiyui_diagnostics_display_t"
---

# hiyui_diagnostics_display_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

## 公开成员

### id

```c
uint64_t id
```

### width

```c
int32_t width
```

### height

```c
int32_t height
```

### dpi

```c
uint32_t dpi
```

### draw_buffer_count

```c
uint32_t draw_buffer_count
```

### draw_buffer_bytes

```c
uint64_t draw_buffer_bytes
```

### diagnostic

```c
int diagnostic
```

### alive

```c
int alive
```

### submitted_frames

```c
uint64_t submitted_frames
```

本次采集中提交返回的帧数，不含未观测到提交的刷新。

### continuous_intervals

```c
uint64_t continuous_intervals
```

本次采集中计入活跃统计的提交间隔数。

### continuous_interval_sum_us

```c
uint64_t continuous_interval_sum_us
```

活跃统计的提交间隔之和，单位微秒。
