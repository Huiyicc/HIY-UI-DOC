---
title: "glass.h"
---

# glass.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/glass.h>`

Frosted glass blur effect, aligned with hiyui::GlassEffect

## Functions

### hiyui_glass_attach

```c
HIYUI_API void HIYUI_CALL hiyui_glass_attach(hiyui_widget_t *obj, const hiyui_backdrop_t *backdrop, const hiyui_blur_source_t *source)
```

Attaches a frosted glass effect to a widget.

Target widget. Blur parameters. No effect when blur_radius is 0. Blur source. NULL means backdrop-filter mode, which blurs the area below the widget.

### hiyui_glass_detach

```c
HIYUI_API void HIYUI_CALL hiyui_glass_detach(hiyui_widget_t *obj)
```

Removes the frosted glass effect from a widget

### hiyui_glass_invalidate_cache

```c
HIYUI_API void HIYUI_CALL hiyui_glass_invalidate_cache(hiyui_widget_t *obj)
```

Marks the cache invalid so the blur image is regenerated after the widget size or position changes

### hiyui_glass_is_attached

```c
HIYUI_API int HIYUI_CALL hiyui_glass_is_attached(hiyui_widget_t *obj)
```

Returns whether a frosted glass effect is attached to the widget
