---
title: "SwitchProps"
---

# SwitchProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/switch.h>`

**命名空间：** `hiyui`

开关创建属性

## 公开成员

### checked

```cpp
bool checked
```

初始开关状态

### width

```cpp
int width
```

开关宽度

### height

```cpp
int height
```

开关高度

### onColor

```cpp
uint32_t onColor
```

打开时背景色，HIYUI_DEFAULT = 跟随主题 Primary

### offColor

```cpp
uint32_t offColor
```

关闭时背景色，HIYUI_DEFAULT = 跟随主题 SurfaceVariant

### knobColor

```cpp
uint32_t knobColor
```

滑块颜色，HIYUI_DEFAULT = 主题适配，亮主题白、暗主题浅灰
