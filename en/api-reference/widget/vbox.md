---
title: "VBox"
---

# VBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/vbox.h>`

**Namespace:** `hiyui`

Vertical layout container, children arranged top to bottom

Before operator() is called, the VBox itself must be mounted to a parent object.



**See also:** `VBoxProps`


**See also:** `HBox`

**Inherits:** `hiyui::Container< VBox >`

## Public Methods

### VBox

```cpp
VBox(lv_obj_t *raw)
```

Wrap an existing LVGL object

### VBox

```cpp
VBox(VBoxProps props={})
```

Construct from aggregated properties

### init

```cpp
VBox & init(lv_obj_t *parent) &
```

Create the LVGL Flex Column container under a parent, using the layout properties saved at construction

### init

```cpp
VBox & init(lv_obj_t *parent, const VBoxProps &props) &
```

Create the LVGL Flex Column container under a parent

### init

```cpp
VBox & init(Widget &parent) &
```

Create the LVGL Flex Column container under a parent, using the layout properties saved at construction

### init

```cpp
VBox & init(Widget &parent, const VBoxProps &props) &
```

Create the LVGL Flex Column container under a parent

### init

```cpp
VBox & init(Window &window) &
```

Create the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar. Normal windows mount to the screen.

### init

```cpp
VBox & init(Window &window, const VBoxProps &props) &
```

Create the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar. Normal windows mount to the screen.
