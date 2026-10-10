---
title: System Tray
---

# System Tray

`SystemTray` places an application icon in the notification area or menu bar on desktop platforms, receives click events, and pops up menus. The tray icon is a native resource and does not change with the LVGL theme.

## Header

```cpp
#include <hiyui/platform/system_tray.h>
```

## Minimal example

```cpp
auto &win = createWindow({.title = "App", .width = 960, .height = 640});

auto tray = SystemTray::create(win, {.tooltip = "App"});
tray->setMenu({
    {.text = "显示",
     .iconCodepoint = HIYUI_ICON_VISIBILITY,
     .action = [](MenuContext &) {}},
    {.separator = true},
    {.text = "退出",
     .action = [](MenuContext &) {}},
});
```

The tray binds to one host display at creation. The menu uses that display's fonts and scaling; after the host display is destroyed, menus no longer pop up. The menu window does not appear in the taskbar or window lists.

## Props table

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `tooltip` | `const char *` | `nullptr` | Hover tooltip, UTF-8, read during creation |
| `icon` | `TrayIcon` | `TrayIcon::Self` | Icon source |
| `iconSrc` | `const lv_image_dsc_t *` | `nullptr` | ARGB8888 image, only for `Custom`, read during creation |
| `iconSize` | `int` | `0` | Icon edge length in physical pixels; `0` uses the platform's current small icon size |

TrayIcon values:

| Value | Description |
| --- | --- |
| `None` | Shows no icon |
| `Self` | The program's own icon |
| `Custom` | The ARGB8888 image specified by `iconSrc` |

## Runtime methods table

| Method | Return | Description |
| --- | --- | --- |
| `create(host, props)` | `std::unique_ptr<SystemTray>` | Creates the tray; `host` is a display or a `Window`, with an overload that takes an `ImageBuffer` custom icon. Returns `nullptr` when `host` is invalid or no host window can be obtained, and returns an object with `valid()==false` when the platform has no tray support |
| `valid()` | `bool` | Platform supported and creation succeeded |
| `onLeftClick(f)` | `SystemTray &` | Left click callback |
| `onRightClick(f)` | `SystemTray &` | Right click callback |
| `onDoubleClick(f)` | `SystemTray &` | Left double click callback |
| `onMiddleClick(f)` | `SystemTray &` | Middle click callback |
| `onMessageClick(f)` | `SystemTray &` | Balloon notification click callback |
| `setMenu(items)` | `SystemTray &` | Sets the tray menu; `items` is a `std::vector<ContextMenuItem>` |
| `setMenuMaxHeight(maxHeight)` | `SystemTray &` | Menu panel height limit in canvas pixels; `0` uses 70% of the screen work area height |
| `setIcon(icon, src)` | `void` | Replaces the icon at runtime; `None` removes the current icon, with an overload that takes an `ImageBuffer` |
| `setTooltip(text)` | `void` | Replaces the tooltip at runtime |
| `showMessage(title, text, icon, timeoutMs)` | `void` | Shows a system balloon notification; `icon` defaults to `TrayMessageIcon::Info`, `timeoutMs` is in milliseconds, `0` uses the default 10000 |

Click callbacks have the signature `void(int32_t screenX, int32_t screenY)` with coordinates in SDL desktop coordinates; the `onMessageClick` callback takes no parameters. The `ContextMenuItem` struct is defined in `<hiyui/widget/context_menu.h>`.

## Menu triggering

The menu registered by `setMenu` is triggered by right click. The library takes over the popup menu trigger events and no longer dispatches them to the `onRightClick` callback. Left clicks and left double clicks are dispatched to their set callbacks. The popup menu does not change the visibility state of the host window.

Menu rendering differs by platform:

- macOS: system native menu. Menu item text, separators, disabled state, multi-level submenus, `iconCodepoint` font icons, and `accelerator` shortcuts take effect; `accelerator.primary` maps to the Command key and is displayed as the system shortcut caption; `iconSrc` and the `shortcut` display string are ignored.
- Linux: the menu is rendered by the desktop environment through `com.canonical.dbusmenu` (StatusNotifier hosts of GNOME, KDE, and others). Text, separators, disabled state, multi-level submenus, `iconCodepoint` icons (rendered in 16px neutral gray), and `action` callbacks take effect, with `action` receiving an ownerless context; `accelerator` is advisory only and the host decides whether to display it; the menu item icon position is decided by the host layout; `iconSrc` and the `shortcut` display string are ignored, and key triggering is not taken over here. When the host does not render the menu, an LVGL ContextMenu pops up instead.
- Other platforms: right click pops up an LVGL ContextMenu, which inherits the theme, DPI, and animations.

## Notes

:::warning
The tray menu can pop up while the host window is hidden. Showing or hiding the host window is handled by the click callback or the menu item action.
:::

:::warning
Linux integrates with the desktop through StatusNotifierItem. When no StatusNotifierWatcher exists on the session bus (for example, the GNOME AppIndicator extension is not installed), `create` returns an object with `valid()==false` and all methods are silently ineffective.
:::

## Related pages

- [Multi-Window](/en/window/multi-window)
