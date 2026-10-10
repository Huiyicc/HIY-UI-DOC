---
title: "ListDetail"
---

# ListDetail <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/list_detail.h>`

**命名空间：** `hiyui`

按自身获分配的内容宽度切换列表详情的单栏与双栏呈现。 本身需由父级分配尺寸，每种具名区域最多一个直接子对象，子树由父组件管理。 单栏只显示活动区域，双栏列表使用配置宽度、详情占剩余宽度；仅有一个区域时填满。 重排保留子树、输入和合法滚动偏移，不改变业务选择、提交草稿或增加导航历史。 进入区域恢复其最后一个有效可聚焦后代，否则选择首个；重排保留仍可见的焦点。 Detail 删除后回到 List，List 删除后保留详情；结构与尺寸变化均不派发值通知。

**继承自：** `hiyui::Container< ListDetail >`

## 公开方法

### init

```cpp
ListDetail & init(Window &window) &
```

挂载到窗口根内容区。

### activePane

```cpp
ListDetailPane activePane() const
```

最近请求的区域，初始、未挂载或已请求销毁时为 List。

### presentation

```cpp
ListDetailPresentation presentation() const
```

当前呈现，内容逻辑宽度达到 splitMinWidth 时为 Split；失效时为 Single。

### activePane

```cpp
ListDetail & activePane(ListDetailPane value, Notify notify=Notify::No) &
```

设置活动区域，不改变业务数据，未提供 Detail 区域时请求 Detail 无操作。 支持挂载前调用，在具名区域挂载后应用；非法枚举及已请求销毁时无操作。

| 参数 | 说明 |
|---|---|
| `notify` | Yes 仅在值确实改变时派发一次 onChange，默认静默。 |

### back

```cpp
bool back()
```

单栏 Detail 且存在 `List` 区域时返回列表，并按 Notify::Yes 通知。

**返回值：** 消费此次返回时为 true，其余为 false；不调用应用历史。

### onChange

```cpp
ListDetail & onChange(F &&handler, EventHandle *handle=nullptr) &
```

追加活动区域变更回调，接受 void(ListDetailPane)、void(Event&amp;) 或 void()。 支持挂载前绑定和只可移动闭包，销毁后释放；布局变化不触发。

| 参数 | 说明 |
|---|---|
| `handle` | 可选解绑句柄，off 可重复，作用域解绑使用 ScopedEventHandle。 |
