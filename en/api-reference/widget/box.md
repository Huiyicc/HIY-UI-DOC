---
title: "Box"
---

# Box <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/box.h>`

**Namespace:** `hiyui`

Plain container without layout; children are positioned manually

Unlike the Flex auto layout of VBox and HBox, children in a Box need manual positioning with pos() or align(). Suited to absolute positioning scenarios.



**See also:** `VBox`


**See also:** `HBox`

**Inherits:** `hiyui::Container< Box >`

## Public Methods

### Box

```cpp
Box(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Box

```cpp
Box(BoxProps props={})
```

Aggregate construction from properties

Container properties; supports aggregate initialization

### init

```cpp
Box & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent

Parent LVGL object pointer This component

### init

```cpp
Box & init(Widget &parent) &
```

Creates the LVGL object on a parent

Parent LVGL object pointer This component

### init

```cpp
Box & init(Window &window) &
```

Creates the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.


Target window This component

### borderColor

```cpp
Box & borderColor(ThemeRole role) &
```

Binds the border color to a theme semantic role; updates automatically on theme switch
