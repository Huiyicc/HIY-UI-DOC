---
title: "hiyui_layout_environment_t"
---

# hiyui_layout_environment_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/types.h>`

Content logical size after subtracting borders and padding; window areas are not subtracted from it.

## Public Members

### valid

```c
int valid
```

### content_width

```c
int content_width
```

### content_height

```c
int content_height
```

### scale

```c
float scale
```

Scale from logical to physical pixels, 1.0 for an invalid snapshot.

### input

```c
hiyui_input_capabilities_t input
```

### window

```c
hiyui_window_area_t window
```
