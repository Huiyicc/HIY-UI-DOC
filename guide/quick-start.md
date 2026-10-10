---
title: 快速开始
---

# 快速开始

## 环境

- CMake 3.20 或更高版本
- 支持 C++20 的编译器
- 平台依赖：桌面端依赖 SDL3，由构建脚本从仓库子模块编译

首次获取仓库后初始化子模块，LVGL、SDL3 等第三方库以 Git 子模块形式存放在 `third_party`。

```bash
git submodule update --init --recursive
```

## 最小应用

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

`run()` 先调用 `setup()` 构建界面，再进入主循环；调用 `quit()` 或关闭全部窗口后返回。`Window::root()` 接收一个组件树，挂载后控件生命周期由窗口管理，已绑定的 `Ref` 保持有效。

## 构建组件图库

```bash
cmake -S test -B build
cmake --build build --target demo_component_gallery
```

多配置生成器（Visual Studio、Xcode）还需传入 `--config Debug` 或 `--config Release`。可执行文件位置由生成器和构建类型决定。

组件图库展示全部组件页面。入口代码位于 `test/demo/component_gallery/main.cpp`，每个组件页面单独存放在 `pages` 子目录。

跨端页面的任务复用、布局规则和精简组合见 [跨端任务与布局](/guide/cross-platform)。完整设备页与独立精简入口见 [设备任务示例](/build/cpp-gallery#设备任务示例)。

## 无障碍构建

`HIYUI_ENABLE_ACCESSIBILITY` 控制是否包含系统无障碍后端。

| 平台与后端 | 默认值 | 系统支持 |
| --- | --- | --- |
| Windows + SDL | `ON` | Windows UI Automation |
| macOS + SDL | `ON` | macOS 无障碍服务与 VoiceOver |
| 其他组合 | `OFF` | 无系统无障碍后端，设置为 `ON` 时 CMake 配置报错 |

后端为 SDL 且系统为 Windows 或 macOS 时该选项默认开启；需要显式指定时使用以下命令。

```bash
cmake -S test -B build -DHIYUI_BACKEND=SDL -DHIYUI_ENABLE_ACCESSIBILITY=ON
```

此选项是库的编译选项，对 C API 应用同样生效。组件名称与说明的设置见 [Widget 提示与无障碍文案](/core/widget#提示与无障碍文案)。

## 应用目标

项目使用 CMake 集成时，链接 `hiyui-static`，该目标为静态库。

```cmake
add_subdirectory(third_party/hiyui)

add_executable(my_app main.cpp)
target_link_libraries(my_app PRIVATE hiyui-static)
```

图标字体随库内置，链接 `hiyui-static` 后组件图标直接渲染。自定义图标的接入方式见仓库根目录的 `BUILD.md`。
