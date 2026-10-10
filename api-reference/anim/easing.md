---
title: "Easing"
---

# Easing <Badge type="info" text="类" />

**头文件：** `#include <hiyui/anim/easing.h>`

**命名空间：** `hiyui`

缓动工具类，纯静态接口

## 静态方法

### path

```cpp
static lv_anim_path_cb_t path(Ease e) noexcept
```

取 LVGL path 回调

AngleLerp 和 Impact 映射为 Linear。 经典系列返回值与对应 lv_anim_path_* 指针相等，同源等价。

### at

```cpp
static double at(Ease e, double t) noexcept
```

归一化求值，t∈[0,1] → 当前进度比，Back/Elastic/Spring/Bounce 可能越界

### at

```cpp
static double at(Ease e, double t, double start, double end) noexcept
```

区间求值，t∈[0,1] → [start,end] 映射后的当前值
