---
title: "diagnostics::Span"
---

# diagnostics::Span <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

单调时钟区间，包含等待；时间戳以采集开始为零点，嵌套区间不可直接相加。

## 公开成员

### profiler

```cpp
bool profiler
```

来自 LVGL 探针；displayId 为刷新上下文，0 表示未知。
