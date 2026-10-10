---
title: "ShaderSurfaceProps"
---

# ShaderSurfaceProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/shader/shader_surface.h>`

**Namespace:** `hiyui`

ShaderSurface creation properties.

## Public Members

### width

```cpp
int width
```

Width; HIYUI_AUTO defers to layout

### height

```cpp
int height
```

Height; HIYUI_AUTO defers to layout

### scale

```cpp
float scale
```

Offscreen resolution scale

### fps

```cpp
int fps
```

Time-driven frame rate

### running

```cpp
bool running
```

Whether time is driven automatically initially
