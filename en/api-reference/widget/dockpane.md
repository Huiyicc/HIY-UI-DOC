---
title: "DockPane"
---

# DockPane <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/dock.h>`

**Namespace:** `hiyui`

Dock pane hosting user content.

operator() configures content before mounting and hands the pane rvalue to Dock::operator() to mount with the container. Mounted panes enter the layout through Dock::addPane(). A pane can go through addPane / removePane repeatedly, after removePane the content object stays under the Dock hidden and is shown again on the next addPane.

**Inherits:** `hiyui::Container< DockPane >`

## Public Methods

### DockPane

```cpp
DockPane(DockPaneProps props={})
```

Aggregate construction from properties.

### DockPane

```cpp
DockPane(lv_obj_t *raw)
```

Wraps an existing LVGL object created by DockPane.

### init

```cpp
DockPane & init(lv_obj_t *parent) &
```

Creates the pane content container on a parent object.

### init

```cpp
DockPane & init(Widget &parent) &
```

Creates the pane content container on a parent object.

### props

```cpp
const DockPaneProps & props() const
```

Reads the construction properties when not registered.

### title

```cpp
DockPane & title(const char *text) &
```

Sets the title, the text is copied during the call.

This component, when unregistered only the pending properties are updated.

### closable

```cpp
DockPane & closable(bool value) &
```

Sets whether closing is allowed.

### movable

```cpp
DockPane & movable(bool value) &
```

Sets whether dragging to move is allowed.

### floatable

```cpp
DockPane & floatable(bool value) &
```

Sets whether dragging out to float is allowed.

### name

```cpp
const char * name() const
```

Returns the pane unique name, or the construction property value when unregistered.

### isFloating

```cpp
bool isFloating() const
```

Returns whether the pane is floating, false when unregistered.

### isShown

```cpp
bool isShown() const
```

Returns whether the pane is shown, true when unregistered.
