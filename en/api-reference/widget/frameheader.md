---
title: "FrameHeader"
---

# FrameHeader <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/window_frame.h>`

**Namespace:** `hiyui`

Top area of WindowFrame.

**Inherits:** `hiyui::Container< FrameHeader >`

## Public Methods

### FrameHeader

```cpp
FrameHeader(lv_obj_t *raw)
```

Wraps an existing top area object.

### init

```cpp
FrameHeader & init(lv_obj_t *parent, const FrameRegionProps &props={}) &
```

Creates the top area in the WindowFrame, nothing is created when the parent is invalid or the area already exists.
