---
title: "FrameNavigation"
---

# FrameNavigation <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/window_frame.h>`

**Namespace:** `hiyui`

Navigation area of WindowFrame.

**Inherits:** `hiyui::Container< FrameNavigation >`

## Public Methods

### FrameNavigation

```cpp
FrameNavigation(lv_obj_t *raw)
```

Wraps an existing navigation area object.

### init

```cpp
FrameNavigation & init(lv_obj_t *parent, const FrameRegionProps &props={}) &
```

Creates the navigation area in the WindowFrame, nothing is created when the parent is invalid or the area already exists.
