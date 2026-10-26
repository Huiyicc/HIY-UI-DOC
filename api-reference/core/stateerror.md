---
title: "StateError"
---

# StateError <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/state.h>`

**命名空间：** `hiyui`

set 与赋值失败时抛出的错误，不携带业务值。

**继承自：** `std::runtime_error`

## 公开方法

### result

```cpp
const StateWriteResult & result() const
```

**返回值：** 完整写入结果
