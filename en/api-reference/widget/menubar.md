---
title: "MenuBar"
---

# MenuBar <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/menu_bar.h>`

**Namespace:** `hiyui`

Top menu bar

Arranges top-level items horizontally and opens a dropdown on click, reusing the ContextMenu popup engine. Accelerators of leaf menu items are registered with the HotkeyManager at items() and unregistered on rebuild or destruction.

**Inherits:** `hiyui::Chainable< MenuBar >`

## Public Methods

### MenuBar

```cpp
MenuBar(lv_obj_t *raw)
```

Wrap an existing LVGL object

### MenuBar

```cpp
MenuBar(MenuBarProps props={})
```

Construct from aggregated properties

### init

```cpp
MenuBar & init(lv_obj_t *parent) &
```

Create under a parent

### init

```cpp
MenuBar & init(Widget &parent) &
```

Create under a parent

### items

```cpp
MenuBar & items(const std::vector< MenuBarItem > &items) &
```

Set the top-level menu items and rebuild the whole tree

For each item, children is the dropdown content
