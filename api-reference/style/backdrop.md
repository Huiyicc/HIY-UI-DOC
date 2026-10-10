---
title: "Backdrop"
---

# Backdrop <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/style.h>`

**命名空间：** `hiyui`

背景模糊配置

对下方已合成层做高斯模糊后处理，实现毛玻璃效果。



**参见：** `GlassEffect`

## 公开成员

### blurRadius

```cpp
int blurRadius
```

模糊半径，HIYUI_NONE_INT = 不设置，0 = 禁用，有效范围 [2,254]

### opacity

```cpp
uint8_t opacity
```

模糊层绘制透明度 [0,255]

### tint

```cpp
RGBA tint
```

叠加色调

### tintOpacity

```cpp
uint8_t tintOpacity
```

色调层透明度 [0,255]
