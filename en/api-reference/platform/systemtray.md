---
title: "SystemTray"
---

# SystemTray <Badge type="info" text="Class" />

**Header:** `#include <hiyui/platform/system_tray.h>`

**Namespace:** `hiyui`

System tray held by RAII.

Created through create() and bound to one host display. The menu uses the host display font and scaling. Showing the menu does not change the host window display state.


On macOS the menu is the system native menu bar menu. Other platforms reuse ContextMenu, inheriting theme, DPI, and animation. The tray icon is a native resource and does not follow LVGL theme changes.

## Static Methods

### create

```cpp
static std::unique_ptr< SystemTray > create(lv_display_t *hostDisp, TrayProps props={})
```

Creates a tray.

Host display. After its destruction the tray menu no longer pops up. Tray properties. Returns nullptr when hostDisp is invalid or the host window cannot be obtained. When the platform has no system tray, returns an object with valid()==false and all methods silently do nothing.

### create

```cpp
static std::unique_ptr< SystemTray > create(lv_display_t *hostDisp, const ImageBuffer &icon, TrayProps props={})
```

Creates a tray with a custom pixel icon.

icon must be a valid ARGB8888 buffer, otherwise the tray is created without an icon. Pixels are copied during creation, the buffer is not borrowed after the call.


Host display. Custom icon pixels. Tray properties. The icon and iconSrc fields are overridden by this overload. Same semantics as create(lv_display_t*, TrayProps).

### create

```cpp
static std::unique_ptr< SystemTray > create(Window &window, TrayProps props={})
```

Creates a tray bound to the display of window.

Host window. Tray properties. Same semantics as create(lv_display_t*, TrayProps).

### create

```cpp
static std::unique_ptr< SystemTray > create(Window &window, const ImageBuffer &icon, TrayProps props={})
```

Creates a tray bound to the display of window.

Host window. Tray properties. Same semantics as create(lv_display_t*, TrayProps). Custom icon pixels, must be a valid ARGB8888 buffer.

## Public Methods

### valid

```cpp
bool valid() const
```

Whether the platform supports it and creation succeeded.

### onLeftClick

```cpp
SystemTray & onLeftClick(std::function< void(int32_t, int32_t)> f)
```

Sets the left click callback.

Signature void(screenX, screenY). Coordinates use SDL desktop coordinates.

### onRightClick

```cpp
SystemTray & onRightClick(std::function< void(int32_t, int32_t)> f)
```

Sets the right click callback, coordinates same as onLeftClick.

### onDoubleClick

```cpp
SystemTray & onDoubleClick(std::function< void(int32_t, int32_t)> f)
```

Sets the left double click callback, coordinates same as onLeftClick.

### onMiddleClick

```cpp
SystemTray & onMiddleClick(std::function< void(int32_t, int32_t)> f)
```

Sets the middle click callback, coordinates same as onLeftClick.

### onMessageClick

```cpp
SystemTray & onMessageClick(std::function< void()> f)
```

Sets the balloon notification click callback.

### setMenu

```cpp
SystemTray & setMenu(std::vector< ContextMenuItem > items)
```

Sets the tray menu.

On macOS pops the system native menu. Text, separators, disabled state, nested submenus, iconCodepoint font icons, and accelerator shortcuts take effect. iconSrc and the shortcut display string are ignored. On Linux the menu is rendered by the desktop host. Text, separators, disabled state, nested submenus, iconCodepoint icons rendered in neutral gray at 16px, and action callbacks take effect, with action receiving nullptr. accelerator is only a hint, whether to show it is decided by the host, and icon placement follows the host layout. iconSrc and the shortcut display string are ignored. When the host does not render the menu and invokes ContextMenu, falls back to popping the LVGL ContextMenu. On other platforms the LVGL ContextMenu pops on right click. Menu trigger events taken over by the library are no longer dispatched to the onRightClick callback.


Menu items.

### setMenuMaxHeight

```cpp
SystemTray & setMenuMaxHeight(int32_t maxHeight)
```

Sets the height limit of the tray menu panel.

Height limit in canvas pixels. 0 uses 70% of the screen work area height. Positive values are clamped to the screen work area.

### setIcon

```cpp
void setIcon(TrayIcon icon, const lv_image_dsc_t *src=nullptr)
```

Replaces the icon at run time. None removes the current icon.

### setIcon

```cpp
void setIcon(TrayIcon icon, const ImageBuffer &src)
```

Replaces the icon at run time, pixels copied during the call.

Custom requires a valid ARGB8888 buffer, otherwise the current icon is unchanged. Other sources ignore src, same semantics as setIcon(TrayIcon, const lv_image_dsc_t*).


Icon source. Custom icon pixels.

### setTooltip

```cpp
void setTooltip(const char *text)
```

Replaces the UTF-8 tooltip text at run time.

### showMessage

```cpp
void showMessage(const char *title, const char *text, TrayMessageIcon icon=TrayMessageIcon::Info, uint32_t timeoutMs=10000)
```

Shows a balloon notification.

Win32, macOS, and Linux use the system native balloon. Other platforms silently do nothing. On macOS the first call requests notification authorization from the system. It silently does nothing when not authorized or when a bare executable has no bundle. Overlong title and body are truncated, the actual display duration is adjusted by the system. Silently does nothing when the user setting disables balloons.


Title, UTF-8, may be nullptr. Body, UTF-8, may be nullptr. Balloon icon. Desired display duration in milliseconds. 0 uses the default 10000.
