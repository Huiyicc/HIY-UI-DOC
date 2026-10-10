---
title: "AccessibilityProps"
---

# AccessibilityProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/accessibility/accessibility.h>`

**命名空间：** `hiyui`

覆盖组件自动提供的无障碍信息，字符串使用 UTF-8。

## 公开成员

### name

```cpp
const char * name
```

nullptr 使用关联标签或组件自身名称。

### description

```cpp
const char * description
```

补充说明，nullptr 清除显式说明。

### automationId

```cpp
const char * automationId
```

应用指定的标识，不随显示语言变化。

### decorative

```cpp
bool decorative
```

省略自身语义，保留独立子组件的语义。
