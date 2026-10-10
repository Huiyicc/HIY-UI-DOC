---
title: "FrameContent"
---

# FrameContent <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/window_frame.h>`

**Namespace:** `hiyui`

Main content area of a WindowFrame.

**Inherits:** `hiyui::Container< FrameContent >`

## Public Methods

### FrameContent

```cpp
FrameContent(lv_obj_t *raw)
```

Wraps an existing main content area object.

### init

```cpp
FrameContent & init(lv_obj_t *parent, const FrameRegionProps &props={}) &
```

Creates the content area in a WindowFrame; no creation when the parent is invalid or the area already exists.
