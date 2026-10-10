---
title: Desktop Scrolling
---

# Desktop Scrolling

Desktop scrolling means mouse wheel scrolling and auto-hiding floating scrollbars. List-type components such as VBox, HBox, FlowBox, Input, Table, Tree, and Tabs are integrated.

## Container configuration

```cpp
VBox list({.scroll = ScrollMode::Vertical});
list.init(parent).height(420);
```

`ScrollMode::Off` disables scrolling; the other values (`Auto`, `Horizontal`, `Vertical`, `Both`) configure the scroll direction. A scroll range appears when the content size exceeds the viewport size.

## Utility interface

Component implementations usually complete the binding in `init()`. Custom scroll containers can use the interfaces in `<hiyui/core/scroll_utils.h>` directly:

| Function | Description |
| --- | --- |
| `enablePcScroll(obj)` | Installs desktop scrolling behavior on the object: hides the native scrollbar and creates three-state floating scrollbars |
| `findScrollableAtPoint(parent, p)` | Finds the deepest desktop-scrollable object at the coordinates |
| `applyScrollbarStyle(obj)` | Applies the floating scrollbar style to components that have scrollbars but no desktop scrolling enabled |
| `updatePcScrollDir(obj)` | Creates or destroys the floating scrollbars of the corresponding axes as needed after the scroll direction changes |
| `blockPointerDragScroll(obj)` | Prevents pointer dragging from scrolling the object; effective only in desktop compilation units |

## Nested scrolling

When the pointer is over nested containers, event dispatch selects the innermost hit scrollable object. Propagation after reaching a boundary follows the LVGL scroll chain configuration.

## Lifecycle

Scroll state is bound to the LVGL object and released in the delete event when the object is deleted.
