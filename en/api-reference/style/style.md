---
title: "Style"
---

# Style <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style.h>`

**Namespace:** `hiyui`

Unified style structure describing all visual properties of a component

Draw order is BgImage, BgFill, Backdrop, Overlay, then content. Unset fields do not override existing styles.


StyleSet for multi-state styling

## 前景

### color

```cpp
RGBA color
```

Text color

### fontSize

```cpp
int fontSize
```

Font size, HIYUI_NONE_INT = not set

### lineHeight

```cpp
float lineHeight
```

Font size multiplier. Bitmap fonts compute from the original line height. Negative = not set, 0 restores the original line height, valid multipliers are 0.5 to 4.

## 背景

### bgImage

```cpp
BgImage bgImage
```

Background image

### bgFill

```cpp
BgFill bgFill
```

Background color and gradient

### backdrop

```cpp
Backdrop backdrop
```

Backdrop blur

### overlay

```cpp
Overlay overlay
```

Foreground overlay color

## 布局

### radius

```cpp
int radius
```

Corner radius, HIYUI_NONE_INT = not set

### padH

```cpp
int padH
```

Horizontal inner padding, HIYUI_NONE_INT = not set

### padV

```cpp
int padV
```

Vertical inner padding, HIYUI_NONE_INT = not set

### marginH

```cpp
int marginH
```

Horizontal outer margin, HIYUI_NONE_INT = not set

### marginV

```cpp
int marginV
```

Vertical outer margin, HIYUI_NONE_INT = not set

### opacity

```cpp
int opacity
```

Overall opacity [0,255], HIYUI_NONE_INT = not set, affects the component and its children

### transition

```cpp
int transition
```

Transition animation duration in milliseconds, HIYUI_NONE_INT = not set, 0 = no animation

## 装饰

### border

```cpp
Border border
```

Border configuration

### shadow

```cpp
Shadow shadow
```

Shadow configuration

## Public Methods

### with

```cpp
Style with(Style override) const
```

Compile-time style merge, returns a new merged Style

Overwrites fields that are set in override onto this Style. Unset markers: color fields use HIYUI_NONE, numeric fields use HIYUI_NONE_INT, bgImage uses empty src, gradient uses dir None, all other values including 0 overwrite. backdrop, bgImage, gradient and shadow replace the whole group once set. Shadow counts as set when opacity is set or color carries an alpha channel.


The merged new style, this is not modified

### applyTo

```cpp
void applyTo(_lv_obj_t *obj) const
```

Applies the style to an LVGL object
