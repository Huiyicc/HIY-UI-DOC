---
title: "InputProps"
---

# InputProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/input.h>`

**命名空间：** `hiyui`

文本输入框创建属性

## 公开成员

### text

```cpp
const char * text
```

初始文本内容，UTF-8 编码

### placeholder

```cpp
const char * placeholder
```

占位提示文本

### password

```cpp
bool password
```

是否密码模式，显示为 •

### maxLength

```cpp
int maxLength
```

最大输入长度，0 = 无限制

### width

```cpp
int width
```

输入框宽度

### height

```cpp
int height
```

输入框高度，HIYUI_AUTO = 自适应

### multiline

```cpp
bool multiline
```

多行模式，false = 单行(默认)

### horizontalScroll

```cpp
bool horizontalScroll
```

多行模式下启用横向滚动条，禁用自动折行

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### textColor

```cpp
uint32_t textColor
```

文字颜色，HIYUI_DEFAULT = 跟随主题

### placeholderColor

```cpp
uint32_t placeholderColor
```

占位文本颜色

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### radius

```cpp
uint32_t radius
```

圆角半径，HIYUI_DEFAULT = 跟随主题

### borderless

```cpp
bool borderless
```

无边框模式，透明背景 + 无边框，含聚焦态，融入父容器

### maxUndoSteps

```cpp
int maxUndoSteps
```

撤销/重做最大步数，0 = 禁用撤销功能

### multiCursor

```cpp
bool multiCursor
```

允许附加选区和多光标输入，仅桌面后端生效

### readOnly

```cpp
bool readOnly
```

禁止用户编辑，仍允许选择和复制。
