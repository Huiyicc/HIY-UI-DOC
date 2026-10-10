---
title: "hiyui_diagnostics_resource_t"
---

# hiyui_diagnostics_resource_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Native resources with id 0 have no lifecycle identity; all addresses are informational only, and type is borrowed from the snapshot.

## Public Members

### id

```c
uint64_t id
```

### parent_id

```c
uint64_t parent_id
```

### display_id

```c
uint64_t display_id
```

### address

```c
uint64_t address
```

### observed_us

```c
uint64_t observed_us
```

### released_us

```c
uint64_t released_us
```

### bytes

```c
uint64_t bytes
```

### kind

```c
hiyui_diagnostics_resource_kind_t kind
```

### alive

```c
int alive
```

### pending_destroy

```c
int pending_destroy
```

### diagnostic

```c
int diagnostic
```

### size_known

```c
int size_known
```

### hidden

```c
int hidden
```

### wrappers

```c
uint32_t wrappers
```

### event_descriptors

```c
uint32_t event_descriptors
```

### x

```c
int32_t x
```

### y

```c
int32_t y
```

### width

```c
int32_t width
```

### height

```c
int32_t height
```

### period_ms

```c
uint32_t period_ms
```

### elapsed_ms

```c
int32_t elapsed_ms
```

### target_address

```c
uint64_t target_address
```

### paused

```c
int paused
```

### type

```c
const char * type
```
