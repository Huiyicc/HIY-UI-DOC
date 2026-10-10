---
title: "ResampledImage"
---

# ResampledImage <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/image_resample.h>`

**Namespace:** `hiyui`

Resampling result holding pixels and an lv_image_dsc_t descriptor

Move only; dsc.data points into the pixels buffer and stays valid after moving. Its lifetime must cover all widgets referencing it.

## Public Methods

### valid

```cpp
bool valid() const
```

Whether a valid bitmap is held
