---
title: "TerminalProps"
---

# TerminalProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/terminal.h>`

**命名空间：** `hiyui`

终端创建属性，尺寸和字号使用逻辑像素。

## 公开成员

### width

```cpp
int width
```

HIYUI_AUTO 填满父容器。

### fontSize

```cpp
int fontSize
```

正整数。

### scrollbackLines

```cpp
int scrollbackLines
```

历史行数上限，零表示不保存历史。

### bg

```cpp
uint32_t bg
```

HIYUI_DEFAULT 跟随主题背景。

### textColor

```cpp
uint32_t textColor
```

HIYUI_DEFAULT 跟随主题正文色。

### animated

```cpp
bool animated
```

是否允许光标闪烁，同时受主题动画开关控制。

### readOnly

```cpp
bool readOnly
```

禁止用户输入，仍允许选择、复制和滚动。
