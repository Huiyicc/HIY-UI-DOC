---
title: "GlassEffect"
---

# GlassEffect <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/glass_effect.h>`

**Namespace:** `hiyui`

Frosted glass blur effect attaching a blur filter to an LVGL object

Render hierarchy, base image -&gt; color layer -&gt; blur layer. Without a base image or color, blurs the already drawn area below the component, the backdrop-filter behavior. With a base image or color, composites internally and then blurs.



**See also:** `BlurSource`


**See also:** `Backdrop`

## Static Methods

### attach

```cpp
static void attach(_lv_obj_t *obj, const Backdrop &params, const BlurSource &source={})
```

Attaches the blur effect to the given object

Target LVGL object pointer Blur parameters such as radius and saturation Blur source configuration, empty by default for backdrop-filter mode

### detach

```cpp
static void detach(_lv_obj_t *obj)
```

Removes the blur effect from the given object

Target LVGL object pointer

### invalidateCache

```cpp
static void invalidateCache(_lv_obj_t *obj)
```

Marks the cache dirty so the blur image is regenerated on the next draw

Target LVGL object pointer

### isAttached

```cpp
static bool isAttached(_lv_obj_t *obj)
```

Queries whether the given object has the blur effect attached

Target LVGL object pointer True when attached

### invalidateBackdrops

```cpp
static void invalidateBackdrops()
```

Invalidates all backdrop sampling caches, updated on the next redraw.
