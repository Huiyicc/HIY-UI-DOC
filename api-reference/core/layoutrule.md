---
title: "LayoutRule"
---

# LayoutRule <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/layout_rules.h>`

**命名空间：** `hiyui`

按宿主逻辑内容宽高匹配，下界包含、上界不包含，两轴条件同时满足时生效。 下界非负；上界为非负值或 HIYUI_AUTO，表示无上界。 下界不得大于有限上界；相等时永不匹配。

## 公开成员

### values

```cpp
LayoutValues values
```

fields 必须是 LayoutRules::base.fields 的子集。
