---
title: "ScopedEventHandle"
---

# ScopedEventHandle <Badge type="info" text="类" />

**头文件：** `#include <hiyui/event/callback.h>`

**命名空间：** `hiyui`

单一事件的作用域所有者，析构、重新绑定或移动赋值时解绑原事件。

## 公开方法

### out

```cpp
EventHandle * out()
```

解绑原事件并返回下一次 on 调用的句柄出参，不得保存返回指针。

### off

```cpp
void off()
```

解绑事件；重复调用及组件删除后调用均安全。

### connected

```cpp
bool connected() const
```

是否仍能接收事件。
