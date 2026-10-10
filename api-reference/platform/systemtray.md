---
title: "SystemTray"
---

# SystemTray <Badge type="info" text="类" />

**头文件：** `#include <hiyui/platform/system_tray.h>`

**命名空间：** `hiyui`

系统托盘，RAII 持有

通过 `create()` 创建，绑定一个宿主 display。菜单使用宿主 display 的字体和缩放， 弹出菜单不改变宿主窗口的显示状态。


菜单在 macOS 为系统原生菜单栏菜单，其余平台复用 ContextMenu，继承主题、 DPI 与动画。托盘图标为原生资源，不随 LVGL 主题变化。

## 静态方法

### create

```cpp
static std::unique_ptr< SystemTray > create(lv_display_t *hostDisp, TrayProps props={})
```

创建托盘

| 参数 | 说明 |
|---|---|
| `hostDisp` | 宿主 display；销毁后托盘菜单不再弹出 |
| `props` | 托盘属性 |


**返回值：** hostDisp 无效或无法取宿主窗口时返回 nullptr； 平台无系统托盘时返回 `valid()`==false 的对象，所有方法静默无效

### create

```cpp
static std::unique_ptr< SystemTray > create(lv_display_t *hostDisp, const ImageBuffer &icon, TrayProps props={})
```

创建托盘并使用自定义像素图标

icon 须为有效 ARGB8888 缓冲，否则按无图标创建；创建期拷贝像素， 调用结束后不借用缓冲。



| 参数 | 说明 |
|---|---|
| `hostDisp` | 宿主 display |
| `icon` | 自定义图标像素 |
| `props` | 托盘属性，icon 与 iconSrc 字段被本重载覆盖 |


**返回值：** 语义同 `create(lv_display_t*, TrayProps)`

### create

```cpp
static std::unique_ptr< SystemTray > create(Window &window, TrayProps props={})
```

创建托盘，绑定 window 所属 display

| 参数 | 说明 |
|---|---|
| `window` | 宿主窗口 |
| `props` | 托盘属性 |


**返回值：** 语义同 `create(lv_display_t*, TrayProps)`

### create

```cpp
static std::unique_ptr< SystemTray > create(Window &window, const ImageBuffer &icon, TrayProps props={})
```

创建托盘，绑定 window 所属 display

| 参数 | 说明 |
|---|---|
| `window` | 宿主窗口 |
| `props` | 托盘属性 |


**返回值：** 语义同 `create(lv_display_t*, TrayProps)`

| 参数 | 说明 |
|---|---|
| `icon` | 自定义图标像素，须为有效 ARGB8888 缓冲 |

## 公开方法

### valid

```cpp
bool valid() const
```

平台是否支持且创建成功

### onLeftClick

```cpp
SystemTray & onLeftClick(std::function< void(int32_t, int32_t)> f)
```

设置左键单击回调

| 参数 | 说明 |
|---|---|
| `f` | 签名 void(screenX, screenY)，坐标使用 SDL 桌面坐标 |

### onRightClick

```cpp
SystemTray & onRightClick(std::function< void(int32_t, int32_t)> f)
```

设置右键单击回调，坐标语义同 onLeftClick

### onDoubleClick

```cpp
SystemTray & onDoubleClick(std::function< void(int32_t, int32_t)> f)
```

设置左键双击回调，坐标语义同 onLeftClick

### onMiddleClick

```cpp
SystemTray & onMiddleClick(std::function< void(int32_t, int32_t)> f)
```

设置中键单击回调，坐标语义同 onLeftClick

### onMessageClick

```cpp
SystemTray & onMessageClick(std::function< void()> f)
```

设置气泡通知点击回调

### setMenu

```cpp
SystemTray & setMenu(std::vector< ContextMenuItem > items)
```

设置托盘菜单

macOS 弹出系统原生菜单，文本、分隔线、禁用态、多级子菜单、iconCodepoint 字体图标与 accelerator 快捷键生效，iconSrc 与 shortcut 展示串忽略。 Linux 菜单由桌面宿主渲染，文本、分隔线、禁用态、多级子菜单、 iconCodepoint 图标（16px 中性灰渲染）与 action 回调生效，action 参数 传入 nullptr；accelerator 仅作提示，是否显示由宿主决定，图标位置由 宿主布局决定，iconSrc 与 shortcut 展示串忽略；宿主未渲染菜单而调用 `ContextMenu` 时回落弹出 LVGL ContextMenu。其余平台右键触发时弹出 LVGL ContextMenu。 库接管弹菜单的触发事件不再派发到 onRightClick 回调。



| 参数 | 说明 |
|---|---|
| `items` | 菜单项 |

### setMenuMaxHeight

```cpp
SystemTray & setMenuMaxHeight(int32_t maxHeight)
```

设置托盘菜单面板高度上限

| 参数 | 说明 |
|---|---|
| `maxHeight` | 高度上限，画布像素；0 使用屏幕工作区高度的 70， 正值按屏幕工作区钳制 |

### setIcon

```cpp
void setIcon(TrayIcon icon, const lv_image_dsc_t *src=nullptr)
```

运行时更换图标，None 移除当前图标

### setIcon

```cpp
void setIcon(TrayIcon icon, const ImageBuffer &src)
```

运行时更换图标，像素在调用期拷贝

Custom 须提供有效 ARGB8888 缓冲，否则不改变当前图标；其余来源忽略 src，语义同 `setIcon(TrayIcon, const lv_image_dsc_t*)`。



| 参数 | 说明 |
|---|---|
| `icon` | 图标来源 |
| `src` | 自定义图标像素 |

### setTooltip

```cpp
void setTooltip(const char *text)
```

运行时更换 UTF-8 提示文本

### showMessage

```cpp
void showMessage(const char *title, const char *text, TrayMessageIcon icon=TrayMessageIcon::Info, uint32_t timeoutMs=10000)
```

显示气泡通知

Win32、macOS 与 Linux 使用系统原生气泡，其余平台静默无效。macOS 首次调用 时向系统请求通知授权，未授权或裸可执行无 bundle 时静默无效。标题与 正文超长时截断，实际显示时长由系统调整。用户设置关闭气泡时静默无效。



| 参数 | 说明 |
|---|---|
| `title` | 标题，UTF-8，可为 nullptr |
| `text` | 正文，UTF-8，可为 nullptr |
| `icon` | 气泡图标 |
| `timeoutMs` | 期望显示时长，毫秒；0 使用默认 10000 |
