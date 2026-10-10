---
title: Shape
---

# Shape

`Shape` 是可复制的形状句柄。挂载到组件后，绘制按形状遮罩裁剪，命中测试只认可形状内的点。

## 内置形状

```cpp
Shape circle = Shape::Circle();      // 内切于组件矩形
Shape rounded = Shape::RoundRect(12); // 圆角半径 12 像素
Shape star = Shape::Star(5, 0.45f);   // 五角星，内径/外径比 0.45
```

还提供 `Ellipse`（内切）、`Rect`（与组件等大）、`Triangle`（顶点朝上）、`RegularPolygon(n)`、`Diamond` 和自定义 `Polygon(vertices)`。`Polygon` 顶点使用 `[0, 1]` 归一化坐标，按顺序连线闭合。

## 组合

`Union`、`Intersect` 和 `Subtract` 对两个形状做并、交、差运算：

```cpp
// 圆环，外圆减内圆
Shape ring = Shape::Subtract(Shape::Circle(), Shape::Circle());
```

## 挂载

```cpp
Shape::RoundRect(16).attach(card.raw());
```

遮罩跟随对象尺寸自动生成。`Shape::detach(obj)` 移除绑定，`Shape::isAttached(obj)` 查询挂载状态。对象尺寸或背景样式变化时重新生成缓存。

## 查询

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `contains(nx, ny)` | `bool` | 点测试，坐标为 `[0, 1]` 归一化值 |
| `rasterize(mask, w, h)` | `void` | 输出 `w × h` 的 8 位遮罩，每字节取值 [0, 255] |
| `valid()` | `bool` | 形状是否已初始化 |

`Shape::rasterizeMask(obj, mask, w, h)` 输出已挂载到对象的形状遮罩。
