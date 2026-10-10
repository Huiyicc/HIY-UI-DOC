---
title: "shader_surface.h"
---

# shader_surface.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/shader_surface.h>`

Generic GLSL fragment shader widget

## Functions

### hiyui_shader_surface_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_shader_surface_create(hiyui_widget_t *parent, const hiyui_shader_surface_props_t *props)
```

Creates a generic shader widget

Runs GLSL on the GPU when a GPU backend is available, otherwise clears the buffer. set_source must follow to set the GLSL. All defaults when NULL, layout size, scale=1.0, fps=60, running=true

### hiyui_shader_surface_set_source

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_set_source(hiyui_widget_t *w, const char *glsl)
```

Sets the GLSL fragment shader source

GLSL source, lifetime guaranteed by the caller, NULL clears the shader

### hiyui_shader_surface_start

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_start(hiyui_widget_t *w)
```

Starts time-driven execution.

### hiyui_shader_surface_stop

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_stop(hiyui_widget_t *w)
```

Stops time-driven execution.

### hiyui_shader_surface_set_running

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_set_running(hiyui_widget_t *w, int on)
```

Sets the time-driven switch

1=start, 0=stop

### hiyui_shader_gpu_active

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_shader_gpu_active(void)
```

Queries whether the GPU shader backend is working

HIYUI_BOOL_TRUE means hardware rendering, otherwise software rendering
