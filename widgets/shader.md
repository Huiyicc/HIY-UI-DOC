---
title: 着色器
---

# 着色器

`ShaderSurface` 承载片段着色器，按固定帧率推进时间，把离屏渲染结果贴到组件区域。库提供 CPU 软件渲染与 GPU 硬件加速两条路径，实际走向由编译选项与运行时条件决定。

## ShaderSurface

绑定一个片段着色器，每帧推进时间、重绘离屏缓冲并贴到对象区域。未绑定着色器时不绘制。

### 最小示例

```cpp
ShaderSurface surface({.width = 240, .height = 240, .fps = 60});
surface.init(parent).source(kFrag);
```

`kFrag` 为 GLSL 片段着色器源码字符串，生命周期由调用方保有。

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `width` | `int` | [`HIYUI_AUTO`](/core/constants) | 宽度，自动值由布局决定 |
| `height` | `int` | [`HIYUI_AUTO`](/core/constants) | 高度，自动值由布局决定 |
| `scale` | `float` | `1.0` | 离屏分辨率比例，小于 1 时降采样 |
| `fps` | `int` | `60` | 时间驱动帧率 |
| `running` | `bool` | `true` | 初始是否自动驱动时间 |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `source(const char *glsl)` | `ShaderSurface &` | 绑定 GLSL 源码，`nullptr` 清除着色器 |
| `shader(std::unique_ptr<FragmentShader>)` | `ShaderSurface &` | 绑定片段着色器，所有权转移至组件 |
| `start()` / `stop()` | `ShaderSurface &` | 启动或停止时间驱动 |
| `running(bool on)` | `ShaderSurface &` | `true` 启动，`false` 停止 |

## FragmentShader

CPU 软件着色器基类。派生类实现 `render()`，按 LVGL `ARGB8888` 字节序（B, G, R, A）逐像素写入缓冲。

```cpp
class MyShader : public FragmentShader {
  void render(uint8_t *rgba, int w, int h, const ShaderUniforms &u) override;
  std::unique_ptr<FragmentShader> clone() const override;
};
```

`render()` 与 `clone()` 为纯虚。`ShaderUniforms` 携带缓冲尺寸（`resolutionW`、`resolutionH`，像素）、累计时间（`time`，秒）和鼠标位置（`mouseX`、`mouseY`，像素，0 表示未交互）。

重写 `fragmentSource()` 返回 GLSL 源码后，GPU 后端可用时在 GPU 执行同一份着色逻辑，不可用时回退 `render()`。

## GlslShader

仅持有 GLSL 源码的片段着色器，`source(glsl)` 内部绑定此类型。GPU 后端可用时执行其 GLSL；无 GPU 时 `render()` 清空缓冲。

## GPU 路径与软件路径

GPU 后端由编译宏 `HIYUI_GPU_SHADER` 控制：SDL 后端启用（Android 需 OPENGLES 渲染），Emscripten 在 WEBGL 渲染下启用，其余编译配置不启用。宏启用且 GL 上下文可用时，GLSL 在 GPU 执行；否则执行 CPU 路径。

| 绑定方式 | GPU 可用 | GPU 不可用 |
| --- | --- | --- |
| `source(glsl)` | GPU 执行 GLSL | 清空缓冲 |
| `shader(...)` 且重写 `fragmentSource` | GPU 执行 GLSL | 调用 `render()` |
| `shader(...)` 未重写 `fragmentSource` | 调用 `render()` | 调用 `render()` |

GLSL 源码写版本无关 body（不写 `#version`），库按后端注入版本头：桌面 `#version 330 core`，GLES `#version 300 es` 加 precision 声明，旧上下文为 `#version 100`；源码已含 `#version` 时原样使用。可用的 uniform 为 `uResolution`(vec2)、`uTime`(float)、`uMouse`(vec2)，片元输出为 `out vec4 fragColor`。

完整签名见 [ShaderSurface](/api-reference/shader/shadersurface) 与 [FragmentShader](/api-reference/shader/fragmentshader)。

## 注意事项

:::warning
`source(glsl)` 不提供 CPU 实现，无 GPU 环境下组件区域为空。需要全平台可见时，使用 `FragmentShader` 子类并实现 `render()`。
:::
