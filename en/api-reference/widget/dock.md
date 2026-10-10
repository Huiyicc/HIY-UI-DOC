---
title: "Dock"
---

# Dock <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Dock container.

Panes inserted at their declared edges form a split layout, and panes in the same group appear as tabs. Splitters are draggable, and tabs can be dragged out as floating windows and re-docked across groups. The layout can be saved as a snapshot and restored.

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

Declares the initial layout, docking the panes in argument order. Rvalue panes mount with the container; lvalue panes must already be mounted.

### addPane

```cpp
Dock & addPane(DockPane &pane) &
```

Docks a pane, inserting it into the current layout at the edge declared by its properties.

This component; state is unchanged when the pane is not initialized or already registered.

### removePane

```cpp
Dock & removePane(DockPane &pane) &
```

Removes a pane and unregisters it.

This component; state is unchanged when the pane does not belong to this container.

### hidePane

```cpp
Dock & hidePane(DockPane &pane) &
```

Hides a pane, keeping registration and the original position record; showPane() can restore it.

This component; hiding a floating pane destroys its floating window.

### showPane

```cpp
Dock & showPane(DockPane &pane) &
```

Restores a hidden pane, preferring its group and tab position from before hiding.

This component; enters the first group when the original group no longer exists.

### activatePane

```cpp
Dock & activatePane(DockPane &pane) &
```

Activates the tab containing the pane or brings its floating window to the front.

This component; state is unchanged when the pane is not registered.

### setFloating

```cpp
Dock & setFloating(DockPane &pane, bool floating) &
```

Switches the pane floating state programmatically.

Without a window manager, the floating pane is shown on top of the current display, keeping drag, resize, and re-dock behavior. This component; state is unchanged when the pane is not registered or the state already matches.

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

Pane wrapper; raw() is nullptr when not found.

### saveLayout

```cpp
DockLayoutSnapshot saveLayout() const
```

Saves a snapshot of the current layout, including floating geometry and the hidden list.

Snapshot value.

### restoreLayout

```cpp
Dock & restoreLayout(const DockLayoutSnapshot &snapshot) &
```

Restores a layout snapshot.

Registered panes are matched by pane name. Panes missing from the snapshot are collected into the first group, and unregistered names are skipped. This component; an empty-tree snapshot clears the layout to a state with no panes.

### onPaneEvent

```cpp
Dock & onPaneEvent(DockEventType type, F &&f, EventHandle *handle=nullptr) &
```

Binds a pane business event; the callback can receive `DockEvent`, the pane name, or no arguments.

### onPaneActivated

```cpp
Dock & onPaneActivated(F &&f, EventHandle *handle=nullptr) &
```

Binds the tab activated event.

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
