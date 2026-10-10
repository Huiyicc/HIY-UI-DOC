---
title: "ToolButtonProps"
---

# ToolButtonProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tool_bar.h>`

**命名空间：** `hiyui`

工具按钮配置，尺寸使用主题逻辑像素，字符串和图片路径由组件复制，图片描述符借用至控件销毁。

## 公开成员

### radioGroup

```cpp
uint32_t radioGroup
```

同一工具条内相同值的 `Radio` 互斥，独立按钮按父容器分组。

### iconSize

```cpp
int iconSize
```

0 跟随工具条，独立使用时为 18。
