---
title: "PropertyReply"
---

# PropertyReply <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/property_editor.h>`

**命名空间：** `hiyui`

可复制的非拥有应答句柄，全部方法在 UI 线程调用。 首次完成、取消、属性版本变化或组件删除后失效；重复完成返回 false。

## 公开方法

### accept

```cpp
bool accept() const
```

接受原候选值。

### accept

```cpp
bool accept(PropertyValue value) const
```

校验并接受修正值，校验失败保留草稿和错误。

### reject

```cpp
bool reject(std::string message) const
```

拒绝提交并保留草稿；空消息使用默认错误文案。
