---
title: "pal::SystemCaps"
---

# pal::SystemCaps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/pal.h>`

**命名空间：** `hiyui`

系统能力描述，反映当前平台的硬件和环境特征

通过 `pal::caps()` 获取。各字段在编译/运行时由平台层填充。

## 公开成员

### hasFilesystem

```cpp
bool hasFilesystem
```

是否有文件系统访问能力

### hasGpu

```cpp
bool hasGpu
```

是否有 GPU 加速支持

### hasTouch

```cpp
bool hasTouch
```

是否有触摸输入

### hasWindowManager

```cpp
bool hasWindowManager
```

是否有窗口管理器，桌面环境

### renderBackend

```cpp
RenderBackend renderBackend
```

当前渲染后端

### defaultDpi

```cpp
int defaultDpi
```

默认 DPI

### screenWidth

```cpp
int screenWidth
```

屏幕宽度，像素

### screenHeight

```cpp
int screenHeight
```

屏幕高度，像素

### dpiScale

```cpp
float dpiScale
```

设备像素比，devicePixelRatio
