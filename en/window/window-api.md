---
title: Window Creation and Configuration
---

# Window Creation and Configuration

Windows are created and owned by `Application::createWindow()`, called in the derived class's `setup()`.

```cpp
auto &window = createWindow({
    .title = "Editor",
    .width = 1024,
    .height = 720,
});

window.root(EditorView{});
```

## WindowProps

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `const char *` | `"Hiy-UI"` | UTF-8 title |
| `width` | `int` | `800` | Window width in pixels |
| `height` | `int` | `600` | Content area height in pixels; in borderless mode the title bar and menu bar are added on top of this value |
| `borderless` | `bool` | `false` | Borderless mode, see [Borderless Window](/en/window/borderless) |
| `resizable` | `bool` | `true` | Allows resizing by dragging |
| `shadow` | `bool` | `true` | Shadow for borderless windows; only takes effect in borderless mode |
| `x`, `y` | `int` | `-1` | Initial position in pixels; `-1` centers the window |
| `titleBar` | `TitleBarProps` | `{}` | Custom-drawn title bar properties; only takes effect in borderless mode |
| `enterAnimation` | `WindowAnimation` | `{}` | Enter animation |
| `exitAnimation` | `WindowAnimation` | `{}` | Exit animation |
| `menuBar` | `MenuBarProps` | `{}` | Application menu bar styling; only takes effect on borderless desktop platforms |
| `initiallyHidden` | `bool` | `false` | On desktop platforms the window stays hidden after creation and mounting until `show()` is called explicitly; ignored on other platforms |
| `background` | `WindowBackground` | `{}` | Window background, covering the title bar and the content area |

## Root widget

`root(Widget&&)` mounts the widget tree into the window content area and fills it. Widget lifetime is managed by the window; bound `Ref`s stay associated.

## Control

`title()`, `size()`, `position()`, and `resizable()` modify window properties. The height parameter of `size()` is the content area height; in borderless mode the title bar and menu bar are added on top of this value.

`show()` shows the window, `hide()` hides it, and `close()` starts the close sequence. When the exit animation is enabled, the object is destroyed after the animation finishes. Desktop windows also support `minimize()`, `maximize()`, and `restore()`.

| Method | Return | Description |
| --- | --- | --- |
| `onCloseRequest(handler)` | `Window &` | Binds the close request callback, which receives a `WindowCloseEvent &`; repeated binding appends handlers, and the window is kept if any callback calls `cancel()` |
| `requestBack()` | `bool` | Processes overlays, input cancellation, local areas, and page history synchronously; returns `true` when consumed, returns `false` and does not exit the application when the root page has nothing to handle |

The full processing order of `requestBack()` is described in [Window Navigation](/en/window/multi-window#back-request).

To confirm before closing, call `cancel()` in the callback first, then call `close()` again after confirmation completes:

```cpp
window.onCloseRequest([](WindowCloseEvent &request) { request.cancel(); });
```

## Title internationalization

| Method | Return | Description |
| --- | --- | --- |
| `title(const char *)` | `Window &` | Copies the UTF-8 title and removes the translation binding; `nullptr` is treated as an empty title |
| `title(const LocalizedText &)` | `Window &` | Copies the message description; on language switch, updates the system window title and the custom-drawn title bar |

Bind a title to a created window:

```cpp
window.title(tr("app.window.title", "设置"));
```

For registering language packs and switching languages, see [Internationalization](/en/core/i18n).

## Window background

`WindowBackground` is set through `WindowProps::background` and can also be replaced at runtime.

Create a window that uses system background blur:

```cpp
auto &window = createWindow({
    .title = "Editor",
    .background = {.mode = WindowBackgroundMode::SystemBlur},
});
```

### WindowBackground

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `image` | `BgImage` | `{}` | Only takes effect in `Content` mode; when `src` is empty, the theme background color is used |
| `blur` | `Backdrop` | `{.opacity = 255}` | Only takes effect on the window background image; `blurRadius` is in logical pixels, `HIYUI_NONE_INT` uses the theme radius, `0` shows the original image |
| `overlay` | `Overlay` | `{}` | Overlay color and its alpha; when unset, image and system blur use the theme `GlassTint` and `WindowTintOpacity`, and transparent mode applies no overlay |
| `mode` | `WindowBackgroundMode` | `Content` | Background source |

The image file path is copied by the window. The image descriptor and its pixel data are owned by the caller until the background is replaced or the window is destroyed. Sentinel values are defined in [Constants and Sentinel Values](/en/core/constants).

### WindowBackgroundMode

| Value | Description |
| --- | --- |
| `Content` | Uses the theme background color or an image inside the window |
| `Transparent` | Shows the content behind the window; uses the theme background color when unsupported |
| `SystemBlur` | Blurs the content behind the window with the system; uses the opaque theme background color when unsupported or when enabling fails |

`Transparent` and `SystemBlur` are supported on desktop windows only; other platforms use `Content`. Both modes ignore `image` and `blur`; the system blur strength is controlled by the operating system.

System blur is available in the following environments: Windows 7 with Aero desktop composition enabled, Windows 10 and Windows 11 with background blur capability, macOS, and X11 compositors that support a background blur protocol. Windows 8/8.1 and Windows 7 without Aero use the opaque theme background color. Wayland supports transparency; selecting system blur uses the opaque theme background color.

### Runtime methods

| Method | Return | Description |
| --- | --- | --- |
| `background(WindowBackground)` | `Window &` | Replaces the background and releases the old draw resources; an empty configuration restores the theme background color; has no effect when window creation failed, the window was removed, or destruction was requested |
| `backgroundMode()` | `WindowBackgroundMode` | Returns the mode actually in effect; returns `Content` after creation failure or removal |

The background updates with theme, DPI, window size, and window animation, and does not change text opacity. Opaque widgets cover the window background in their area. The system compositor may stop displaying blur due to system settings or window state; `backgroundMode()` does not guarantee the blur is always visible.

Switch to a transparent background at runtime, then restore the theme background:

```cpp
window.background({.mode = WindowBackgroundMode::Transparent});
WindowBackgroundMode active = window.backgroundMode();
window.background({});
```

## Underlying objects

| Method | Return | Description |
| --- | --- | --- |
| `display()` | `_lv_display_t *` | LVGL display |
| `screenActive()` | `lv_obj_t *` | The active screen of this window, including pages not yet shown; returns `nullptr` after creation failure or removal |
| `sdlWindow()` | `SDL_Window *` | SDL window; `nullptr` on non-SDL backends |
