---
title: "TabItem"
---

# TabItem <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tabs.h>`

**命名空间：** `hiyui`

标签项配置

## 公开成员

### text

```cpp
const char * text
```

标签文本

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

图标样式，fill/weight/grade/opticalSize

### data

```cpp
int data
```

用户绑定数据，由 itemData() 读取
