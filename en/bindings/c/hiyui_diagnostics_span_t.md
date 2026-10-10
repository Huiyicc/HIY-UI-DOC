---
title: "hiyui_diagnostics_span_t"
---

# hiyui_diagnostics_span_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Times are zeroed at the start of this capture; nested spans must not be added directly.

## Public Members

### id

```c
uint64_t id
```

### start_us

```c
uint64_t start_us
```

### duration_us

```c
uint64_t duration_us
```

### display_id

```c
uint64_t display_id
```

### object_id

```c
uint64_t object_id
```

### thread_id

```c
uint32_t thread_id
```

### depth

```c
uint32_t depth
```

### phase

```c
hiyui_diagnostics_phase_t phase
```

### diagnostic

```c
int diagnostic
```

### truncated

```c
int truncated
```

### name

```c
char name
```

### profiler

```c
int profiler
```

Comes from the LVGL profiler; display_id is the refresh context and 0 means unknown.
