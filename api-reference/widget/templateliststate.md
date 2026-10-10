---
title: "TemplateListState"
---

# TemplateListState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/template_list.h>`

**命名空间：** `hiyui`

`TemplateList` 运行时状态，生命周期跟随 LVGL 对象

## 公开成员

### updating

```cpp
bool updating
```

beginUpdate 期间为 true，暂停视图刷新

### expandedIdx

```cpp
int expandedIdx
```

当前展开行索引，-1 = 无展开

### animatingHeight

```cpp
int animatingHeight
```

动画中间值，0 = 非动画中

### animListObj

```cpp
lv_obj_t * animListObj
```

动画回调中使用的列表对象
