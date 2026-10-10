---
title: "RichCharFormat"
---

# RichCharFormat <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/text/rich_format.h>`

**命名空间：** `hiyui`

字符格式，字段为默认值时继承组件默认

## 公开成员

### foreground

```cpp
uint32_t foreground
```

前景色，HIYUI_DEFAULT 表示继承组件默认

### background

```cpp
uint32_t background
```

背景高亮色，HIYUI_DEFAULT 表示无背景

### fontSize

```cpp
int fontSize
```

字号，逻辑像素，0 表示继承组件默认
