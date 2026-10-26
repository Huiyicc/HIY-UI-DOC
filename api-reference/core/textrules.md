---
title: "TextRules"
---

# TextRules <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/state.h>`

**命名空间：** `hiyui`

文本状态规则，创建后不可变。

## 公开成员

### multiline

```cpp
bool multiline
```

false 将每个换行转换为空格，true 将换行统一为 LF。

### maxLength

```cpp
uint32_t maxLength
```

最大 Unicode 码点数，0 表示不限制。
