---
title: "ShaderSurface"
---

# ShaderSurface <Badge type="info" text="类" />

**头文件：** `#include <hiyui/shader/shader_surface.h>`

**命名空间：** `hiyui`

着色器承载组件

绑定一个 FragmentShader，每帧推进 iTime、重绘离屏缓冲并贴到对象区域。 未绑定着色器时不绘制。

**继承自：** `hiyui::Chainable< ShaderSurface >`

## 公开方法

### shader

```cpp
ShaderSurface & shader(std::unique_ptr< FragmentShader > shader)
```

绑定片段着色器

| 参数 | 说明 |
|---|---|
| `shader` | 着色器实例，所有权转移至组件 |


**返回值：** 当前组件

### source

```cpp
ShaderSurface & source(const char *glsl)
```

设置 GLSL 片段着色器源码

GPU 后端可用时在 GPU 执行，否则清空缓冲。替换既有着色器。
| 参数 | 说明 |
|---|---|
| `glsl` | GLSL 源码，调用方保证生命周期；nullptr 清除着色器 |


**返回值：** 当前组件

### start

```cpp
ShaderSurface & start()
```

启动时间驱动

### stop

```cpp
ShaderSurface & stop()
```

停止时间驱动

### running

```cpp
ShaderSurface & running(bool on)
```

设置时间驱动开关

| 参数 | 说明 |
|---|---|
| `on` | true=启动, false=停止 |


**返回值：** 当前组件
