---
title: "WindowFrame"
---

# WindowFrame <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/window_frame.h>`

**Namespace:** `hiyui`

Responsive window frame managing the Header, Navigation and Content areas.

Each area holds at most one direct child. Width class changes keep the area objects and their subtrees, updating only the layout presentation of the areas.

**Inherits:** `hiyui::Container< WindowFrame >`

## Public Methods

### WindowFrame

```cpp
WindowFrame(lv_obj_t *raw)
```

Wraps an existing window frame object.

### init

```cpp
WindowFrame & init(lv_obj_t *parent) &
```

Creates the window frame in a parent widget.

### init

```cpp
WindowFrame & init(lv_obj_t *parent, const WindowFrameProps &props) &
```

Creates the window frame in a parent widget with the given properties.

### init

```cpp
WindowFrame & init(Widget &parent) &
```

Creates the window frame in a parent widget.

### init

```cpp
WindowFrame & init(Widget &parent, const WindowFrameProps &props) &
```

Creates the window frame in a parent widget with the given properties.

### init

```cpp
WindowFrame & init(Window &window) &
```

Creates the window frame in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.

### init

```cpp
WindowFrame & init(Window &window, const WindowFrameProps &props) &
```

Creates the window frame in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.

### widthClass

```cpp
LayoutWidthClass widthClass() const
```

Returns the current width class.

### openNavigation

```cpp
WindowFrame & openNavigation() &
```

Opens the current Drawer navigation; other presentations leave the state unchanged.

### closeNavigation

```cpp
WindowFrame & closeNavigation() &
```

Closes the current Drawer navigation; other presentations leave the state unchanged.

### toggleNavigation

```cpp
WindowFrame & toggleNavigation() &
```

Toggles the current Drawer navigation; other presentations leave the state unchanged.

### navigationOpen

```cpp
bool navigationOpen() const
```

Returns whether the Drawer navigation is open or opening; other presentations return false.
