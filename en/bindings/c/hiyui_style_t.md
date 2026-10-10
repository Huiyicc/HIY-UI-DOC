---
title: "hiyui_style_t"
---

# hiyui_style_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/style.h>`

## Public Members

### color

```c
uint32_t color
```

Text color 0xRRGGBB

### font_size

```c
int font_size
```

Font size, 0 = theme default

### bg_fill

```c
hiyui_bg_fill_t bg_fill
```

Background

### radius

```c
int radius
```

Corner radius

### pad_h

```c
int pad_h
```

Horizontal padding

### pad_v

```c
int pad_v
```

Vertical padding

### opacity

```c
uint8_t opacity
```

Overall opacity [0,255]

### border

```c
hiyui_border_t border
```

### shadow

```c
hiyui_shadow_t shadow
```

### transition_ms

```c
int transition_ms
```

Transition duration in ms, 0 = no animation

### bg_image

```c
hiyui_bg_image_t bg_image
```

### backdrop

```c
hiyui_backdrop_t backdrop
```

### overlay

```c
uint32_t overlay
```

### overlay_alpha

```c
uint8_t overlay_alpha
```

Overlay opacity [0,255], 0 = opaque
