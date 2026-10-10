---
title: "DockEvent"
---

# DockEvent <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Dock event payload.

`name` is the pane unique name and is valid only during the callback. `index` is the in-group tab index when the event occurred. `edge` carries the placement edge only for the PaneDocked event.

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

In-group tab index, -1 when not applicable.

### edge

```cpp
DockEdge edge
```

Placement edge for PaneDocked.
