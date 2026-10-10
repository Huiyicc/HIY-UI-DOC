---
title: "ShaderUniforms"
---

# ShaderUniforms <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/shader/shader.h>`

**命名空间：** `hiyui`

着色器输入参数

对应 ShaderToy 的 iResolution / iTime / iMouse 子集，纯数据结构。

## 公开成员

### resolutionW

```cpp
float resolutionW
```

离屏缓冲宽度，像素

### resolutionH

```cpp
float resolutionH
```

离屏缓冲高度，像素

### time

```cpp
float time
```

累计时间，秒

### mouseX

```cpp
float mouseX
```

鼠标 X，像素，0 表示未交互

### mouseY

```cpp
float mouseY
```

鼠标 Y，像素
