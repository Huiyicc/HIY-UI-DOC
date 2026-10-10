---
title: "WindowCloseEvent"
---

# WindowCloseEvent <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/window.h>`

**命名空间：** `hiyui`

同步派发的关闭请求，仅在回调期间有效。

## 公开方法

### cancel

```cpp
void cancel()
```

取消本次关闭；其他回调不能撤销取消。

### isCanceled

```cpp
bool isCanceled() const
```

查询本次请求是否已被取消。
