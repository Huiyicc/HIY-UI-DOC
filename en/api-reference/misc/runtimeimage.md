---
title: "RuntimeImage"
---

# RuntimeImage <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/runtime_image.h>`

**Namespace:** `hiyui`

Image loaded at runtime

Owns the raw image data and the matching lv_image_dsc_t; the data buffer lives with the object. The pointer returned by dsc() is valid while the object is alive and can be passed to Image, RichInput::insertImage and similar APIs.

## Public Methods

### loadFromFile

```cpp
bool loadFromFile(const char *path)
```

Loads an image from a file

true on success; false when the file does not exist, reading fails, or the backend is not SDL

### dsc

```cpp
const lv_image_dsc_t * dsc() const
```

Returns the image descriptor

nullptr when not loaded
