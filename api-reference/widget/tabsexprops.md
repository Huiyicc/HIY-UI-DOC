---
title: "TabsExProps"
---

# TabsExProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tabs_ex.h>`

**命名空间：** `hiyui`

会话标签卡片创建属性。

## 公开成员

### activeIndex

```cpp
int activeIndex
```

初始激活标签索引。

### width

```cpp
int width
```

宽度，HIYUI_AUTO 表示填满父容器。

### height

```cpp
int height
```

容器高度，单位为主题逻辑像素。

### fontSize

```cpp
int fontSize
```

标题字号，0 表示使用主题默认字体。

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT 表示跟随主题。

### activeBg

```cpp
uint32_t activeBg
```

激活背景色，HIYUI_DEFAULT 表示跟随主题。

### indicatorColor

```cpp
uint32_t indicatorColor
```

指示条颜色，HIYUI_DEFAULT 表示使用主题 Primary。

### indicatorSide

```cpp
TabIndicatorSide indicatorSide
```

指示条位置。

### animated

```cpp
bool animated
```

是否启用激活指示条和定位滚动动画。
