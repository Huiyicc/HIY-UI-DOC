---
title: "StateWriteResult"
---

# StateWriteResult <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/state.h>`

**命名空间：** `hiyui`

状态写入结果。

## 公开成员

### status

```cpp
StateStatus status
```

写入状态。

### normalized

```cpp
bool normalized
```

候选值经固定规则发生改变。

### committed

```cpp
bool committed
```

候选值已替换旧值；失败状态也可能为真。
