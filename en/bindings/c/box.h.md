---
title: "box.h"
---

# box.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/box.h>`

Plain container without layout, aligned with hiyui::Box

Child widgets are positioned manually with hiyui_wdg_pos and do not participate in parent layout.

## Functions

### hiyui_box_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_box_create(hiyui_widget_t *parent, const hiyui_box_props_t *props)
```
