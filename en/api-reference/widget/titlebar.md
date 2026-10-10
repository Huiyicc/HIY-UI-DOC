---
title: "TitleBar"
---

# TitleBar <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/title_bar.h>`

**Namespace:** `hiyui`

Window title bar widget

For frameless windows; provides a draggable title bar area and window control buttons. Usually created automatically by Window in frameless mode, or built manually.



**See also:** `TitleBarProps`


**See also:** `Window`

**Inherits:** `hiyui::Container< TitleBar >`

## Public Methods

### TitleBar

```cpp
TitleBar(lv_obj_t *raw)
```

Wrap an existing LVGL object

### TitleBar

```cpp
TitleBar(TitleBarProps props={})
```

Aggregate construct from properties

### init

```cpp
TitleBar & init(lv_obj_t *parent) &
```

Create the title bar on a parent object

### title

```cpp
TitleBar & title(const char *t) &
```

Change the title text at runtime, UTF-8 encoded

### title

```cpp
TitleBar & title(const LocalizedText &text) &
```

Bind a language-updated title; a plain title call replaces this binding.

### onMinimize

```cpp
TitleBar & onMinimize(F &&f, EventHandle *handle=nullptr) &
```

Bind the minimize button callback; repeated binds append

Optional out parameter receiving the unbind handle of this binding

### onMaximize

```cpp
TitleBar & onMaximize(F &&f, EventHandle *handle=nullptr) &
```

Bind the maximize/restore button callback; repeated binds append

Optional out parameter receiving the unbind handle of this binding

### onClose

```cpp
TitleBar & onClose(F &&f, EventHandle *handle=nullptr) &
```

Bind the close button callback; repeated binds append

Optional out parameter receiving the unbind handle of this binding

### onDoubleClick

```cpp
TitleBar & onDoubleClick(F &&f, EventHandle *handle=nullptr) &
```

Bind the background double-click callback; fires on double click in the non-button area; repeated binds append

Optional out parameter receiving the unbind handle of this binding

### onDragBegin

```cpp
TitleBar & onDragBegin(F &&f, EventHandle *handle=nullptr) &
```

Bind the background press callback; repeated binds append. Fires once when a non-button area of the title bar is pressed; the left button stays down during the callback, for starting a window drag.

Optional out parameter receiving the unbind handle of this binding

### setMaximized

```cpp
TitleBar & setMaximized(bool maximized) &
```

Set the window maximized state; switches the Max button icon between fullscreen and restore.
