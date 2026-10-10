---
title: "custom_draw.h"
---

# custom_draw.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/custom_draw.h>`

Custom draw container mirroring hiyui::CustomDraw

The paint callback draws content on each frame or manual redraw, and the tick callback drives animations. Callbacks use the hiyui_draw_ctx_* primitives.

## Type Aliases

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

## Functions

### hiyui_custom_draw_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_custom_draw_create(hiyui_widget_t *parent, const hiyui_custom_draw_props_t *props)
```

### hiyui_custom_draw_set_painter

```c
HIYUI_API void HIYUI_CALL hiyui_custom_draw_set_painter(hiyui_widget_t *w, const hiyui_painter_callbacks_t *callbacks)
```

Copies the callback description, a NULL callbacks clears the strategy. When destroy is not NULL it takes ownership of user_data, otherwise the caller keeps the data valid until the strategy is released. destroy is called on replacement, widget deletion or a NULL w, and frees only after callbacks in execution return. paint only submits drawing and must not modify the widget tree, theme or size, the context is valid only within the current callback.

### hiyui_paint_ctx_px

```c
HIYUI_API int HIYUI_CALL hiyui_paint_ctx_px(const hiyui_paint_ctx_t *pc, int logical)
```

Converts logical pixels to physical pixels of the current paint context, NULL returns 0.

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
