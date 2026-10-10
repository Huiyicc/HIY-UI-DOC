---
title: "ShaderSurface"
---

# ShaderSurface <Badge type="info" text="Class" />

**Header:** `#include <hiyui/shader/shader_surface.h>`

**Namespace:** `hiyui`

Shader hosting widget

Binds a FragmentShader, advances iTime each frame, redraws the offscreen buffer, and blits it to the object area. Draws nothing when no shader is bound.

**Inherits:** `hiyui::Chainable< ShaderSurface >`

## Public Methods

### shader

```cpp
ShaderSurface & shader(std::unique_ptr< FragmentShader > shader)
```

Binds a fragment shader

Shader instance, ownership transferred to the widget This component

### source

```cpp
ShaderSurface & source(const char *glsl)
```

Sets the GLSL fragment shader source

Runs on the GPU when a GPU backend is available, otherwise clears the buffer. Replaces an existing shader. GLSL source, lifetime guaranteed by the caller; nullptr clears the shader This component

### start

```cpp
ShaderSurface & start()
```

Starts time driving

### stop

```cpp
ShaderSurface & stop()
```

Stops time driving

### running

```cpp
ShaderSurface & running(bool on)
```

Sets the time-driving switch

true = start, false = stop This component
