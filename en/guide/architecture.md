---
title: Architecture
---

# Architecture

## Layers

| Layer | Responsibility |
| --- | --- |
| Application | Initialization, run loop, windows, and navigation |
| PAL | display, input, clipboard, DPI, and backend events |
| Window | LVGL display, screen, and desktop window state |
| Widget | `lv_obj_t` lifecycle, styles, events, and queries |
| Components | Props, child objects, and widget behavior |
| Style | Style, StyleSet, Theme, Token, and transitions |

## Lifecycle

A widget wrapper can be created on the stack or held as a member object. After a widget is mounted to a parent container, the underlying object enters the LVGL object tree and the wrapper is no longer responsible for deleting it. Use `Ref<T>` to access a widget after mounting.

## Refresh paths

- Property methods update the corresponding LVGL object directly.
- `setTheme()` refreshes registered theme bindings.
- DPI changes recompute lengths, fonts, and layout.
- Custom-drawn widgets receive `DrawCtx` through LVGL draw events.

## Backends

PAL exposes a consistent display and input interface implemented by platform backends. The platform backend is `SDL`, `FBDEV`, `EMSCRIPTEN`, or `CUSTOM`; rendering is handled by the render backend (software, OpenGL ES, SDL texture). Platform differences are exposed through capability queries; query the capability before calling a platform-specific feature. See [Platform Abstraction Layer](/en/advanced/pal).
