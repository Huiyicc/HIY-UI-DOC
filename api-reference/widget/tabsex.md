---
title: "TabsEx"
---

# TabsEx <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/tabs_ex.h>`

**命名空间：** `hiyui`

会话标签卡片组件。

标签项按照 Pin 状态分组排列。关闭事件只表示关闭请求，调用方完成会话断开和 资源回收后调用 `removeTab()` 删除对应 UI 节点。

**继承自：** `hiyui::Chainable< TabsEx >`

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(TabsExEventType type)
```

获取 `TabsEx` 内部事件码。

## 公开方法

### TabsEx

```cpp
TabsEx(lv_obj_t *raw)
```

包装由 `TabsEx` 创建的已有 LVGL 对象。

### TabsEx

```cpp
TabsEx(TabsExProps props={})
```

通过属性聚合构造。

### init

```cpp
TabsEx & init(lv_obj_t *parent) &
```

在父对象上创建标签卡片容器。

### init

```cpp
TabsEx & init(Widget &parent) &
```

在父对象上创建标签卡片容器。

### items

```cpp
TabsEx & items(const std::vector< TabsExItem > &items, Notify notify=Notify::No) &
```

替换全部标签项并按 Pin 状态重新排列，标题和 Host 文本会被复制。

### items

```cpp
TabsEx & items(std::initializer_list< const char * > titles, Notify notify=Notify::No) &
```

使用文本列表替换全部标签项。

### append

```cpp
TabsEx & append(const TabsExItem &item, Notify notify=Notify::No) &
```

追加一个标签项，标题和 Host 文本会被复制。

### removeTab

```cpp
TabsEx & removeTab(int index, Notify notify=Notify::No) &
```

删除标签项。

| 参数 | 说明 |
|---|---|
| `index` | 当前标签索引。 |


**返回值：** 索引越界时不改变状态。

### activeIndex

```cpp
TabsEx & activeIndex(int index, Notify notify=Notify::No) &
```

设置当前激活标签。

| 参数 | 说明 |
|---|---|
| `index` | 标签索引；索引越界或标签禁用时不改变状态。 |

### activeIndex

```cpp
int activeIndex() const
```

获取当前激活标签。

**返回值：** 当前索引；无标签时返回 -1。

### scrollToTab

```cpp
TabsEx & scrollToTab(int index) &
```

滚动标签栏使指定标签完整可见。

| 参数 | 说明 |
|---|---|
| `index` | 标签索引；索引越界时不改变状态。 |

### itemCount

```cpp
int itemCount() const
```

获取标签数量。

### itemData

```cpp
int itemData(int index) const
```

获取标签用户数据。

| 参数 | 说明 |
|---|---|
| `index` | 当前标签索引。 |


**返回值：** `data` 值；索引越界返回 0。

### tabTitle

```cpp
std::string tabTitle(int index) const
```

获取标签当前标题。

| 参数 | 说明 |
|---|---|
| `index` | 当前标签索引。 |


**返回值：** 当前标题；索引越界返回空字符串。

### connectionState

```cpp
TabsEx & connectionState(int index, TabConnectionState state) &
```

设置连接状态。

**返回值：** 索引越界时不改变状态。

### closable

```cpp
TabsEx & closable(int index, bool value) &
```

设置标签是否允许关闭。

| 参数 | 说明 |
|---|---|
| `value` | true 显示关闭控件并允许中键关闭，false 隐藏关闭控件。 |


**返回值：** 索引越界或值未变化时不改变状态。

### pinned

```cpp
TabsEx & pinned(int index, bool pinned=true, Notify notify=Notify::No) &
```

设置 Pin 状态并重新排列标签。

| 参数 | 说明 |
|---|---|
| `index` | 当前标签索引。 |
| `pinned` | true 将标签置于 Pin 分组，false 将其置于普通分组。 |

### isPinned

```cpp
bool isPinned(int index) const
```

查询标签是否处于 Pin 分组。

**返回值：** Pin 状态；索引越界时返回 false。

### rename

```cpp
TabsEx & rename(int index, const char *title) &
```

设置标签标题。

| 参数 | 说明 |
|---|---|
| `title` | 空值或空字符串恢复显示 Host；调用期间复制文本。 |


**返回值：** 索引越界时不改变状态。

### onChange

```cpp
TabsEx & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定激活事件，回调可接收 `TabsExEvent`、索引或无参数。

### onCloseRequest

```cpp
TabsEx & onCloseRequest(F &&f, EventHandle *handle=nullptr) &
```

绑定关闭请求事件。

### onNewRequest

```cpp
TabsEx & onNewRequest(F &&f, EventHandle *handle=nullptr) &
```

绑定新建会话请求事件。

### onRightClick

```cpp
TabsEx & onRightClick(F &&f, EventHandle *handle=nullptr) &
```

绑定右键事件。

### onRename

```cpp
TabsEx & onRename(F &&f, EventHandle *handle=nullptr) &
```

绑定重命名提交事件。

### onReorder

```cpp
TabsEx & onReorder(F &&f, EventHandle *handle=nullptr) &
```

绑定拖拽重排事件。
