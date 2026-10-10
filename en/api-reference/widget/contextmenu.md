---
title: "ContextMenu"
---

# ContextMenu <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/context_menu.h>`

**Namespace:** `hiyui`

Right-click context menu, static utility class

Not a Widget subclass. Controlled through the static show/close methods.

## Static Methods

### open

```cpp
static bool open(const std::vector< ContextMenuItem > &items, int32_t x, int32_t y, Widget &screen, Widget *owner=nullptr, PopupMode mode=PopupMode::Inline, int32_t maxHeight=0, std::function< void()> closed={})
```

Open the menu and copy the items. Notifies once on close. The callback can reopen the menu.

Physical pixel coordinate on the target screen. Physical pixel coordinate on the target screen. Close notification. Not called when creation fails. Returns true when creation succeeds. Returns false for empty items or an invalid screen.

### close

```cpp
static void close(Widget &screen)
```

Close the inline or window menu on the given screen. Repeated calls are no-ops.

### show

```cpp
static void show(const std::vector< ContextMenuItem > &items, int32_t x, int32_t y, lv_obj_t *screen, lv_obj_t *owner=nullptr, PopupMode mode=PopupMode::Inline, int32_t maxHeight=0)
```

Show the context menu at the given position

Menu item list, recursive submenus supported Popup X coordinate, screen absolute Popup Y coordinate, screen absolute Target screen object Object that triggered the menu, passed to the action callback. Can be nullptr Popup mode. Forced to Inline when no window manager exists Panel height limit in canvas pixels. 0 uses the screen height for Inline and 70% of the screen work area height for Window. Positive values are clamped to the screen size

### showAtScreen

```cpp
static void showAtScreen(const std::vector< ContextMenuItem > &items, int32_t screenX, int32_t screenY, int32_t maxHeight=0)
```

Show a standalone top-level window menu at screen coordinates

Creates a parentless standalone window to hold the menu. It does not depend on any existing window being visible, for cases detached from the main window such as the system tray. Coordinates use SDL desktop coordinates. The menu adjusts its position to the screen work area edges.


Menu item list SDL desktop coordinate X SDL desktop coordinate Y Panel height limit in canvas pixels. 0 uses 70% of the screen work area height. Positive values are clamped to the screen work area

### close

```cpp
static void close(lv_obj_t *screen)
```

Close the context menu on the given screen

Target screen object

### closeAll

```cpp
static void closeAll()
```

Close all window-mode menu chains

Includes tray menus and Window mode menus. Inline sessions are still closed by close(screen).
