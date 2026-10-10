---
title: "diagnostics::Display"
---

# diagnostics::Display <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/diagnostics.h>`

**命名空间：** `hiyui`

## 公开成员

### drawBufferBytes

```cpp
uint64_t drawBufferBytes
```

LVGL 注册的绘图缓冲大小，不包含 SDL 纹理和 GPU 驱动分配。

### renderer

```cpp
std::string renderer
```

当前合成后端。

### fallbackReason

```cpp
std::string fallbackReason
```

最近一次回退原因，未发生时为空。

### gpuTasks

```cpp
uint64_t gpuTasks
```

显示创建以来提交给 GPU 合成器的绘制任务数。

### softwareTasks

```cpp
uint64_t softwareTasks
```

GPU 合成器中通过软件绘制的任务数。

### uploadBytes

```cpp
uint64_t uploadBytes
```

合成器及显示后端累计上传的像素字节数。

### readbackBytes

```cpp
uint64_t readbackBytes
```

合成器及 Shader 累计回读的像素字节数。

### submittedFrames

```cpp
uint64_t submittedFrames
```

本次采集中提交返回的帧数，不含未观测到提交的刷新。

### continuousIntervals

```cpp
uint64_t continuousIntervals
```

本次采集中计入活跃统计的提交间隔数。

### continuousIntervalSumUs

```cpp
uint64_t continuousIntervalSumUs
```

活跃统计的提交间隔之和，单位微秒。
