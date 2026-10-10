---
title: "hiyui_diagnostics_config_t"
---

# hiyui_diagnostics_config_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Defaults are obtained through config_init; event capacity 64 to 1048576, frame capacity 16 to 65536, sample capacity 2 to 65536. Detailed mode splits half the event capacity between normal spans and LVGL detail, with normal spans taking the remainder. frame_budget_us must be positive; sample_period_ms is at least 250, sampling runs with the UI main loop, and missed samples are not back-filled while blocked.

## Public Members

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

Filters only LVGL detail, default 100 microseconds; 0 keeps all calls.

### event_min_duration_us

```c
uint32_t event_min_duration_us
```

Microsecond threshold for automatic event callbacks, default 100; 0 keeps all and does not affect scope_begin/end.
