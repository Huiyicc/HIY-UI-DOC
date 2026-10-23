---
title: "MenuBar"
---

# MenuBar <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/menu_bar.h>`

**Namespace:** `hiyui`

Top menu bar

Arranges top-level items horizontally; clicking opens a dropdown using the ContextMenu popup engine. Leaf menu item accelerators are registered with the HotkeyManager at items() and unregistered on rebuild or destruction.

**Inherits:** `hiyui::Chainable< MenuBar >`

## Public Methods

### MenuBar

```cpp
MenuBar(lv_obj_t *raw)
```

Wraps an existing LVGL object

### MenuBar

```cpp
MenuBar(MenuBarProps props={})
```

Aggregate construction from properties

### palette

```cpp
MenuBar & palette(const MenuBarPalette &value) &
```

Copies and applies the palette, preserving items and shortcuts; may be called before mounting, no action on invalid objects.

### init

```cpp
MenuBar & init(lv_obj_t *parent) &
```

Creates on a parent

### init

```cpp
MenuBar & init(Widget &parent) &
```

Creates on a parent

### items

```cpp
MenuBar & items(const std::vector< MenuBarItem > &items) &
```

Sets the top-level menu items, rebuilding the whole tree

Each item's children is the dropdown content
