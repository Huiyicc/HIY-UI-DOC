---
title: "hiyui_diagnostics_display_t"
---

# hiyui_diagnostics_display_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

## Public Members

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

Frames whose submit returned during this capture, excluding refreshes with no observed submit.

### continuous_intervals

```c
uint64_t continuous_intervals
```

Submit intervals counted into the activity statistics during this capture.

### continuous_interval_sum_us

```c
uint64_t continuous_interval_sum_us
```

Sum of submit intervals in the activity statistics, in microseconds.
