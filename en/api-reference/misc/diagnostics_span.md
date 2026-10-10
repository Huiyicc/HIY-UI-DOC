---
title: "diagnostics::Span"
---

# diagnostics::Span <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Monotonic clock span including waits; timestamps are zeroed at capture start and nested spans cannot be added directly.

## Public Members

### profiler

```cpp
bool profiler
```

From the LVGL probe; displayId is the refresh context and 0 means unknown.
