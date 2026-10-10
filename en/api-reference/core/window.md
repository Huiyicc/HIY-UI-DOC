---
title: "Window"
---

# Window <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/window.h>`

**Namespace:** `hiyui`

Window class wrapping an SDL window and an LVGL display

Created by Application::createWindow(), lifetime managed by Application. Provides title, size and position control plus widget tree mounting.


Android and FBDEV windows share a display host, each keeping its own page content. Later shared pages wait for show or navigate, only the active page receives input. FBDEV uses the device resolution; display creation failure throws std::runtime_error. FBDEV ignores size, position, window decorations, and window enter and exit animation settings.



**See also:** `Application::createWindow()`


**See also:** `WindowProps`

## 通用接口

### title

```cpp
Window & title(const char *title)
```

Sets the window title

UTF-8 string, copied at call time; nullptr means an empty title.

### title

```cpp
Window & title(const LocalizedText &title)
```

Binds the window title; switching languages updates both the system title and the title bar; a plain title unbinds.

### size

```cpp
Window & size(int w, int h)
```

Sets the window size

Width in pixels Height in pixels

### background

```cpp
Window & background(WindowBackground background)
```

Replaces the window background; an empty configuration restores the theme background color. Repeated calls release the previous draw resources; no effect when window creation failed, the window was removed, or destruction was requested. The background updates with theme, DPI, window size and window animations, and does not change text opacity. Transparent and SystemBlur are supported on desktop windows only, other platforms use Content.

### backgroundMode

```cpp
WindowBackgroundMode backgroundMode() const
```

Queries the background mode adopted by the window. The system compositor may disable blur due to settings or window state; this interface does not guarantee blur is always visible.

Returns Content after creation failure or removal.

### close

```cpp
void close()
```

Closes the window

Dispatches a close request; when not canceled, the exit animation plays and Application destroys the window. Repeated close calls or calls within the same close callback produce no additional request. After the close is allowed, show and hide no longer change the closing state.

### requestBack

```cpp
bool requestBack()
```

Synchronously requests back, handling top overlays, input cancellation, local regions and current page history in order. Does not close the application when there is nothing to go back from; a canceled close request still counts as handled.

true when consumed; false when nothing was handled, already closed, not shown, an inactive shared page, or reentered.

### onCloseRequest

```cpp
Window & onCloseRequest(F &&handler, EventHandle *handle=nullptr)
```

Binds a close request handler, the callback receives WindowCloseEvent&amp;.

Repeated bindings accumulate; any callback canceling keeps the window. Asynchronous confirmation should cancel first, then call close again after confirmation completes. Bindings release automatically when the window closes. Windows that failed to create or were removed do not bind callbacks. Optional unbind handle.

## 桌面端窗口控制

### position

```cpp
Window & position(int x, int y)
```

Sets the window position

Screen X coordinate in pixels Screen Y coordinate in pixels

### menu

```cpp
Window & menu(std::vector< MenuBarItem > items)
```

Sets the application menu, effective only on borderless desktop windows, silently ignored on other windows

Takes over items; repeated calls replace all menu items and rebuild shortcut registration, an empty list clears the menu. macOS installs a native application menu. On other platforms the menu bar sits below the title bar; first installation increases the total window height by the WindowProps::menuBar height, restored on clear. Menus and shortcuts are cleaned up with the window on destruction.


List of top-level menu items

## 状态查询

### titleBarHeight

```cpp
int titleBarHeight() const
```

Queries the custom drawn title bar logical height

Title bar height in theme logical pixels; the TitleBarProps default when not borderless

## 内部访问

### screenActive

```cpp
lv_obj_t * screenActive() const
```

Gets this window's screen object, including pages not yet shown.

Borrowed LVGL screen pointer; returns nullptr after creation failure or removal.

### rootParent

```cpp
lv_obj_t * rootParent() const
```

Gets the mount parent of the root widget tree

Borderless windows return the content area object below the title bar, window animations return the animation surface, otherwise the active screen; returns nullptr when none is ready

## Public Methods

### root

```cpp
void root(Widget &&tree)
```

Sets the root widget tree

An uninitialized widget tree is created in the window content area; an already mounted tree is remounted into the content area and filled. After the call the root wrapper binding is released, widget lifetime is managed by the window, and bound Refs stay connected.
