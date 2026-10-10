---
title: "DockLayoutSnapshot"
---

# DockLayoutSnapshot <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Layout snapshot node.

## Public Members

### root

```cpp
Node root
```

Root of the dock tree.

### floating

```cpp
std::vector< Floating > floating
```

List of floating panes.

### hidden

```cpp
std::vector< std::string > hidden
```

List of hidden pane names.
