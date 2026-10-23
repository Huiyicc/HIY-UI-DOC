---
title: "hiyui_tilt_params_t"
---

# hiyui_tilt_params_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/tilt.h>`

倾斜参数，使用 hiyui_tilt_params_init 初始化后修改字段。

## 公开成员

### max_angle_x

```c
float max_angle_x
```

绕 X 轴最大倾角，度；0 固定此轴。

### max_angle_y

```c
float max_angle_y
```

绕 Y 轴最大倾角，度；0 固定此轴。

### perspective

```c
float perspective
```

视距，像素，值越大透视越弱。

### follow_duration_ms

```c
uint32_t follow_duration_ms
```

跟随缓动时长，毫秒。

### release_duration_ms

```c
uint32_t release_duration_ms
```

移出回弹时长，毫秒。

### animate

```c
int animate
```

0 时角度立即到位、移出立即归零，非 0 启用缓动。
