---
title: "DockPaneProps"
---

# DockPaneProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Dock pane creation properties.

## Public Members

### title

```cpp
const char * title
```

Title, shows "Pane" when empty, copied internally.

### name

```cpp
const char * name
```

Unique name for lookup and serialization, defaults to title when empty.

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols codepoint, 0 = no icon.

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon axis parameters.

### edge

```cpp
DockEdge edge
```

Initial dock edge.

### width

```cpp
int width
```

Initial width for Left/Right, HIYUI_AUTO = split evenly with neighbors.

### height

```cpp
int height
```

Initial height for Top/Bottom, HIYUI_AUTO = split evenly with neighbors.

### minWidth

```cpp
int minWidth
```

Minimum width in theme logical pixels.

### minHeight

```cpp
int minHeight
```

Minimum height in theme logical pixels.

### closable

```cpp
bool closable
```

Whether to show the close control and send the close event.

### movable

```cpp
bool movable
```

Whether dragging to move is allowed.

### floatable

```cpp
bool floatable
```

Whether dragging out to float is allowed.

### animated

```cpp
bool animated
```

Whether docking animations involving this pane are enabled.
