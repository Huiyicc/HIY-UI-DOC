---
title: "ToolButton"
---

# ToolButton <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tool_bar.h>`

**Namespace:** `hiyui`

Command, toggle, dropdown and split buttons, usable standalone or mounted on a ToolBar. State, menu and event bindings belong to the widget; destroying a moving or temporary wrapper does not delete the widget. Call on the UI thread. Configuration and event bindings made before mounting apply at init; operations after destruction have no effect. Queries on unmounted or destroyed objects return default values.

**Inherits:** `hiyui::Chainable< ToolButton >`

## Public Methods

### checked

```cpp
ToolButton & checked(ToolCheckState value, Notify notify=Notify::No) &
```

Sets the check state; the same value does not notify. Mixed is valid for Toggle only; Radio On clears other selections in the same group.

### menu

```cpp
bool menu(std::vector< ToolMenuItem > items)
```

Replaces the menu and closes the old popup; an invalid id, duplicate id or unsupported kind rejects the whole replacement.

### activate

```cpp
bool activate()
```

Runs the main command; returns false when disabled, explicitly hidden or already activating. Dropdown only expands the menu.

### activateMenu

```cpp
bool activateMenu(int id)
```

Runs a visible and enabled leaf menu command, sending onActivate after updating the selection; an invalid id returns false.

### openMenu

```cpp
ToolButton & openMenu() &
```

Expands the menu of a dropdown or split button; repeated calls keep it expanded; an empty menu does nothing.

### onActivate

```cpp
ToolButton & onActivate(F &&callback, EventHandle *handle=nullptr) &
```

Binds the unified activation event; repeated binds append. The callback takes const ToolEvent&amp; or no arguments.

### onChange

```cpp
ToolButton & onChange(F &&callback, EventHandle *handle=nullptr) &
```

Binds button check changes; repeated binds append. The callback takes ToolCheckState or no arguments.

### shortcut

```cpp
ToolButton & shortcut(const HotkeySpec &value) &
```

Replaces the desktop shortcut; a key value of 0 unbinds. Runs only while the owning window has focus and the button is enabled. When tool buttons in the same window share a key combination, the last bound enabled button responds.
