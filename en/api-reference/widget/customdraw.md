---
title: "CustomDraw"
---

# CustomDraw <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/custom_draw.h>`

**Namespace:** `hiyui`

Custom draw container widget

A Painter is injected through painter() and decides all drawing. Supports aggregate initialization, chained calls, and runtime Painter replacement.



**See also:** `Painter`

**Inherits:** `hiyui::Chainable< CustomDraw >`

## Public Methods

### painter

```cpp
CustomDraw & painter(std::unique_ptr< Painter > p) &
```

Transfers Painter ownership; nullptr clears it. On replace or delete, the old Painter is released after in-flight callbacks return.

### start

```cpp
CustomDraw & start() &
```

Start animation; creates a timer when fps&gt;0; idempotent.

### stop

```cpp
CustomDraw & stop() &
```

Stop animation, delete the timer, and freeze immediately.

### fps

```cpp
CustomDraw & fps(int f) &
```

Change the frame rate at runtime; 0 = stop; a running timer is rebuilt at the new rate.

### redraw

```cpp
CustomDraw & redraw() &
```

Trigger a redraw manually
