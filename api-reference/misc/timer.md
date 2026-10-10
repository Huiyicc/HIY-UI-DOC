---
title: "Timer"
---

# Timer <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/timer.h>`

**命名空间：** `hiyui`

UI 线程上的周期回调，析构或 stop 取消；允许在回调中停止或销毁定时器。

## 公开方法

### start

```cpp
void start(uint32_t periodMs, F &&callback)
```

替换现有回调，periodMs 为正毫秒数；0 等同 stop。
