---
title: "TabsEx"
---

# TabsEx <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tabs_ex.h>`

**Namespace:** `hiyui`

Session tab card widget.

Tab items are grouped by Pin state. The close event only signals a close request; after disconnecting the session and releasing resources, call `removeTab()` to delete the corresponding UI node.

**Inherits:** `hiyui::Chainable< TabsEx >`

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(TabsExEventType type)
```

Returns the internal TabsEx event code.

## Public Methods

### TabsEx

```cpp
TabsEx(lv_obj_t *raw)
```

Wraps an existing LVGL object created by TabsEx.

### TabsEx

```cpp
TabsEx(TabsExProps props={})
```

Aggregate construction from properties.

### init

```cpp
TabsEx & init(lv_obj_t *parent) &
```

Creates the tab card container on a parent object.

### init

```cpp
TabsEx & init(Widget &parent) &
```

Creates the tab card container on a parent object.

### items

```cpp
TabsEx & items(const std::vector< TabsExItem > &items, Notify notify=Notify::No) &
```

Replaces all tab items and rearranges them by Pin state; title and Host text are copied.

### items

```cpp
TabsEx & items(std::initializer_list< const char * > titles, Notify notify=Notify::No) &
```

Replaces all tab items with a list of titles.

### append

```cpp
TabsEx & append(const TabsExItem &item, Notify notify=Notify::No) &
```

Appends a tab item; title and Host text are copied.

### removeTab

```cpp
TabsEx & removeTab(int index, Notify notify=Notify::No) &
```

Removes a tab item.

Current tab index. State is unchanged when the index is out of range.

### activeIndex

```cpp
TabsEx & activeIndex(int index, Notify notify=Notify::No) &
```

Sets the active tab.

Tab index; state is unchanged when the index is out of range or the tab is disabled.

### activeIndex

```cpp
int activeIndex() const
```

Returns the active tab.

Current index; -1 when there are no tabs.

### scrollToTab

```cpp
TabsEx & scrollToTab(int index) &
```

Scrolls the tab bar so the given tab is fully visible.

Tab index; state is unchanged when the index is out of range.

### itemCount

```cpp
int itemCount() const
```

Returns the number of tabs.

### itemData

```cpp
int itemData(int index) const
```

Returns the tab user data.

Current tab index. The `data` value; returns 0 when the index is out of range.

### tabTitle

```cpp
std::string tabTitle(int index) const
```

Returns the current tab title.

Current tab index. Current title; empty string when the index is out of range.

### connectionState

```cpp
TabsEx & connectionState(int index, TabConnectionState state) &
```

Sets the connection state.

State is unchanged when the index is out of range.

### closable

```cpp
TabsEx & closable(int index, bool value) &
```

Sets whether the tab can be closed.

true shows the close control and allows middle-click close, false hides the close control. State is unchanged when the index is out of range or the value is unchanged.

### pinned

```cpp
TabsEx & pinned(int index, bool pinned=true, Notify notify=Notify::No) &
```

Sets the Pin state and rearranges tabs.

Current tab index. true places the tab in the Pin group, false in the normal group.

### isPinned

```cpp
bool isPinned(int index) const
```

Returns whether the tab is in the Pin group.

Pin state; false when the index is out of range.

### rename

```cpp
TabsEx & rename(int index, const char *title) &
```

Sets the tab title.

Null or empty restores the Host text; the text is copied during the call. State is unchanged when the index is out of range.

### onChange

```cpp
TabsEx & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the activation event; the callback can receive `TabsExEvent`, the index, or no arguments.

### onCloseRequest

```cpp
TabsEx & onCloseRequest(F &&f, EventHandle *handle=nullptr) &
```

Binds the close request event.

### onNewRequest

```cpp
TabsEx & onNewRequest(F &&f, EventHandle *handle=nullptr) &
```

Binds the new session request event.

### onRightClick

```cpp
TabsEx & onRightClick(F &&f, EventHandle *handle=nullptr) &
```

Binds the right click event.

### onRename

```cpp
TabsEx & onRename(F &&f, EventHandle *handle=nullptr) &
```

Binds the rename commit event.

### onReorder

```cpp
TabsEx & onReorder(F &&f, EventHandle *handle=nullptr) &
```

Binds the drag reorder event.
