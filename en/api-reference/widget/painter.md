---
title: "Painter"
---

# Painter <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/painter.h>`

**Namespace:** `hiyui`

Custom paint strategy base

The instance is handed to CustomDraw through std::unique_ptr, its lifetime is bound to the LVGL object, and this is safe to use in callbacks.

## Public Methods

### paint

```cpp
virtual void paint(DrawCtx &ctx, const PaintCtx &pc)=0
```

Repainting uses local physical coordinates. Only submit drawing; do not modify the widget tree, theme, or size inside this callback.

### tick

```cpp
virtual void tick(float)
```

Animation frame; called periodically only when CustomDraw fps &gt; 0. dt is in seconds.

### onTheme

```cpp
virtual void onTheme(const Theme &)
```

Theme change notification, called by the library before the next paint.

### onEvent

```cpp
virtual void onEvent(Event &, const PaintCtx &)
```

Handles input and state events. A repaint is requested automatically after return; the Event must not be stored beyond the callback.

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
