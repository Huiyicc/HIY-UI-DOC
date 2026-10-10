---
title: "detail::PopupSurface"
---

# detail::PopupSurface <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/detail/popup_surface.h>`

**Namespace:** `hiyui`

Popup surface panel

open() creates a hidden popup window and registers the popup chain; after building content, the component calls finishLayout() to size the window to the content and show it. Closing always goes through close(); external closes triggered by the popup chain or display deletion call the onClose callback via closeSession, and the session becomes invalid after the callback returns.

## Public Methods

### open

```cpp
bool open(lv_display_t *parentDisp, int32_t panelX, int32_t panelY, int32_t contentW, int32_t contentH, int32_t shadowExtent)
```

Opens the popup window

Host display Desired panel X in host canvas pixels Desired panel Y in host canvas pixels Content width in canvas pixels Content height in canvas pixels Content shadow expansion in canvas pixels Returns false on creation failure; the caller falls back to an inline popup

### contentParent

```cpp
lv_obj_t * contentParent() const
```

Content mount point; returns nullptr when not open

### finishLayout

```cpp
void finishLayout(lv_obj_t *content)
```

Sizes the window to the content and shows it after the content is built

Content root object inside contentParent()

### takeFocusGroup

```cpp
lv_group_t * takeFocusGroup(lv_obj_t *initialFocus)
```

Creates a focus group and takes over keyboard input

Initially focused object Returns the focus group, or nullptr when not open; the previous group is restored automatically on close

### previousGroup

```cpp
lv_group_t * previousGroup() const
```

Focus group captured before the popup opened; returns nullptr when not open

### onClose

```cpp
void onClose(std::function< void()> cb)
```

Binds the external close callback

### close

```cpp
void close() noexcept
```

Closes the popup window; no-op when not open, safe to call repeatedly

### isOpen

```cpp
bool isOpen() const
```

Whether the popup is open
