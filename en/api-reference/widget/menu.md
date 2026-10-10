---
title: "Menu"
---

# Menu <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/menu.h>`

**Namespace:** `hiyui`

Menu and navigation list widget.

Supports multi-level nested submenus, accordion expand/collapse, and a sliding selection indicator animation.

**Inherits:** `hiyui::Chainable< Menu >`

## Types

### MenuEventType

Menu internal event types.

| Value | Description |
|---|---|
| `Activate` | A leaf node was selected. |
| `Expand` | A node was expanded or collapsed. |
| `Collapse` | The whole menu was collapsed or expanded. |

## Public Methods

### itemText

```cpp
Menu & itemText(int index, const char *value) &
```

Updates the text of the given item without firing the selected event; out of range does nothing, nullptr shows empty text. index is the preorder node index including parent items and separators; separators update the existing group label. Replacing the whole set clears the binding.

### itemText

```cpp
Menu & itemText(int index, LocalizedText value) &
```

Binds item text; switching the language keeps the collection content and selection state.

### Menu

```cpp
Menu(lv_obj_t *raw)
```

Wraps an existing LVGL object.

### Menu

```cpp
Menu(MenuProps props={})
```

Aggregate construction from properties.

### init

```cpp
Menu & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent object.

### init

```cpp
Menu & init(Widget &parent) &
```

Creates the LVGL object on a parent object.

### items

```cpp
Menu & items(const std::vector< MenuItem > &menuItems, Notify notify=Notify::No) &
```

Sets menu items in batch, rebuilding the whole tree.

Supports recursive submenus.

### selectedIndex

```cpp
Menu & selectedIndex(int leafIdx, Notify notify=Notify::No) &
```

Sets the selected leaf node.

### selectedIndex

```cpp
int selectedIndex() const
```

Returns the current selected leaf index.

### itemData

```cpp
int itemData(int leafIdx) const
```

Returns the user data of the given leaf node.

Leaf index, matching the onActivate callback index. The item data value; returns 0 when the index is out of range.

### expandItem

```cpp
Menu & expandItem(int nodeIdx, bool expanded=true) &
```

Expands or collapses the given parent node.

Node index in the nodes array.

### collapseAll

```cpp
Menu & collapseAll() &
```

Collapses all expanded parent nodes.

### onChange

```cpp
Menu & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the selection event callback; repeated binding appends.

Callable type, signature void(int). Receives the selected leaf index. Optional out parameter receiving the unbind handle of this binding.

### onExpand

```cpp
Menu & onExpand(F &&f, EventHandle *handle=nullptr) &
```

Binds the expand/collapse event callback; repeated binding appends.

Callable type, signature void(int nodeIdx, bool expanded). Optional out parameter receiving the unbind handle of this binding.

### onCollapse

```cpp
Menu & onCollapse(F &&f, EventHandle *handle=nullptr) &
```

Binds the collapse/expand event callback; repeated binding appends.

Callable type, signature void(bool collapsed). Receives whether the menu is collapsed. Optional out parameter receiving the unbind handle of this binding.

### collapsed

```cpp
Menu & collapsed(bool collapsed) &
```

Switches the collapsed state with animation.

true = collapse to narrow mode, false = expand to wide mode.

### isCollapsed

```cpp
bool isCollapsed() const
```

Returns whether the menu is currently collapsed, narrow mode.

### mode

```cpp
Menu & mode(MenuMode m) &
```

Sets the display mode directly, with animation.

### mode

```cpp
MenuMode mode() const
```

Returns the current display mode.

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(MenuEventType type)
```

Returns the internal Menu event code.

### updateSelection

```cpp
static void updateSelection(MenuState *st, int leafIdx)
```

Updates the selected item highlight.

### toggleExpand

```cpp
static void toggleExpand(MenuState *st, int nodeIdx, bool animate)
```

Expands or collapses a node.

### applyHover

```cpp
static void applyHover(MenuState *st, int nodeIdx, bool hovered)
```

Applies or removes hover highlight.

### computeAbsoluteY

```cpp
static int computeAbsoluteY(lv_obj_t *itemRow, lv_obj_t *menuContainer)
```

Computes the absolute Y coordinate of a node relative to the menu container.

### reapplyThemeStatic

```cpp
static void reapplyThemeStatic(lv_obj_t *obj)
```

Static theme refresh, independent of this, reading data from MenuState.

### reapplyForDpi

```cpp
static void reapplyForDpi(lv_obj_t *obj)
```

Recomputes on DPI change, recalculating cached physical values, re-rendering icons, and repositioning the indicator.

### correctAfterLayout

```cpp
static void correctAfterLayout(MenuState *st)
```

Geometry correction after theme or size changes.

### applyMode

```cpp
static void applyMode(MenuState *st, MenuMode newMode, bool animate)
```

Applies the display mode switch, wide/narrow.

### showHoverPopup

```cpp
static void showHoverPopup(MenuState *st, int nodeIdx)
```

Shows the narrow mode hover popup panel.

### hideHoverPopup

```cpp
static void hideHoverPopup(MenuState *st)
```

Hides the narrow mode hover popup panel.
