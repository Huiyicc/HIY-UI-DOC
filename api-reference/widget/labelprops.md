---
title: "LabelProps"
---

# LabelProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/label.h>`

**命名空间：** `hiyui`

文本标签创建属性

## 公开成员

### text

```cpp
const char * text
```

显示文本，UTF-8 编码

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### textColor

```cpp
uint32_t textColor
```

文字颜色，HIYUI_DEFAULT = 跟随主题

### width

```cpp
int width
```

标签宽度，HIYUI_AUTO = 自适应文本内容

### selectable

```cpp
bool selectable
```

是否允许框选/复制文本，默认关，仅 SDL 桌面生效

### ellipsis

```cpp
bool ellipsis
```

超长时单行截断显示省略号，需配合受限宽度（固定宽度、百分比或 flex 填充）生效
