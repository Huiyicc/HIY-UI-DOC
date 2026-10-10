---
title: "hiyui_video_props_t"
---

# hiyui_video_props_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/video.h>`

可零初始化；布尔默认值均为 false。

## 公开成员

### src

```c
const char * src
```

UTF-8 路径或地址，创建时复制；NULL 或空串表示空源。

### width

```c
int width
```

逻辑像素；0 或 HIYUI_AUTO 填充父容器宽度。

### height

```c
int height
```

逻辑像素；0 或 HIYUI_AUTO 填充父容器高度。

### fit

```c
hiyui_image_fit_t fit
```

HIYUI_IMAGE_FIT_DEFAULT 使用 Contain。

### autoplay

```c
hiyui_bool_t autoplay
```

false 加载首帧后暂停。

### loop

```c
hiyui_bool_t loop
```

仅可寻址媒体支持循环。

### muted

```c
hiyui_bool_t muted
```

### volume

```c
int volume
```

0 使用默认音量 100；其余钳制到 0–100，静音使用 muted。

### io_timeout_ms

```c
int io_timeout_ms
```

打开与探测、单次跳转或连续等待读包的超时毫秒数；非正值使用 10000。

### reconnect_attempts

```c
int reconnect_attempts
```

每次中断最多重连次数；非正值关闭，恢复出帧后重新计数。

### reconnect_delay_ms

```c
int reconnect_delay_ms
```

每次重连前等待的毫秒数；非正值使用 1000。
