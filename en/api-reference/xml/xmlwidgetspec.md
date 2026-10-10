---
title: "XmlWidgetSpec"
---

# XmlWidgetSpec <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/xml/xml_registry.h>`

**Namespace:** `hiyui`

Complete registration description of a custom XML component.

## Public Members

### localName

```cpp
const char * localName
```

Local name within the module, without namespace prefix.

### itemAllowsChildren

```cpp
bool itemAllowsChildren
```

Whether ItemList items may contain component subtrees.

### resourceOnly

```cpp
bool resourceOnly
```

Declarative resource flag; the loader creates no UI object and the resource pre-scan builds the table.

### topItemAttributes

```cpp
const XmlAttributeSpec * topItemAttributes
```

Attribute whitelist for ItemTree top-level items; when empty, top-level uses itemAttributes.

### valueKind

```cpp
XmlValueKind valueKind
```

`None` pairs with an empty reader; other values pair with a non-empty reader.
