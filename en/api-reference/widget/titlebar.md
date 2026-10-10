---
title: "TitleBar"
---

# TitleBar <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/title_bar.h>`

**Namespace:** `hiyui`

Window title bar component

Intended for frameless windows, providing a draggable title bar area and window control buttons. Usually created automatically by Window in frameless mode, or built manually.



**See also:** `TitleBarProps`


**See also:** `Window`

**Inherits:** `hiyui::Container< TitleBar >`

## Public Methods

### TitleBar

```cpp
TitleBar(lv_obj_t *raw)
```

Wraps an existing LVGL object

### TitleBar

```cpp
TitleBar(TitleBarProps props={})
```

Aggregate construction from properties

### init

```cpp
TitleBar & init(lv_obj_t *parent) &
```

Creates the title bar on a parent object

### title

```cpp
TitleBar & title(const char *t) &
```

Changes the title text at runtime, UTF-8 encoded

### title

```cpp
TitleBar & title(const LocalizedText &text) &
```

Binds a title that updates with the language; a plain title call replaces this binding.

### onMinimize

```cpp
TitleBar & onMinimize(F &&f, EventHandle *handle=nullptr) &
```

Binds the minimize button callback; repeated bindings are appended

Optional output parameter receiving the unbind handle for this binding

### onMaximize

```cpp
TitleBar & onMaximize(F &&f, EventHandle *handle=nullptr) &
```

Binds the maximize/restore button callback; repeated bindings are appended

Optional output parameter receiving the unbind handle for this binding

### onClose

```cpp
TitleBar & onClose(F &&f, EventHandle *handle=nullptr) &
```

Binds the close button callback; repeated bindings are appended

Optional output parameter receiving the unbind handle for this binding

### onDoubleClick

```cpp
TitleBar & onDoubleClick(F &&f, EventHandle *handle=nullptr) &
```

Binds the background double click callback, triggered when the non-button area of the title bar is double clicked; repeated bindings are appended

Optional output parameter receiving the unbind handle for this binding

### onDragBegin

```cpp
TitleBar & onDragBegin(F &&f, EventHandle *handle=nullptr) &
```

Binds the background press callback; repeated bindings are appended. Fires once when the non-button area of the title bar is pressed, with the left button held down during the callback, used to start a window drag.

Optional output parameter receiving the unbind handle for this binding

### setMaximized

```cpp
TitleBar & setMaximized(bool maximized) &
```

Sets the window maximized state; switches the Max button icon between fullscreen and restore.
