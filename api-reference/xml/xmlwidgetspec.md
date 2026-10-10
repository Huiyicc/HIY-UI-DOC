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
