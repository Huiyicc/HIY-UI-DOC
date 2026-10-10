---
title: Overview
---

# Overview

Hiy-UI provides a C++20 interface on top of the LVGL object model. Control objects are still managed and rendered by LVGL; the library handles property aggregation, widget composition, event bridging, theme refresh, and platform differences.

## Supported backends

| Backend | Target platforms |
| --- | --- |
| `SDL` | Windowed applications on Windows, Linux, macOS, and Android |
| `FBDEV` | Linux framebuffer devices |
| `EMSCRIPTEN` | Browser applications |
| `CUSTOM` | Targets where the integrator provides the platform implementation |

The `EMBEDDED` backend for MCU/RTOS targets is not available yet. Dependencies and configuration of each backend are described in [Build Options](/en/build/options).

## Main directories

| Path | Content |
| --- | --- |
| `include/hiyui` | Public C++ headers |
| `src` | Library implementation |
| `binding/c` | C interface |
| `test/demo/component_gallery` | Component gallery |
| `docs` | Hand-written documentation site |
| `docs/api-reference` | Doxygen-generated content |

## Core objects

- `Application`: application entry point; manages the run loop and window lifecycle.
- `Window`: a window; provides the root container mount point.
- `Widget`: widget base class; wraps an LVGL control object `lv_obj_t`.
- `Props`: creation property struct of a widget. Pure POD; all fields have defaults and support aggregate initialization.
- `Container`: container base class; declares parent-child relations through `operator()`.
- `Ref<T>`: a reference to a mounted widget; does not own the widget.

Next: [Quick Start](/en/guide/quick-start).
