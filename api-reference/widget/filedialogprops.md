---
title: "FileDialogProps"
---

# FileDialogProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/file_dialog.h>`

**命名空间：** `hiyui`

文件对话框创建属性

## 公开成员

### mode

```cpp
FileDialogMode mode
```

对话框模式

### title

```cpp
const char * title
```

标题，nullptr = 平台默认

### defaultPath

```cpp
const char * defaultPath
```

初始目录

### defaultFilename

```cpp
const char * defaultFilename
```

默认文件名，SaveFile 专用

### filters

```cpp
const FileFilter * filters
```

筛选器数组

### filterCount

```cpp
int filterCount
```

筛选器数量
