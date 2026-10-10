---
title: "GlslShader"
---

# GlslShader <Badge type="info" text="类" />

**头文件：** `#include <hiyui/shader/shader.h>`

**命名空间：** `hiyui`

仅 GLSL 的片段着色器

持有 GLSL 源码，GPU 后端可用时由封装层编译执行；无 GPU 时 `render()` 清空缓冲。 源码不写 #version 时库按后端注入版本头（桌面 330 core / GLES 300 es + precision），已含 #version 时原样使用。

**继承自：** `hiyui::FragmentShader`

## 公开方法

### render

```cpp
virtual void render(uint8_t *rgba, int w, int h, const ShaderUniforms &) override
```

渲染一帧到 `RGBA` 缓冲

| 参数 | 说明 |
|---|---|
| `rgba` | 输出缓冲，尺寸 w*h*4 字节，字节序 B, G, R, A |
| `w` | 缓冲宽度，像素 |
| `h` | 缓冲高度，像素 |

### fragmentSource

```cpp
virtual const char * fragmentSource() const override
```

GLSL 片段着色器源码，nullptr 表示无 GPU 实现，回退 CPU render。 源码不含 #version 时库按后端注入版本头，含 #version 时原样使用。

### clone

```cpp
virtual std::unique_ptr< FragmentShader > clone() const override
```

克隆当前着色器
