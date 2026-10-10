---
title: "ListDetailProps"
---

# ListDetailProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/list_detail.h>`

**Namespace:** `hiyui`

List-detail creation properties. Invalid configuration creates no component.

## Public Members

### splitMinWidth

```cpp
int splitMinWidth
```

Minimum content logical width to enter split mode. Must be greater than the sum of listWidth and gap.

### listWidth

```cpp
int listWidth
```

List width in split mode, positive logical pixels.

### gap

```cpp
int gap
```

Split pane gap, non-negative logical pixels.

### animated

```cpp
bool animated
```

Whether single-pane area switching uses theme animation.
