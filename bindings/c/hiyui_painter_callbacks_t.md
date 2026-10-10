---
title: "hiyui_painter_callbacks_t"
---

# hiyui_painter_callbacks_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/custom_draw.h>`

自绘策略回调，未使用字段置零；全部回调在 UI 线程调用且不得抛出异常。

## 公开成员

### paint

```c
hiyui_paint_fn paint
```

### tick

```c
hiyui_tick_fn tick
```

### event

```c
hiyui_painter_event_fn event
```

### resize

```c
hiyui_painter_change_fn resize
```

### dpi

```c
hiyui_painter_change_fn dpi
```

### theme

```c
hiyui_callback_fn theme
```

### destroy

```c
hiyui_destroy_fn destroy
```

### user_data

```c
void * user_data
```
