---
title: "LayoutRules"
---

# LayoutRules <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/layout_rules.h>`

**命名空间：** `hiyui`

从 base 开始，按数组顺序覆盖所有命中规则的已标记字段。 配置和数组在 layoutRules 调用时复制，不转移所有权；默认配置等价清除规则。 未知字段位、已标记字段中的非法枚举或数值使整组配置无效。

## 公开成员

### rules

```cpp
const LayoutRule * rules
```

count 大于 0 时必须指向有效数组。

### count

```cpp
size_t count
```

0 表示仅应用 base，不读取 rules。
