---
title: "Spacer"
---

# Spacer <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/spacer.h>`

**Namespace:** `hiyui`

Flexible spacer with flex-grow = 1

Automatically occupies remaining space in VBox/HBox, typically pushing components to opposite ends.



**See also:** `VBox`


**See also:** `HBox`

**Inherits:** `hiyui::Chainable< Spacer >`

## Public Methods

### Spacer

```cpp
Spacer(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Spacer

```cpp
Spacer()
```

Default constructor; creates a spacer with flex-grow=1

### init

```cpp
Spacer & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent

### init

```cpp
Spacer & init(Widget &parent) &
```

Creates the LVGL object on a parent
