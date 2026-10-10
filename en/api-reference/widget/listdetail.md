---
title: "ListDetail"
---

# ListDetail <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/list_detail.h>`

**Namespace:** `hiyui`

Switches the list-detail presentation between single-pane and split based on the content width assigned to it. Its size must be assigned by the parent. Each named area holds at most one direct child; the subtree is managed by the parent widget. Single-pane shows only the active area; in split mode the list uses the configured width and the detail takes the remaining width, filling the space when only one area exists. Relayout keeps the subtree, input and valid scroll offsets, and does not change business selection, commit drafts or add navigation history. Entering an area restores its last valid focusable descendant, otherwise the first one is selected; relayout keeps focus that is still visible. After Detail is deleted, back returns to List; after List is deleted, the detail is kept. Structure and size changes never dispatch value notifications.

**Inherits:** `hiyui::Container< ListDetail >`

## Public Methods

### init

```cpp
ListDetail & init(Window &window) &
```

Mounts to the window root content area.

### activePane

```cpp
ListDetailPane activePane() const
```

Most recently requested area. List when initial, unmounted, or deletion was requested.

### presentation

```cpp
ListDetailPresentation presentation() const
```

Current presentation. Split when the content logical width reaches splitMinWidth. Single when invalid.

### activePane

```cpp
ListDetail & activePane(ListDetailPane value, Notify notify=Notify::No) &
```

Sets the active area without changing business data. Requesting Detail does nothing when no Detail area is provided. Can be called before mount and applies after the named areas are mounted. Invalid enum values and deletion-requested state do nothing.

Yes dispatches onChange once only when the value actually changes. Silent by default.

### back

```cpp
bool back()
```

Returns to the list when in single-pane Detail and a List area exists, notifying as with Notify::Yes.

true when this call consumes the back action, false otherwise. No history is applied when not called.

### onChange

```cpp
ListDetail & onChange(F &&handler, EventHandle *handle=nullptr) &
```

Appends an active-area change callback. Accepts void(ListDetailPane), void(Event&amp;) or void(). Supports binding before mount and move-only closures. Released on destroy. Layout changes do not trigger it.

Optional unbind handle. off can be repeated. Use ScopedEventHandle for scope-based unbinding.
