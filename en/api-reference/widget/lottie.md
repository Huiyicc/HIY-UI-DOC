---
title: "Lottie"
---

# Lottie <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/lottie.h>`

**Namespace:** `hiyui`

Lottie vector animation widget.

File path sources use the OS file system, not the LVGL file system layer. The render buffer is owned by the widget and follows the widget size.



**See also:** `LottieProps`

**Inherits:** `hiyui::Chainable< Lottie >`

## Public Methods

### Lottie

```cpp
Lottie(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Lottie

```cpp
Lottie(LottieProps props={})
```

Aggregate construction from properties

### init

```cpp
Lottie & init(lv_obj_t *parent) &
```

Creates the LVGL lottie object under a parent object

### init

```cpp
Lottie & init(Widget &parent) &
```

Creates the LVGL lottie object under a parent object

### src

```cpp
Lottie & src(const char *path) &
```

Switches the animation file at runtime

The path is copied before return. After switching, playback restarts from the beginning while the play/pause state, loop and speed settings are kept.

### srcData

```cpp
Lottie & srcData(const void *data, uint32_t size) &
```

Switches to embedded JSON data at runtime

When mounted, the data is copied before return and can be released afterwards; before mounting, the data stays borrowed until mount. After switching, playback restarts from the beginning while the play/pause state, loop and speed settings are kept.

### play

```cpp
Lottie & play() &
```

Resumes playback

### pause

```cpp
Lottie & pause() &
```

Pauses playback

### restart

```cpp
Lottie & restart() &
```

Seeks to frame 0 and plays

### playing

```cpp
bool playing() const
```

Whether the animation is playing

### loop

```cpp
Lottie & loop(bool infinite) &
```

Sets the loop mode

true = loop forever, false = play once

### speed

```cpp
Lottie & speed(float multiplier) &
```

Sets the playback speed

Speed multiplier, greater than 0, 1 = normal speed

### recolor

```cpp
Lottie & recolor(uint32_t color, uint8_t opa=255) &
```

Sets recoloring with a fixed color

Applies to every frame, keeps alpha, switchable at runtime.


Recolor color, 0xRRGGBB Recolor intensity [0,255], default 255

### recolor

```cpp
Lottie & recolor(ThemeRole role, uint8_t opa=255) &
```

Sets recoloring with a theme role color

The color resolves from the theme and re-resolves on theme switches.


Theme role Recolor intensity [0,255], default 255

### progress

```cpp
float progress() const
```

Progress of the current cycle

0..1, or 0 when no source is loaded

### durationMs

```cpp
uint32_t durationMs() const
```

Duration of one cycle

Milliseconds, including the speed multiplier, or 0 when no source is loaded
