---
title: "hiyui_painter_callbacks_t"
---

# hiyui_painter_callbacks_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/custom_draw.h>`

Custom draw policy callbacks; unused fields are zeroed. All callbacks run on the UI thread and must not throw exceptions.

## Public Members

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
