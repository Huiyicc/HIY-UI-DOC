---
title: "Painter"
---

# Painter <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/painter.h>`

**Namespace:** `hiyui`

Custom paint strategy base class

The instance is moved to CustomDraw via std::unique_ptr and its lifetime is bound to the LVGL object. this can be used safely inside callbacks.

## Public Methods

### paint

```cpp
virtual void paint(DrawCtx &ctx, const PaintCtx &pc)=0
```

Repainting uses local physical coordinates; only submit drawing and do not modify the widget tree, theme or size inside this callback.

### tick

```cpp
virtual void tick(float)
```

Animation frame; called periodically only when CustomDraw has fps &gt; 0. dt is in seconds.

### onTheme

```cpp
virtual void onTheme(const Theme &)
```

Theme switch notification; the library guarantees the call before the next paint.

### onEvent

```cpp
virtual void onEvent(Event &, const PaintCtx &)
```

Handles input and state events; a repaint is requested automatically after return. The Event must not be stored beyond the callback.

### onResize

```cpp
virtual void onResize(const PaintCtx &)
```

Called when the strategy is installed and when the widget size changes; the size may be zero.

### onDpi

```cpp
virtual void onDpi(const PaintCtx &)
```

Called when the strategy is installed and after DPI updates.
