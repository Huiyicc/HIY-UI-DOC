---
title: "diagnostics::MemoryPeak"
---

# diagnostics::MemoryPeak <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

采样读数的历史最大值；不包含采样间隔内未观察到的峰值。

## Public Members

### timeUs

```cpp
uint64_t timeUs
```

本次采集内的采样时刻，仅 bytes.available 为真时有效。
