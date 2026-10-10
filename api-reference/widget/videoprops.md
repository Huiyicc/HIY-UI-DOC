---
title: "VideoProps"
---

# VideoProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/video.h>`

**命名空间：** `hiyui`

视频的初始配置。

## 公开成员

### src

```cpp
const char * src
```

UTF-8 文件路径或网络地址，构造时复制。

### width

```cpp
int width
```

逻辑像素，HIYUI_AUTO 填充父容器宽度。

### height

```cpp
int height
```

逻辑像素，HIYUI_AUTO 填充父容器高度。

### autoplay

```cpp
bool autoplay
```

加载后播放；false 显示首帧并暂停。

### loop

```cpp
bool loop
```

可寻址媒体结束后从头播放；直播忽略。

### volume

```cpp
int volume
```

范围 0–100，静音不改变保存的音量。

### ioTimeoutMs

```cpp
int ioTimeoutMs
```

打开与探测、单次跳转或连续等待读包的超时毫秒数；非正值使用 10000。

### reconnectAttempts

```cpp
int reconnectAttempts
```

每次中断最多重连次数；非正值关闭，恢复出帧后重新计数。

### reconnectDelayMs

```cpp
int reconnectDelayMs
```

每次重连前等待的毫秒数；非正值使用 1000。
