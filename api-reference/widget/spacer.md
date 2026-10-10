---
title: "Spacer"
---

# Spacer <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/spacer.h>`

**命名空间：** `hiyui`

弹性空白组件，flex-grow = 1

在 VBox/HBox 中自动占据剩余空间，常用于将组件推到两端。



**参见：** `VBox`


**参见：** `HBox`

**继承自：** `hiyui::Chainable< Spacer >`

## 公开方法

### Spacer

```cpp
Spacer(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Spacer

```cpp
Spacer()
```

默认构造，创建一个 flex-grow=1 的空白对象

### init

```cpp
Spacer & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL 对象

### init

```cpp
Spacer & init(Widget &parent) &
```

在父对象上创建 LVGL 对象
