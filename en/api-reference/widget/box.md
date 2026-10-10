---
title: "Box"
---

# Box <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/box.h>`

**Namespace:** `hiyui`

Plain container without layout; children are positioned manually

Unlike the Flex auto layout of VBox/HBox, children inside Box need positions set manually with pos() or align(). Suits absolute positioning scenarios.



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

Constructs from aggregated properties

Container properties, aggregate initialization supported

### init

```cpp
Box & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent object

Parent LVGL object pointer This component

### init

```cpp
Box & init(Widget &parent) &
```

Creates the LVGL object on a parent object

Parent LVGL object pointer This component

### init

```cpp
Box & init(Window &window) &
```

Creates the container in the window root content area

Frameless windows mount to the content area below the title bar and menu bar; normal windows mount to the screen.


Target window This component

### borderColor

```cpp
Box & borderColor(ThemeRole role) &
```

Binds the border color to a theme semantic role; updates automatically on theme switch
