---
title: 系统托盘
---

# 系统托盘

SystemTray 在桌面平台的通知区或菜单栏放置应用图标，接收点击事件并弹出菜单。托盘图标为原生资源，不随 LVGL 主题变化。

## 头文件

```cpp
#include <hiyui/platform/system_tray.h>
```

## 最小示例

```cpp
auto &win = createWindow({.title = "App", .width = 960, .height = 640});

auto tray = SystemTray::create(win, {.tooltip = "App"});
tray->setMenu({
    {.text = "显示",
     .iconCodepoint = HIYUI_ICON_VISIBILITY,
     .action = [](MenuContext &) {}},
    {.separator = true},
    {.text = "退出",
     .action = [](MenuContext &) {}},
});
```

托盘创建时绑定一个宿主 display。菜单使用该 display 的字体和缩放；宿主 display 销毁后不再弹出菜单。菜单窗口不显示在任务栏或窗口列表中。

## Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `tooltip` | `const char *` | `nullptr` | 悬停提示，UTF-8，创建期间读取 |
| `icon` | `TrayIcon` | `TrayIcon::Self` | 图标来源 |
| `iconSrc` | `const lv_image_dsc_t *` | `nullptr` | ARGB8888 图像，仅 `Custom`，创建期间读取 |
| `iconSize` | `int` | `0` | 图标边长，物理像素；`0` 为平台当前小图标尺寸 |

TrayIcon 取值：

| 值 | 说明 |
| --- | --- |
| `None` | 不显示图标 |
| `Self` | 程序自身图标 |
| `Custom` | `iconSrc` 指定的 ARGB8888 图像 |

## 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `create(host, props)` | `std::unique_ptr<SystemTray>` | 创建托盘；`host` 为 display 或 `Window`，另有传入 `ImageBuffer` 自定义图标的重载。host 无效或无法取宿主窗口返回 `nullptr`，平台无托盘返回 `valid()==false` 的对象 |
| `valid()` | `bool` | 平台支持且创建成功 |
| `onLeftClick(f)` | `SystemTray &` | 左键单击回调 |
| `onRightClick(f)` | `SystemTray &` | 右键单击回调 |
| `onDoubleClick(f)` | `SystemTray &` | 左键双击回调 |
| `onMiddleClick(f)` | `SystemTray &` | 中键单击回调 |
| `onMessageClick(f)` | `SystemTray &` | 气泡通知点击回调 |
| `setMenu(items)` | `SystemTray &` | 设置托盘菜单，`items` 为 `std::vector<ContextMenuItem>` |
| `setMenuMaxHeight(maxHeight)` | `SystemTray &` | 菜单面板高度上限，画布像素；`0` 使用屏幕工作区高度的 70% |
| `setIcon(icon, src)` | `void` | 运行时更换图标；`None` 移除当前图标，另有传入 `ImageBuffer` 的重载 |
| `setTooltip(text)` | `void` | 运行时更换提示 |
| `showMessage(title, text, icon, timeoutMs)` | `void` | 显示系统气泡通知；`icon` 默认 `TrayMessageIcon::Info`，`timeoutMs` 单位毫秒，`0` 使用默认 10000 |

点击回调签名为 `void(int32_t screenX, int32_t screenY)`，坐标使用 SDL 桌面坐标；`onMessageClick` 回调无参数。`ContextMenuItem` 结构定义见 `<hiyui/widget/context_menu.h>`。

## 菜单触发

`setMenu` 注册的菜单由右键触发。库接管弹出菜单的触发事件，不再派发到 `onRightClick` 回调。左键单击和左键双击分别派发到已设置的回调。弹出菜单不改变宿主窗口的显示状态。

菜单渲染方式按平台区分：

- macOS：系统原生菜单。菜单项的文本、分隔线、禁用态、多级子菜单、`iconCodepoint` 字体图标与 `accelerator` 快捷键生效；`accelerator.primary` 映射为 Command 键并显示为系统快捷键标注；`iconSrc` 与 `shortcut` 展示串忽略。
- Linux：菜单经 `com.canonical.dbusmenu` 由桌面环境（GNOME、KDE 等的 StatusNotifier 宿主）渲染。文本、分隔线、禁用态、多级子菜单、`iconCodepoint` 图标（16px 中性灰渲染）与 `action` 回调生效，`action` 参数传入无 owner 的上下文；`accelerator` 仅作提示，是否显示由宿主决定；菜单项图标位置由宿主布局决定；`iconSrc` 与 `shortcut` 展示串忽略，按键触发不由此接管。宿主未渲染菜单时回落弹出 LVGL ContextMenu。
- 其余平台：右键触发时弹出 LVGL ContextMenu，继承主题、DPI 与动画。

## 注意事项

:::warning
宿主窗口隐藏时仍可弹出托盘菜单。显示或隐藏宿主窗口由点击回调或菜单项动作处理。
:::

:::warning
Linux 通过 StatusNotifierItem 接入桌面。会话总线上无 StatusNotifierWatcher（例如未安装 GNOME 的 AppIndicator 扩展）时，`create` 返回 `valid()==false` 的对象，所有方法静默无效。
:::

## 相关页面

- [多窗口](/window/multi-window)
