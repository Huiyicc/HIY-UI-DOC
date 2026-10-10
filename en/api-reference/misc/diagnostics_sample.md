---
title: "diagnostics::Sample"
---

# diagnostics::Sample <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Process and LVGL readings; the memory figures overlap and must not be summed.

## Public Members

### processCpuPercent

```cpp
double processCpuPercent
```

100% at full load on one core; can exceed 100% on multiple cores.
