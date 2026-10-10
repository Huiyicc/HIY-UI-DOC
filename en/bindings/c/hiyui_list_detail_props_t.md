---
title: "hiyui_list_detail_props_t"
---

# hiyui_list_detail_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Initialize with hiyui_list_detail_props_init, integer 0 does not mean a default value.

## Public Members

### split_min_width

```c
int split_min_width
```

Minimum content logical width for the two pane layout, must be greater than list_width plus gap.

### list_width

```c
int list_width
```

List width in the two pane layout, positive logical pixels.

### gap

```c
int gap
```

Two pane gap, non-negative logical pixels.

### animated

```c
hiyui_bool_t animated
```

DEFAULT and TRUE enable theme animation, FALSE disables it.
