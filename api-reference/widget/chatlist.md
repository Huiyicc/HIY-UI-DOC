---
title: "ChatList"
---

# ChatList <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chat_list.h>`

**命名空间：** `hiyui`

**继承自：** `hiyui::VirtualTableBase< ChatList >`

## 类型定义

### ChatListEventType

聊天列表内部事件类型

| 值 | 说明 |
|---|---|
| `BubbleClick` | 气泡点击 |
| `BubbleLongPress` | 气泡长按 |
| `ScrollToTop` | 滚动到顶部 |

## 公开方法

### onBubbleClick

```cpp
ChatList & onBubbleClick(F &&f, EventHandle *handle=nullptr) &
```

绑定气泡点击回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为消息项与索引 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

### onBubbleLongPress

```cpp
ChatList & onBubbleLongPress(F &&f, EventHandle *handle=nullptr) &
```

绑定气泡长按回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为消息项与索引 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

### onScrollToTop

```cpp
ChatList & onScrollToTop(F &&f, EventHandle *handle=nullptr) &
```

绑定滚动到顶部回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(ChatListEventType type)
```

获取聊天列表内部事件码。
