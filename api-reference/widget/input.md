---
title: "Input"
---

# Input <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/input.h>`

**命名空间：** `hiyui`

文本输入框组件

提供单行或多行纯文本编辑，桌面端可启用附加选区和多光标输入。



**参见：** `InputProps`

**继承自：** `hiyui::Chainable< Input >`

## 公开方法

### Input

```cpp
Input(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Input

```cpp
Input(InputProps props={})
```

通过属性聚合构造

### init

```cpp
Input & init(lv_obj_t *parent) &
```

在父对象上创建输入框

### init

```cpp
Input & init(Widget &parent) &
```

在父对象上创建输入框

### text

```cpp
Input & text(const std::string &t, Notify notify=Notify::No) &
```

运行时设置文本内容

### text

```cpp
Input & text(const char *t, Notify notify=Notify::No) &
```

运行时设置文本内容

### text

```cpp
std::string text() const
```

获取当前文本内容

### model

```cpp
Input & model(State< std::string > state, BindingHandle *handle=nullptr) &
```

双向绑定已提交文本并安装模型文本规则

要求带固定文本规则的状态（State&lt;std::string&gt;::text 创建）；挂载完成时一次应用 规则与当前值。输入法预编辑不写入状态；模型应用与来源控件内容相同时跳过重写， 保持光标、选区与撤销栈。用户编辑与程序写入都经模型规范化并同步全部连接； 有效 multiline 变更解除本绑定。



| 名称 | 说明 |
|---|---|
| `` | 状态句柄无效或未携带文本规则 |

### clearTextBinding

```cpp
Input & clearTextBinding() &
```

解除文本模型绑定，保留当前文本与规则配置；重复调用无操作。

### placeholder

```cpp
Input & placeholder(const char *p) &
```

设置占位提示文本

| 参数 | 说明 |
|---|---|
| `p` | UTF-8 编码 |

### placeholder

```cpp
Input & placeholder(const LocalizedText &p) &
```

绑定随语言更新的占位提示，保留输入内容；普通 placeholder 调用替换此绑定。

### passwordMode

```cpp
Input & passwordMode(bool p) &
```

设置密码模式

### readOnly

```cpp
Input & readOnly(bool enabled) &
```

设置只读状态，保留聚焦、选择、复制和滚动。

只读时 undo、redo、canUndo、canRedo 返回 false；历史保留。 text、clear、insertText 的程序调用仍可更新内容。 进入只读时取消未提交的输入法组合。

### isReadOnly

```cpp
bool isReadOnly() const
```

查询只读状态，未初始化时返回 false。

### multiline

```cpp
Input & multiline(bool m, Notify notify=Notify::No) &
```

运行时切换多行/单行模式

### horizontalScroll

```cpp
Input & horizontalScroll(bool h) &
```

运行时设置横向滚动条，仅多行模式有效

| 参数 | 说明 |
|---|---|
| `h` | true 时禁用自动折行 |

### clear

```cpp
Input & clear(Notify notify=Notify::No) &
```

清空输入内容

### undo

```cpp
bool undo(Notify notify=Notify::No)
```

执行撤销

**返回值：** 密码模式下始终返回 false

### redo

```cpp
bool redo(Notify notify=Notify::No)
```

执行重做

**返回值：** 密码模式下始终返回 false

### canUndo

```cpp
bool canUndo() const
```

是否可撤销

### canRedo

```cpp
bool canRedo() const
```

是否可重做

### multiCursor

```cpp
Input & multiCursor(bool enabled) &
```

设置是否允许附加选区和多光标输入，默认使用 Alt/Option 点击添加光标。

### multiCursorModifier

```cpp
Input & multiCursorModifier(InputMultiCursorModifier modifier) &
```

设置添加多光标时使用的鼠标修饰键，非桌面后端无效果。

### selection

```cpp
InputSelection selection() const
```

获取主选区，位置为 UTF-8 字节偏移。

### selections

```cpp
std::vector< InputSelection > selections() const
```

获取全部选区，非桌面后端返回主选区。

### addSelection

```cpp
Input & addSelection(InputSelection sel) &
```

添加选区。

| 参数 | 说明 |
|---|---|
| `sel` | 超出文本或落在 UTF-8 字符内部的位置会向前校正。 |

### clearAdditionalSelections

```cpp
Input & clearAdditionalSelections() &
```

删除附加选区并保留主选区。

### selectAll

```cpp
Input & selectAll() &
```

选择全部文本。

### clearSelection

```cpp
Input & clearSelection() &
```

折叠主选区并删除附加选区。

### selectedText

```cpp
std::string selectedText() const
```

获取主选区文本。

### insertText

```cpp
Input & insertText(const std::string &t, Notify notify=Notify::No) &
```

在选区处插入文本并替换选中内容。

### cursorPos

```cpp
int32_t cursorPos() const
```

获取主光标的 UTF-8 字节偏移。

### cursorPos

```cpp
Input & cursorPos(int32_t bytePos) &
```

设置主光标的 UTF-8 字节偏移并清除选区。

| 参数 | 说明 |
|---|---|
| `bytePos` | 超出文本或落在 UTF-8 字符内部的位置会向前校正。 |
