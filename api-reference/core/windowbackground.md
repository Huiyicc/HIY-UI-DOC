---
title: "WindowBackground"
---

# WindowBackground <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/window.h>`

**命名空间：** `hiyui`

窗口背景，图片描述符及像素由调用方持有至更换背景或窗口销毁。

## 公开成员

### image

```cpp
BgImage image
```

仅 Content 生效；文件路径由窗口复制，src 为空时使用主题背景色。

### blur

```cpp
Backdrop blur
```

仅图片模糊生效；半径为逻辑像素，HIYUI_NONE_INT = 跟随主题，0 = 显示原图。

### overlay

```cpp
Overlay overlay
```

未设置时图片和系统模糊使用主题遮色，透明模式不遮色；显式 alpha 为 0 时不遮色。

### mode

```cpp
WindowBackgroundMode mode
```

系统模糊强度由操作系统控制。
