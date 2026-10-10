---
title: "hiyui_diagnostics_config_t"
---

# hiyui_diagnostics_config_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Obtains default values via config_init. Event capacity ranges from 64 to 1048576, frame capacity from 16 to 65536, and sample capacity from 2 to 65536. Detailed splits half the event capacity between normal spans and LVGL detail spans, with the normal spans taking the remainder. frame_budget_us must be positive. sample_period_ms is at least 250; sampling runs with the UI main loop and does not backfill while blocked.

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

Filters only LVGL detail spans; defaults to 100 microseconds; 0 keeps all calls.

### event_min_duration_us

```c
uint32_t event_min_duration_us
```

Microsecond threshold for automatic event callbacks; defaults to 100; 0 keeps all and does not affect scope_begin/end.
