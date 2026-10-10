---
title: "TemplateListBase"
---

# TemplateListBase <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/template_list.h>`

**Namespace:** `hiyui`

TemplateList common base class.

**Inherits:** `hiyui::VirtualTableBase< Derived >`

## Protected Methods

### initBase

```cpp
void initBase(lv_obj_t *parent)
```

Creates the LVGL container and applies the base style

## protected-static-func

### applyVisual

```cpp
static void applyVisual(lv_obj_t *row, const ItemVisual &v, bool propagateText)
```

Applies an ItemVisual to an item row

### propagateTextColor

```cpp
static void propagateTextColor(lv_obj_t *row, uint32_t color)
```

Recursively sets the text color of all labels in an item row

### makeChildrenPassthrough

```cpp
static void makeChildrenPassthrough(lv_obj_t *parent)
```

Recursively makes non-Button children pass events through

### clearRow

```cpp
static void clearRow(lv_obj_t *row)
```

Removes all children of a row
