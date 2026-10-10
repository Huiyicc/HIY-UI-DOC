---
title: "ToolButton"
---

# ToolButton <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tool_bar.h>`

**Namespace:** `hiyui`

Command, toggle, dropdown and split button, usable standalone or mounted on a ToolBar. State, menu and event bindings belong to the widget, destroying a move wrapper or temporary wrapper does not delete the widget. Call on the UI thread, configuration and event bindings made before mounting are applied at init, operations after destruction have no effect. Queries on unmounted or destroyed objects return default values.

**Inherits:** `hiyui::Chainable< ToolButton >`

## Public Methods

### checked

```cpp
ToolButton & checked(ToolCheckState value, Notify notify=Notify::No) &
```

Sets the check state, equal values do not notify. Mixed is valid for Toggle only, Radio On clears other selections in the same group.

### menu

```cpp
bool menu(std::vector< ToolMenuItem > items)
```

Replaces the menu and closes the old popup, invalid id, duplicate id or unsupported kind rejects the whole replacement.

### activate

```cpp
bool activate()
```

Runs the main command, returns false when disabled, explicitly hidden or already activating, Dropdown only expands the menu.

### activateMenu

```cpp
bool activateMenu(int id)
```

Runs the visible and enabled leaf menu command, updates the selection and then emits onActivate, invalid id returns false.

### openMenu

```cpp
ToolButton & openMenu() &
```

Expands the menu of a dropdown or split button, repeated calls keep it expanded, no action when the menu is empty.

### onActivate

```cpp
ToolButton & onActivate(F &&callback, EventHandle *handle=nullptr) &
```

Binds the unified activation event, repeated binds append, the parameter is const ToolEvent&amp; or none.

### onChange

```cpp
ToolButton & onChange(F &&callback, EventHandle *handle=nullptr) &
```

Binds button check-state changes, repeated binds append, the parameter is ToolCheckState or none.

### shortcut

```cpp
ToolButton & shortcut(const HotkeySpec &value) &
```

Replaces the desktop shortcut, key value 0 unbinds, runs only while the owning window has focus and the button is enabled. When tool buttons in the same window use the same key combination, the last bound enabled button responds.
