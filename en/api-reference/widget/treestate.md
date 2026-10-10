---
title: "TreeState"
---

# TreeState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Tree widget runtime state, heap allocated and attached to user_data

## Public Members

### allNodes

```cpp
std::vector< TreeNodeData > allNodes
```

All flattened nodes

### visibleIndices

```cpp
std::vector< int > visibleIndices
```

Visible row indices

### poolRows

```cpp
std::vector< lv_obj_t * > poolRows
```

Row object pool

### poolStart

```cpp
int poolStart
```

Offset into visibleIndices of the first pooled row

### lastAnchorSelect

```cpp
int lastAnchorSelect
```

Shift multi-select anchor

### keyFocusVisibleIdx

```cpp
int keyFocusVisibleIdx
```

Keyboard focus row, an index into visibleIndices

### dragIndicator

```cpp
lv_obj_t * dragIndicator
```

Drag indicator line
