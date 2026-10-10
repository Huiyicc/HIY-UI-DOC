---
title: "Menu"
---

# Menu <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/menu.h>`

**Namespace:** `hiyui`

Menu and navigation list widget

Supports multi-level nested submenus, accordion expand/collapse, and a sliding selection indicator animation.

**Inherits:** `hiyui::Chainable< Menu >`

## Types

### MenuEventType

Internal menu event types

| Value | Description |
|---|---|
| `Activate` | A leaf node was selected |
| `Expand` | A node was expanded or collapsed |
| `Collapse` | The whole menu was collapsed or expanded |

## Public Methods

### itemText

```cpp
Menu & itemText(int index, const char *value) &
```

Updates the text of the given item without triggering the selection event, out-of-range does nothing, nullptr shows empty text. index is the preorder node index including parents and separators, a separator updates its existing group label. Replacing the whole set clears bindings.

### itemText

```cpp
Menu & itemText(int index, LocalizedText value) &
```

Binds item text, the collection content and selection state are kept across language switches.

### Menu

```cpp
Menu(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Menu

```cpp
Menu(MenuProps props={})
```

Aggregate construction from properties

### init

```cpp
Menu & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent object

### init

```cpp
Menu & init(Widget &parent) &
```

Creates the LVGL object on a parent object

### items

```cpp
Menu & items(const std::vector< MenuItem > &menuItems, Notify notify=Notify::No) &
```

Sets menu items in batch and rebuilds the whole tree

Supports recursive submenus

### selectedIndex

```cpp
Menu & selectedIndex(int leafIdx, Notify notify=Notify::No) &
```

Sets the selected leaf node

### selectedIndex

```cpp
int selectedIndex() const
```

Returns the current selected leaf index

### itemData

```cpp
int itemData(int leafIdx) const
```

Returns the user bound data of the given leaf node.

Leaf index, same as the onActivate callback index. The item data value, 0 when the index is out of range.

### expandItem

```cpp
Menu & expandItem(int nodeIdx, bool expanded=true) &
```

Expands or collapses the given parent node

Node index in the nodes array

### collapseAll

```cpp
Menu & collapseAll() &
```

Collapses all expanded parent nodes

### onChange

```cpp
Menu & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the selection event callback, repeated binds append

Callable type, signature void(int) Receives the selected leaf index Optional output parameter receiving the unbind handle of this binding

### onExpand

```cpp
Menu & onExpand(F &&f, EventHandle *handle=nullptr) &
```

Binds the expand/collapse event callback, repeated binds append

Callable type, signature void(int nodeIdx, bool expanded) Optional output parameter receiving the unbind handle of this binding

### onCollapse

```cpp
Menu & onCollapse(F &&f, EventHandle *handle=nullptr) &
```

Binds the collapse/expand event callback, repeated binds append

Callable type, signature void(bool collapsed) Receives whether the menu is collapsed Optional output parameter receiving the unbind handle of this binding

### collapsed

```cpp
Menu & collapsed(bool collapsed) &
```

Toggles the collapsed state with animation

true = collapse to narrow mode, false = expand to wide mode

### isCollapsed

```cpp
bool isCollapsed() const
```

Returns whether the menu is currently collapsed in narrow mode

### mode

```cpp
Menu & mode(MenuMode m) &
```

Sets the display mode directly with animation

### mode

```cpp
MenuMode mode() const
```

Returns the current display mode

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(MenuEventType type)
```

Returns the internal menu event code.

### updateSelection

```cpp
static void updateSelection(MenuState *st, int leafIdx)
```

Updates the selection highlight

### toggleExpand

```cpp
static void toggleExpand(MenuState *st, int nodeIdx, bool animate)
```

Expands or collapses a node

### applyHover

```cpp
static void applyHover(MenuState *st, int nodeIdx, bool hovered)
```

Applies or removes the hover highlight

### computeAbsoluteY

```cpp
static int computeAbsoluteY(lv_obj_t *itemRow, lv_obj_t *menuContainer)
```

Computes the absolute Y coordinate of a node relative to the menu container

### reapplyThemeStatic

```cpp
static void reapplyThemeStatic(lv_obj_t *obj)
```

Static theme refresh, does not depend on this, reads data from MenuState

### reapplyForDpi

```cpp
static void reapplyForDpi(lv_obj_t *obj)
```

DPI change recompute, recalculates cached physical values, re-renders icons, and repositions the indicator.

### correctAfterLayout

```cpp
static void correctAfterLayout(MenuState *st)
```

Geometry correction after theme or size changes

### applyMode

```cpp
static void applyMode(MenuState *st, MenuMode newMode, bool animate)
```

Applies the display mode switch, wide/narrow

### showHoverPopup

```cpp
static void showHoverPopup(MenuState *st, int nodeIdx)
```

Shows the narrow mode hover popup panel

### hideHoverPopup

```cpp
static void hideHoverPopup(MenuState *st)
```

Hides the narrow mode hover popup panel
