---
title: "HBox"
---

# HBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/hbox.h>`

**Namespace:** `hiyui`

Horizontal layout container, children arranged left to right

Uses the LVGL Flex Row layout internally.



**See also:** `HBoxProps`


**See also:** `VBox`

**Inherits:** `hiyui::Container< HBox >`

## Public Methods

### HBox

```cpp
HBox(lv_obj_t *raw)
```

Wrap an existing LVGL object

### HBox

```cpp
HBox(HBoxProps props={})
```

Construct from aggregated properties

### init

```cpp
HBox & init(lv_obj_t *parent) &
```

Create the LVGL Flex Row container under a parent

Uses the layout properties saved at construction.

### init

```cpp
HBox & init(lv_obj_t *parent, const HBoxProps &props) &
```

Create the LVGL Flex Row container under a parent

### init

```cpp
HBox & init(Widget &parent) &
```

Create the LVGL Flex Row container under a parent

Uses the layout properties saved at construction.

### init

```cpp
HBox & init(Widget &parent, const HBoxProps &props) &
```

Create the LVGL Flex Row container under a parent

### init

```cpp
HBox & init(Window &window) &
```

Create the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar. Normal windows mount to the screen.

### init

```cpp
HBox & init(Window &window, const HBoxProps &props) &
```

Create the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar. Normal windows mount to the screen.
