---
title: "XmlModuleSpec"
---

# XmlModuleSpec <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

XML 模块的 namespace 与显示信息。

## 公开成员

### namespaceUri

```cpp
const char * namespaceUri
```

namespace URI，不能为空。

### preferredPrefix

```cpp
const char * preferredPrefix
```

工具显示使用的 prefix 建议，不参与模块身份比较。
