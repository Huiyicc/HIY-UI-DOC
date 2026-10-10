---
title: "TerminalInput"
---

# TerminalInput <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/terminal_model.h>`

**命名空间：** `hiyui`

未编码的终端输入；text 仅在本次调用或事件回调期间有效。

## 公开成员

### modifiers

```cpp
uint8_t modifiers
```

位掩码，Shift 为 1，Alt 为 2，Ctrl 为 4。

### row

```cpp
int row
```

鼠标所在行，从零开始。

### column

```cpp
int column
```

鼠标所在列，从零开始。

### button

```cpp
int button
```

零表示移动，1–3 为按键，4/5 为滚轮向上/向下。

### pressed

```cpp
bool pressed
```

鼠标按下或获得焦点。
