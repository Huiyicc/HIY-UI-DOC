---
title: "VBox"
---

# VBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/vbox.h>`

**Namespace:** `hiyui`

Vertical layout container with children arranged top to bottom

Before operator() is called, the VBox itself must be mounted to a parent.



**See also:** `VBoxProps`


**See also:** `HBox`

**Inherits:** `hiyui::Container< VBox >`

## Public Methods

### VBox

```cpp
VBox(lv_obj_t *raw)
```

Wraps an existing LVGL object

### VBox

```cpp
VBox(VBoxProps props={})
```

Aggregate construction from properties

### init

```cpp
VBox & init(lv_obj_t *parent) &
```

Creates the LVGL Flex Column container on a parent, using the layout properties saved at construction

### init

```cpp
VBox & init(lv_obj_t *parent, const VBoxProps &props) &
```

Creates the LVGL Flex Column container on a parent

### init

```cpp
VBox & init(Widget &parent) &
```

Creates the LVGL Flex Column container on a parent, using the layout properties saved at construction

### init

```cpp
VBox & init(Widget &parent, const VBoxProps &props) &
```

Creates the LVGL Flex Column container on a parent

### init

```cpp
VBox & init(Window &window) &
```

Creates the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.

### init

```cpp
VBox & init(Window &window, const VBoxProps &props) &
```

Creates the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.
