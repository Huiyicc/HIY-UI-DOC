---
title: "TiltParams"
---

# TiltParams <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/effect/tilt_effect.h>`

**命名空间：** `hiyui`

3D 倾斜参数

**参见：** `TiltEffect`

## 公开成员

### maxAngleX

```cpp
float maxAngleX
```

绕 X 轴最大倾角，度

### maxAngleY

```cpp
float maxAngleY
```

绕 Y 轴最大倾角，度

### perspective

```cpp
float perspective
```

视距，像素，值越大透视越弱

### followDurationMs

```cpp
uint32_t followDurationMs
```

跟随缓动时长，毫秒

### releaseDurationMs

```cpp
uint32_t releaseDurationMs
```

移出回弹时长，毫秒

### animate

```cpp
bool animate
```

false 时角度立即到位，移出立即归零
