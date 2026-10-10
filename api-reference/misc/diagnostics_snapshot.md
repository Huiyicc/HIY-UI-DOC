---
title: "diagnostics::Snapshot"
---

# diagnostics::Snapshot <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

自包含采集副本；资源表仅在请求对象快照时读取，资源覆盖和截断状态由字段说明。

## 公开成员

### untrackedResources

```cpp
uint64_t untrackedResources
```

初始化以来失败的注册次数加本次快照截断次数，可能包含重复观察。

### recorderBytes

```cpp
uint64_t recorderBytes
```

环形缓冲元素占用，不含注册表、字符串、快照及面板。

### resourcesTimeUs

```cpp
uint64_t resourcesTimeUs
```

资源快照时刻，可晚于停止采集的 durationUs。

### overwrittenProfilerEvents

```cpp
uint64_t overwrittenProfilerEvents
```

overwrittenEvents 中被覆盖的 LVGL 明细条数。

### filteredProfilerEvents

```cpp
uint64_t filteredProfilerEvents
```

低于明细门限的已结束调用数，不计入 overwrittenEvents。

### eventLossEndUs

```cpp
uint64_t eventLossEndUs
```

被覆盖的普通区间的最大结束时间，无覆盖时为 0。

### profilerLossEndUs

```cpp
uint64_t profilerLossEndUs
```

被覆盖的 LVGL 明细的最大结束时间，无覆盖时为 0。

### incompleteProfilerSpans

```cpp
uint64_t incompleteProfilerSpans
```

incompleteSpans 中超过嵌套上限或停止时尚未结束的 LVGL 调用数。

### filteredEventCallbacks

```cpp
uint64_t filteredEventCallbacks
```

低于 eventMinDurationUs 的已结束事件回调数，不计入 overwrittenEvents。
