---
title: Platform Abstraction Layer
---

# Platform Abstraction Layer

The PAL wraps display, input, clipboard, the run loop, and platform capabilities.

## Backends

The platform backend is selected by `HIYUI_BACKEND`, and the rendering method by `HIYUI_RENDER_BACKEND`. OpenGL is a rendering path, not a standalone operating system platform backend.

| Backend | Targets and boundaries |
|---|---|
| `SDL` | Windows, Linux, macOS, and Android; window and input capabilities vary with the target platform |
| `FBDEV` | Linux framebuffer/evdev; only AUTO or SW rendering is allowed, bitmap fonts are used by default |
| `EMSCRIPTEN` | Browser host; environment capabilities that are not provided remain unknown |
| `EMBEDDED` | MCU/RTOS integration is incomplete; configuration fails with an error and requires a toolchain, board environment, PAL, display/input, and font resources |
| `CUSTOM` | The integrator provides the platform implementation; this option does not mean an MCU/RTOS backend is available |

For dependencies and configuration constraints, see [Build Options](/en/build/options).

## Interface

| Function | Result |
| --- | --- |
| `pal::display()` | The current `DisplayBackend` |
| `pal::input()` | The current `InputBackend` |
| `pal::caps()` | A `SystemCaps` capability snapshot |
| `pal::run()` | Platform event loop; repeatedly calls the given callback and exits when the callback returns false |
| `pal::setClipboardText()` | Writes the UTF-8 clipboard; silently ignored on platforms without support |
| `pal::getClipboardText()` | Reads the UTF-8 clipboard; returns an empty string when unsupported or when the content is empty |

## Capability queries

`SystemCaps` contains filesystem, GPU, touch, window manager, render backend, screen size, and DPI. Window transparency capability is queried through `DisplayBackend::surfaceCapabilities()`.

Check the corresponding capabilities and function pointers before calling platform-specific features. The FBDEV and Emscripten backends have no window manager and provide no desktop operations such as minimize or maximize.

Page layout queries the local content size, the safe area of the owning window, and input capabilities through `layoutEnvironment(widget)`, and subscribes to changes through `onEnvironmentChange()`. Unreported capabilities stay `Unknown`; when the safe area or keyboard occlusion is unknown, avoidance must not be treated as complete. For fields, units, and validity, see [Responsive Layout](/en/core/responsive).

## Scaling

`systemDpiScale()` is the system DPI (system DPI divided by 96), `uiScale()` is the application screen adaptation, and `dpiScale()` is their product. `scaled()` and `scaledF()` convert logical sizes to canvas sizes.

`queryScreenInfo()` returns the monitor resolution, work area, and device pixel ratio. Applications can use this information in `resolveContentScale()`.
