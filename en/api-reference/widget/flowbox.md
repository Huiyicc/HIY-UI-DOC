---
title: "FlowBox"
---

# FlowBox <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/flowbox.h>`

**Namespace:** `hiyui`

Flow wrap layout container

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

Wrap an existing LVGL object

### FlowBox

```cpp
FlowBox(FlowBoxProps props={})
```

Construct from aggregated properties

### init

```cpp
FlowBox & init(lv_obj_t *parent) &
```

Create the LVGL Flex Row Wrap container under a parent

Uses the layout properties saved at construction.

### init

```cpp
FlowBox & init(lv_obj_t *parent, const FlowBoxProps &props) &
```

Create the LVGL Flex Row Wrap container under a parent

### init

```cpp
FlowBox & init(Widget &parent) &
```

Create the LVGL Flex Row Wrap container under a parent

Uses the layout properties saved at construction.

### init

```cpp
FlowBox & init(Widget &parent, const FlowBoxProps &props) &
```

Create the LVGL Flex Row Wrap container under a parent

### init

```cpp
FlowBox & init(Window &window) &
```

Create the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar. Normal windows mount to the screen.

### init

```cpp
FlowBox & init(Window &window, const FlowBoxProps &props) &
```

Create the container in the window root content area

Frameless windows mount into the content area below the title bar and menu bar. Normal windows mount to the screen.
