---
title: "DockLayoutSnapshot::Node"
---

# DockLayoutSnapshot::Node <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Split node or tab group node.

## Public Members

### split

```cpp
bool split
```

true for a split node, false for a tab group node.

### horizontal

```cpp
bool horizontal
```

Split node orientation, true when children arrange horizontally.

### weight

```cpp
float weight
```

Fraction of the parent node length.

### children

```cpp
std::vector< Node > children
```

Child nodes of a split node.

### panes

```cpp
std::vector< std::string > panes
```

Pane names of the tab group, in tab order.

### activeIndex

```cpp
int activeIndex
```

Active tab index of the group.
