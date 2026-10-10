---
title: "BlurThreadPool"
---

# BlurThreadPool <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/algorithm/BlurThreadPool.h>`

**命名空间：** `hiyui`

模糊算法专用线程池，单例

在构造时创建 (CPU核心数 - 1) 个工作线程，提供 parallel_for 将任务均匀分配到所有核心。当核心数为 1 时退化为串行执行。

## 静态方法

### instance

```cpp
static BlurThreadPool & instance()
```

获取全局单例

**返回值：** 线程池单例引用

## 公开方法

### cores

```cpp
int cores() const
```

返回线程池使用的核心数，含主线程

### parallel_for

```cpp
void parallel_for(int count, const std::function< void(int)> &job)
```

将 [0, count) 范围的任务并行执行

当 cores == 1 时直接在调用线程串行执行。



| 参数 | 说明 |
|---|---|
| `job` | 任务回调，参数为任务索引 [0, count) |
