---
title: "TerminalModel"
---

# TerminalModel <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/terminal_model.h>`

**命名空间：** `hiyui`

无窗口的 VT 状态与输入编码器；同一实例的调用须由调用方串行化。

## 公开方法

### TerminalModel

```cpp
TerminalModel(TerminalSize size={80, 24}, int scrollbackLines=2000)
```

非正行列数取 1，负历史行数取零。

### resize

```cpp
void resize(TerminalSize size)
```

非正行列数不改变网格。

### takeOutput

```cpp
std::string takeOutput()
```

取走输入编码及 VT 查询响应；无待发送数据时返回空字符串。

### text

```cpp
std::string text() const
```

当前屏幕文本，不含历史和行尾空格。

### screen

```cpp
std::string screen() const
```

生成当前屏幕的 UTF-8/VT 绘制数据，含颜色、光标、标题和鼠标模式。 接收端须使用相同行列数，输入通过 onInput 返回本模型编码。 数据不含历史，不用于恢复 shell 协议状态。
