---
title: "CrossFadeEffect"
---

# CrossFadeEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/cross_fade_effect.h>`

**Namespace:** `hiyui`

Cross fade transition effect

Scales the alpha of every pixel by progress; fully transparent when progress reaches 1.

**Inherits:** `hiyui::TransitionEffect`

## Public Methods

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
