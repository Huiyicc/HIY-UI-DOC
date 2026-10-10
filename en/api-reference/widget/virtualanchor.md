---
title: "VirtualAnchor"
---

# VirtualAnchor <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/virtual_table.h>`

**Namespace:** `hiyui`

Virtual table anchor information

Records the anchor item before a data change and restores it to its original screen position afterwards, keeping the user's viewpoint stable.

## Public Members

### itemId

```cpp
int itemId
```

Anchor item identifier, meaning defined by the subclass, Tree uses TreeNodeId

### screenY

```cpp
int screenY
```

Y coordinate relative to the top of the viewport
