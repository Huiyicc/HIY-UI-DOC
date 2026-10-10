---
title: "diagnostics::Resource"
---

# diagnostics::Resource <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

非拥有副本；id 标识观察到的生命周期，0 表示仅有当前快照，address 不可解引用，已释放条目的属性取自最后观察。

## 公开成员

### observedUs

```cpp
uint64_t observedUs
```

首次观察时间，0 表示早于采集起点或未知。

### elapsedMs

```cpp
int32_t elapsedMs
```

动画已用时间，负值表示启动延迟。

### targetAddress

```cpp
uint64_t targetAddress
```

动画目标或定时器用户数据的地址，不可解引用。
