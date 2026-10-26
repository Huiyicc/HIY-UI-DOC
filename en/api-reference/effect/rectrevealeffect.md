---
title: "RectRevealEffect"
---

# RectRevealEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/rect_reveal_effect.h>`

**Namespace:** `hiyui`

Rect expand transition effect

The reveal area starts from origin's rounded rectangle and quickly expands as a circle until it covers the screen; inside the area shows the new theme, outside keeps the old screenshot.

**Inherits:** `hiyui::TransitionEffect`

## Public Methods

### RectRevealEffect

```cpp
RectRevealEffect(_lv_obj_t *origin=nullptr)
```

Uses origin's rectangle as the reveal start

The rectangle and corner radius are read at construction; destroying origin afterwards does not affect the effect.


Trigger widget; a null pointer starts from the screen center

### prepare

```cpp
virtual void prepare(int w, int h, TransitionDirection dir) override
```

Initialization before the animation starts

Snapshot width in pixels Snapshot height in pixels Animation direction

### update

```cpp
virtual void update(float progress, uint8_t *buf, int w, int h, uint32_t stride) override
```

Updates snapshot pixels every frame

Implementations modify the pixel data in buf here to produce the transition. buf uses ARGB8888 and stride is the number of bytes per row. Setting alpha to 0 in areas that should not show reveals the new content below.


Animation progress in [0.0, 1.0] Snapshot pixel buffer, ARGB8888, modifiable Width in pixels Height in pixels Bytes per row

### durationMs

```cpp
virtual int durationMs() const override
```

Animation duration in milliseconds

Defaults to 300ms; subclasses may override
