---
title: "TemplateListBase"
---

# TemplateListBase <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/template_list.h>`

**命名空间：** `hiyui`

`TemplateList` 公共基类

**继承自：** `hiyui::VirtualTableBase< Derived >`

## 保护方法

### initBase

```cpp
void initBase(lv_obj_t *parent)
```

创建 LVGL 容器并配置基础样式

## protected-static-func

### applyVisual

```cpp
static void applyVisual(lv_obj_t *row, const ItemVisual &v, bool propagateText)
```

对 item 行应用指定 `ItemVisual`

### propagateTextColor

```cpp
static void propagateTextColor(lv_obj_t *row, uint32_t color)
```

递归设置 item 行内所有 label 的文字色

### makeChildrenPassthrough

```cpp
static void makeChildrenPassthrough(lv_obj_t *parent)
```

递归设置非 `Button` 子对象为事件透传

### clearRow

```cpp
static void clearRow(lv_obj_t *row)
```

清空行内所有子对象
