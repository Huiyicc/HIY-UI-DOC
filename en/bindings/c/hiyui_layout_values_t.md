---
title: "hiyui_layout_values_t"
---

# hiyui_layout_values_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Initialize with hiyui_layout_values_init, then override the needed fields.

## Public Members

### fields

```c
hiyui_layout_fields_t fields
```

### flow

```c
hiyui_flex_flow_t flow
```

### gap

```c
int gap
```

Non-negative logical pixels.

### padding_x

```c
int padding_x
```

Left and right padding, non-negative logical pixels.

### padding_y

```c
int padding_y
```

Top and bottom padding, non-negative logical pixels.

### width

```c
hiyui_layout_length_t width
```

### height

```c
hiyui_layout_length_t height
```

### min_width

```c
int min_width
```

Non-negative logical pixels.

### min_height

```c
int min_height
```

Non-negative logical pixels.

### max_width

```c
int max_width
```

Non-negative logical pixels, HIYUI_AUTO removes the local limit.

### max_height

```c
int max_height
```

Non-negative logical pixels, HIYUI_AUTO removes the local limit.

### flex

```c
int flex
```

Range 0 to 255, 0 does not take part in main axis free space distribution.

### hidden

```c
hiyui_bool_t hidden
```

DEFAULT and FALSE mean visible, TRUE means hidden.
