---
title: Quick Start
---

# Quick Start

For building, packaging, and consuming prebuilt C++ SDKs, C SDKs, and Runtimes, see [SDK Packaging and Integration](/en/guide/sdk).

## Environment

- CMake 3.20 or later
- A compiler with C++20 support
- Platform dependencies: desktop platforms require SDL3, which the build scripts compile from the repository submodules

After cloning the repository for the first time, initialize the submodules; LVGL, SDL3, and other third-party libraries are Git submodules under `third_party`.

```bash
git submodule update --init --recursive
```

## Minimal application

```cpp
#include <hiyui/hiyui.h>

using namespace hiyui;

class DemoApp final : public Application {
  void setup() override {
    auto &window = createWindow("Demo", {640, 480});

    VBox root({.padding = 16, .gap = 8});
    root.init(window).fill();

    Label({.text = "Hiy-UI"}).init(root);
    Button({.text = "Close"}).init(root).onClick([this] { quit(); });

    window.root(std::move(root));
  }
};

int main() { return DemoApp{}.run(); }
```

`run()` first calls `setup()` to build the UI and then enters the main loop; it returns after `quit()` is called or all windows are closed. `Window::root()` takes a widget tree; after mounting, the control lifecycle is managed by the window, and bound `Ref`s remain valid.

## Building the component gallery

```bash
cmake -S test -B build
cmake --build build --target demo_component_gallery
```

Multi-config generators (Visual Studio, Xcode) also require `--config Debug` or `--config Release`. The executable location depends on the generator and build type.

The component gallery shows all widget pages. The entry code is in `test/demo/component_gallery/main.cpp`; each widget page is stored separately in the `pages` subdirectory.

Task reuse, layout rules, and compact compositions across devices are described in [Cross-Platform Tasks & Layout](/en/guide/cross-platform). The full device page and the standalone compact entry are described in [Device Task Example](/en/build/cpp-gallery#device-task-example).

## Accessibility build

`HIYUI_ENABLE_ACCESSIBILITY` controls whether the system accessibility backend is included.

| Platform and backend | Default | System support |
| --- | --- | --- |
| Windows + SDL | `ON` | Windows UI Automation |
| macOS + SDL | `ON` | macOS accessibility services and VoiceOver |
| Linux + SDL | `ON` | AT-SPI2; screen readers such as Orca |
| Other combinations | `OFF` | No system accessibility backend; setting `ON` fails the CMake configuration |

The option defaults to on when the backend is SDL and the system is Windows, macOS or Linux; to set it explicitly, use:

```bash
cmake -S test -B build -DHIYUI_BACKEND=SDL -DHIYUI_ENABLE_ACCESSIBILITY=ON
```

This option is a library build option and applies to C API applications as well. Setting widget names and descriptions is described in [Widget Hints & Accessibility Text](/en/core/widget#tooltips-and-accessibility-text).

## Application target

When integrating through CMake, link against `hiyui-static`, which is a static library.

```cmake
add_subdirectory(third_party/hiyui)

add_executable(my_app main.cpp)
target_link_libraries(my_app PRIVATE hiyui-static)
```

The icon font ships with the library; after linking `hiyui-static`, widget icons render directly. How to plug in custom icons is described in `BUILD.md` at the repository root.
