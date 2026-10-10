---
title: "TreeNodeData"
---

# TreeNodeData <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Internal tree node data, stored flattened

## Public Members

### depth

```cpp
int depth
```

Nesting depth, root = 0

### parentIndex

```cpp
int parentIndex
```

Parent node index in allNodes

### indeterminate

```cpp
bool indeterminate
```

Indeterminate check state

### lazyLoaded

```cpp
bool lazyLoaded
```

Whether asynchronous loading has finished

### lazyLoading

```cpp
bool lazyLoading
```

Loading in progress

### matchesFilter

```cpp
bool matchesFilter
```

Matches the search filter

### visible

```cpp
bool visible
```

Visible after filtering, including the ancestor chain
