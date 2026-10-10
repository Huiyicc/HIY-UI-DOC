---
title: "Style"
---

# Style <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/style/style.h>`

**Namespace:** `hiyui`

Unified style struct describing all visual properties of a component

Draw order is BgImage, BgFill, Backdrop, Overlay and content. Unset fields do not override existing styles.


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

Font size; HIYUI_NONE_INT = not set

### lineHeight

```cpp
float lineHeight
```

Font size multiplier. Bitmap fonts use the original line height as the base. Negative = not set, 0 restores the original line height, valid multipliers are 0.5 to 4.

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

Corner radius; HIYUI_NONE_INT = not set

### padH

```cpp
int padH
```

Horizontal padding; HIYUI_NONE_INT = not set

### padV

```cpp
int padV
```

Vertical padding; HIYUI_NONE_INT = not set

### marginH

```cpp
int marginH
```

Horizontal margin; HIYUI_NONE_INT = not set

### marginV

```cpp
int marginV
```

Vertical margin; HIYUI_NONE_INT = not set

### opacity

```cpp
int opacity
```

Overall opacity [0,255]; HIYUI_NONE_INT = not set; affects the component and its children

### transition

```cpp
int transition
```

Transition duration in milliseconds; HIYUI_NONE_INT = not set, 0 = no animation

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

Set fields in override overwrite the corresponding fields of the current Style. Unset markers: color fields use HIYUI_NONE, numeric fields use HIYUI_NONE_INT, bgImage uses an empty src, gradient uses dir None; all other values including 0 overwrite. backdrop, bgImage, gradient and shadow are replaced as a whole group once set. shadow counts as set when its opacity is set or its color carries an alpha channel.


The merged new style; this is not modified

### applyTo

```cpp
void applyTo(_lv_obj_t *obj) const
```

Applies the style to an LVGL object
