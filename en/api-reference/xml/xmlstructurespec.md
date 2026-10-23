---
title: "XmlStructureSpec"
---

# XmlStructureSpec <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

组件的直接父子限制；名称均属于该组件的 namespace，空值表示不限制。

## Public Members

### maxPerParent

```cpp
size_t maxPerParent
```

同类型直接子组件的数量上限，0 表示不限制。
