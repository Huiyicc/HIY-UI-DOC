---
title: "TransitionEffect"
---

# TransitionEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/transition_effect.h>`

**Namespace:** `hiyui`

Abstract base class for theme transition animation effects

Subclasses implement prepare() and update() to define the concrete pixel processing algorithm. ThemeTransition calls update() on every animation frame, passing the current progress and the snapshot buffer.

## Public Methods

### prepare

```cpp
virtual void prepare(int w, int h, TransitionDirection dir)=0
```

Initialization before the animation starts

Snapshot width in pixels Snapshot height in pixels Animation direction

### update

```cpp
virtual void update(float progress, uint8_t *buf, int w, int h, uint32_t stride)=0
```

Updates snapshot pixels every frame

Implementations modify the pixel data in buf here to produce the transition. buf uses ARGB8888 and stride is the number of bytes per row. Setting alpha to 0 in areas that should not show reveals the new content below.


Animation progress in [0.0, 1.0] Snapshot pixel buffer, ARGB8888, modifiable Width in pixels Height in pixels Bytes per row

### durationMs

```cpp
virtual int durationMs() const
```

Animation duration in milliseconds

Defaults to 300ms; subclasses may override
