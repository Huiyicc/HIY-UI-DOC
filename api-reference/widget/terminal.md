---
title: "Terminal"
---

# Terminal <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/terminal.h>`

**命名空间：** `hiyui`

接收 UTF-8 与 VT 控制序列的交互终端，不拥有 shell 或传输连接。 所有方法在 UI 线程调用。挂载前的设置、写入和事件绑定在挂载时生效。 销毁后写入与运行时设置无操作，查询返回空值；输入及协议响应通过 onData 发送。

**继承自：** `hiyui::Chainable< Terminal >`

## 公开方法

### write

```cpp
Terminal & write(std::string_view bytes) &
```

接收输出字节，可分段传入 UTF-8 和控制序列；新输出清除选区。

### paste

```cpp
Terminal & paste(std::string_view text) &
```

将文本作为粘贴输入发送，遵循终端括号粘贴模式，换行统一为回车。

### clearScrollback

```cpp
Terminal & clearScrollback() &
```

清除历史记录，不改变当前屏幕或 shell 状态。

### scrollLines

```cpp
Terminal & scrollLines(int lines) &
```

相对滚动历史，正数向较早内容移动；滚动清除选区。

### fontSize

```cpp
Terminal & fontSize(int size) &
```

修改正整数逻辑字号；自动网格随可用空间更新，固定网格保持行列数。

### terminalSize

```cpp
TerminalSize terminalSize() const
```

获取当前行列数，尺寸变化后由 onResize 通知。

### terminalSize

```cpp
Terminal & terminalSize(TerminalSize size) &
```

固定网格并缩小字体以适应可用空间；任一维非正时恢复自动网格。

### readOnly

```cpp
Terminal & readOnly(bool value) &
```

切换只读状态；不阻止 write 产生的协议响应。

### text

```cpp
std::string text() const
```

获取当前屏幕文本，不含历史，去除每行尾部空格及末尾空行。

### title

```cpp
std::string title() const
```

获取应用通过控制序列设置的标题，尚未设置时为空。

### selectionText

```cpp
std::string selectionText() const
```

获取选区的 UTF-8 文本，没有选区时为空。

### copySelection

```cpp
Terminal & copySelection() &
```

复制非空选区到系统剪贴板，不支持剪贴板的平台无操作。

### onData

```cpp
Terminal & onData(F &&handler, EventHandle *handle=nullptr) &
```

绑定待发送字节，回调接收仅在调用期间有效的 string_view，允许嵌入零字节。

### onInput

```cpp
Terminal & onInput(F &&handler, EventHandle *handle=nullptr) &
```

绑定原始用户输入，不含协议响应；不取消现有 onData 通知。 使用外部 `TerminalModel` 时仅将本事件交给模型，避免重复发送编码后的数据。

### onResize

```cpp
Terminal & onResize(F &&handler, EventHandle *handle=nullptr) &
```

绑定网格尺寸变化，回调接收 TerminalSize；注册本身不触发通知。

### onTitleChange

```cpp
Terminal & onTitleChange(F &&handler, EventHandle *handle=nullptr) &
```

绑定标题变化，回调接收仅在调用期间有效的 UTF-8 string_view。
