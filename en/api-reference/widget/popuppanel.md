---
title: "PopupPanel"
---

# PopupPanel <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/popup_panel.h>`

**Namespace:** `hiyui`

Popup panel

open() takes an anchor and a content builder callback. Placement, outside-click close, ESC close, ancestor-scroll close and the expand animation are handled automatically.


PopupPanel manages the LVGL object lifetime independently and does not inherit Widget.



**See also:** `PopupPanelProps`

## Types

### Builder

```cpp
using hiyui::PopupPanel::Builder = std::function<void(Widget &)>
```

Content builder callback, the argument is the panel content container

## Public Methods

### PopupPanel

```cpp
PopupPanel(PopupPanelProps props={})
```

Construct from aggregated properties

### open

```cpp
PopupPanel & open(Widget &anchor, Builder builder)
```

Open the popup

### open

```cpp
PopupPanel & open(Widget &anchor, F &&builder)
```

Builds the popup content synchronously. The callback may hold move-only resources and is not retained after the call returns.

### close

```cpp
PopupPanel & close()
```

Close the popup

### isOpen

```cpp
bool isOpen() const
```

Query whether the popup is open

### raw

```cpp
lv_obj_t * raw() const
```

Get the underlying panel LVGL object

The panel object pointer, nullptr when not open

### onClose

```cpp
PopupPanel & onClose(CloseCallback cb)
```

Bind the close callback

### onClose

```cpp
PopupPanel & onClose(F &&cb)
```

Replaces the close callback and owns its resources. The callback may reopen or destroy the panel.
