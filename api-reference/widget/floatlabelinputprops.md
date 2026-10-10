---
title: "FloatLabelInputProps"
---

# FloatLabelInputProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/float_label_input.h>`

**命名空间：** `hiyui`

浮动标签输入框创建属性

## 公开成员

### label

```cpp
const char * label
```

浮动标签文本；创建时为空则使用 input.placeholder

### input

```cpp
InputProps input
```

内部 `Input` 属性

### animated

```cpp
bool animated
```

是否启用标签位置和缩放动画
