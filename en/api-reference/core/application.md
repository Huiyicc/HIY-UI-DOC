---
title: "Application"
---

# Application <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/application.h>`

**Namespace:** `hiyui`

Application entry point that manages window lifecycle and the main loop

Derived classes build the UI through setup(). Only one Application instance should be created per process.



**See also:** `Window`

## Friends

### detail::resolveContentScaleForDisplay

Lets the DPI path forward to resolveContentScale, a protected virtual function

## Public Methods

### run

```cpp
int run()
```

Starts the application main loop

Calls setup() internally, then enters the LVGL event loop. Returns when quit() is called or all windows are closed.


Returns 0 on normal exit, or 1 when FBDEV startup or event handling fails.

### quit

```cpp
void quit()
```

Quits the application and stops the main loop

Windows are consulted first; if any window cancels, this quit does not close windows. When all windows allow it, the function waits for exit animations to finish. Creating a new window during confirmation cancels this quit. Repeated quit requests are ignored.

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

Returns the screen adaptation factor

Called early in run() before fonts load and on every DPI or screen change, with the target display information passed in. The return value is clamped by setUiScale to [1.0, 2.0] and drives the screen adaptation dimensions of scaled(), where dpiScale = dpr × uiScale. A typical implementation derives it from the fraction of screen width the window should occupy.

### createWindow

```cpp
Window & createWindow(const char *title, Size size)
```

Creates a new window

Window title, UTF-8 string, copied internally Window size in pixels Window reference; lifetime managed by Application

### navigate

```cpp
void navigate(Window &target, Transition t=Transition::SlideLeft)
```

Page navigation; window on desktop, page switch on mobile

Navigation history is recorded; navigating again to the current target adds no history entry. Navigating to a history page truncates the history after it. The first created window is the root page; truncating history does not destroy pages. Reentrant calls during navigation are ignored. A window created by this Application and not yet closed. Page transition for single-display hosts; desktop uses the enter and exit animations from WindowProps.

### goBack

```cpp
void goBack(Transition t=Transition::SlideRight)
```

Closes the current navigation page and restores the previous page; the previous page keeps its content.

No effect on the root page; when the close is canceled, the current page and navigation history are kept. Back transition for single-display hosts; switches immediately when animations are disabled.
