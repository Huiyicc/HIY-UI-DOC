---
title: "shape.h"
---

# shape.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/shape.h>`

Shape clipping, aligned with hiyui::Shape

Handles are created by factories; after attach they replace the widget clip region and hit testing. Boolean operations consume their input handles, destroying a and b and returning the combined shape, which simplifies lifecycle management.

## Type Aliases

### hiyui_shape_t

```c
typedef struct hiyui_shape_s hiyui_shape_t
```

## Functions

### hiyui_shape_circle

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_circle(void)
```

### hiyui_shape_ellipse

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_ellipse(void)
```

### hiyui_shape_rect

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_rect(void)
```

### hiyui_shape_round_rect

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_round_rect(int radius)
```

### hiyui_shape_triangle

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_triangle(void)
```

### hiyui_shape_star

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_star(int points, float inner_ratio)
```

An inner_ratio of 0 or less uses the default 0.38

### hiyui_shape_regular_polygon

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_regular_polygon(int sides)
```

### hiyui_shape_diamond

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_diamond(void)
```

### hiyui_shape_polygon

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_polygon(const hiyui_vec2_t *verts, int count)
```

### hiyui_shape_union

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_union(hiyui_shape_t *a, hiyui_shape_t *b)
```

Union; consumes a and b

### hiyui_shape_intersect

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_intersect(hiyui_shape_t *a, hiyui_shape_t *b)
```

Intersection; consumes a and b

### hiyui_shape_subtract

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_subtract(hiyui_shape_t *a, hiyui_shape_t *b)
```

Difference A-B; consumes a and b

### hiyui_shape_attach

```c
HIYUI_API void HIYUI_CALL hiyui_shape_attach(hiyui_widget_t *obj, hiyui_shape_t *shape)
```

Attaches a shape to a widget, replacing its clip region and hit testing

### hiyui_shape_detach

```c
HIYUI_API void HIYUI_CALL hiyui_shape_detach(hiyui_widget_t *obj)
```

Detaches the shape from the widget

### hiyui_shape_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_shape_destroy(hiyui_shape_t *shape)
```
