---
title: "ImageProps"
---

# ImageProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/image.h>`

**Namespace:** `hiyui`

Properties for creating an Image

## Public Members

### src

```cpp
const void * src
```

Image source, a file path (const char*) or lv_image_dsc_t*

### width

```cpp
int width
```

Display width, HIYUI_AUTO = image intrinsic width

### height

```cpp
int height
```

Display height, HIYUI_AUTO = image intrinsic height

### fit

```cpp
ImageFit fit
```

Scale and alignment mode

### opacity

```cpp
uint8_t opacity
```

Opacity [0,255], 255 = opaque

### recolor

```cpp
uint32_t recolor
```

Recolor color, HIYUI_NONE = no recoloring

### recolorOpa

```cpp
uint8_t recolorOpa
```

Recolor intensity [0,255]

### gif

```cpp
bool gif
```

GIF animation mode, true = use the lv_gif widget
