---
title: "Shape"
---

# Shape <Badge type="info" text="类" />

**头文件：** `#include <hiyui/shape/shape.h>`

**命名空间：** `hiyui`

形状句柄，值语义，内部共享实现

通过静态工厂方法创建预设形状或自定义多边形， 支持布尔运算组合形状，挂载到组件后自动生效。



**参见：** `GlassEffect`

## 挂载/卸载

### attach

```cpp
void attach(_lv_obj_t *obj) const
```

挂载形状到 LVGL 对象

挂载后自动裁剪渲染区域并替换命中测试逻辑。

### detach

```cpp
static void detach(_lv_obj_t *obj)
```

从 LVGL 对象卸载形状

### isAttached

```cpp
static bool isAttached(_lv_obj_t *obj)
```

检查对象是否已挂载形状

### rasterizeMask

```cpp
static void rasterizeMask(_lv_obj_t *obj, uint8_t *mask, int w, int h)
```

获取已挂载的形状掩码

| 参数 | 说明 |
|---|---|
| `obj` | 已挂载形状的 LVGL 对象 |
| `mask` | 输出缓冲区 |
| `w` | 掩码宽度 |
| `h` | 掩码高度 |

## 查询

### rasterize

```cpp
void rasterize(uint8_t *mask, int w, int h) const
```

生成形状掩码

| 参数 | 说明 |
|---|---|
| `mask` | 输出缓冲区 [0,255] |
| `w` | 掩码宽度 |
| `h` | 掩码高度 |

### contains

```cpp
bool contains(float nx, float ny) const
```

点测试

| 参数 | 说明 |
|---|---|
| `nx` | 归一化 X 坐标 [0, 1] |
| `ny` | 归一化 Y 坐标 [0, 1] |


**返回值：** 点是否在形状内

### valid

```cpp
bool valid() const
```

检查形状是否有效

**返回值：** true = 已初始化

## 预设形状，基础几何

### Circle

```cpp
static Shape Circle()
```

圆形，内切于组件矩形

### Ellipse

```cpp
static Shape Ellipse()
```

椭圆，内切于组件矩形

### Rect

```cpp
static Shape Rect()
```

矩形，与组件等大，无圆角

### RoundRect

```cpp
static Shape RoundRect(int radius)
```

圆角矩形

| 参数 | 说明 |
|---|---|
| `radius` | 圆角半径，单位像素 |

### Triangle

```cpp
static Shape Triangle()
```

等腰三角形，顶点朝上

## 预设形状，扩展

### Star

```cpp
static Shape Star(int points, float innerRatio=0.38f)
```

星形

| 参数 | 说明 |
|---|---|
| `points` | 角数，如 5 = 五角星 |
| `innerRatio` | 内径/外径比，默认 0.38 |

### RegularPolygon

```cpp
static Shape RegularPolygon(int sides)
```

正 N 边形

| 参数 | 说明 |
|---|---|
| `sides` | 边数，如 6 = 正六边形 |

### Diamond

```cpp
static Shape Diamond()
```

菱形

## 自定义形状

### Polygon

```cpp
static Shape Polygon(std::vector< Vec2 > vertices)
```

自定义多边形

| 参数 | 说明 |
|---|---|
| `vertices` | 顶点列表，归一化坐标 [0, 1]，按顺序连线闭合 |

## 布尔运算

### Union

```cpp
static Shape Union(Shape a, Shape b)
```

并集，A ∪ B

### Intersect

```cpp
static Shape Intersect(Shape a, Shape b)
```

交集，A ∩ B

### Subtract

```cpp
static Shape Subtract(Shape a, Shape b)
```

差集，A - B
