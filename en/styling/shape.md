---
title: Shape
---

# Shape

`Shape` is a copyable shape handle. After being attached to a widget, drawing is clipped by the shape mask and hit testing accepts only points inside the shape.

## Built-in shapes

```cpp
Shape circle = Shape::Circle();      // Inscribed in the widget rectangle
Shape rounded = Shape::RoundRect(12); // Corner radius of 12 pixels
Shape star = Shape::Star(5, 0.45f);   // Five-pointed star, inner/outer radius ratio 0.45
```

`Ellipse` (inscribed), `Rect` (matching the widget size), `Triangle` (apex pointing up), `RegularPolygon(n)`, `Diamond`, and the custom `Polygon(vertices)` are also provided. `Polygon` vertices use `[0, 1]` normalized coordinates and connect in order into a closed outline.

## Combination

`Union`, `Intersect`, and `Subtract` compute the union, intersection, and difference of two shapes:

```cpp
// Ring, outer circle minus inner circle
Shape ring = Shape::Subtract(Shape::Circle(), Shape::Circle());
```

## Attaching

```cpp
Shape::RoundRect(16).attach(card.raw());
```

The mask is generated automatically to follow the object size. `Shape::detach(obj)` removes the binding, and `Shape::isAttached(obj)` queries the attached state. The cache is regenerated when the object size or background style changes.

## Queries

| Method | Returns | Description |
| --- | --- | --- |
| `contains(nx, ny)` | `bool` | Point test; coordinates are `[0, 1]` normalized values |
| `rasterize(mask, w, h)` | `void` | Outputs a `w × h` 8-bit mask with each byte in [0, 255] |
| `valid()` | `bool` | Whether the shape is initialized |

`Shape::rasterizeMask(obj, mask, w, h)` outputs the mask of the shape attached to an object.
