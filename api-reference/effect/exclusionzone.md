---
title: "ExclusionZone"
---

# ExclusionZone <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/effect/theme_transition.h>`

**命名空间：** `hiyui`

过渡动画排除区域

排除区域内的 overlay 像素始终透明，让下方活跃组件，如 `Segmented` 滑块 在过渡动画期间仍可正常渲染。

## 公开成员

### x

```cpp
int x
```

左上角 X

### y

```cpp
int y
```

左上角 Y

### w

```cpp
int w
```

宽度

### h

```cpp
int h
```

高度

### circular

```cpp
bool circular
```

true 时以 rect 中心为圆心、min(w,h)/2 为半径
