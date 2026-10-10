---
title: "PopupPanelProps"
---

# PopupPanelProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/popup_panel.h>`

**Namespace:** `hiyui`

Properties for creating a PopupPanel

## Public Members

### placement

```cpp
PopupPlacement placement
```

Placement

### width

```cpp
int width
```

Width, HIYUI_AUTO = same width as the anchor

### height

```cpp
int height
```

Height, HIYUI_AUTO = fit content

### minWidth

```cpp
int minWidth
```

Minimum width, 0 = unlimited

### maxWidth

```cpp
int maxWidth
```

Maximum width, in theme logical pixels

### maxHeight

```cpp
int maxHeight
```

Maximum height, in theme logical pixels

### offsetX

```cpp
int offsetX
```

Horizontal offset, in theme logical pixels

### offsetY

```cpp
int offsetY
```

Vertical offset, in theme logical pixels

### padding

```cpp
int padding
```

Padding, in theme logical pixels

### bg

```cpp
uint32_t bg
```

Background color, HIYUI_DEFAULT = follow theme

### borderColor

```cpp
uint32_t borderColor
```

Border color, HIYUI_DEFAULT = follow theme

### radius

```cpp
uint32_t radius
```

Corner radius, HIYUI_DEFAULT = follow theme

### shadow

```cpp
bool shadow
```

Whether to show a shadow

### closeOnOutsideClick

```cpp
bool closeOnOutsideClick
```

Whether to close on outside click

### closeOnEsc

```cpp
bool closeOnEsc
```

Whether to close on ESC

### closeOnAncestorScroll

```cpp
bool closeOnAncestorScroll
```

Whether to close on ancestor scroll

### animated

```cpp
bool animated
```

Whether to enable the expand animation

### mode

```cpp
PopupMode mode
```

Window uses Inline when no window manager is available or when close-on-outside-click is disabled.
