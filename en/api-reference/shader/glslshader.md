---
title: "GlslShader"
---

# GlslShader <Badge type="info" text="Class" />

**Header:** `#include <hiyui/shader/shader.h>`

**Namespace:** `hiyui`

GLSL-only fragment shader

Holds GLSL source; the wrapper layer compiles and runs it when a GPU backend is available, and render() clears the buffer without a GPU. When the source omits \#version the library injects a version header per backend (desktop 330 core / GLES 300 es + precision); when \#version is present it is used as-is.

**Inherits:** `hiyui::FragmentShader`

## Public Methods

### render

```cpp
virtual void render(uint8_t *rgba, int w, int h, const ShaderUniforms &) override
```

Renders one frame into an RGBA buffer

Output buffer, w*h*4 bytes, byte order B, G, R, A Buffer width in pixels Buffer height in pixels

### fragmentSource

```cpp
virtual const char * fragmentSource() const override
```

GLSL fragment shader source; nullptr means no GPU implementation and falls back to CPU render. When the source lacks \#version the library injects a version header per backend; when it contains \#version it is used as-is.

### clone

```cpp
virtual std::unique_ptr< FragmentShader > clone() const override
```

Clones the current shader
