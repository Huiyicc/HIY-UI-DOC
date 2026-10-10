---
title: "ImageBuffer"
---

# ImageBuffer <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/image_buffer.h>`

**Namespace:** `hiyui`

32-bit pixel image resource with library-owned storage

create copies pixels from the caller's buffer; rows are top-down, each row is width × 4 bytes with no padding between rows. After copy or move the internal descriptor still points to its own storage.



**See also:** Image::src(const ImageBuffer &amp;)


**See also:** `SystemTray::create`

## Public Methods

### ImageBuffer

```cpp
ImageBuffer(const ImageBuffer &other)
```

Deep-copies pixels; the descriptor points to new storage

### operator=

```cpp
ImageBuffer & operator=(const ImageBuffer &other)
```

Deep-copies pixels; the descriptor points to new storage

### valid

```cpp
bool valid() const
```

Whether a valid bitmap is held

### width

```cpp
uint32_t width() const
```

Bitmap width in pixels; 0 for an empty resource

### height

```cpp
uint32_t height() const
```

Bitmap height in pixels; 0 for an empty resource

## Static Methods

### create

```cpp
static ImageBuffer create(uint32_t width, uint32_t height, PixelFormat format, const uint8_t *pixels, size_t byteCount)
```

Creates a resource from caller pixels

Width in pixels, must be greater than 0 Height in pixels, must be greater than 0 Pixel memory layout First address of the pixel bytes Must equal width × height × 4 Returns an empty resource with valid() false when parameters mismatch or total bytes exceed the 32-bit descriptor range; oversized allocation failure throws per standard library semantics.
