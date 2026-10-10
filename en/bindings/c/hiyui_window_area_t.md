---
title: "hiyui_window_area_t"
---

# hiyui_window_area_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/types.h>`

Logical areas in window client coordinates; boolean fields output 0 or 1.

## Public Members

### valid

```c
int valid
```

### safe_area

```c
hiyui_logical_rect_t safe_area
```

Excludes decorations and known system-reserved areas.

### available_area

```c
hiyui_logical_rect_t available_area
```

Largest rectangle excluding the keyboard; with equal area, the upper one wins, then the left one.

### keyboard_area

```c
hiyui_logical_rect_t keyboard_area
```

### safe_area_known

```c
int safe_area_known
```

When 0, safe_area only covers the currently known content extent.

### keyboard_area_known

```c
int keyboard_area_known
```

An empty keyboard area is unknown or closed; this field distinguishes the two.

### shape

```c
hiyui_display_shape_t shape
```
