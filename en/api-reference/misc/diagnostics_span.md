---
title: "diagnostics::Span"
---

# diagnostics::Span <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Monotonic clock span including waits; timestamps are zeroed at capture start, nested spans must not be added directly.

## Public Members

### profiler

```cpp
bool profiler
```

From LVGL probes; displayId is the refresh context, 0 means unknown.
