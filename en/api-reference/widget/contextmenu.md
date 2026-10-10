---
title: "ContextMenu"
---

# ContextMenu <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/context_menu.h>`

**Namespace:** `hiyui`

Context menu, static utility class

Not a Widget subclass; controlled through the static methods show and close.

## Static Methods

### open

```cpp
static bool open(const std::vector< ContextMenuItem > &items, int32_t x, int32_t y, Widget &screen, Widget *owner=nullptr, PopupMode mode=PopupMode::Inline, int32_t maxHeight=0, std::function< void()> closed={})
```

Opens the menu and copies the items. Notifies once on close; the callback may reopen the menu.

Physical pixel coordinate on the target screen. Physical pixel coordinate on the target screen. Close notification. Not called when creation fails. true on successful creation. Returns false for empty items or an invalid screen.

### close

```cpp
static void close(Widget &screen)
```

Closes the inline or window menu on the given screen. Repeated calls do nothing.

### show

```cpp
static void show(const std::vector< ContextMenuItem > &items, int32_t x, int32_t y, lv_obj_t *screen, lv_obj_t *owner=nullptr, PopupMode mode=PopupMode::Inline, int32_t maxHeight=0)
```

Shows the context menu at the given position

Menu item list. Supports recursive submenus Popup X coordinate, absolute screen coordinates Popup Y coordinate, absolute screen coordinates Target screen object Object that triggered the menu, passed to the action callback. May be nullptr Popup mode. Forced to Inline without a window manager Panel height limit in canvas pixels. 0: Inline uses the screen height, Window uses 70% of the screen work area height. Positive values are clamped to the screen size

### showAtScreen

```cpp
static void showAtScreen(const std::vector< ContextMenuItem > &items, int32_t screenX, int32_t screenY, int32_t maxHeight=0)
```

Shows a standalone top-level window menu at screen coordinates

Creates a parentless standalone window to host the menu, independent of any existing window visibility, for scenarios outside the main window such as the system tray. Coordinates use SDL desktop coordinates. The menu is adjusted to screen work area edges.


Menu item list SDL desktop coordinate X SDL desktop coordinate Y Panel height limit in canvas pixels. 0 uses 70% of the screen work area height. Positive values are clamped to the screen work area

### close

```cpp
static void close(lv_obj_t *screen)
```

Closes the context menu on the given screen

Target screen object

### closeAll

```cpp
static void closeAll()
```

Closes all window-mode menu chains

Includes tray menus and Window mode menus. Inline sessions are still closed by close(screen).
