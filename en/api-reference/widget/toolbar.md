---
title: "ToolBar"
---

# ToolBar <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tool_bar.h>`

**Namespace:** `hiyui`

Tool bar container supporting in-place mounting, declarative subtrees, overflow menu and embedded widgets. Child widgets are managed by the tool bar; overflow does not destroy them. Use moveItem for dynamic reordering. Call on the UI thread. Configuration and event bindings made before mounting apply at init; operations after destruction have no effect. Queries on unmounted or destroyed objects return default values.

**Inherits:** `hiyui::Container< ToolBar >`

## Public Methods

### buttonSize

```cpp
ToolBar & buttonSize(int value) &
```

Sets the minimum button hit size in logical pixels; positive values are valid; 44 suits touch interfaces.

### append

```cpp
ToolBar & append(Widget &item) &
```

Appends a mounted widget to the tool bar, moving its parent-child relationship; repeated appends keep the order.

### moveItem

```cpp
bool moveItem(Widget &item, int index)
```

Moves a top-level item to the given index in [0,itemCount); invalid arguments return false.

### removeItem

```cpp
bool removeItem(Widget &item)
```

Removes a top-level item and its subtree; returns false for items not owned by this tool bar.

### itemAt

```cpp
Ref< Widget > itemAt(int index) const
```

Returns a non-owning reference to a top-level item; out-of-range returns an empty reference. The index includes separators.

### refresh

```cpp
ToolBar & refresh() &
```

Refreshes sizes and overflow assignment synchronously; layout events also refresh automatically.
