---
title: "shader_surface.h"
---

# shader_surface.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/shader_surface.h>`

通用 GLSL 片段着色器组件

## 函数

### hiyui_shader_surface_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_shader_surface_create(hiyui_widget_t *parent, const hiyui_shader_surface_props_t *props)
```

创建通用着色器组件

GPU 后端可用时在 GPU 执行 GLSL，否则清空缓冲。需后接 set_source 设置 GLSL。
| 参数 | 说明 |
|---|---|
| `props` | 为 NULL 时全默认（布局尺寸/scale=1.0/fps=60/running=true） |

### hiyui_shader_surface_set_source

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_set_source(hiyui_widget_t *w, const char *glsl)
```

设置 GLSL 片段着色器源码

| 参数 | 说明 |
|---|---|
| `glsl` | GLSL 源码，调用方保证生命周期；NULL 清除着色器 |

### hiyui_shader_surface_start

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_start(hiyui_widget_t *w)
```

启动时间驱动

### hiyui_shader_surface_stop

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_stop(hiyui_widget_t *w)
```

停止时间驱动

### hiyui_shader_surface_set_running

```c
HIYUI_API void HIYUI_CALL hiyui_shader_surface_set_running(hiyui_widget_t *w, int on)
```

设置时间驱动开关

| 参数 | 说明 |
|---|---|
| `on` | 1=启动, 0=停止 |

### hiyui_shader_gpu_active

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_shader_gpu_active(void)
```

查询 GPU 着色器后端是否在工作

**返回值：** HIYUI_BOOL_TRUE 表示硬解，否则软解
