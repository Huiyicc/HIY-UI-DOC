---
title: "diagnostics::Frame"
---

# diagnostics::Frame <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

一次内容刷新；durationUs 截止 CPU 提交返回或刷新结束，renderUs 包含 flush。

## 公开成员

### submitUs

```cpp
uint64_t submitUs
```

软件 SDL 为累计 flush 回调耗时，GL 为 swap 调用耗时。

### requestUs

```cpp
uint64_t requestUs
```

本帧首次刷新请求时刻，仅 requestAssociated 为真时有效。

### continuous

```cpp
bool continuous
```

本帧首次刷新请求在前次提交后一帧预算内；这是请求连续性判据，不是掉帧计数。

### submitted

```cpp
bool submitted
```

观察到 CPU 提交返回；不代表 GPU 完成或实际上屏。

### inputAssociated

```cpp
bool inputAssociated
```

最近一次输入处理至下一次提交的间隔，不保证该输入引发本帧。
