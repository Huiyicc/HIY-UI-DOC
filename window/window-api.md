---
title: 窗口创建与配置
---

# 窗口创建与配置

窗口由 `Application::createWindow()` 创建并持有，在派生类的 `setup()` 中调用。

```cpp
auto &window = createWindow({
    .title = "Editor",
    .width = 1024,
    .height = 720,
});

window.root(EditorView{});
```

## WindowProps

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `const char *` | `"Hiy-UI"` | UTF-8 标题 |
| `width` | `int` | `800` | 窗口宽度，单位像素 |
| `height` | `int` | `600` | 内容区高度，单位像素；borderless 时标题栏与菜单栏在此基础上叠加 |
| `borderless` | `bool` | `false` | 无边框模式，见[无边框窗口](/window/borderless) |
| `resizable` | `bool` | `true` | 允许拖拽改变尺寸 |
| `shadow` | `bool` | `true` | 无边框窗口阴影，仅无边框模式生效 |
| `x`, `y` | `int` | `-1` | 初始位置，单位像素；`-1` 表示居中 |
| `titleBar` | `TitleBarProps` | `{}` | 自绘标题栏属性，仅无边框模式生效 |
| `enterAnimation` | `WindowAnimation` | `{}` | 入场动画 |
| `exitAnimation` | `WindowAnimation` | `{}` | 退场动画 |
| `menuBar` | `MenuBarProps` | `{}` | 应用菜单栏样式，仅 borderless 桌面端生效 |
| `initiallyHidden` | `bool` | `false` | 桌面端创建及挂载后保持隐藏，直到显式调用 `show()`；其他平台忽略 |
| `background` | `WindowBackground` | `{}` | 窗口背景，覆盖标题栏和内容区 |

## 根组件

`root(Widget&&)` 将组件树挂载到窗口内容区并填满。控件生命周期由窗口管理，已绑定的 `Ref` 保持关联。

## 控制

`title()`、`size()`、`position()` 和 `resizable()` 修改窗口属性。`size()` 的高度参数为内容区高度，borderless 时标题栏与菜单栏在此基础上叠加。

`show()` 显示窗口，`hide()` 隐藏窗口，`close()` 启动关闭流程。启用退场动画时，对象在动画结束后销毁。桌面窗口还支持 `minimize()`、`maximize()` 和 `restore()`。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `onCloseRequest(handler)` | `Window &` | 绑定关闭请求回调，回调接收 `WindowCloseEvent &`；重复绑定追加，任一回调调用 `cancel()` 即保留窗口 |
| `requestBack()` | `bool` | 同步处理浮层、输入取消、局部区域和页面历史；已消费为 `true`，根页无处理时返回 `false` 且不退出应用 |

`requestBack()` 的完整处理顺序见[窗口导航](/window/multi-window#返回请求)。

关闭前需要确认时，先在回调中 `cancel()`，确认完成后再次调用 `close()`：

```cpp
window.onCloseRequest([](WindowCloseEvent &request) { request.cancel(); });
```

## 标题国际化

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `title(const char *)` | `Window &` | 复制 UTF-8 标题并取消翻译绑定；`nullptr` 视为空标题 |
| `title(const LocalizedText &)` | `Window &` | 复制文案描述，切换语言时更新系统窗口标题和自绘标题栏 |

为已创建的窗口绑定标题：

```cpp
window.title(tr("app.window.title", "设置"));
```

注册语言包与切换语言见 [国际化](/core/i18n)。

## 窗口背景

`WindowBackground` 通过 `WindowProps::background` 设置，也可在运行时替换。

创建使用系统背景模糊的窗口：

```cpp
auto &window = createWindow({
    .title = "Editor",
    .background = {.mode = WindowBackgroundMode::SystemBlur},
});
```

### WindowBackground

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `image` | `BgImage` | `{}` | 仅 `Content` 模式生效；`src` 为空时使用主题背景色 |
| `blur` | `Backdrop` | `{.opacity = 255}` | 仅窗口背景图片生效；`blurRadius` 为逻辑像素，`HIYUI_NONE_INT` 表示使用主题半径，`0` 表示显示原图 |
| `overlay` | `Overlay` | `{}` | 遮色及其 alpha；未设置时，图片和系统模糊使用主题的 `GlassTint` 与 `WindowTintOpacity`，透明模式不遮色 |
| `mode` | `WindowBackgroundMode` | `Content` | 背景来源 |

图片文件路径由窗口复制。图片描述符及其像素数据由调用方持有，直到背景被替换或窗口销毁。哨兵值定义见[常量与哨兵值](/core/constants)。

### WindowBackgroundMode

| 值 | 说明 |
| --- | --- |
| `Content` | 使用主题背景色或窗口内图片 |
| `Transparent` | 透出窗口后的内容；不支持时使用主题背景色 |
| `SystemBlur` | 系统模糊窗口后的内容；不支持或启用失败时使用不透明主题背景色 |

`Transparent` 和 `SystemBlur` 仅桌面窗口支持，其他平台使用 `Content`。这两种模式忽略 `image` 和 `blur`；系统模糊强度由操作系统控制。

系统模糊在以下环境可用：启用 Aero 桌面合成的 Windows 7、提供背景模糊能力的 Windows 10 和 Windows 11、macOS、支持背景模糊协议的 X11 合成器。Windows 8/8.1 和未启用 Aero 的 Windows 7 使用不透明主题背景色。Wayland 支持透明；选择系统模糊时使用不透明主题背景色。

### 运行时方法

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `background(WindowBackground)` | `Window &` | 替换背景并释放旧绘制资源；空配置恢复主题背景色；窗口创建失败、移出或已请求销毁时不生效 |
| `backgroundMode()` | `WindowBackgroundMode` | 返回实际采用的模式；创建失败或窗口移出后返回 `Content` |

背景随主题、DPI、窗口尺寸和窗口动画更新，不改变文字透明度。不透明组件覆盖其所在区域的窗口背景。系统合成器可能因系统设置或窗口状态停止显示模糊，`backgroundMode()` 不保证模糊始终可见。

运行时切换到透明背景，再恢复主题背景：

```cpp
window.background({.mode = WindowBackgroundMode::Transparent});
WindowBackgroundMode active = window.backgroundMode();
window.background({});
```

## 底层对象

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `display()` | `_lv_display_t *` | LVGL display |
| `screenActive()` | `lv_obj_t *` | 本窗口的活动 screen，包括暂未显示的页面；窗口创建失败或移出后返回 `nullptr` |
| `sdlWindow()` | `SDL_Window *` | SDL 窗口；非 SDL 后端为 `nullptr` |
