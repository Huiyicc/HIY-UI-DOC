---
title: "hiyui_list_detail_props_t"
---

# hiyui_list_detail_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Initialize with hiyui_list_detail_props_init. Integer 0 does not mean the default value.

## Public Members

### split_min_width

```c
int split_min_width
```

Minimum content logical width of the two-pane layout. Must be greater than list_width plus gap.

### list_width

```c
int list_width
```

Two-pane list width, positive logical pixels.

### gap

```c
int gap
```

Two-pane gap, non-negative logical pixels.

### animated

```c
hiyui_bool_t animated
```

DEFAULT and TRUE enable theme animations, FALSE disables them.
