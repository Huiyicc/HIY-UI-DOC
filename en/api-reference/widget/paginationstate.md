---
title: "PaginationState"
---

# PaginationState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/pagination.h>`

**Namespace:** `hiyui`

Pagination runtime state, lifetime follows the LVGL object

## Public Members

### container

```cpp
lv_obj_t * container
```

Points to the host lv_obj_t

### scrollArea

```cpp
lv_obj_t * scrollArea
```

Clip area, the display window

### strip

```cpp
lv_obj_t * strip
```

Number strip, parent of all page buttons

### highlight

```cpp
lv_obj_t * highlight
```

FLOATING highlight frame, fixed at the center

### animScroll

```cpp
lv_anim_t animScroll
```

Strip scroll animation

### scrollX

```cpp
int scrollX
```

Current strip X offset

### maxVisible

```cpp
int maxVisible
```

Button count inside the visible window
