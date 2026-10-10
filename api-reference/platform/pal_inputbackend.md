---
title: "pal::InputBackend"
---

# pal::InputBackend <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/platform/pal.h>`

**命名空间：** `hiyui`

输入后端接口，封装平台相关的输入设备创建

由各平台实现，通过 `pal::input()` 获取当前平台的实例。

## 公开成员

### createPointer

```cpp
_lv_indev_t *(* createPointer
```

为指定显示创建指针，鼠标/触摸输入设备

### createKeyboard

```cpp
_lv_indev_t *(* createKeyboard
```

为指定显示创建键盘输入设备
