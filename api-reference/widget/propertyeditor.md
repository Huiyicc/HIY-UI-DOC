---
title: "PropertyEditor"
---

# PropertyEditor <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/property_editor.h>`

**命名空间：** `hiyui`

可复制的非拥有编辑会话，全部方法在 UI 线程调用。 切换编辑器、注销工厂、删除属性或组件后失效；失效写操作返回 false。

## 公开方法

### id

```cpp
PropertyId id() const
```

失效时返回 HIYUI_NO_PROPERTY。

### property

```cpp
std::optional< PropertyItem > property() const
```

返回当前描述副本，失效时返回空值。

### value

```cpp
PropertyValue value() const
```

返回当前草稿副本，失效时返回空属性值。

### text

```cpp
std::string text() const
```

返回编辑文本，包含尚未通过解析的输入；尚未输入的 Mixed 返回空字符串。

### setValue

```cpp
bool setValue(PropertyValue value) const
```

更新草稿，不修改正式值。

### setText

```cpp
bool setText(std::string text) const
```

保存输入并按属性类型解析；解析失败仍保留输入并返回 false。

### error

```cpp
bool error(std::string message) const
```

设置自定义校验错误，空字符串清除；存在错误时不能提交。

### commit

```cpp
bool commit() const
```

请求提交，接受或进入异步等待返回 true。

### cancel

```cpp
bool cancel() const
```

丢弃此属性的草稿并关闭编辑器。

### focusTarget

```cpp
bool focusTarget(Widget &target) const
```

设置初始焦点，target 必须是当前编辑区域内的组件。
