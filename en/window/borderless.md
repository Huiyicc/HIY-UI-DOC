---
title: Borderless Window
---

# Borderless Window

Borderless mode removes the system title bar and frame, and creates a content area and a custom-drawn `TitleBar`.

```cpp
auto &window = createWindow({
    .title = "Player",
    .width = 900,
    .height = 560,
    .borderless = true,
    .shadow = true,
});
```

`Window::root()` always mounts into the content area; application code does not handle the space occupied by the title bar.

## Title bar

`WindowProps::titleBar` (`TitleBarProps`) controls the title bar height, text, icons, button layout, and window buttons. Title bar buttons connect to the window minimize, maximize, restore, and close actions. For the field list, see the component's `TitleBarProps` definition (`<hiyui/widget/title_bar.h>`).

## Application menu bar

Menu items are set through the runtime method `Window::menu(items)`, which takes a `std::vector<MenuBarItem>`; calling it again replaces all menu items, and an empty list clears the menu. `WindowProps::menuBar` (`MenuBarProps`) controls the menu bar height and colors. The menu takes effect only on borderless desktop windows and is silently ignored on other windows.

- Windows/Linux: the menu bar renders below the title bar; clicking a top-level item opens a dropdown. Installing a menu for the first time increases the total window height by the menu bar height, and clearing the menu restores the height.
- macOS: no menu bar is shown inside the window and the window height does not include the menu bar; `menu()` installs the menu into the system menu bar, after the system application menu and before the Window menu.

macOS native menu behavior:

- Menu items support text, separators, disabled state, multi-level submenus, `iconCodepoint` font icons, and `accelerator` shortcuts.
- In `accelerator`, `primary` (or `meta`) maps to the Command key and `ctrl` maps to the Control key. For example, `{.sdlKey = 'n', .primary = true}` displays and triggers ⌘N.
- The `shortcut` display string and `iconSrc` of dropdown items are ignored.
- Calling `menu()` again replaces the custom menu entirely; the installed menu is removed when the window is destroyed, while the system application menu (About, Hide, ⌘Q quit) and the Window menu remain.
- The application name and Dock icon are read from the application bundle Info.plist (`CFBundleName`/`CFBundleIconFile`); a bare executable outside a bundle uses the process name and the system default icon.

## Desktop behavior

Dragging, edge resizing, maximizing, and DPI changes of borderless windows are handled by the native window hook and SDL hit test; on Windows this also includes DWM shadow and window style management.

`hook::supportsBorderless()` (`<hiyui/platform/window_hook.h>`) queries whether the current platform supports native borderless windows; check the creation result with `Window::isBorderless()`.

## Sizing

`width` and `height` describe the content area size. In borderless mode, the title bar and application menu bar heights are added on top of `height`, so the actual window height is greater than `height`.
