---
title: "Tooltip"
---

# Tooltip <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tooltip.h>`

**Namespace:** `hiyui`

Tooltip, managed internally, not instantiated directly

Bound to any widget through Widget::tooltip with a text or a config object. Shown automatically after about 500ms of hovering and closed immediately when the pointer leaves.

## Static Methods

### showAt

```cpp
static void showAt(lv_obj_t *target, const TooltipConfig &config)
```

Shows the tooltip near the target object

### showAtArea

```cpp
static void showAtArea(const lv_area_t &area, const TooltipConfig &config)
```

Shows the tooltip near a screen rectangle

Target area, absolute screen coordinates

### dismiss

```cpp
static void dismiss()
```

Closes the currently shown tooltip
