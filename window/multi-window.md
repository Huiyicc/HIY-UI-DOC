---
title: 多窗口
---

# 多窗口

`Application` 可以创建多个窗口，并管理它们的生命周期。

```cpp
auto &main = createWindow("Main", {960, 640});
auto &details = createWindow("Details", {720, 520});

main.root(MainView{});
details.root(DetailsView{});
```

## 导航

```cpp
navigate(details, Transition::SlideLeft);
goBack(Transition::SlideRight);
```

`navigate()` 将窗口显示为新页面，`goBack()` 关闭当前页面并恢复上一页，上一页内容保留。两者都记录导航历史：重复导航当前目标不增加历史，导航到历史中的页面时截断其后的历史，截断不销毁页面。导航期间的重入调用被忽略。

桌面端每个窗口是独立原生窗口；Android 和 FBDEV 的窗口共享显示宿主，`navigate()` 切换活动页面，只有活动页面接收输入。调用方使用同一接口，不持有导航栈内部对象。

## 返回请求

页面返回按钮调用所属窗口的 `requestBack()`。每次请求在一个步骤消费后结束。

| 顺序 | 行为 |
| --- | --- |
| 1 | 处理顶层浮层；不允许关闭或正在关闭的浮层仍阻止返回传到后方页面 |
| 2 | 取消当前临时输入、关闭平台已报告显示的软键盘，或退出输入组编辑状态 |
| 3 | 沿当前局部分支从内向外执行返回处理；同一对象的 `onBackRequest()` 先于组件默认行为 |
| 4 | 请求该窗口所属的页面历史返回 |

局部分支使用有效焦点；没有焦点时使用最近交互或显式激活的可见区域。`ListDetail` 在单栏详情中返回列表，`WindowFrame` 关闭打开的抽屉。返回本身不提交或丢弃业务草稿；应用可通过[返回处理器](/core/event-system#返回请求)显示确认界面。

`requestBack()` 返回 `true` 表示已消费，关闭请求被取消也属于已消费。无可返回内容、窗口不可用或同一窗口重入时返回 `false`。根页面无可处理内容时不退出应用。`goBack()` 直接操作页面历史，不执行上述局部返回流程。

在按钮中请求所属窗口返回：

```cpp
Button{}
    .text("返回")
    .init(parent)
    .onClick([target = &window] { target->requestBack(); });
```

SDL 后端的未消费 Escape 键、Android 系统返回键，以及 FBDEV 输入的 Escape/Back 键接入同一流程。按键重复不会重复请求；已由输入或快捷键消费的按键不再导航。其他宿主可显式调用 `requestBack()`。

C 绑定入口为 `hiyui_win_request_back()`，声明位于 `<hiyui/c/app.h>`；已消费返回 `1`，空窗口或无处理返回 `0`。局部返回处理器使用 `hiyui_wdg_on_back_request()`。

## 关闭

关闭窗口后，对应的 `Window&` 失效。事件回调若捕获窗口引用，须保证回调不会晚于窗口销毁执行。

最后一个窗口关闭后，`Application::run()` 返回。`Application::quit()` 关闭整个应用；任一窗口取消关闭请求时，本次退出不关闭窗口。

## 屏幕适配

窗口跨显示器时，系统 DPI 变化触发 `resolveContentScale()` 重新计算。布局使用逻辑尺寸，`scaled()` 将其转换为当前画布尺寸。
