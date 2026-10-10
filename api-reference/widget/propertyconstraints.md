---
title: "PropertyConstraints"
---

# PropertyConstraints <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/property_value.h>`

**命名空间：** `hiyui`

数值边界和步长使用与属性相同的值类型，空值表示未设置。 最小值不能大于最大值，步长必须大于零，浮点值必须有限。

## 公开成员

### decimals

```cpp
int decimals
```

小数显示位数，0 至 15；不改变存储精度。

### maxLength

```cpp
int maxLength
```

文本 UTF-8 字节数上限，0 表示不限。

### localizedUnit

```cpp
std::optional< LocalizedText > localizedUnit
```

设置后覆盖 unit，仅影响显示。
