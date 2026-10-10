---
title: "ContextMenu"
---

# ContextMenu <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/context_menu.h>`

**命名空间：** `hiyui`

右键上下文菜单，静态工具类

非 `Widget` 子类，通过静态方法 show/close 控制。

## 静态方法

### open

```cpp
static bool open(const std::vector< ContextMenuItem > &items, int32_t x, int32_t y, Widget &screen, Widget *owner=nullptr, PopupMode mode=PopupMode::Inline, int32_t maxHeight=0, std::function< void()> closed={})
```

打开菜单并复制条目；关闭时通知一次，回调可重新打开菜单。

| 参数 | 说明 |
|---|---|
| `x` | 所在屏幕的物理像素坐标。 |
| `y` | 所在屏幕的物理像素坐标。 |
| `closed` | 关闭通知，创建失败时不调用。 |


**返回值：** 创建成功为 true；空条目或失效屏幕返回 false。

### close

```cpp
static void close(Widget &screen)
```

关闭指定屏幕上的内嵌或窗口菜单，重复调用无操作。

### show

```cpp
static void show(const std::vector< ContextMenuItem > &items, int32_t x, int32_t y, lv_obj_t *screen, lv_obj_t *owner=nullptr, PopupMode mode=PopupMode::Inline, int32_t maxHeight=0)
```

在指定位置弹出上下文菜单

| 参数 | 说明 |
|---|---|
| `items` | 菜单项列表，支持递归子菜单 |
| `x` | 弹出 X 坐标，屏幕绝对坐标 |
| `y` | 弹出 Y 坐标，屏幕绝对坐标 |
| `screen` | 所在屏幕对象 |
| `owner` | 触发菜单的对象，传递给 action 回调，可为 nullptr |
| `mode` | 弹出模式，无窗口管理器时强制 Inline |
| `maxHeight` | 面板高度上限，画布像素；0 时 Inline 取屏幕高度、 `Window` 取屏幕工作区高度的 70，正值按屏幕尺寸钳制 |

### showAtScreen

```cpp
static void showAtScreen(const std::vector< ContextMenuItem > &items, int32_t screenX, int32_t screenY, int32_t maxHeight=0)
```

在屏幕坐标弹出独立顶级窗口菜单

创建无父独立窗口承载菜单，不依赖任何已有窗口可见，用于系统托盘等脱离主窗口 的场景。坐标使用 SDL 桌面坐标，菜单按屏幕工作区边缘调整位置。



| 参数 | 说明 |
|---|---|
| `items` | 菜单项列表 |
| `screenX` | SDL 桌面坐标 X |
| `screenY` | SDL 桌面坐标 Y |
| `maxHeight` | 面板高度上限，画布像素；0 使用屏幕工作区高度的 70， 正值按屏幕工作区钳制 |

### close

```cpp
static void close(lv_obj_t *screen)
```

关闭指定屏幕上的上下文菜单

| 参数 | 说明 |
|---|---|
| `screen` | 所在屏幕对象 |

### closeAll

```cpp
static void closeAll()
```

关闭全部窗口模式菜单链

含托盘菜单与 `Window` 模式菜单；Inline 会话仍由 close(screen) 关闭。
