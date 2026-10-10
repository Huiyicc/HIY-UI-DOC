---
title: "diagnostics::Config"
---

# diagnostics::Config <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

有限容量采集配置；容量为记录条数，时间单位在字段名中指定。

## 公开成员

### eventCapacity

```cpp
uint32_t eventCapacity
```

64 至 1048576；Detailed 各分配一半容量给普通区间和 LVGL 明细，普通区间取得余数。

### frameCapacity

```cpp
uint32_t frameCapacity
```

16 至 65536。

### sampleCapacity

```cpp
uint32_t sampleCapacity
```

2 至 65536。

### frameBudgetUs

```cpp
uint32_t frameBudgetUs
```

正数，连续请求间隔的参考预算，不改变刷新调度。

### samplePeriodMs

```cpp
uint32_t samplePeriodMs
```

至少 250；采样随 UI 主循环执行，阻塞时不补采。

### profilerMinDurationUs

```cpp
uint32_t profilerMinDurationUs
```

仅过滤 LVGL 明细，0 保留所有调用；不影响普通区间和帧统计。

### eventMinDurationUs

```cpp
uint32_t eventMinDurationUs
```

自动事件回调低于此微秒数时仅累计 filteredEventCallbacks；0 保留全部，不影响手写 Scope。
