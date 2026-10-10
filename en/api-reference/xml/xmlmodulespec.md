---
title: "XmlModuleSpec"
---

# XmlModuleSpec <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

Namespace and display information of an XML module.

## Public Members

### namespaceUri

```cpp
const char * namespaceUri
```

Namespace URI, must not be empty.

### preferredPrefix

```cpp
const char * preferredPrefix
```

Prefix suggestion for tool display; not part of module identity comparison.
