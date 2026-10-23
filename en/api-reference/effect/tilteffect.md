---
title: "TiltEffect"
---

# TiltEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/tilt_effect.h>`

**Namespace:** `hiyui`

Pointer-follow 3D tilt effect attaching to any LVGL object

After the
 pointer enters the object's layout rectangle, the object subtree tilts in perspective
 around its center following the pointer offset and springs back when the pointer leaves.
 Layout stays unchanged and pointer hit positions map onto the tilted visual; while
 tilting, the subtree re-renders at the refresh period and child input and state changes
 take effect immediately. Popups anchor to the object's layout position, deviating from
 the tilted visual by no more than the perspective offset of the current angle. The
 effect auto-restores on object size or style changes, and the overlay follows parent
 scrolling. Pressing and dragging the object with a touch follows the same way and
 springs back on release or leaving the layout rectangle.



**See also:** `TiltParams`

## Static Methods

### attach

```cpp
static void attach(_lv_obj_t *obj, TiltParams params={})
```

Attaches the effect; repeated calls only update parameters

Target LVGL object Tilt parameters

### detach

```cpp
static void detach(_lv_obj_t *obj)
```

Detaches the effect; restores immediately while tilting

Target LVGL object

### reset

```cpp
static void reset(_lv_obj_t *obj)
```

Flattens immediately; the effect stays attached and reactivates on the next hover or press

Target LVGL object

### isAttached

```cpp
static bool isAttached(const _lv_obj_t *obj)
```

Queries the attached state

Target LVGL object True when attached
