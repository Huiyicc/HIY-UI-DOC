---
title: "Tooltip"
---

# Tooltip <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tooltip.h>`

**Namespace:** `hiyui`

Tooltip, managed internally, not instantiated directly

Bound to any widget via Widget::tooltip with a string or an initializer list. Shows automatically after about 500 ms of hover and closes immediately when the pointer leaves.

## Static Methods

### showAt

```cpp
static void showAt(lv_obj_t *target, const TooltipConfig &config)
```

Show a tooltip near the target object

### showAtArea

```cpp
static void showAtArea(const lv_area_t &area, const TooltipConfig &config)
```

Show a tooltip near a screen rectangle

Target area, in absolute screen coordinates

### dismiss

```cpp
static void dismiss()
```

Dismiss the currently shown tooltip
