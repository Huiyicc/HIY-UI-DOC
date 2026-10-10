---
title: "FragmentShader"
---

# FragmentShader <Badge type="info" text="Class" />

**Header:** `#include <hiyui/shader/shader.h>`

**Namespace:** `hiyui`

Fragment shader implementation base class

Derived classes implement render(), writing the buffer pixel by pixel in LVGL ARGB8888 byte order, B, G, R, A. When fragmentSource() is overridden to provide GLSL, the wrapper layer runs it on the GPU when a GPU backend is available, and falls back to render() otherwise.

## Public Methods

### render

```cpp
virtual void render(uint8_t *rgba, int w, int h, const ShaderUniforms &u)=0
```

Renders one frame into an RGBA buffer

Output buffer, w*h*4 bytes, byte order B, G, R, A Buffer width in pixels Buffer height in pixels

### clone

```cpp
virtual std::unique_ptr< FragmentShader > clone() const =0
```

Clones the current shader

### fragmentSource

```cpp
virtual const char * fragmentSource() const
```

GLSL fragment shader source; nullptr means no GPU implementation and falls back to CPU render. When the source has no \#version, the library injects a version header per backend; when it has \#version, it is used as is.
