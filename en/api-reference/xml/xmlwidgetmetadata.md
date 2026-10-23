---
title: "XmlWidgetMetadata"
---

# XmlWidgetMetadata <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

Read-only metadata copy of a registered component.

## Public Members

### itemAllowsChildren

```cpp
bool itemAllowsChildren
```

Whether ItemList items may contain component subtrees.

### extensions

```cpp
std::map< std::string, std::string > extensions
```

工具扩展元数据的独立副本，未知字段保留在专用 schema XML 中。
