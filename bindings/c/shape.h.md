---
title: "shape.h"
---

# shape.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/shape.h>`

形状裁剪，对齐 hiyui::Shape

句柄由工厂创建，attach 后替换组件的裁剪区域与命中测试。 布尔运算消费入参句柄（销毁 a/b，返回组合形状），简化生命周期。

## 类型别名

### hiyui_shape_t

```c
typedef struct hiyui_shape_s hiyui_shape_t
```

## 函数

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

inner_ratio &lt;= 0 使用默认 0.38

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

并集，消费 a 与 b

### hiyui_shape_intersect

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_intersect(hiyui_shape_t *a, hiyui_shape_t *b)
```

交集，消费 a 与 b

### hiyui_shape_subtract

```c
HIYUI_API hiyui_shape_t *HIYUI_CALL hiyui_shape_subtract(hiyui_shape_t *a, hiyui_shape_t *b)
```

差集 A-B，消费 a 与 b

### hiyui_shape_attach

```c
HIYUI_API void HIYUI_CALL hiyui_shape_attach(hiyui_widget_t *obj, hiyui_shape_t *shape)
```

挂载形状到组件，替换裁剪区域与命中测试

### hiyui_shape_detach

```c
HIYUI_API void HIYUI_CALL hiyui_shape_detach(hiyui_widget_t *obj)
```

卸载组件上的形状

### hiyui_shape_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_shape_destroy(hiyui_shape_t *shape)
```
