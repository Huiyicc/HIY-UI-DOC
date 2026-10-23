---
title: "XmlWidgetSpec"
---

# XmlWidgetSpec <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

自定义 XML 组件的完整注册描述。

## 公开成员

### localName

```cpp
const char * localName
```

模块内 local name，不包含 namespace prefix。

### itemAllowsChildren

```cpp
bool itemAllowsChildren
```

ItemList 的 item 是否允许包含组件子树。

### resourceOnly

```cpp
bool resourceOnly
```

声明式资源标志，加载器不创建 UI 对象，由资源预扫描建表。

### topItemAttributes

```cpp
const XmlAttributeSpec * topItemAttributes
```

ItemTree 顶级项属性白名单，空则顶级沿用 itemAttributes。

### valueKind

```cpp
XmlValueKind valueKind
```

`None`与空 reader 配对，其他值与非空 reader 配对。

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
