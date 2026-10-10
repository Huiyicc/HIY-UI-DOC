---
title: "ResampledImage"
---

# ResampledImage <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/image_resample.h>`

**Namespace:** `hiyui`

Resampling result holding pixels and an lv_image_dsc_t descriptor

Move-only; dsc.data points into the pixels buffer and remains valid after moving. The lifetime must cover every widget referencing it.

## Public Methods

### valid

```cpp
bool valid() const
```

Whether a valid bitmap is held
