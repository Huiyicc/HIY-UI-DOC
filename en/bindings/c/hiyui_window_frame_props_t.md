---
title: "hiyui_window_frame_props_t"
---

# hiyui_window_frame_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/layout.h>`

Creation properties of the responsive window frame.

## Public Members

### wide_min_width

```c
int wide_min_width
```

Minimum content logical width for the wide layout. 0 uses 720.

### narrow_navigation

```c
hiyui_frame_navigation_presentation_t narrow_navigation
```

Navigation presentation in the narrow layout, default Drawer.

### wide_navigation

```c
hiyui_frame_navigation_presentation_t wide_navigation
```

Navigation presentation in the wide layout, default Docked.

### navigation_edge

```c
hiyui_frame_navigation_edge_t navigation_edge
```

Edge the navigation attaches to.

### navigation_width

```c
int navigation_width
```

Docked navigation logical width. 0 uses 196, HIYUI_AUTO follows the content.

### drawer_width

```c
int drawer_width
```

Maximum drawer logical width. 0 uses 320.

### drawer_max_width_percent

```c
int drawer_max_width_percent
```

Maximum drawer width percent. 0 uses 82.

### scrim_opacity

```c
uint8_t scrim_opacity
```

Scrim opacity. 0 uses 112.

### animated

```c
hiyui_bool_t animated
```

Whether the drawer animation is enabled, enabled by default.

### docked_navigation_full_height

```c
hiyui_bool_t docked_navigation_full_height
```

Whether the docked navigation spans the Header area.
