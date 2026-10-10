---
title: "MessageBoxProps"
---

# MessageBoxProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/message_box.h>`

**命名空间：** `hiyui`

信息弹窗创建属性

## 公开成员

### title

```cpp
const char * title
```

弹窗标题

### content

```cpp
const char * content
```

弹窗内容

### confirmText

```cpp
const char * confirmText
```

nullptr 使用随语言变化的确认文案。

### width

```cpp
int width
```

弹窗宽度，单位主题逻辑像素

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### popupMode

```cpp
PopupMode popupMode
```

弹出模式，默认窗口内 overlay
