---
title: "CustomDraw"
---

# CustomDraw <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/custom_draw.h>`

**Namespace:** `hiyui`

Custom draw container component

A Painter is injected through painter() and decides all drawn content. Supports aggregate initialization, chained calls, and replacing the Painter at runtime.



**See also:** `Painter`

**Inherits:** `hiyui::Chainable< CustomDraw >`

## Public Methods

### painter

```cpp
CustomDraw & painter(std::unique_ptr< Painter > p) &
```

Transfers Painter ownership; nullptr clears it. On replacement or removal the old Painter is released after an in-flight callback returns.

### start

```cpp
CustomDraw & start() &
```

Starts the animation; creates a timer when fps&gt;0. Idempotent.

### stop

```cpp
CustomDraw & stop() &
```

Stops the animation, deletes the timer, and becomes static immediately.

### fps

```cpp
CustomDraw & fps(int f) &
```

Changes the frame rate at runtime; 0 = stop. While running, the timer is rebuilt at the new rate.

### redraw

```cpp
CustomDraw & redraw() &
```

Triggers a redraw manually
