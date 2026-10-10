---
title: "Image"
---

# Image <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/image.h>`

**Namespace:** `hiyui`

Image display widget

Supports file paths and lv_image_dsc_t* embedded resources as image sources. Windows paths are converted to LVGL FS format automatically.



**See also:** `ImageProps`

**Inherits:** `hiyui::Chainable< Image >`

## Public Methods

### Image

```cpp
Image(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Image

```cpp
Image(ImageProps props={})
```

Construct from aggregated properties

### init

```cpp
Image & init(lv_obj_t *parent) &
```

Create the LVGL image object under a parent

### init

```cpp
Image & init(Widget &parent) &
```

Create the LVGL image object under a parent

### src

```cpp
Image & src(const void *s) &
```

Switch the image source at runtime, generic pointer

File paths are copied before return; the image descriptor and pixels are borrowed until the source is replaced or the widget is destroyed.

### src

```cpp
Image & src(const char *path) &
```

Switch the image source at runtime, file path

UTF-8 file path, copied before return.

### src

```cpp
Image & src(const ImageBuffer &buffer) &
```

Bind a library-owned pixel resource

Copied into a widget snapshot that lives until the source is replaced or the widget is destroyed; the local ImageBuffer can be destroyed after binding. No effect on gif-mode instances; the widget must be initialized.


32-bit pixel resource; an invalid buffer leaves the current display unchanged

### recolor

```cpp
Image & recolor(uint32_t color, uint8_t opa=255) &
```

Set recoloring, icon mode

Recolor color, 0xRRGGBB Recolor intensity [0,255], default 255

### fit

```cpp
Image & fit(ImageFit mode) &
```

Set the scale and alignment mode
