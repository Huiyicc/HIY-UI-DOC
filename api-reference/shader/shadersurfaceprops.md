---
title: "ShaderSurfaceProps"
---

# ShaderSurfaceProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/shader/shader_surface.h>`

**命名空间：** `hiyui`

`ShaderSurface` 创建属性

## 公开成员

### width

```cpp
int width
```

宽度，HIYUI_AUTO 由布局决定

### height

```cpp
int height
```

高度，HIYUI_AUTO 由布局决定

### scale

```cpp
float scale
```

离屏分辨率比例

### fps

```cpp
int fps
```

时间驱动帧率

### running

```cpp
bool running
```

初始是否自动驱动时间
