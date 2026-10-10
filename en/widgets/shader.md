---
title: Shader
---

# Shader

`ShaderSurface` carries a fragment shader, advances time at a fixed frame rate, and maps the offscreen rendering result onto the widget area. The library provides a CPU software rendering path and a GPU hardware-accelerated path; the actual path is determined by build options and runtime conditions.

## ShaderSurface

Binds a fragment shader, advances time each frame, redraws the offscreen buffer, and maps it onto the object area. Nothing is drawn without a bound shader.

### Minimal example

```cpp
ShaderSurface surface({.width = 240, .height = 240, .fps = 60});
surface.init(parent).source(kFrag);
```

`kFrag` is a GLSL fragment shader source string; its lifetime is owned by the caller.

### Props

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `int` | [`HIYUI_AUTO`](/en/core/constants) | Width; the auto value is determined by layout |
| `height` | `int` | [`HIYUI_AUTO`](/en/core/constants) | Height; the auto value is determined by layout |
| `scale` | `float` | `1.0` | Offscreen resolution ratio; values below 1 downsample |
| `fps` | `int` | `60` | Frame rate that drives time |
| `running` | `bool` | `true` | Whether time is driven automatically initially |

### Runtime methods

| Method | Returns | Description |
| --- | --- | --- |
| `source(const char *glsl)` | `ShaderSurface &` | Binds GLSL source; `nullptr` removes the shader |
| `shader(std::unique_ptr<FragmentShader>)` | `ShaderSurface &` | Binds a fragment shader; ownership moves to the widget |
| `start()` / `stop()` | `ShaderSurface &` | Starts or stops time driving |
| `running(bool on)` | `ShaderSurface &` | `true` starts, `false` stops |

## FragmentShader

Base class for CPU software shaders. Derived classes implement `render()`, writing the buffer pixel by pixel in LVGL `ARGB8888` byte order (B, G, R, A).

```cpp
class MyShader : public FragmentShader {
  void render(uint8_t *rgba, int w, int h, const ShaderUniforms &u) override;
  std::unique_ptr<FragmentShader> clone() const override;
};
```

`render()` and `clone()` are pure virtual. `ShaderUniforms` carries the buffer size (`resolutionW`, `resolutionH`, in pixels), accumulated time (`time`, in seconds), and the mouse position (`mouseX`, `mouseY`, in pixels; 0 means no interaction).

After overriding `fragmentSource()` to return GLSL source, the same shader logic runs on the GPU when the GPU backend is available, and falls back to `render()` otherwise.

## GlslShader

A fragment shader that only holds GLSL source; `source(glsl)` binds this type internally. Its GLSL runs when the GPU backend is available; without a GPU, `render()` clears the buffer.

## GPU path and software path

The GPU backend is controlled by the build macro `HIYUI_GPU_SHADER`: enabled with the SDL backend (Android requires OPENGLES rendering), enabled on Emscripten with WEBGL rendering, and not enabled in other build configurations. When the macro is enabled and a GL context is available, GLSL runs on the GPU; otherwise the CPU path runs.

| Binding | GPU available | GPU unavailable |
| --- | --- | --- |
| `source(glsl)` | GLSL runs on the GPU | Buffer is cleared |
| `shader(...)` with `fragmentSource` overridden | GLSL runs on the GPU | `render()` is called |
| `shader(...)` without `fragmentSource` overridden | `render()` is called | `render()` is called |

Write the GLSL source as a version-agnostic body (no `#version`); the library injects the version header per backend: `#version 330 core` on desktop, `#version 300 es` with a precision declaration on GLES, and `#version 100` on legacy contexts; source that already contains `#version` is used as-is. The available uniforms are `uResolution`(vec2), `uTime`(float), `uMouse`(vec2), and the fragment output is `out vec4 fragColor`.

Full signatures are in [ShaderSurface](/en/api-reference/shader/shadersurface) and [FragmentShader](/en/api-reference/shader/fragmentshader).

## Notes

:::warning
`source(glsl)` provides no CPU implementation; without a GPU the widget area is empty. For visibility on all platforms, use a `FragmentShader` subclass and implement `render()`.
:::
