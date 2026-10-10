---
title: "TrayProps"
---

# TrayProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/system_tray.h>`

**命名空间：** `hiyui`

托盘创建属性

## 公开成员

### tooltip

```cpp
const char * tooltip
```

悬停提示，UTF-8

### icon

```cpp
TrayIcon icon
```

图标来源

### iconSrc

```cpp
const lv_image_dsc_t * iconSrc
```

ARGB8888 图像，仅 Custom；创建期间读取

### iconSize

```cpp
int iconSize
```

图标边长，物理像素；0 = 平台当前小图标尺寸
