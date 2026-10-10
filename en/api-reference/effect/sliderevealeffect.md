---
title: "SlideRevealEffect"
---

# SlideRevealEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/slide_reveal_effect.h>`

**Namespace:** `hiyui`

Slide reveal transition effect

Computes the divider position from the progress; one side of the divider keeps the old screenshot, the other side is made transparent. Direction is controlled by TransitionDirection.

**Inherits:** `hiyui::TransitionEffect`

## Public Methods

### prepare

```cpp
virtual void prepare(int w, int h, TransitionDirection dir) override
```

Initialization before the animation starts

Screenshot width in pixels Screenshot height in pixels Animation direction

### update

```cpp
virtual void update(float progress, uint8_t *buf, int w, int h, uint32_t stride) override
```

Updates screenshot pixels each frame

Implementations modify the pixel data in buf in this method to produce the transition effect. buf uses ARGB8888 format; stride is the number of bytes per row. Setting the alpha of unwanted regions to 0 reveals the new content below.


Animation progress [0.0, 1.0] Screenshot pixel buffer, ARGB8888, modifiable Width in pixels Height in pixels Bytes per row

### durationMs

```cpp
virtual int durationMs() const override
```

Animation duration in milliseconds

Defaults to 300ms; subclasses may override
