---
title: "ListItem"
---

# ListItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/list.h>`

**命名空间：** `hiyui`

列表项配置

## 公开成员

### text

```cpp
const char * text
```

列表文本

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

图标码点

### iconSrc

```cpp
const void * iconSrc
```

图片源

### iconStyle

```cpp
FontIconStyle iconStyle
```

图标样式

### separator

```cpp
bool separator
```

是否为分隔线

### data

```cpp
int data
```

用户绑定数据，由 itemData() 读取

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

设置后覆盖原文本，并随语言切换更新；描述在传入组件时复制。
