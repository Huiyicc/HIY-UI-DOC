---
title: "Dock"
---

# Dock <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/dock.h>`

**命名空间：** `hiyui`

停靠容器。

面板按声明边插入形成分割布局，同组面板以 tab 呈现；分隔条可拖动， tab 可拖出为浮动窗并跨组重新入坞。布局可保存为快照并恢复。

**继承自：** `hiyui::Chainable< Dock >`

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(DockEventType type)
```

获取 `Dock` 内部事件码。

## 公开方法

### Dock

```cpp
Dock(lv_obj_t *raw)
```

包装由 `Dock` 创建的已有 LVGL 对象。

### Dock

```cpp
Dock(DockProps props={})
```

通过属性聚合构造。

### init

```cpp
Dock & init(lv_obj_t *parent) &
```

在父对象上创建停靠容器。

### init

```cpp
Dock & init(Widget &parent) &
```

在父对象上创建停靠容器。

### operator()

```cpp
Dock & operator()(Panes &&...panes) &
```

声明初始布局，按参数顺序停靠各面板。 右值面板随容器挂载；左值面板须已挂载。

### addPane

```cpp
Dock & addPane(DockPane &pane) &
```

停靠一个面板，按其属性声明的边插入当前布局。

**返回值：** 当前组件；面板未 init 或已注册时不改变状态。

### removePane

```cpp
Dock & removePane(DockPane &pane) &
```

移除面板并从注册表注销。

**返回值：** 当前组件；面板不属于本组件时不改变状态。

### hidePane

```cpp
Dock & hidePane(DockPane &pane) &
```

隐藏面板，保留注册与原位置记录，可经 `showPane()` 恢复。

**返回值：** 当前组件；浮动面板隐藏时其浮动窗被销毁。

### showPane

```cpp
Dock & showPane(DockPane &pane) &
```

恢复隐藏面板，优先回到隐藏前所在组与 tab 位置。

**返回值：** 当前组件；组已不存在时进入第一个组。

### activatePane

```cpp
Dock & activatePane(DockPane &pane) &
```

激活面板所在的 tab 或将其置于浮动窗最前。

**返回值：** 当前组件；面板未注册时不改变状态。

### setFloating

```cpp
Dock & setFloating(DockPane &pane, bool floating) &
```

编程切换面板的浮动状态。

无窗口管理器时，浮动面板显示在当前 display 的顶层，并保持拖拽、缩放和重新入坞行为。
**返回值：** 当前组件；面板未注册或状态已一致时不改变状态。

### paneCount

```cpp
int paneCount() const
```

获取已注册面板数量。

### paneByName

```cpp
DockPane paneByName(const char *name)
```

按唯一名查找面板。

**返回值：** 面板包装；未找到时 `raw()` 为 nullptr。

### saveLayout

```cpp
DockLayoutSnapshot saveLayout() const
```

保存当前布局快照，含浮动几何与隐藏列表。

**返回值：** 快照值。

### restoreLayout

```cpp
Dock & restoreLayout(const DockLayoutSnapshot &snapshot) &
```

恢复布局快照。

按面板名匹配已注册面板；快照中不存在的面板收进第一个组， 未注册的名字被跳过。
**返回值：** 当前组件；空树快照清空布局为无面板状态。

### onPaneEvent

```cpp
Dock & onPaneEvent(DockEventType type, F &&f, EventHandle *handle=nullptr) &
```

绑定面板业务事件，回调可接收 `DockEvent`、面板名或无参数。

### onPaneActivated

```cpp
Dock & onPaneActivated(F &&f, EventHandle *handle=nullptr) &
```

绑定 tab 激活事件。

### onCloseRequest

```cpp
Dock & onCloseRequest(F &&f, EventHandle *handle=nullptr) &
```

绑定关闭请求事件。

### onPaneDocked

```cpp
Dock & onPaneDocked(F &&f, EventHandle *handle=nullptr) &
```

绑定面板入坞事件。

### onPaneFloated

```cpp
Dock & onPaneFloated(F &&f, EventHandle *handle=nullptr) &
```

绑定面板浮动事件。

### onPaneHidden

```cpp
Dock & onPaneHidden(F &&f, EventHandle *handle=nullptr) &
```

绑定面板隐藏事件。

### onPaneShown

```cpp
Dock & onPaneShown(F &&f, EventHandle *handle=nullptr) &
```

绑定面板显示事件。

### onLayoutChanged

```cpp
Dock & onLayoutChanged(F &&f, EventHandle *handle=nullptr) &
```

绑定布局结构变化事件。
