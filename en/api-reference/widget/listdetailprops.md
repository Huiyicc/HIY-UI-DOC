---
title: "ListDetailProps"
---

# ListDetailProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/list_detail.h>`

**Namespace:** `hiyui`

List detail creation properties. Invalid configurations create no widget.

## Public Members

### splitMinWidth

```cpp
int splitMinWidth
```

Minimum content logical width to enter the split layout. Must be greater than the sum of listWidth and gap.

### listWidth

```cpp
int listWidth
```

List width in the split layout, positive logical pixels.

### gap

```cpp
int gap
```

Split layout gap, non-negative logical pixels.

### animated

```cpp
bool animated
```

Whether pane switches in the single-pane layout use theme animation.
