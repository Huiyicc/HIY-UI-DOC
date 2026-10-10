---
title: "ThemeTransition"
---

# ThemeTransition <Badge type="info" text="Class" />

**Header:** `#include <hiyui/effect/theme_transition.h>`

**Namespace:** `hiyui`

Theme switch transition animation scheduler

Static-only interface; call play() to run the full screenshot, switch, and animation flow. Uses SlideRevealEffect by default, replaceable via setEffect().

## Static Methods

### play

```cpp
static void play(const Theme &newTheme, TransitionDirection dir)
```

Performs the theme switch transition animation

Flow, screenshot -&gt; setTheme -&gt; overlay cover -&gt; animated reveal of the new content. In non-animated mode switches directly without an overlay.


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

Sets the exclusion zone, rectangle or circle

Exclusion zone configuration

### setExclusionObj

```cpp
static void setExclusionObj(_lv_obj_t *obj)
```

Sets a rectangular exclusion zone automatically from LVGL object coordinates

Target LVGL object

### clearExclusionZone

```cpp
static void clearExclusionZone()
```

Clears the exclusion zone
