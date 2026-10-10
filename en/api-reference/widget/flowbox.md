---
title: "FlowBox"
---

# FlowBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/flowbox.h>`

**Namespace:** `hiyui`

Wrapping flow layout container

Uses the LVGL Flex Row Wrap layout and supports child width constraints.



**See also:** `FlowBoxProps`


**See also:** `VBox`


**See also:** `HBox`

**Inherits:** `hiyui::Container< FlowBox >`

## Public Methods

### FlowBox

```cpp
FlowBox(lv_obj_t *raw)
```

Wraps an existing LVGL object

### FlowBox

```cpp
FlowBox(FlowBoxProps props={})
```

Aggregate construction from properties

### init

```cpp
FlowBox & init(lv_obj_t *parent) &
```

Creates the LVGL Flex Row Wrap container on a parent

Uses the layout properties saved at construction.

### init

```cpp
FlowBox & init(lv_obj_t *parent, const FlowBoxProps &props) &
```

Creates the LVGL Flex Row Wrap container on a parent

### init

```cpp
FlowBox & init(Widget &parent) &
```

Creates the LVGL Flex Row Wrap container on a parent

Uses the layout properties saved at construction.

### init

```cpp
FlowBox & init(Widget &parent, const FlowBoxProps &props) &
```

Creates the LVGL Flex Row Wrap container on a parent

### init

```cpp
FlowBox & init(Window &window) &
```

Creates the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.

### init

```cpp
FlowBox & init(Window &window, const FlowBoxProps &props) &
```

Creates the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar; normal windows mount to the screen.
