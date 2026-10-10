---
title: "hiyui_diagnostics_sample_t"
---

# hiyui_diagnostics_sample_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Memory figures overlap. Process CPU is 100% per fully loaded core and can exceed 100%.

## Public Members

### time_us

```c
uint64_t time_us
```

### resident_bytes

```c
hiyui_diagnostics_reading_t resident_bytes
```

### private_bytes

```c
hiyui_diagnostics_reading_t private_bytes
```

### process_cpu_us

```c
hiyui_diagnostics_reading_t process_cpu_us
```

### handles

```c
hiyui_diagnostics_reading_t handles
```

### gdi_handles

```c
hiyui_diagnostics_reading_t gdi_handles
```

### user_handles

```c
hiyui_diagnostics_reading_t user_handles
```

### file_descriptors

```c
hiyui_diagnostics_reading_t file_descriptors
```

### lvgl_used_bytes

```c
hiyui_diagnostics_reading_t lvgl_used_bytes
```

### lvgl_peak_bytes

```c
hiyui_diagnostics_reading_t lvgl_peak_bytes
```

### lvgl_free_bytes

```c
hiyui_diagnostics_reading_t lvgl_free_bytes
```

### lvgl_largest_free_bytes

```c
hiyui_diagnostics_reading_t lvgl_largest_free_bytes
```

### lvgl_fragmentation_percent

```c
hiyui_diagnostics_reading_t lvgl_fragmentation_percent
```

### process_cpu_percent

```c
double process_cpu_percent
```

### process_cpu_available

```c
int process_cpu_available
```

### timers

```c
uint32_t timers
```

### animations

```c
uint32_t animations
```
