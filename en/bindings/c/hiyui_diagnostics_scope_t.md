---
title: "hiyui_diagnostics_scope_t"
---

# hiyui_diagnostics_scope_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/diagnostics.h>`

Caller-owned timing storage; an active span must not be copied, and begin/end must be paired on the same thread.

## Public Members

### alignment

```c
uint64_t alignment
```

### bytes

```c
unsigned char bytes
```

### storage

```c
union hiyui_diagnostics_scope_t::@133041231046100240121223252224103002352171115020 storage
```

### active

```c
int active
```
