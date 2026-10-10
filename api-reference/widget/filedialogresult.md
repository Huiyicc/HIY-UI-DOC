---
title: "FileDialogResult"
---

# FileDialogResult <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/file_dialog.h>`

**命名空间：** `hiyui`

文件对话框结果

## 公开成员

### paths

```cpp
std::vector< std::string > paths
```

选中的文件/目录路径

## 公开方法

### path

```cpp
const std::string & path() const
```

获取第一个选中路径，便捷方法

**返回值：** 第一个路径，无选中时返回空字符串
