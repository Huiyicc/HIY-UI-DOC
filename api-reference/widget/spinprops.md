---
title: "SpinProps"
---

# SpinProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/spin.h>`

**命名空间：** `hiyui`

`Spin` 组件创建属性

## 公开成员

### type

```cpp
SpinType type
```

形态

### diameter

```cpp
int diameter
```

外径，像素

### strokeWidth

```cpp
int strokeWidth
```

Arc 弧线宽度

### dotCount

```cpp
int dotCount
```

Dots 模式圆点数量

### dotRadius

```cpp
int dotRadius
```

Dots 模式圆点半径

### rounded

```cpp
bool rounded
```

Arc 圆角端点

### speed

```cpp
float speed
```

速度倍率，1.0 = 正常

### color

```cpp
uint32_t color
```

颜色，HIYUI_DEFAULT 跟随 Primary

### spinning

```cpp
bool spinning
```

初始旋转状态
