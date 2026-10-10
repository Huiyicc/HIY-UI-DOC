---
title: "RuntimeImage"
---

# RuntimeImage <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/runtime_image.h>`

**Namespace:** `hiyui`

Runtime-loaded image

Holds the raw image data and the matching lv_image_dsc_t; the data buffer lives with the object. The pointer returned by dsc() stays valid while the object is alive, pass it to Image, RichInput::insertImage and similar.

## Public Methods

### loadFromFile

```cpp
bool loadFromFile(const char *path)
```

Loads an image from a file

true on success; false when the file is missing, on read errors, or on non-SDL backends

### dsc

```cpp
const lv_image_dsc_t * dsc() const
```

Returns the image descriptor

nullptr when nothing is loaded
