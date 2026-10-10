---
title: Application
---

# Application

`Application` initializes the platform backend and LVGL, manages windows, and runs the event loop (the main loop that continuously dispatches input and redraws the interface). Usage: derive a subclass, create windows and widgets in `setup()`, then call `run()` from `main()`.

```cpp
class App final : public hiyui::Application {
  void setup() override {
    auto &window = createWindow({
        .title = "Settings",
        .width = 800,
        .height = 600,
    });

    hiyui::Label status({.text = "Ready"});
    status.init(window.screenActive());
    window.root(std::move(status));
  }
};

int main() { return App{}.run(); }
```

## Lifecycle

`run()` calls `setup()` first, then enters the event loop. `setup()` runs once before the main loop starts.

`quit()` requests exiting the main loop. After `quit()` is called or all windows close, `run()` returns; it returns `0` on normal exit and `1` when FBDEV backend startup or event handling fails.

A process creates at most one `Application`.

## Windows

`createWindow()` creates a window and returns `Window&`; the window is owned and destroyed by `Application`. Use the title-and-size overload or pass a `WindowProps`.

`navigate(target)` opens the target window and records navigation history; `goBack()` returns to the previous window. The transition animation type is specified by `Transition`.

## Screen scaling

Derived classes can override `resolveContentScale(const ScreenInfo&)` to return a screen adaptation factor. The return value is clamped to `[1.0, 2.0]` and participates in size calculations before font loading and on every DPI or cross-screen change; a typical implementation derives it from the fraction of the screen width the window should occupy.

For the full signature see [Application API](/en/api-reference/core/application).
