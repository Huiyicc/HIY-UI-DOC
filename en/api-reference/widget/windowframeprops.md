---
title: "WindowFrameProps"
---

# WindowFrameProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/window_frame.h>`

**Namespace:** `hiyui`

Responsive window frame creation properties.

## Public Members

### wideMinWidth

```cpp
int wideMinWidth
```

Minimum content logical width to enter the wide layout; must be greater than 0.

### narrowNavigation

```cpp
FrameNavigationPresentation narrowNavigation
```

Navigation presentation in the narrow layout.

### wideNavigation

```cpp
FrameNavigationPresentation wideNavigation
```

Navigation presentation in the wide layout.

### navigationEdge

```cpp
FrameNavigationEdge navigationEdge
```

Edge the navigation attaches to.

### navigationWidth

```cpp
int navigationWidth
```

Docked navigation width; `HIYUI_AUTO` follows content, positive values are logical pixels.

### drawerWidth

```cpp
int drawerWidth
```

Drawer navigation maximum width in logical pixels.

### drawerMaxWidthPercent

```cpp
int drawerMaxWidthPercent
```

Maximum drawer percentage of the frame width.

### scrimOpacity

```cpp
uint8_t scrimOpacity
```

Drawer scrim opacity.

### animated

```cpp
bool animated
```

Whether the navigation drawer animation is enabled.

### dockedNavigationFullHeight

```cpp
bool dockedNavigationFullHeight
```

Whether the docked navigation spans the Header area.
