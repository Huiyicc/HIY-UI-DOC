---
title: "pal::DisplayBackend"
---

# pal::DisplayBackend <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/pal.h>`

**命名空间：** `hiyui`

显示后端接口，封装平台相关的窗口创建/销毁/属性设置

由各平台实现，通过 `pal::display()` 获取当前平台的实例。

## 公开成员

### create

```cpp
_lv_display_t *(* create
```

创建指定尺寸的显示对象

### destroy

```cpp
void(* destroy
```

销毁显示对象并释放资源

### setTitle

```cpp
void(* setTitle
```

设置窗口标题，UTF-8
