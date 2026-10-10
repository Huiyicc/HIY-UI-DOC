---
title: "VirtualAnchor"
---

# VirtualAnchor <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/virtual_table.h>`

**Namespace:** `hiyui`

Virtual table anchor information

Records the anchor node before data changes and restores it to its original screen position after the change, keeping the user's view consistent.

## Public Members

### itemId

```cpp
int itemId
```

Anchor item id, meaning defined by the subclass; Tree uses TreeNodeId

### screenY

```cpp
int screenY
```

Y coordinate relative to the viewport top
