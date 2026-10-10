---
title: "Dock"
---

# Dock <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Dock container.

Panes insert at their declared edges to form a split layout, panes in the same group appear as tabs. Separators are draggable, tabs can be dragged out as floating windows and re-docked across groups. The layout can be saved as a snapshot and restored.

**Inherits:** `hiyui::Chainable< Dock >`

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(DockEventType type)
```

Returns the internal Dock event code.

## Public Methods

### Dock

```cpp
Dock(lv_obj_t *raw)
```

Wraps an existing LVGL object created by Dock.

### Dock

```cpp
Dock(DockProps props={})
```

Aggregate construction from properties.

### init

```cpp
Dock & init(lv_obj_t *parent) &
```

Creates the dock container on a parent object.

### init

```cpp
Dock & init(Widget &parent) &
```

Creates the dock container on a parent object.

### operator()

```cpp
Dock & operator()(Panes &&...panes) &
```

Declares the initial layout, docking panes in argument order. Rvalue panes are mounted with the container, lvalue panes must already be mounted.

### addPane

```cpp
Dock & addPane(DockPane &pane) &
```

Docks a pane, inserting it at the edge declared in its properties.

This component, no state change when the pane is not initialized or already registered.

### removePane

```cpp
Dock & removePane(DockPane &pane) &
```

Removes a pane and unregisters it.

This component, no state change when the pane does not belong to this dock.

### hidePane

```cpp
Dock & hidePane(DockPane &pane) &
```

Hides a pane, keeping its registration and original position record, restorable via showPane().

This component, hiding a floating pane destroys its floating window.

### showPane

```cpp
Dock & showPane(DockPane &pane) &
```

Restores a hidden pane, preferring its previous group and tab position.

This component, joins the first group when the original group no longer exists.

### activatePane

```cpp
Dock & activatePane(DockPane &pane) &
```

Activates the tab containing the pane or brings its floating window to the front.

This component, no state change when the pane is not registered.

### setFloating

```cpp
Dock & setFloating(DockPane &pane, bool floating) &
```

Programmatically toggles the floating state of a pane.

Without a window manager the floating pane is shown on top of the current display, keeping drag, resize, and re-dock behavior. This component, no state change when the pane is not registered or the state already matches.

### paneCount

```cpp
int paneCount() const
```

Returns the number of registered panes.

### paneByName

```cpp
DockPane paneByName(const char *name)
```

Finds a pane by unique name.

The pane wrapper, raw() is nullptr when not found.

### saveLayout

```cpp
DockLayoutSnapshot saveLayout() const
```

Saves a snapshot of the current layout, including floating geometry and the hidden list.

The snapshot value.

### restoreLayout

```cpp
Dock & restoreLayout(const DockLayoutSnapshot &snapshot) &
```

Restores a layout snapshot.

Matches registered panes by name. Panes missing from the snapshot are collected into the first group, unregistered names are skipped. This component, an empty tree snapshot clears the layout to a no-pane state.

### onPaneEvent

```cpp
Dock & onPaneEvent(DockEventType type, F &&f, EventHandle *handle=nullptr) &
```

Binds a pane business event, the callback can receive a DockEvent, the pane name, or no arguments.

### onPaneActivated

```cpp
Dock & onPaneActivated(F &&f, EventHandle *handle=nullptr) &
```

Binds the tab activation event.

### onCloseRequest

```cpp
Dock & onCloseRequest(F &&f, EventHandle *handle=nullptr) &
```

Binds the close request event.

### onPaneDocked

```cpp
Dock & onPaneDocked(F &&f, EventHandle *handle=nullptr) &
```

Binds the pane docked event.

### onPaneFloated

```cpp
Dock & onPaneFloated(F &&f, EventHandle *handle=nullptr) &
```

Binds the pane floated event.

### onPaneHidden

```cpp
Dock & onPaneHidden(F &&f, EventHandle *handle=nullptr) &
```

Binds the pane hidden event.

### onPaneShown

```cpp
Dock & onPaneShown(F &&f, EventHandle *handle=nullptr) &
```

Binds the pane shown event.

### onLayoutChanged

```cpp
Dock & onLayoutChanged(F &&f, EventHandle *handle=nullptr) &
```

Binds the layout structure changed event.
