---
title: "TextFontSource"
---

# TextFontSource <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/style/text_font.h>`

**命名空间：** `hiyui`

应用默认正文字体的内存来源。

## 公开成员

### data

```cpp
const unsigned char * data
```

字体文件字节；与 size 同时为空时使用系统字体。

### lineHeight

```cpp
float lineHeight
```

字号倍率，0 使用字体原始行高；有效倍率为 0.5 至 4。
