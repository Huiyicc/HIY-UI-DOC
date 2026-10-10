---
title: "FloatLabelInput"
---

# FloatLabelInput <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/float_label_input.h>`

**命名空间：** `hiyui`

使用 outlined 样式和浮动标签的文本输入框

标签在输入框为空且未聚焦时显示在输入区域内；获得焦点或存在文本时， 标签移动到边框左上方并缩小。



**参见：** `FloatLabelInputProps`


**参见：** `Input`

**继承自：** `hiyui::Chainable< FloatLabelInput >`

## 公开方法

### FloatLabelInput

```cpp
FloatLabelInput(lv_obj_t *raw)
```

包装已有浮动标签输入框对象

### FloatLabelInput

```cpp
FloatLabelInput(FloatLabelInputProps props={})
```

通过属性聚合构造

### init

```cpp
FloatLabelInput & init(lv_obj_t *parent) &
```

在父对象上创建浮动标签输入框

### init

```cpp
FloatLabelInput & init(Widget &parent) &
```

在父对象上创建浮动标签输入框

### input

```cpp
Input & input()
```

获取内部 `Input`

**返回值：** 生命周期与当前组件一致

### input

```cpp
const Input & input() const
```

获取内部 `Input`

**返回值：** 生命周期与当前组件一致

### text

```cpp
FloatLabelInput & text(const std::string &t, Notify notify=Notify::No) &
```

设置当前文本

### text

```cpp
FloatLabelInput & text(const char *t, Notify notify=Notify::No) &
```

设置当前文本

### text

```cpp
std::string text() const
```

获取当前文本

### label

```cpp
FloatLabelInput & label(const char *t) &
```

设置浮动标签文本

| 参数 | 说明 |
|---|---|
| `t` | 传入空指针或空字符串隐藏标签 |

### label

```cpp
FloatLabelInput & label(const LocalizedText &text) &
```

绑定随语言更新的文案，复制描述；普通字符串调用替换此绑定。

### clear

```cpp
FloatLabelInput & clear(Notify notify=Notify::No) &
```

清空当前文本

### focus

```cpp
FloatLabelInput & focus() &
```

聚焦内部输入框

### addToGroup

```cpp
FloatLabelInput & addToGroup() &
```

将内部输入框加入默认输入组

### enabled

```cpp
FloatLabelInput & enabled(bool enabled=true) &
```

设置输入框是否可交互

### on

```cpp
FloatLabelInput & on(EventCode code, F &&handler, EventHandle *handle=nullptr) &
```

绑定输入事件，ValueChanged 的目标为当前组件，其他事件的目标为内部输入框

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onClick

```cpp
FloatLabelInput & onClick(F &&f, EventHandle *handle=nullptr) &
```

绑定内部输入框点击事件

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### onChange

```cpp
FloatLabelInput & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定文本变化事件，通用事件入口观察相同的提交

| 参数 | 说明 |
|---|---|
| `handle` | 可选出参，接收该绑定的解绑句柄 |
