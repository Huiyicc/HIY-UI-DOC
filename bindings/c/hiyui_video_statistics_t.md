---
title: "hiyui_video_statistics_t"
---

# hiyui_video_statistics_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/video.h>`

当前会话累计统计，跳转和自动重连不清零，停止或显式重开源时重置。

## 公开成员

### decoder

```c
hiyui_video_decoder_t decoder
```

尚未解码出帧时为 NONE。

### width

```c
int width
```

最近解码帧的像素宽度。

### height

```c
int height
```

最近解码帧的像素高度。

### decoded_frames

```c
uint64_t decoded_frames
```

### dropped_frames

```c
uint64_t dropped_frames
```

落后于播放时钟而跳过的帧数，不含跳转预读。

### gpu_frames

```c
uint64_t gpu_frames
```

直接提交到 GPU 合成的硬件帧数，不含重复绘制。

### readback_count

```c
uint64_t readback_count
```

硬件帧或合成图层回读到 CPU 的次数。

### decode_time_us

```c
uint64_t decode_time_us
```

解码调用累计微秒，含调用内等待。

### conversion_time_us

```c
uint64_t conversion_time_us
```

视频帧准备和 CPU 像素转换累计微秒。
