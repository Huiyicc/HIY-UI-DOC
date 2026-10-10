---
title: "TableColumnGroup"
---

# TableColumnGroup <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/table.h>`

**命名空间：** `hiyui`

表头分组，多级表头

## 公开成员

### title

```cpp
const char * title
```

分组标题

### columnIndices

```cpp
std::vector< int > columnIndices
```

包含的列索引

### localizedTitle

```cpp
std::optional< LocalizedText > localizedTitle
```

设置后覆盖原文本，并随语言切换更新；描述在传入组件时复制。
