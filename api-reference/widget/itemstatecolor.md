---
title: "ItemStateColor"
---

# ItemStateColor <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/item_template.h>`

**命名空间：** `hiyui`

统一颜色类型，支持 `ThemeRole` 或常量色

## 公开方法

### resolve

```cpp
uint32_t resolve() const
```

解析为实际颜色值

### isSet

```cpp
bool isSet() const
```

是否已设置，非 HIYUI_DEFAULT
