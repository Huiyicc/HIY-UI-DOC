---
title: "custom_draw.h"
---

# custom_draw.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/custom_draw.h>`

自绘容器，对齐 hiyui::CustomDraw

通过 paint 回调在每帧或手动重绘时绘制内容，tick 回调驱动动画。 回调内使用 hiyui_draw_ctx_* 原语。

## 类型别名

### hiyui_paint_fn

```c
typedef void(* hiyui_paint_fn) (hiyui_draw_ctx_t *ctx, const hiyui_paint_ctx_t *pc, void *ud)
```

### hiyui_tick_fn

```c
typedef void(* hiyui_tick_fn) (float dt, void *ud)
```

### hiyui_painter_event_fn

```c
typedef void(* hiyui_painter_event_fn) (hiyui_event_t *event, const hiyui_paint_ctx_t *pc, void *ud)
```

### hiyui_painter_change_fn

```c
typedef void(* hiyui_painter_change_fn) (const hiyui_paint_ctx_t *pc, void *ud)
```

## 函数

### hiyui_custom_draw_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_custom_draw_create(hiyui_widget_t *parent, const hiyui_custom_draw_props_t *props)
```

### hiyui_custom_draw_set_painter

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_set_painter(hiyui_widget_t *w, const hiyui_painter_callbacks_t *callbacks)
```

复制回调描述；callbacks 为 NULL 时清空策略。 destroy 非 NULL 时接管 user_data，否则由调用方保持数据有效至策略释放。 替换、组件删除或 w 为 NULL 时调用 destroy，执行中的回调返回后才释放。 paint 仅提交绘制，不修改组件树、主题或尺寸；上下文只在当前回调内有效。

### hiyui_paint_ctx_px

```c
HIYUI_API int HIYUI_CALL hiyui_paint_ctx_px(const hiyui_paint_ctx_t *pc, int logical)
```

将逻辑像素转换为当前绘制上下文的物理像素；NULL 返回 0。

### hiyui_custom_draw_start

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_start(hiyui_widget_t *w)
```

### hiyui_custom_draw_stop

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_stop(hiyui_widget_t *w)
```

### hiyui_custom_draw_set_running

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_set_running(hiyui_widget_t *w, int on)
```

### hiyui_custom_draw_set_fps

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_set_fps(hiyui_widget_t *w, int fps)
```

### hiyui_custom_draw_redraw

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_redraw(hiyui_widget_t *w)
```
