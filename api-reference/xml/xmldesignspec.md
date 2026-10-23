---
title: "XmlDesignSpec"
---

# XmlDesignSpec <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/xml/xml_registry.h>`

**命名空间：** `hiyui`

编辑器创建组件时使用的初始内容，不改变组件的运行时默认值。

## 公开成员

### xml

```cpp
std::string xml
```

完整组件 XML；空值表示只使用标签和属性默认值。

### itemXml

```cpp
std::string itemXml
```

新增条目的完整 XML；空值表示使用条目属性默认值。

### selectionAttribute

```cpp
std::string selectionAttribute
```

选择内容页时写入的零起始索引属性；空值表示没有页面选择。
