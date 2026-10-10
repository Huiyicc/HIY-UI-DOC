---
title: "ShaderUniforms"
---

# ShaderUniforms <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/shader/shader.h>`

**Namespace:** `hiyui`

Shader input parameters

Corresponds to the ShaderToy iResolution / iTime / iMouse subset, a plain data structure.

## Public Members

### resolutionW

```cpp
float resolutionW
```

Offscreen buffer width in pixels

### resolutionH

```cpp
float resolutionH
```

Offscreen buffer height in pixels

### time

```cpp
float time
```

Accumulated time in seconds

### mouseX

```cpp
float mouseX
```

Mouse X in pixels; 0 means no interaction

### mouseY

```cpp
float mouseY
```

Mouse Y in pixels
