---
title: "ListDetail"
---

# ListDetail <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/list_detail.h>`

**Namespace:** `hiyui`

Switches the list detail presentation between single-pane and split based on the content width it is assigned. It must be sized by its parent. Each named pane holds at most one direct child, and the subtrees are managed by the parent widget. The single-pane layout shows only the active pane. The split layout gives the list the configured width and the detail the remaining width. With only one pane it fills the space. Relayout preserves subtrees, input state and valid scroll offsets. It does not change business selection, commit drafts or add navigation history. Entering a pane restores its last valid focusable descendant, otherwise the first one is chosen. Relayout keeps focus that is still visible. Deleting Detail returns to List. Deleting List keeps the detail. Neither structure nor size changes dispatch value notifications.

**Inherits:** `hiyui::Container< ListDetail >`

## Public Methods

### init

```cpp
ListDetail & init(Window &window) &
```

Mount into the window root content area.

### activePane

```cpp
ListDetailPane activePane() const
```

The most recently requested pane. List when initial, unmounted or destroy was requested.

### presentation

```cpp
ListDetailPresentation presentation() const
```

The current presentation. Split when the content logical width reaches splitMinWidth. Single when invalid.

### activePane

```cpp
ListDetail & activePane(ListDetailPane value, Notify notify=Notify::No) &
```

Set the active pane. Business data is unchanged. Requesting Detail without a Detail pane is a no-op. Can be called before mounting and is applied once the named panes are mounted. Invalid enums and destroy-requested states are no-ops.

Yes dispatches onChange once only when the value actually changes. Silent by default.

### back

```cpp
bool back()
```

When showing Detail in the single-pane layout and a List pane exists, return to the list and notify with Notify::Yes.

Returns true when this back navigation is consumed, otherwise false. Calling it applies no history.

### onChange

```cpp
ListDetail & onChange(F &&handler, EventHandle *handle=nullptr) &
```

Append an active pane change callback. Accepts void(ListDetailPane), void(Event&amp;) or void(). Supports binding before mounting and move-only closures. Released after destruction. Layout changes do not trigger it.

Optional unbind handle. off can be called repeatedly. For scoped unbinding use ScopedEventHandle.
