---
title: "Shape"
---

# Shape <Badge type="info" text="Class" />

**Header:** `#include <hiyui/shape/shape.h>`

**Namespace:** `hiyui`

Shape handle with value semantics sharing an internal implementation

Creates preset shapes or custom polygons through static factory methods. Supports combining shapes with boolean operations and takes effect automatically once attached to a component.



**See also:** `GlassEffect`

## 挂载/卸载

### attach

```cpp
void attach(_lv_obj_t *obj) const
```

Attaches the shape to an LVGL object

After attachment the render area is clipped and hit testing is replaced automatically.

### detach

```cpp
static void detach(_lv_obj_t *obj)
```

Detaches the shape from an LVGL object

### isAttached

```cpp
static bool isAttached(_lv_obj_t *obj)
```

Checks whether an object has a shape attached

### rasterizeMask

```cpp
static void rasterizeMask(_lv_obj_t *obj, uint8_t *mask, int w, int h)
```

Gets the mask of the attached shape

LVGL object with a shape attached Output buffer Mask width Mask height

## 查询

### rasterize

```cpp
void rasterize(uint8_t *mask, int w, int h) const
```

Generates the shape mask

Output buffer with values [0,255] Mask width Mask height

### contains

```cpp
bool contains(float nx, float ny) const
```

Point test

Normalized X coordinate [0, 1] Normalized Y coordinate [0, 1] Whether the point is inside the shape

### valid

```cpp
bool valid() const
```

Checks whether the shape is valid

true = initialized

## 预设形状，基础几何

### Circle

```cpp
static Shape Circle()
```

Circle, inscribed in the component rectangle

### Ellipse

```cpp
static Shape Ellipse()
```

Ellipse, inscribed in the component rectangle

### Rect

```cpp
static Shape Rect()
```

Rectangle, same size as the component, no corner radius

### RoundRect

```cpp
static Shape RoundRect(int radius)
```

Rounded rectangle

Corner radius in pixels

### Triangle

```cpp
static Shape Triangle()
```

Isosceles triangle, apex up

## 预设形状，扩展

### Star

```cpp
static Shape Star(int points, float innerRatio=0.38f)
```

Star

Number of points, e.g. 5 = five-pointed star Inner to outer radius ratio, default 0.38

### RegularPolygon

```cpp
static Shape RegularPolygon(int sides)
```

Regular N-sided polygon

Number of sides, e.g. 6 = regular hexagon

### Diamond

```cpp
static Shape Diamond()
```

Diamond

## 自定义形状

### Polygon

```cpp
static Shape Polygon(std::vector< Vec2 > vertices)
```

Custom polygon

Vertex list with normalized coordinates [0, 1], connected in order and closed

## 布尔运算

### Union

```cpp
static Shape Union(Shape a, Shape b)
```

Union, A ∪ B

### Intersect

```cpp
static Shape Intersect(Shape a, Shape b)
```

Intersection, A ∩ B

### Subtract

```cpp
static Shape Subtract(Shape a, Shape b)
```

Difference, A - B
