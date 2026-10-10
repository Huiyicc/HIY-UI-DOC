---
title: "DrawCtx"
---

# DrawCtx <Badge type="info" text="Class" />

**Header:** `#include <hiyui/draw/draw_ctx.h>`

**Namespace:** `hiyui`

Drawing context wrapping drawing operations on an LVGL layer

Holds a _lv_layer_t pointer and wraps LVGL low-level drawing APIs into an object-oriented interface. Typically used inside custom draw callbacks.

## 基础图形

### strokeRect

```cpp
void strokeRect(Rect r, Color c, int width)
```

Draws a rectangle outline

Outline width in pixels

### fillRoundRect

```cpp
void fillRoundRect(Rect r, Color c, int radius)
```

Fills a rounded rectangle

Corner radius in pixels

### strokeRoundRect

```cpp
void strokeRoundRect(Rect r, Color c, int width, int radius)
```

Draws a rounded rectangle outline

Outline width in pixels Corner radius in pixels

## 渐变

### fillGradient

```cpp
void fillGradient(Rect r, Color from, Color to, bool vertical=true)
```

Fills a rectangle with a linear gradient.

### fillGradientRoundRect

```cpp
void fillGradientRoundRect(Rect r, Color from, Color to, int radius, bool vertical=true)
```

Fills a rounded rectangle with a gradient.

## 圆

### fillCircle

```cpp
void fillCircle(Point center, int radius, Color c)
```

Fills a circle

Radius in pixels

## 线条

### drawLine

```cpp
void drawLine(Point p1, Point p2, Color c, int width)
```

Draws a straight line

Line width in pixels

### drawLine

```cpp
void drawLine(Point p1, Point p2, Color c, int width, bool roundStart, bool roundEnd)
```

Draws a straight line with independently rounded endpoints.

### drawLine

```cpp
void drawLine(float x1, float y1, float x2, float y2, Color c, int width, bool roundStart, bool roundEnd)
```

Draws a line using floating-point physical pixel coordinates, preserving sub-pixel endpoints.

## 圆弧

### drawArc

```cpp
void drawArc(Point center, int r, int startAngle, int endAngle, Color c, int width)
```

Draws an arc

Radius in pixels Start angle in degrees; 0 = the horizontal direction to the right End angle in degrees, clockwise Arc line width in pixels

### drawArcRounded

```cpp
void drawArcRounded(Point center, int r, int startAngle, int endAngle, Color c, int width)
```

Draws an arc with rounded endpoints

Start angle in degrees End angle in degrees

## 裁剪

### pushClip

```cpp
void pushClip(Rect r)
```

Pushes a clip area; subsequent drawing takes effect only inside it

**See also:** `popClip()`

### popClip

```cpp
void popClip()
```

Pops the most recently pushed clip area

**See also:** `pushClip()`

## 透明度

### setOpacity

```cpp
void setOpacity(uint8_t opa)
```

Sets the global opacity for subsequent drawing

Opacity [0, 255]; 0 = fully transparent, 255 = fully opaque

## 文字

### drawText

```cpp
void drawText(const char *text, Point pos)
```

Draws text

UTF-8 encoded text content Coordinate of the text top-left corner

### drawText

```cpp
void drawText(const char *text, Rect area, Color c, int fontSize, bool centerH=true, bool centerV=true)
```

Draws text

UTF-8 text

### measureText

```cpp
Size measureText(const char *text, int fontSize, int maxWidth=0) const
```

Measures UTF-8 text and returns the size in physical pixels.

Font size in physical pixels, must be greater than 0. Wrap width in physical pixels; 0 means unlimited. Returns a zero size for a null pointer, non-positive font size, or negative width.

## 图像

### drawImage

```cpp
void drawImage(const lv_image_dsc_t *src, Rect area, Color recolor)
```

Draws an lv_image_dsc_t bitmap with recoloring

Image descriptor pointer, such as the return value of FontIcon::render Drawing area; the image is centered within it Recolor color

### drawImage

```cpp
void drawImage(const ImageBuffer &src, Rect area)
```

Draws the image centered in the area at its original pixel size. Use inside a display refresh callback; copies a snapshot of the resource, so the source resource may be released after the call returns.

### drawIcon

```cpp
void drawIcon(uint32_t codepoint, Rect area, Color color, int size, const FontIconStyle &style={})
```

Draws a font icon; size is in physical pixels; nothing is drawn when the font is uninitialized or the codepoint does not exist.

## Public Methods

### ~DrawCtx

```cpp
~DrawCtx()
```

Restores the clip area from when the draw callback was entered; the context must not be kept beyond the callback.

### DrawCtx

```cpp
DrawCtx(_lv_layer_t *layer)
```

Constructs a drawing context

LVGL layer pointer, provided by the draw event callback

### DrawCtx

```cpp
DrawCtx(_lv_layer_t *layer, int offsetX, int offsetY)
```

Constructs a drawing context with a coordinate offset

Absolute X coordinate of the object Absolute Y coordinate of the object
