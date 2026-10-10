---
title: Terminal 终端
---

## Terminal

`Terminal` 显示 UTF-8 文本和 VT 控制序列，支持颜色、宽字符、备用屏幕、历史滚动、选择与复制。
组件不创建 shell，不拥有进程或网络连接，所有组件方法在 UI 线程调用。

### 头文件

组件与无窗口模型分别位于以下头文件；组件也可通过 `hiyui/hiyui.h` 引入。

```cpp
#include <hiyui/widget/terminal.h>
#include <hiyui/misc/terminal_model.h>
```

### 最小示例

`parent` 为已挂载的 `Widget`，输出字节可以分段写入。

```cpp
using namespace hiyui;
Terminal terminal({.height = 320});
terminal.init(parent);
terminal.write("\x1b[32mReady\x1b[0m\r\n");
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `width` | `int` | `HIYUI_AUTO` | 逻辑像素；自动值填满父容器宽度 |
| `height` | `int` | `300` | 逻辑像素；自动值填满父容器高度 |
| `fontSize` | `int` | `14` | 正整数逻辑字号 |
| `scrollbackLines` | `int` | `2000` | 历史行数上限，零表示不保存历史 |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 默认跟随主题背景 |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | 默认跟随主题正文色 |
| `animated` | `bool` | `true` | 允许光标闪烁，同时受主题动画设置控制 |
| `readOnly` | `bool` | `false` | 禁止用户输入，仍允许选择、复制和历史滚动 |

哨兵值见 [常量与哨兵值](/core/constants)。

### 运行时方法表

链式方法提供左值和右值重载，表中列出左值返回类型。挂载前的设置、写入和绑定在挂载时生效。
销毁后写入与设置无操作，查询返回空值。

| 方法 | 返回 | 说明 |
|---|---|---|
| `write(bytes)` | `Terminal &` | 写入输出，可包含 UTF-8、控制序列和零字节；清除选区 |
| `paste(text)` | `Terminal &` | 按括号粘贴模式发送输入，换行统一为回车；只读时无输入 |
| `clearScrollback()` | `Terminal &` | 清除历史，保留当前屏幕 |
| `scrollLines(lines)` | `Terminal &` | 正数向较早内容滚动；清除选区 |
| `fontSize(size)` | `Terminal &` | 修改正整数逻辑字号 |
| `terminalSize()` | `TerminalSize` | 当前网格；未挂载时为零行零列 |
| `terminalSize(size)` | `Terminal &` | 固定网格；任一维非正恢复按可用空间自动计算 |
| `readOnly(value)` | `Terminal &` | 切换用户输入权限；不阻止输出查询响应 |
| `readOnly()` | `bool` | 当前只读状态；未挂载或销毁后为 `false` |
| `text()` | `std::string` | 当前屏幕文本，不含历史、行尾空格和末尾空行 |
| `title()` | `std::string` | 终端控制序列设置的标题 |
| `selectionText()` | `std::string` | 选区文本，无选区为空 |
| `copySelection()` | `Terminal &` | 将非空选区复制到系统剪贴板 |
| `onData(callback, handle)` | `Terminal &` | 编码后的输入及自动协议响应，回调接收 `std::string_view` |
| `onInput(callback, handle)` | `Terminal &` | 原始用户输入，不含协议响应，回调接收 `const TerminalInput &` |
| `onResize(callback, handle)` | `Terminal &` | 网格变化通知，回调接收 `TerminalSize`；注册本身不触发 |
| `onTitleChange(callback, handle)` | `Terminal &` | 标题变化通知，回调接收 `std::string_view` |

事件的 `handle` 默认为空，传入 `EventHandle` 后可调用 `off()` 解绑。
回调中的字节视图仅在回调期间有效。`onInput` 不取消 `onData`；外部模型接管输入时，只将
`onInput` 交给模型，避免把两路数据同时发送到进程。

### 进阶用法

`TerminalModel` 不创建窗口；同一实例的调用须串行化。默认尺寸为 80 列 × 24 行，
默认保存 2000 行历史，非正尺寸取 1，负历史行数取零。

| 方法 | 返回 | 说明 |
|---|---|---|
| `write(bytes)` | `void` | 接收 shell 输出并更新 VT 状态 |
| `input(input)` | `void` | 按当前终端模式编码原始输入 |
| `resize(size)` | `void` | 修改网格；非正尺寸无操作 |
| `size()` | `TerminalSize` | 当前网格尺寸 |
| `takeOutput()` | `std::string` | 取走待发送输入及协议响应，无数据时为空 |
| `text()` | `std::string` | 当前屏幕文本 |
| `screen()` | `std::string` | 当前屏幕的 VT 绘制数据，包含颜色、标题、光标和鼠标模式 |

`TerminalInput::type` 决定本次输入的含义。

| 值 | 说明 |
|---|---|
| `Text` | `text` 为文本输入 |
| `Key` | `key` 为 `TerminalKey` 中的导航、编辑或 F1–F12 功能键 |
| `Character` | `character` 为 Unicode 码点 |
| `Paste` | `text` 为待粘贴内容 |
| `Focus` | `pressed` 表示获得焦点 |
| `Mouse` | `row`、`column` 从零开始；`button` 为 0 时表示移动，1–3 为按键，4/5 为上/下滚轮 |

`modifiers` 使用位掩码，Shift 为 1、Alt 为 2、Ctrl 为 4。`text` 仅在调用期间有效。

同一 UI 线程中的模型与渲染组件可以按下例连接；模型须比绑定回调存活更久。

```cpp
TerminalModel model({80, 24});
Terminal view;
view.terminalSize(model.size()).init(parent);
view.onInput([&model](const TerminalInput &input) { model.input(input); });
model.write("\x1b[31mremote output\x1b[0m");
view.write(model.screen());
auto outgoing = model.takeOutput();
```

调用方把 `outgoing` 交给进程或传输连接。后台线程生成画面时，通过应用的 UI 调度机制更新组件。
`screen()` 不包含滚屏历史，不能恢复另一个 shell 的协议状态；接收端使用同一网格并通过原始输入
事件返回操作。固定网格在空间不足时缩小字体，嵌入式点阵字体的实际字形尺寸由所选字体决定。

## 相关页面

- [事件](/core/event-system)
- [主题](/styling/theme)
- [C++ 画廊构建](/build/cpp-gallery)
