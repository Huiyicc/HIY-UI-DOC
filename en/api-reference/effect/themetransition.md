---
title: "ThemeTransition"
---

# ThemeTransition <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/theme_transition.h>`

**Namespace:** `hiyui`

Theme switch transition animation scheduler

Purely static interface; play() runs the full snapshot, switch, and animation flow. Uses SlideRevealEffect by default, replaceable through setEffect().

## Static Methods

### play

```cpp
static void play(const Theme &newTheme, TransitionDirection dir)
```

Runs the theme switch transition animation

Flow: screenshot, setTheme, overlay cover, then animated reveal of the new content. In non-animated mode it switches directly with no overlay.


Target theme Animation direction

### setEffect

```cpp
static void setEffect(std::unique_ptr< TransitionEffect > effect)
```

Sets the transition animation effect strategy

Effect instance, ownership transferred

### setExclusionZone

```cpp
static void setExclusionZone(const ExclusionZone &zone)
```

Sets the exclusion area, rectangle or circle

Exclusion area configuration

### setExclusionObj

```cpp
static void setExclusionObj(_lv_obj_t *obj)
```

Sets the rectangular exclusion area automatically from LVGL object coordinates

Target LVGL object

### clearExclusionZone

```cpp
static void clearExclusionZone()
```

Clears the exclusion area
