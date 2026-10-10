---
title: "TemplateList"
---

# TemplateList <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/template_list.h>`

**Namespace:** `hiyui`

Template list widget with virtual table rendering

Data model type

**Inherits:** `hiyui::TemplateListBase< TemplateList< T > >`

## Public Methods

### TemplateList

```cpp
TemplateList(lv_obj_t *raw)
```

Wraps an existing LVGL object

### data

```cpp
TemplateList & data(const std::vector< T > &items, Notify notify=Notify::No) &
```

Sets the data and renders

### onChange

```cpp
TemplateList & onChange(F &&f, EventHandle *handle=nullptr) &
```

Binds the selection event callback; repeated binds append

### appendItem

```cpp
TemplateList & appendItem(const T &item, Notify notify=Notify::No) &
```

Appends one item at the end of the list

Updates only the data and the virtual height without triggering layout sync. Rendering happens automatically on scroll events or a later explicit refresh.

### beginUpdate

```cpp
TemplateList & beginUpdate() &
```

Pauses view refresh for batch operations

### endUpdate

```cpp
TemplateList & endUpdate() &
```

Resumes view refresh and updates immediately

### columnCount

```cpp
TemplateList & columnCount(int count) &
```

Sets the Grid fixed column count; &lt;=0 means auto-fit by minimum width

### minItemWidth

```cpp
TemplateList & minItemWidth(int width) &
```

Sets the Grid auto-fit minimum item width

### rowGap

```cpp
TemplateList & rowGap(int gap) &
```

Sets the Grid row spacing; HIYUI_NONE_INT reuses gap

### columnGap

```cpp
TemplateList & columnGap(int gap) &
```

Sets the Grid column spacing; HIYUI_NONE_INT reuses gap
