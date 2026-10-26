---
title: "StateSubscription"
---

# StateSubscription <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/state.h>`

**命名空间：** `hiyui`

状态订阅的作用域所有者，析构或 off 时取消。

## 公开方法

### off

```cpp
void off()
```

取消订阅；重复调用与已失效状态的调用无额外效果。

### connected

```cpp
bool connected() const
```

订阅仍处于激活状态时返回 true。

### error

```cpp
std::optional< StateStatus > error() const
```

最后一次错误；句柄无效返回 InvalidState，回调异常返回 CallbackFailed。
