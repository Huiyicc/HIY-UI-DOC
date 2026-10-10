---
title: "DrawCtx"
---

# DrawCtx <Badge type="info" text="类" />

**头文件：** `#include <hiyui/draw/draw_ctx.h>`

**命名空间：** `hiyui`

绘图上下文，封装 LVGL layer 的绘制操作

通过持有 _lv_layer_t 指针，将 LVGL 底层绘制 API 封装为 面向对象的接口。通常在自定义绘制回调中使用。

## 基础图形

### strokeRect

```cpp
void strokeRect(Rect r, Color c, int width)
```

绘制矩形边框

| 参数 | 说明 |
|---|---|
| `width` | 边框宽度，单位像素 |

### fillRoundRect

```cpp
void fillRoundRect(Rect r, Color c, int radius)
```

填充圆角矩形

| 参数 | 说明 |
|---|---|
| `radius` | 圆角半径，单位像素 |

### strokeRoundRect

```cpp
void strokeRoundRect(Rect r, Color c, int width, int radius)
```

绘制圆角矩形边框

| 参数 | 说明 |
|---|---|
| `width` | 边框宽度，单位像素 |
| `radius` | 圆角半径，单位像素 |

## 渐变

### fillGradient

```cpp
void fillGradient(Rect r, Color from, Color to, bool vertical=true)
```

填充线性渐变矩形。

### fillGradientRoundRect

```cpp
void fillGradientRoundRect(Rect r, Color from, Color to, int radius, bool vertical=true)
```

填充圆角渐变矩形。

## 圆

### fillCircle

```cpp
void fillCircle(Point center, int radius, Color c)
```

填充圆形

| 参数 | 说明 |
|---|---|
| `radius` | 半径，单位像素 |

## 线条

### drawLine

```cpp
void drawLine(Point p1, Point p2, Color c, int width)
```

绘制直线

| 参数 | 说明 |
|---|---|
| `width` | 线条宽度，单位像素 |

### drawLine

```cpp
void drawLine(Point p1, Point p2, Color c, int width, bool roundStart, bool roundEnd)
```

绘制直线，可分别设置两端是否为圆角。

### drawLine

```cpp
void drawLine(float x1, float y1, float x2, float y2, Color c, int width, bool roundStart, bool roundEnd)
```

以物理像素浮点坐标绘制直线，保留亚像素端点。

## 圆弧

### drawArc

```cpp
void drawArc(Point center, int r, int startAngle, int endAngle, Color c, int width)
```

绘制圆弧

| 参数 | 说明 |
|---|---|
| `r` | 半径，单位像素 |
| `startAngle` | 起始角度，度，0 = 右侧水平方向 |
| `endAngle` | 结束角度，度，顺时针方向 |
| `width` | 圆弧线宽，单位像素 |

### drawArcRounded

```cpp
void drawArcRounded(Point center, int r, int startAngle, int endAngle, Color c, int width)
```

绘制圆角端点圆弧

| 参数 | 说明 |
|---|---|
| `startAngle` | 起始角度，度 |
| `endAngle` | 结束角度，度 |

## 裁剪

### pushClip

```cpp
void pushClip(Rect r)
```

压入裁剪区域，后续绘制仅在该区域内生效

**参见：** `popClip()`

### popClip

```cpp
void popClip()
```

弹出最近一次压入的裁剪区域

**参见：** `pushClip()`

## 透明度

### setOpacity

```cpp
void setOpacity(uint8_t opa)
```

设置后续绘制的全局透明度

| 参数 | 说明 |
|---|---|
| `opa` | 透明度 [0, 255]，0 = 完全透明，255 = 完全不透明 |

## 文字

### drawText

```cpp
void drawText(const char *text, Point pos)
```

绘制文本

| 参数 | 说明 |
|---|---|
| `text` | UTF-8 编码文本内容 |
| `pos` | 文本左上角坐标 |

### drawText

```cpp
void drawText(const char *text, Rect area, Color c, int fontSize, bool centerH=true, bool centerV=true)
```

绘制文本

| 参数 | 说明 |
|---|---|
| `text` | UTF-8 文本 |

### measureText

```cpp
Size measureText(const char *text, int fontSize, int maxWidth=0) const
```

测量 UTF-8 文本，返回物理像素尺寸。

| 参数 | 说明 |
|---|---|
| `fontSize` | 字号，单位为物理像素，须大于 0。 |
| `maxWidth` | 换行宽度，物理像素；0 表示不限制。 |


**返回值：** 空指针、非正字号或负宽度返回零尺寸。

## 图像

### drawImage

```cpp
void drawImage(const lv_image_dsc_t *src, Rect area, Color recolor)
```

绘制 lv_image_dsc_t 位图，带着色

| 参数 | 说明 |
|---|---|
| `src` | 图像描述符指针，FontIcon::render 返回值等 |
| `area` | 绘制区域，图像居中于此区域 |
| `recolor` | 着色颜色 |

### drawImage

```cpp
void drawImage(const ImageBuffer &src, Rect area)
```

按原始像素大小在区域中居中绘制图片。 在显示刷新回调内使用；复制资源快照，调用返回后原资源可释放。

### drawIcon

```cpp
void drawIcon(uint32_t codepoint, Rect area, Color color, int size, const FontIconStyle &style={})
```

绘制字体图标，size 为物理像素；字体未初始化或码点不存在时不绘制。

## 公开方法

### ~DrawCtx

```cpp
~DrawCtx()
```

恢复进入绘制回调时的裁剪区域；上下文不得保存到回调之外。

### DrawCtx

```cpp
DrawCtx(_lv_layer_t *layer)
```

构造绘图上下文

| 参数 | 说明 |
|---|---|
| `layer` | LVGL 图层指针，由绘制事件回调提供 |

### DrawCtx

```cpp
DrawCtx(_lv_layer_t *layer, int offsetX, int offsetY)
```

构造绘图上下文，带坐标偏移

| 参数 | 说明 |
|---|---|
| `offsetX` | 对象绝对 X 坐标 |
| `offsetY` | 对象绝对 Y 坐标 |
