---
title: 无边框窗口
---

# 无边框窗口

无边框模式去掉系统标题栏和边框，创建内容区和自绘 `TitleBar`。

```cpp
auto &window = createWindow({
    .title = "Player",
    .width = 900,
    .height = 560,
    .borderless = true,
    .shadow = true,
});
```

`Window::root()` 始终挂到内容区，应用代码不处理标题栏占用的空间。

## 标题栏

`WindowProps::titleBar`（`TitleBarProps`）控制标题栏高度、文字、图标、按钮布局和窗口按钮。标题栏按钮连接到窗口的最小化、最大化、还原和关闭操作。字段列表见组件的 `TitleBarProps` 定义（`<hiyui/widget/title_bar.h>`）。

`layout` 决定按钮位置和标题对齐，默认 `TitleBarLayout::PlatformDefault` 由 Window 按当前平台选择。`Right` 将标题放在左侧、Min/Max/Close 放在右侧；`Left` 将 Close/Min/Max 放在左侧，图标与标题整体居中。

`buttonStyle` 决定按钮外观，默认 `TitleBarButtonStyle::PlatformDefault`。

| 值 | 说明 |
|---|---|
| `PlatformDefault` | Apple 平台的 Left 布局使用交通灯，其余使用普通按钮 |
| `Standard` | 在所有平台使用普通窗口按钮 |
| `MacOS` | 在所有平台使用交通灯按钮 |

在支持无边框窗口的宿主上指定 macOS 自绘外观：

```cpp
auto &window = createWindow({
    .title = "Preview",
    .borderless = true,
    .titleBar = {.layout = TitleBarLayout::Left,
                 .buttonStyle = TitleBarButtonStyle::MacOS},
});
```

这些配置只影响自绘标题栏；有系统边框的窗口由当前操作系统绘制外框。XML 创建窗口使用 `titleBarLayout` 和 `titleBarButtonStyle`，见 [XML 窗口](/xml/quick-start#xml-窗口)。

## 应用菜单栏

菜单项通过运行时方法 `Window::menu(items)` 设置，参数为 `std::vector<MenuBarItem>`；重复调用整体替换菜单项，空列表清除菜单。`WindowProps::menuBar`（`MenuBarProps`）控制菜单栏高度和配色。菜单仅 borderless 桌面窗口生效，其他窗口静默忽略。

- Windows/Linux：菜单栏渲染于标题栏下方，点击顶级项弹出下拉；首次安装菜单使窗口总高增加菜单栏高度，清除时复原。
- macOS：窗口内不显示菜单栏，窗口高度不包含菜单栏；`menu()` 将菜单安装到系统菜单栏，位于系统应用菜单之后、Window 菜单之前。

macOS 原生菜单行为：

- 菜单项支持文本、分隔线、禁用态、多级子菜单、`iconCodepoint` 字体图标和 `accelerator` 快捷键。
- `accelerator` 中 `primary`（或 `meta`）映射为 Command 键，`ctrl` 映射为 Control 键。例如 `{.sdlKey = 'n', .primary = true}` 显示并触发 ⌘N。
- 下拉项的 `shortcut` 展示串和 `iconSrc` 忽略。
- 重复调用 `menu()` 整体替换自定义菜单；窗口销毁时移除安装的菜单，系统应用菜单（About、Hide、⌘Q 退出）与 Window 菜单保留。
- 应用名与 Dock 图标读取应用包 Info.plist（`CFBundleName`/`CFBundleIconFile`）；非 bundle 的裸可执行文件使用进程名与系统默认图标。

## 桌面行为

无边框窗口的拖动、边缘缩放、最大化和 DPI 变化由原生窗口 Hook 与 SDL hit test 处理；Windows 上还包括 DWM 阴影和窗口样式管理。

`hook::supportsBorderless()`（`<hiyui/platform/window_hook.h>`）查询当前平台是否支持原生无边框；创建结果通过 `Window::isBorderless()` 检查。

## 尺寸

`width` 和 `height` 表示内容区尺寸。borderless 模式下，标题栏与应用菜单栏高度在 `height` 基础上叠加，窗口实际高度大于 `height`。
