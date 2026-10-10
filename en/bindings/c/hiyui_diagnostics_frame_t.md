---
title: "hiyui_diagnostics_frame_t"
---

# hiyui_diagnostics_frame_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

render_us includes flush; submitted only means the CPU submit call returned and does not imply GPU completion or actual presentation.

## Public Members

### id

```c
uint64_t id
```

### display_id

```c
uint64_t display_id
```

### start_us

```c
uint64_t start_us
```

### duration_us

```c
uint64_t duration_us
```

### interval_us

```c
uint64_t interval_us
```

### render_us

```c
uint64_t render_us
```

### flush_us

```c
uint64_t flush_us
```

### flush_wait_us

```c
uint64_t flush_wait_us
```

### submit_us

```c
uint64_t submit_us
```

For software SDL this is the accumulated flush callback time, for GL the swap call time.

### input_to_submit_us

```c
uint64_t input_to_submit_us
```

### request_to_submit_us

```c
uint64_t request_to_submit_us
```

### request_us

```c
uint64_t request_us
```

### flushed_pixels

```c
uint64_t flushed_pixels
```

### flush_count

```c
uint32_t flush_count
```

### continuous

```c
int continuous
```

The first refresh request of this frame arrived within one frame budget after the previous submit; not the actual dropped frame count.

### submitted

```c
int submitted
```

### input_associated

```c
int input_associated
```

Time association from the latest input handling to the next submit; it does not guarantee the input caused this frame.

### request_associated

```c
int request_associated
```

### diagnostic

```c
int diagnostic
```
