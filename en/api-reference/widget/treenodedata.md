---
title: "TreeNodeData"
---

# TreeNodeData <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Tree widget internal node data, stored flat

## Public Members

### depth

```cpp
int depth
```

Nesting depth. Root = 0

### parentIndex

```cpp
int parentIndex
```

Parent node index in allNodes

### indeterminate

```cpp
bool indeterminate
```

Indeterminate state

### lazyLoaded

```cpp
bool lazyLoaded
```

Whether async loading has finished

### lazyLoading

```cpp
bool lazyLoading
```

Currently loading

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
