---
title: "Gradient"
---

# Gradient <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/style.h>`

**命名空间：** `hiyui`

渐变配置

## 公开成员

### dir

```cpp
GradDir dir
```

渐变方向，None = 无渐变

### from

```cpp
RGBA from
```

起始色

### to

```cpp
RGBA to
```

终止色

### mainStop

```cpp
uint8_t mainStop
```

起始色位置 [0,255]

### gradStop

```cpp
uint8_t gradStop
```

终止色位置 [0,255]
