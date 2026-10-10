---
title: "Application"
---

# Application <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/application.h>`

**Namespace:** `hiyui`

Application entry point managing window lifecycle and the main loop

Derived classes build the UI through setup(). Only one Application instance should be created per process.



**See also:** `Window`

## Friends

### detail::resolveContentScaleForDisplay

Lets the DPI path call resolveContentScale, a protected virtual function

## Public Methods

### run

```cpp
int run()
```

Starts the application main loop

Calls setup() internally, then enters the LVGL event loop. Returns when quit() is called or all windows are closed.


0 on normal exit; 1 when FBDEV startup or event handling fails.

### quit

```cpp
void quit()
```

Quits the application and stops the main loop

Windows are consulted first; if any cancels, this quit does not close windows. After all allow, waits for exit animations to finish. Creating a new window during confirmation cancels this quit. Repeated quit requests are ignored.

## Protected Methods

### setup

```cpp
virtual void setup()=0
```

Builds the UI

Called inside run() before the main loop starts. Call createWindow() here and mount the widget tree.

### resolveContentScale

```cpp
virtual float resolveContentScale(const ScreenInfo &)
```

Returns the screen fitting factor

Called early in run(), before fonts load and on every DPI or screen change, with the target display information. The return value is clamped by setUiScale to [1.0, 2.0] and drives the screen fitting dimension of scaled(); dpiScale = dpr × uiScale. A typical implementation derives it from the fraction of screen width the window should occupy.

### createWindow

```cpp
Window & createWindow(const char *title, Size size)
```

Creates a new window

Window title, UTF-8 string, copied internally Window size in pixels Window reference whose lifetime is managed by Application

### navigate

```cpp
void navigate(Window &target, Transition t=Transition::SlideLeft)
```

Page navigation; presents a window on desktop and switches pages on mobile

Navigation history is recorded; navigating to the current target again adds no history. Navigating to a history page truncates the history after it. The first created window is the root page; truncating history does not destroy pages. Reentrant calls during navigation are ignored. A window created by this Application and not yet closed. Page transition for single-display hosts; desktop uses the WindowProps enter and exit animations.

### goBack

```cpp
void goBack(Transition t=Transition::SlideRight)
```

Requests closing the current navigation page and restores the previous page, whose content is kept.

No effect on the root page; if closing is canceled, the current page and navigation history are kept. Back transition for single-display hosts; switches immediately when animation is off.
