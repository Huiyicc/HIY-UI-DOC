---
title: "TransitionEffect"
---

# TransitionEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/transition_effect.h>`

**Namespace:** `hiyui`

Abstract base class for theme transition animation effects

Subclasses implement prepare() and update() to define the concrete pixel processing algorithm. ThemeTransition calls update() on every animation frame with the current progress and the screenshot buffer.

## Public Methods

### prepare

```cpp
virtual void prepare(int w, int h, TransitionDirection dir)=0
```

Initialization before the animation starts

Screenshot width in pixels Screenshot height in pixels Animation direction

### update

```cpp
virtual void update(float progress, uint8_t *buf, int w, int h, uint32_t stride)=0
```

Updates screenshot pixels each frame

Implementations modify the pixel data in buf in this method to produce the transition effect. buf uses ARGB8888 format; stride is the number of bytes per row. Setting the alpha of unwanted regions to 0 reveals the new content below.


Animation progress [0.0, 1.0] Screenshot pixel buffer, ARGB8888, modifiable Width in pixels Height in pixels Bytes per row

### durationMs

```cpp
virtual int durationMs() const
```

Animation duration in milliseconds

Defaults to 300ms; subclasses may override
