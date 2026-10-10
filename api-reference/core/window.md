---
title: "Window"
---

# Window <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/window.h>`

**命名空间：** `hiyui`

窗口类，封装 SDL 窗口和 LVGL 显示

由 `Application::createWindow()` 创建，生命周期由 `Application` 管理。 提供标题、尺寸、位置控制以及组件树挂载能力。


Android 和 FBDEV 的窗口共享显示宿主，各自保留页面内容。 后续创建的共享页面等待 show 或 navigate，只有活动页面接收输入。 FBDEV 使用设备分辨率；显示创建失败抛出 std::runtime_error。 FBDEV 忽略尺寸、位置、窗口装饰和窗口进出动画设置。



**参见：** `Application::createWindow()`


**参见：** `WindowProps`

## 通用接口

### title

```cpp
Window & title(const char *title)
```

设置窗口标题

| 参数 | 说明 |
|---|---|
| `title` | UTF-8 字符串，调用时复制；nullptr 视为空标题。 |

### title

```cpp
Window & title(const LocalizedText &title)
```

绑定窗口标题，切换语言时同时更新系统标题与标题栏；普通标题取消绑定。

### size

```cpp
Window & size(int w, int h)
```

设置窗口尺寸

| 参数 | 说明 |
|---|---|
| `w` | 宽度，单位像素 |
| `h` | 高度，单位像素 |

### background

```cpp
Window & background(WindowBackground background)
```

替换窗口背景，传入空配置恢复主题底色。 重复调用释放旧绘制资源；窗口创建失败、移出或已请求销毁时不生效。 背景随主题、DPI、窗口尺寸和窗口动画更新，不改变文字透明度。 Transparent 和 SystemBlur 仅桌面窗口支持，其他平台采用 Content。

### backgroundMode

```cpp
WindowBackgroundMode backgroundMode() const
```

查询窗口采用的背景模式。 系统合成器可因设置或窗口状态停用模糊；本接口不保证模糊始终可见。

**返回值：** 创建失败或移出后返回 Content。

### close

```cpp
void close()
```

关闭窗口

派发关闭请求；未取消时播放退场动画后由 `Application` 销毁。 重复关闭或同一关闭回调内再次调用不产生额外请求。 允许关闭后，show 和 hide 不再改变关闭状态。

### requestBack

```cpp
bool requestBack()
```

同步请求返回，依次处理顶层浮层、输入取消、局部区域和当前页面历史。 无可返回内容时不关闭应用；关闭请求被取消仍视为已处理。

**返回值：** 已消费为 true；无处理、已关闭、未显示、非活动共享页面或重复进入为 false。

### onCloseRequest

```cpp
Window & onCloseRequest(F &&handler, EventHandle *handle=nullptr)
```

绑定关闭请求，回调接收 `WindowCloseEvent`&amp;。

重复绑定追加；任一回调取消即保留窗口。异步确认应先取消， 确认完成后再次调用 close。关闭窗口时绑定自动释放。 创建失败或移出后的窗口不绑定回调。
| 参数 | 说明 |
|---|---|
| `handle` | 可选解绑句柄。 |

## 桌面端窗口控制

### position

```cpp
Window & position(int x, int y)
```

设置窗口位置

| 参数 | 说明 |
|---|---|
| `x` | 屏幕 X 坐标，单位像素 |
| `y` | 屏幕 Y 坐标，单位像素 |

### menu

```cpp
Window & menu(std::vector< MenuBarItem > items)
```

设置应用菜单，仅 borderless 桌面窗口生效，其他窗口静默忽略

接管 items；重复设置替换全部菜单项并重建快捷键注册，空列表清除菜单。 macOS 安装原生应用菜单；其他平台菜单栏内嵌于标题栏下方，首次安装将 窗口总高增加 `WindowProps::menuBar` 的高度，清除时复原。窗口销毁时菜单 与快捷键随窗口清理。



| 参数 | 说明 |
|---|---|
| `items` | 顶级菜单项列表 |

## 状态查询

### titleBarHeight

```cpp
int titleBarHeight() const
```

查询自绘标题栏逻辑高度

**返回值：** 标题栏高度，单位主题逻辑像素；非 borderless 时为 `TitleBarProps` 默认值

## 内部访问

### screenActive

```cpp
lv_obj_t * screenActive() const
```

获取本窗口的屏幕对象，包括暂未显示的页面。

**返回值：** 借用的 LVGL 屏幕指针；窗口创建失败或移出后返回 nullptr。

### rootParent

```cpp
lv_obj_t * rootParent() const
```

获取根组件树的挂载父对象

**返回值：** 无边框窗口返回标题栏下方内容区对象，窗口动画期间返回动画面， 其余返回活动屏幕；均未就绪时返回 nullptr

## 公开方法

### root

```cpp
void root(Widget &&tree)
```

设置根组件树

未初始化的组件树在窗口内容区创建；已挂载的树改挂内容区并填满。 调用后解除根包装器绑定，控件生命周期由窗口管理，已绑定 `Ref` 保持关联。
