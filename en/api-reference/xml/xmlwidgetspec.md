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

### activator

```cpp
XmlActivator activator
```

仅用于 resourceOnly 对象，加载不触发展示。

### templateInstaller

```cpp
XmlTemplateInstaller templateInstaller
```

仅用于 Template；空值使用内置重复器。

### extensions

```cpp
std::map< std::string, std::string > extensions
```

工具扩展元数据，注册时深拷贝，不声明运行时 XML 属性。 键为区分大小写的 XML local name；值为有效 UTF-8 XML 文本，可为空，不含回车。
