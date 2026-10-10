---
title: "PropertyOption"
---

# PropertyOption <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/property_value.h>`

**命名空间：** `hiyui`

选项的显示文字与非空、唯一业务值；disabled 选项不能通过编辑提交。 Flags 使用互不重叠的无符号单比特值，已禁用位保持正式值。

## 公开成员

### localizedLabel

```cpp
std::optional< LocalizedText > localizedLabel
```

设置后覆盖 label，随语言切换更新显示。
