---
title: "hiyui_diagnostics_config_t"
---

# hiyui_diagnostics_config_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/diagnostics.h>`

通过 config_init 取得默认值；事件容量 64 至 1048576，帧容量 16 至 65536，采样容量 2 至 65536。 Detailed 各分配一半事件容量给普通区间和 LVGL 明细，普通区间取得余数。 frame_budget_us 必须为正数；sample_period_ms 至少 250，采样随 UI 主循环执行，阻塞时不补采。

## 公开成员

### mode

```c
hiyui_diagnostics_mode_t mode
```

### event_capacity

```c
uint32_t event_capacity
```

### frame_capacity

```c
uint32_t frame_capacity
```

### sample_capacity

```c
uint32_t sample_capacity
```

### frame_budget_us

```c
uint32_t frame_budget_us
```

### sample_period_ms

```c
uint32_t sample_period_ms
```

### profiler_min_duration_us

```c
uint32_t profiler_min_duration_us
```

仅过滤 LVGL 明细，默认 100 微秒；0 保留所有调用。

### event_min_duration_us

```c
uint32_t event_min_duration_us
```

自动事件回调的微秒门限，默认 100；0 保留全部，不影响 scope_begin/end。
