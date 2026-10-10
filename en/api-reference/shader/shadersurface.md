---
title: "ShaderSurface"
---

# ShaderSurface <Badge type="info" text="Class" />

**Header:** `#include <hiyui/shader/shader_surface.h>`

**Namespace:** `hiyui`

Widget that hosts a shader

Binds one FragmentShader, advancing iTime, redrawing the offscreen buffer, and blitting it to the object area each frame. Nothing is drawn without a bound shader.

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

Runs on the GPU when a GPU backend is available, otherwise clears the buffer. Replaces an existing shader. GLSL source whose lifetime is guaranteed by the caller; nullptr clears the shader This component

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

Enables or disables time driving

true = start, false = stop This component
