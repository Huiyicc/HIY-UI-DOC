---
title: "Carousel"
---

# Carousel <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/carousel.h>`

**命名空间：** `hiyui`

**继承自：** `hiyui::Chainable< Carousel >`

## 类型定义

### CarouselEventType

轮播内部事件类型

| 值 | 说明 |
|---|---|
| `Changed` | 页切换 |

## 公开方法

### addPage

```cpp
Carousel & addPage(const std::function< void(Widget &page)> &builder, Notify notify=Notify::No) &
```

追加页面；首次导航前按 startIndex 选择已存在的最近页面，导航后保留当前选择。

### onChange

```cpp
Carousel & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定页切换事件回调，重复绑定追加

| 参数 | 说明 |
|---|---|
| `f` | 回调函数，参数为新页索引 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |


**返回值：** 当前组件

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(CarouselEventType type)
```

获取轮播内部事件码。
