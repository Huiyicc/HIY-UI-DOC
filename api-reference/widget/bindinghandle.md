---
title: "BindingHandle"
---

# BindingHandle <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/detail/property_binding.h>`

**命名空间：** `hiyui`

组件属性绑定的解绑句柄，析构不取消绑定。

## 公开方法

### off

```cpp
void off()
```

解除对应绑定；重复调用、绑定已解除或组件已删除后调用无额外效果。

### connected

```cpp
bool connected() const
```

绑定连接中且目标有效时返回 true。

### phase

```cpp
BindingPhase phase() const
```

当前连接阶段；无绑定返回 Disconnected。

### error

```cpp
BindingFailReason error() const
```

最后一次失败原因。
