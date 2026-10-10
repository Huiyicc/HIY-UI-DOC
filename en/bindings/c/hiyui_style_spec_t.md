---
title: "hiyui_style_spec_t"
---

# hiyui_style_spec_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/style.h>`

Style that keeps unset values, zeros, and alpha. Initialize with hiyui_style_spec_default. A color is not set when rgb is HIYUI_NONE. Integer sizes, opacity, and transition_ms are not set when HIYUI_NONE_INT. line_height is not set when negative. Sizes are logical pixels, opacity is in [0,255], transition_ms is in ms. line_height is a multiple of the font size. bg_image.src is borrowed image data or a path. The apply_style_spec functions copy the path, and the caller keeps image data valid.

## Public Members

### color

```c
hiyui_rgba_t color
```

### font_size

```c
int font_size
```

### line_height

```c
float line_height
```

### src

```c
const void * src
```

### fit

```c
hiyui_bg_image_fit_t fit
```

### opacity

```c
uint8_t opacity
```

### recolor

```c
hiyui_rgba_t recolor
```

### recolor_opa

```c
uint8_t recolor_opa
```

### tiled

```c
int tiled
```

### bg_image

```c
struct hiyui_style_spec_t::@151311204022323304361307015371213365067116341024 bg_image
```

### gradient

```c
hiyui_gradient_t gradient
```

### bg_fill

```c
struct hiyui_style_spec_t::@140272030346300046206225016050204112277364225122 bg_fill
```

### blur_radius

```c
int blur_radius
```

### tint

```c
hiyui_rgba_t tint
```

### tint_opacity

```c
uint8_t tint_opacity
```

### backdrop

```c
struct hiyui_style_spec_t::@346236375301345165214373057133025142354142120331 backdrop
```

### overlay

```c
hiyui_rgba_t overlay
```

### radius

```c
int radius
```

### pad_h

```c
int pad_h
```

### pad_v

```c
int pad_v
```

### margin_h

```c
int margin_h
```

### margin_v

```c
int margin_v
```

### opacity

```c
int opacity
```

### transition_ms

```c
int transition_ms
```

### width

```c
int width
```

### border

```c
struct hiyui_style_spec_t::@172245010203171306234316061246157353270326352202 border
```

### offset_x

```c
int offset_x
```

### offset_y

```c
int offset_y
```

### blur

```c
int blur
```

### sides

```c
uint8_t sides
```

### placement

```c
hiyui_shadow_placement_t placement
```

### shadow

```c
struct hiyui_style_spec_t::@201160202205052122023223367377244137116266370276 shadow
```
