---
title: "RichInput"
---

# RichInput <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/rich_input.h>`

**命名空间：** `hiyui`

**继承自：** `hiyui::Chainable< RichInput >`

## 类型定义

### RichInputEventType

富文本输入框内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 内容变化 |
| `Submit` | Enter 提交 |

## 公开方法

### insertText

```cpp
RichInput & insertText(const std::string &text, Notify notify=Notify::No) &
```

插入文本，格式继承光标左侧字符，有选区时先删除选区

### insertImage

```cpp
RichInput & insertImage(const void *src, int h=70, Notify notify=Notify::No) &
```

在光标处插入图片

| 参数 | 说明 |
|---|---|
| `src` | 文件路径字符串或 lv_image_dsc_t*；GIF 取首帧静态图 |
| `h` | 图片目标高度，逻辑像素 |

### plainText

```cpp
std::string plainText() const
```

纯文本，mention 输出 `@display`，图片输出源文本，其余内联对象输出空格

### length

```cpp
int length() const
```

**返回值：** 字符数，内联对象各计 1

### cursorPos

```cpp
int cursorPos() const
```

光标位置，UTF-8 字节偏移，内联对象占 3 字节

### selectedText

```cpp
std::string selectedText() const
```

选区纯文本，语义同 `plainText()`

### applyCharFormat

```cpp
RichInput & applyCharFormat(const RichCharFormat &fmt, Notify notify=Notify::No) &
```

对选区应用字符格式；无选区时记录为后续输入的格式，光标移动后失效

### charFormatAt

```cpp
RichCharFormat charFormatAt() const
```

光标处生效的格式：有选区时为选区首字符格式，无选区时为新输入将继承的格式

### charFormatAt

```cpp
RichCharFormat charFormatAt(int bytePos) const
```

| 参数 | 说明 |
|---|---|
| `bytePos` | UTF-8 字节偏移 |

### setBlockFormat

```cpp
RichInput & setBlockFormat(const RichBlockFormat &fmt, Notify notify=Notify::No) &
```

对与选区相交的段落应用格式，无选区时作用于光标所在段落

### blockFormatAt

```cpp
RichBlockFormat blockFormatAt(int bytePos) const
```

| 参数 | 说明 |
|---|---|
| `bytePos` | UTF-8 字节偏移 |

### onChange

```cpp
RichInput & onChange(F &&f, EventHandle *handle=nullptr) &
```

注册内容变化回调，重复绑定追加

### onSubmit

```cpp
RichInput & onSubmit(F &&f, EventHandle *handle=nullptr) &
```

注册提交回调，重复绑定追加；注册后 Enter 触发回调且不插入换行， Shift+Enter 插入换行；未注册时 Enter 插入换行

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(RichInputEventType type)
```

获取富文本输入框内部事件码。
