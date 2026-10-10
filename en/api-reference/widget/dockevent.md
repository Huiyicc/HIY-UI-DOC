---
title: "DockEvent"
---

# DockEvent <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Dock event content.

`name` is the pane unique name, valid only during the callback. `index` is the tab index within the group when the event occurred. `edge` carries the dock edge only for the PaneDocked event.

## Public Members

### type

```cpp
DockEventType type
```

Event type.

### name

```cpp
const char * name
```

Pane unique name, valid only during the callback.

### index

```cpp
int index
```

Tab index within the group, -1 when not applicable.

### edge

```cpp
DockEdge edge
```

Dock edge for PaneDocked.
