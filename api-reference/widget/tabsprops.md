---
title: "TabsProps"
---

# TabsProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tabs.h>`

**命名空间：** `hiyui`

标签页创建属性

## 公开成员

### activeIndex

```cpp
int activeIndex
```

初始激活标签索引

### position

```cpp
TabPosition position
```

标签栏位置

### tabBarHeight

```cpp
int tabBarHeight
```

标签栏高度

### width

```cpp
int width
```

组件宽度，HIYUI_AUTO = 填满父容器

### height

```cpp
int height
```

组件高度，HIYUI_AUTO = 内容自适应

### activeColor

```cpp
uint32_t activeColor
```

激活标签颜色，HIYUI_DEFAULT = 跟随主题 Primary

### inactiveColor

```cpp
uint32_t inactiveColor
```

未激活标签颜色，HIYUI_DEFAULT = 跟随主题 TextSecondary

### bg

```cpp
uint32_t bg
```

背景色，HIYUI_DEFAULT = 跟随主题

### fontSize

```cpp
int fontSize
```

字体大小，0 = 使用主题默认值

### maxVisibleTabs

```cpp
int maxVisibleTabs
```

最大可见标签数，超过则水平滚动。0 = 自动根据宽度计算
