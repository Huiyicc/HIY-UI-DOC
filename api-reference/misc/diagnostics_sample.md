---
title: "diagnostics::Sample"
---

# diagnostics::Sample <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

进程与 LVGL 读数；各内存口径有重叠，不可求和。

## 公开成员

### processCpuPercent

```cpp
double processCpuPercent
```

单核满载为 100，多核可超过 100。
