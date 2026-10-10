---
title: "WindowProps"
---

# WindowProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/window.h>`

**Namespace:** `hiyui`

Window creation properties

Pure POD struct, all fields have defaults, supports C++20 aggregate initialization. Used through Application::createWindow(WindowProps).

## Public Members

### title

```cpp
const char * title
```

Window title, UTF-8 encoded

### width

```cpp
int width
```

Window width in pixels

### height

```cpp
int height
```

Content area height in pixels; in borderless mode the title bar and menu bar stack on top of it

### borderless

```cpp
bool borderless
```

Borderless mode

### resizable

```cpp
bool resizable
```

Whether the user can drag to resize

### shadow

```cpp
bool shadow
```

Window shadow, effective only in borderless mode

### x

```cpp
int x
```

Window X coordinate, -1 = centered

### y

```cpp
int y
```

Window Y coordinate, -1 = centered

### titleBar

```cpp
TitleBarProps titleBar
```

Title bar properties, effective only in borderless mode

### enterAnimation

```cpp
WindowAnimation enterAnimation
```

Enter animation

### exitAnimation

```cpp
WindowAnimation exitAnimation
```

Exit animation

### menuBar

```cpp
MenuBarProps menuBar
```

App menu bar style, effective only for borderless desktop windows, used when menu() installs menus

### initiallyHidden

```cpp
bool initiallyHidden
```

Stays hidden after creation and mounting on desktop until show is called explicitly; ignored on other platforms.

### background

```cpp
WindowBackground background
```

Window background, covering the title bar and content area.
