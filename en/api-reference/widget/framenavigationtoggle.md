---
title: "FrameNavigationToggle"
---

# FrameNavigationToggle <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/window_frame.h>`

**Namespace:** `hiyui`

Button controlling the navigation area of its WindowFrame.

Shown in Drawer presentation and hidden in other presentations. The button must be inside the WindowFrame subtree.

**Inherits:** `hiyui::Chainable< FrameNavigationToggle, Button >`

## Public Methods

### FrameNavigationToggle

```cpp
FrameNavigationToggle(lv_obj_t *raw)
```

Wraps an existing navigation toggle button object.

### init

```cpp
FrameNavigationToggle & init(lv_obj_t *parent) &
```

Creates the navigation toggle button in the WindowFrame subtree, nothing is created when the frame is not found.
