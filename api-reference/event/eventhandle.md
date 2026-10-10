---
title: "EventHandle"
---

# EventHandle <Badge type="info" text="类" />

**头文件：** `#include <hiyui/event/callback.h>`

**命名空间：** `hiyui`

单一事件绑定的解绑句柄

经 `Widget::on` 与组件事件绑定的可选出参获得，只能移动； 析构不解绑，重复调用 `off()` 与组件销毁后的 `off()` 均不产生额外效果。

## 公开方法

### off

```cpp
void off()
```

解绑持有的事件绑定

回调内部调用时立即移除注册，闭包销毁延迟到最外层回调返回之后。 挂载前调用会取消待连接事件。

### operator bool

```cpp
operator bool() const
```

绑定仍有效且目标未请求删除时返回 true。

### connected

```cpp
bool connected() const
```

绑定已连接且目标有效时返回 true；挂载前、请求删除或解绑后返回 false。
