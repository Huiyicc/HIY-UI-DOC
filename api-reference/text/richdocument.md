---
title: "RichDocument"
---

# RichDocument <Badge type="info" text="类" />

**头文件：** `#include <hiyui/text/rich_document.h>`

**命名空间：** `hiyui`

富文本文档

内部坐标为 UTF-8 字节偏移。`\n` 为块分隔符， 内联对象占 3 字节（U+FFFC）。编辑操作均进入撤销历史。

## 公开方法

### clear

```cpp
void clear()
```

清空全部内容，操作本身可撤销

### charLength

```cpp
int charLength() const
```

**返回值：** 码点数，内联对象各计 1

### plainText

```cpp
std::string plainText() const
```

纯文本，内联对象被移除，块分隔输出为 `\n`

### textBytes

```cpp
const char * textBytes() const
```

**返回值：** 文档字节缓冲，指针在下次编辑前有效

### insertText

```cpp
void insertText(int pos, const char *utf8, const RichCharFormat &fmt)
```

插入文本，文本中的 `\n` 生成块分隔，U+FFFC 被忽略

### insertObject

```cpp
void insertObject(int pos, RichNode object)
```

插入内联对象，payload 的 owned 图像所有权转移给文档

### charFormatAt

```cpp
RichCharFormat charFormatAt(int pos) const
```

**返回值：** 该位置左侧字符的格式，即新输入继承的格式；空文档返回默认格式

### setBlockFormat

```cpp
void setBlockFormat(int pos, int len, const RichBlockFormat &fmt)
```

设置与 [pos, pos+len) 相交的块的格式，len 为 0 时作用于 pos 所在块

### fragmentIndexAtByte

```cpp
int fragmentIndexAtByte(int pos) const
```

**返回值：** 覆盖字节 pos 的碎片索引，pos 等于文档长度时返回最后一个碎片，空文档返回 -1

### beginEditBlock

```cpp
void beginEditBlock()
```

beginEditBlock 与 endEditBlock 之间的编辑合并为一步撤销，成对调用

### endEditBlock

```cpp
void endEditBlock(bool allowMerge=true)
```

| 参数 | 说明 |
|---|---|
| `allowMerge` | false 时本编辑块不并入相邻的打字撤销步 |

### undo

```cpp
bool undo(int *cursorPos)
```

| 参数 | 说明 |
|---|---|
| `cursorPos` | 输出撤销后建议的光标字节位置，可空 |

### redo

```cpp
bool redo(int *cursorPos)
```

| 参数 | 说明 |
|---|---|
| `cursorPos` | 输出重做后建议的光标字节位置，可空 |
