---
title: "diagnostics::MemoryPeak"
---

# diagnostics::MemoryPeak <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

采样读数的历史最大值；不包含采样间隔内未观察到的峰值。

## 公开成员

### timeUs

```cpp
uint64_t timeUs
```

本次采集内的采样时刻，仅 bytes.available 为真时有效。
