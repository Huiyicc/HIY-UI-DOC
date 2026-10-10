---
title: "SystemTray"
---

# SystemTray <Badge type="info" text="Class" />

**Header:** `#include <hiyui/platform/system_tray.h>`

**Namespace:** `hiyui`

System tray, RAII held

Created through create() and bound to one host display. The menu uses the host display's fonts and scaling, and popping up the menu does not change the host window's display state.


On macOS the menu is a native menu bar menu; other platforms reuse ContextMenu and inherit theme, DPI, and animations. The tray icon is a native resource and does not follow the LVGL theme.

## Static Methods

### create

```cpp
static std::unique_ptr< SystemTray > create(lv_display_t *hostDisp, TrayProps props={})
```

Creates a tray

Host display; after its destruction the tray menu no longer pops up Tray properties Returns nullptr when hostDisp is invalid or the host window cannot be obtained. When the platform has no system tray, returns an object with valid()==false and all methods silently do nothing.

### create

```cpp
static std::unique_ptr< SystemTray > create(lv_display_t *hostDisp, const ImageBuffer &icon, TrayProps props={})
```

Creates a tray with a custom pixel icon

icon must be a valid ARGB8888 buffer, otherwise the tray is created without an icon. Pixels are copied during creation; the buffer is not borrowed after the call returns.


Host display Custom icon pixels Tray properties; the icon and iconSrc fields are overridden by this overload Same semantics as create(lv_display_t*, TrayProps)

### create

```cpp
static std::unique_ptr< SystemTray > create(Window &window, TrayProps props={})
```

Creates a tray bound to the display of the window

Host window Tray properties Same semantics as create(lv_display_t*, TrayProps)

### create

```cpp
static std::unique_ptr< SystemTray > create(Window &window, const ImageBuffer &icon, TrayProps props={})
```

Creates a tray bound to the display of the window

Host window Tray properties Same semantics as create(lv_display_t*, TrayProps) Custom icon pixels, must be a valid ARGB8888 buffer

## Public Methods

### valid

```cpp
bool valid() const
```

Whether the platform supports it and creation succeeded

### onLeftClick

```cpp
SystemTray & onLeftClick(std::function< void(int32_t, int32_t)> f)
```

Sets the left-click callback

Signature void(screenX, screenY); coordinates use SDL desktop coordinates

### onRightClick

```cpp
SystemTray & onRightClick(std::function< void(int32_t, int32_t)> f)
```

Sets the right-click callback; coordinate semantics follow onLeftClick

### onDoubleClick

```cpp
SystemTray & onDoubleClick(std::function< void(int32_t, int32_t)> f)
```

Sets the double-click callback; coordinate semantics follow onLeftClick

### onMiddleClick

```cpp
SystemTray & onMiddleClick(std::function< void(int32_t, int32_t)> f)
```

Sets the middle-click callback; coordinate semantics follow onLeftClick

### onMessageClick

```cpp
SystemTray & onMessageClick(std::function< void()> f)
```

Sets the notification bubble click callback

### setMenu

```cpp
SystemTray & setMenu(std::vector< ContextMenuItem > items)
```

Sets the tray menu

On macOS the system native menu pops up; text, separators, disabled states, multi-level submenus, iconCodepoint font icons, and accelerator shortcuts take effect, while iconSrc and shortcut display strings are ignored. On Linux the menu is rendered by the desktop host; text, separators, disabled states, multi-level submenus, iconCodepoint icons rendered in 16px neutral gray, and action callbacks take effect, with the action argument receiving nullptr. The accelerator is only a hint, whether to show it is decided by the host, and the icon position follows the host layout; iconSrc and shortcut display strings are ignored. When the host does not render the menu and ContextMenu is invoked, the LVGL ContextMenu pops up instead. On the remaining platforms the LVGL ContextMenu pops up on right click. The library takes over the menu trigger event and no longer dispatches it to the onRightClick callback.


Menu items

### setMenuMaxHeight

```cpp
SystemTray & setMenuMaxHeight(int32_t maxHeight)
```

Sets the menu panel height limit of the tray

Height limit in canvas pixels; 0 uses 70% of the screen work area height, positive values are clamped to the screen work area

### setIcon

```cpp
void setIcon(TrayIcon icon, const lv_image_dsc_t *src=nullptr)
```

Replaces the icon at runtime; None removes the current icon

### setIcon

```cpp
void setIcon(TrayIcon icon, const ImageBuffer &src)
```

Replaces the icon at runtime; pixels are copied during the call

Custom must be given a valid ARGB8888 buffer, otherwise the current icon is unchanged; other sources ignore src, same semantics as setIcon(TrayIcon, const lv_image_dsc_t*).


Icon source Custom icon pixels

### setTooltip

```cpp
void setTooltip(const char *text)
```

Replaces the UTF-8 tooltip text at runtime

### showMessage

```cpp
void showMessage(const char *title, const char *text, TrayMessageIcon icon=TrayMessageIcon::Info, uint32_t timeoutMs=10000)
```

Shows a notification bubble

Win32, macOS, and Linux use system native bubbles; other platforms silently do nothing. On macOS the first call requests notification authorization; without authorization or with a bare executable lacking a bundle, it silently does nothing. Overly long titles and bodies are truncated, and the actual display duration is adjusted by the system. Silently does nothing when the user has disabled bubbles.


Title, UTF-8, may be nullptr Body, UTF-8, may be nullptr Bubble icon Desired display duration in milliseconds; 0 uses the default 10000
