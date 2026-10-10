---
title: "Application"
---

# Application <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/application.h>`

**命名空间：** `hiyui`

应用程序入口，管理窗口生命周期和主循环

派生类通过 `setup()` 构建 UI。 一个进程中只应创建一个 `Application` 实例。



**参见：** `Window`

## 友元

### detail::resolveContentScaleForDisplay

供 DPI 路径转调 resolveContentScale，访问 protected 虚函数

## 公开方法

### run

```cpp
int run()
```

启动应用主循环

内部调用 `setup()`，然后进入 LVGL 事件循环。 调用 `quit()` 或所有窗口关闭后返回。



**返回值：** 0 表示正常退出；FBDEV 启动或事件处理发生异常时返回 1。

### quit

```cpp
void quit()
```

退出应用，终止主循环

先征询窗口，任一取消则本次退出不关闭窗口；全部允许后等待退场结束。 确认期间创建新窗口会取消本次退出。重复退出请求被忽略。

## 保护方法

### setup

```cpp
virtual void setup()=0
```

构建 UI

在 `run()` 内部、主循环开始前被调用。 应在此方法中调用 `createWindow()` 并挂载组件树。

### resolveContentScale

```cpp
virtual float resolveContentScale(const ScreenInfo &)
```

返回屏幕适配因子

在 `run()` 早期，字体加载前与每次 DPI/跨屏变更时调用，传入目标显示器信息。 返回值经 setUiScale 钳位 [1.0, 2.0] 后驱动 `scaled()` 的屏幕适配维度， dpiScale = dpr × uiScale。典型实现按「窗口应占屏宽比例」折算。

### createWindow

```cpp
Window & createWindow(const char *title, Size size)
```

创建一个新窗口

| 参数 | 说明 |
|---|---|
| `title` | 窗口标题，UTF-8 字符串，内部会拷贝 |
| `size` | 窗口尺寸，单位像素 |


**返回值：** 窗口引用，生命周期由 `Application` 管理

### navigate

```cpp
void navigate(Window &target, Transition t=Transition::SlideLeft)
```

页面导航，桌面端弹窗，移动端页面切换

记录导航历史；当前目标重复导航不增加历史。导航到历史页面时截断其后的历史。 首个创建的窗口为根页面；截断历史不销毁页面。导航期间的重入调用被忽略。
| 参数 | 说明 |
|---|---|
| `target` | 本 `Application` 创建且尚未关闭的窗口。 |
| `t` | 单显示宿主的页面转场；桌面使用 `WindowProps` 的入退场动画。 |


**参见：** `goBack()`


**参见：** `Transition`

### goBack

```cpp
void goBack(Transition t=Transition::SlideRight)
```

请求关闭当前导航页面并恢复上一页，上一页内容保留。

根页面上无效果；关闭被取消时保留当前页和导航历史。
| 参数 | 说明 |
|---|---|
| `t` | 单显示宿主的返回转场；动画关闭时立即切换。 |


**参见：** `navigate()`
