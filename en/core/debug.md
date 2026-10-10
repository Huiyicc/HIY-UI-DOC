---
title: Debug Tools
---

# Debug Tools

Debug features are enabled at build time with CMake options and are off by default. Widget debug outlines, the performance monitor, and the memory monitor have independent switches.

## Build options

| CMake option | Default | Description |
| --- | --- | --- |
| `HIYUI_DEBUG_OUTLINE` | `OFF` | Compiles widget debug outlines |
| `HIYUI_DEBUG_PERF` | `OFF` | Compiles the performance monitor (FPS, render time, and CPU usage) |
| `HIYUI_DEBUG_MEM` | `OFF` | Compiles the process memory monitor (RSS and peak) |

With an option off, the related code does not enter the build artifacts and the corresponding runtime API is a no-op.

```sh
cmake -B build -DHIYUI_DEBUG_OUTLINE=ON -DHIYUI_DEBUG_PERF=ON -DHIYUI_DEBUG_MEM=ON
```

On Android, enable them through the following keys in `android/local.properties`:

```properties
hiyui.debugOutline=true
hiyui.debugPerf=true
hiyui.debugMem=true
```

`HIYUI_DEBUG_PERF` integrates with the LVGL `LV_USE_PERF_MONITOR`; in WebAssembly builds `LV_USE_SYSMON` is 0 and the option has no effect. `HIYUI_DEBUG_MEM` does not depend on the LVGL monitor configuration and also has no effect in WebAssembly builds.

## Widget debug outline

With `HIYUI_DEBUG_OUTLINE` enabled, calling `setComponentOutline(true)` draws a 1 px red outline around all widgets, including overlays.

```cpp
hiyui::setComponentOutline(true);
```

`Application::run()` reads the `DEBUG` environment variable at startup and enables widget outlines automatically when the value is `1`.

```sh
DEBUG=1 ./app
```

Toggling the switch at runtime makes the outlines appear or disappear; when off, they no longer participate in drawing.

`setXmlDebugOutline(bool)` and `xmlDebugOutline()` are aliases whose behavior matches `setComponentOutline()` and `componentOutline()` respectively.

## Performance and memory monitors

With `HIYUI_DEBUG_PERF` or `HIYUI_DEBUG_MEM` enabled, `Application::run()` shows the corresponding monitor in a corner of the default screen at startup; no runtime call is needed.

- The performance monitor appears in the bottom-right corner and shows FPS, render time, and CPU usage. Windows and desktop Linux read system-wide CPU; Android reads the process CPU, where a single fully loaded core counts as 100% and multiple simultaneously fully loaded cores are clamped to 100%.
- The memory monitor appears in the bottom-left corner and shows the process resident memory (RSS) and the runtime peak, refreshed every 300 ms; it displays `RSS n/a` when the platform cannot read it.

Both monitors do not respond to environment variables or runtime switches.

## API

| Function | Returns | Description |
| --- | --- | --- |
| `setComponentOutline(bool enabled)` | `void` | Enables or disables widget debug outlines; no-op when `HIYUI_DEBUG_OUTLINE` is off |
| `componentOutline()` | `bool` | Returns the current switch state; `false` when not enabled at compile time |

Declarations are in `<hiyui/misc/debug.h>`.

## Related pages

- [Application](/en/core/application)
