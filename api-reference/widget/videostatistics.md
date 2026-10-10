---
title: "VideoStatistics"
---

# VideoStatistics <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/video.h>`

**命名空间：** `hiyui`

当前会话累计统计，跳转和自动重连不清零，停止或显式重开源时重置。

## 公开成员

### decoder

```cpp
VideoDecoder decoder
```

尚未解码出帧时为 None。

### width

```cpp
int width
```

最近解码帧的像素宽度。

### height

```cpp
int height
```

最近解码帧的像素高度。

### droppedFrames

```cpp
uint64_t droppedFrames
```

落后于播放时钟而跳过的帧数，不含跳转预读。

### gpuFrames

```cpp
uint64_t gpuFrames
```

直接提交到 GPU 合成的硬件帧数，不含重复绘制。

### readbackCount

```cpp
uint64_t readbackCount
```

硬件帧或合成图层回读到 CPU 的次数。

### decodeTimeUs

```cpp
uint64_t decodeTimeUs
```

解码调用累计微秒，含调用内等待。

### conversionTimeUs

```cpp
uint64_t conversionTimeUs
```

视频帧准备和 CPU 像素转换累计耗时。
