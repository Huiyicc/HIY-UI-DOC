---
title: "Image"
---

# Image <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/image.h>`

**Namespace:** `hiyui`

Image display widget

Supports file paths and lv_image_dsc_t* embedded resources as image sources. Windows paths are converted to the LVGL FS format automatically.



**See also:** `ImageProps`

**Inherits:** `hiyui::Chainable< Image >`

## Public Methods

### Image

```cpp
Image(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Image

```cpp
Image(ImageProps props={})
```

Aggregate construction from properties

### init

```cpp
Image & init(lv_obj_t *parent) &
```

Creates the LVGL image object under a parent object

### init

```cpp
Image & init(Widget &parent) &
```

Creates the LVGL image object under a parent object

### src

```cpp
Image & src(const void *s) &
```

Switches the image source at runtime, generic pointer

The file path is copied before return. The image descriptor and its pixels are borrowed until the source is replaced or the widget is destroyed.

### src

```cpp
Image & src(const char *path) &
```

Switches the image source at runtime, file path

UTF-8 file path, copied before return.

### src

```cpp
Image & src(const ImageBuffer &buffer) &
```

Binds a library-owned pixel resource

Copied into a widget snapshot that lives until the source is replaced or the widget is destroyed. After binding, the local ImageBuffer can be destroyed. No effect on GIF mode instances; the widget must be initialized.


32-bit pixel resource; an invalid buffer leaves the current display unchanged

### recolor

```cpp
Image & recolor(uint32_t color, uint8_t opa=255) &
```

Sets recoloring, icon mode

Recolor color, 0xRRGGBB Recolor intensity [0,255], default 255

### fit

```cpp
Image & fit(ImageFit mode) &
```

Sets the scaling and alignment mode
