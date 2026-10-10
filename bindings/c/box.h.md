---
title: "box.h"
---

# box.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/box.h>`

无布局纯容器，对齐 hiyui::Box

子组件手动定位（hiyui_wdg_pos），不参与父布局排列。

## 函数

### hiyui_box_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_box_create(hiyui_widget_t *parent, const hiyui_box_props_t *props)
```
