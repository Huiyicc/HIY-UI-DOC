---
title: "ScreenInfo"
---

# ScreenInfo <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/pal.h>`

**命名空间：** `hiyui`

显示器屏幕信息，供应用层计算屏幕适配因子

## 公开成员

### displayIndex

```cpp
int displayIndex
```

SDL 显示器索引

### physW

```cpp
int physW
```

屏幕物理像素宽，桌面分辨率

### physH

```cpp
int physH
```

屏幕物理像素高

### workW

```cpp
int workW
```

工作区宽，扣任务栏，SDL_GetDisplayUsableBounds

### workH

```cpp
int workH
```

工作区高

### dpr

```cpp
float dpr
```

当前 `systemDpiScale()`
