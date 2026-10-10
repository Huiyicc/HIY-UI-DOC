---
title: "FragmentShader"
---

# FragmentShader <Badge type="info" text="类" />

**头文件：** `#include <hiyui/shader/shader.h>`

**命名空间：** `hiyui`

片段着色器实现基类

派生类实现 `render()`，按 LVGL ARGB8888 字节序，B, G, R, A逐像素写入缓冲。 重写 `fragmentSource()` 提供 GLSL 时，GPU 后端可用则由封装层在 GPU 执行， 不可用时回退 `render()`。

## 公开方法

### render

```cpp
virtual void render(uint8_t *rgba, int w, int h, const ShaderUniforms &u)=0
```

渲染一帧到 `RGBA` 缓冲

| 参数 | 说明 |
|---|---|
| `rgba` | 输出缓冲，尺寸 w*h*4 字节，字节序 B, G, R, A |
| `w` | 缓冲宽度，像素 |
| `h` | 缓冲高度，像素 |

### clone

```cpp
virtual std::unique_ptr< FragmentShader > clone() const =0
```

克隆当前着色器

### fragmentSource

```cpp
virtual const char * fragmentSource() const
```

GLSL 片段着色器源码，nullptr 表示无 GPU 实现，回退 CPU render。 源码不含 #version 时库按后端注入版本头，含 #version 时原样使用。
