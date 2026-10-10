---
title: "TabsState"
---

# TabsState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tabs.h>`

**命名空间：** `hiyui`

标签页运行时状态，生命周期跟随 LVGL 对象

## 公开成员

### indicatorLine

```cpp
lv_obj_t * indicatorLine
```

底部指示线，雪茄型

### hoverLine

```cpp
lv_obj_t * hoverLine
```

hover 指示线，低对比度

### animX

```cpp
lv_anim_t animX
```

指示线 X 位置动画

### animW

```cpp
lv_anim_t animW
```

指示线宽度动画

### indicatorX

```cpp
int indicatorX
```

指示线当前 X

### indicatorWidth

```cpp
int indicatorWidth
```

指示线当前宽度

### indicatorY

```cpp
int indicatorY
```

垂直标签栏下指示线当前 Y

### indicatorHeight

```cpp
int indicatorHeight
```

垂直标签栏下指示线当前高度

### activeIdx

```cpp
int activeIdx
```

当前激活标签索引

### itemDataList

```cpp
std::vector< int > itemDataList
```

各标签用户绑定数据

### tabBar

```cpp
lv_obj_t * tabBar
```

标签栏对象引用

### tabView

```cpp
lv_obj_t * tabView
```

tabview 对象引用

### pressedBtnIdx

```cpp
int pressedBtnIdx
```

正在按下的 tab 索引，-1 = 无

### stretching

```cpp
bool stretching
```

指示线是否处于拉伸态

### activeCol

```cpp
uint32_t activeCol
```

已解析的激活色

### inactiveCol

```cpp
uint32_t inactiveCol
```

已解析的非激活色

### pos

```cpp
TabPosition pos
```

当前所在的标签位置

### leftArrow

```cpp
lv_obj_t * leftArrow
```

左侧溢出滚动箭头

### rightArrow

```cpp
lv_obj_t * rightArrow
```

右侧溢出滚动箭头

### leftArrowIcon

```cpp
lv_obj_t * leftArrowIcon
```

左侧箭头图标对象

### rightArrowIcon

```cpp
lv_obj_t * rightArrowIcon
```

右侧箭头图标对象

### scrollClip

```cpp
lv_obj_t * scrollClip
```

裁剪容器

### overflowing

```cpp
bool overflowing
```

是否处于溢出状态

### destroying

```cpp
bool destroying
```

析构中，回调应跳过处理

### scrollOffset

```cpp
int scrollOffset
```

当前 scrollX 偏移

### animScroll

```cpp
lv_anim_t animScroll
```

滚动动画实例

### initTimer

```cpp
lv_timer_t * initTimer
```

初始定位一次性 timer

### resizeTimer

```cpp
lv_timer_t * resizeTimer
```

尺寸变化后延迟定位一次性 timer
