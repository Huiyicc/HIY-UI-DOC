---
title: "PaginationState"
---

# PaginationState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/pagination.h>`

**Namespace:** `hiyui`

Pagination runtime state, lifetime bound to the LVGL object

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

Clip area, the visible window

### strip

```cpp
lv_obj_t * strip
```

Number strip, parent container of all page number buttons

### highlight

```cpp
lv_obj_t * highlight
```

FLOATING highlight box, fixed at the center

### animScroll

```cpp
lv_anim_t animScroll
```

Strip scroll animation

### scrollX

```cpp
int scrollX
```

Current X offset of the strip

### maxVisible

```cpp
int maxVisible
```

Number of buttons in the visible window
