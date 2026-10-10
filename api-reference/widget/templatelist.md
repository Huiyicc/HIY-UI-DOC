---
title: "TemplateList"
---

# TemplateList <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/template_list.h>`

**命名空间：** `hiyui`

模板列表组件，虚表渲染

| 名称 | 说明 |
|---|---|
| `T` | 数据模型类型 |

**继承自：** `hiyui::TemplateListBase< TemplateList< T > >`

## 公开方法

### TemplateList

```cpp
TemplateList(lv_obj_t *raw)
```

包装已有 LVGL 对象

### data

```cpp
TemplateList & data(const std::vector< T > &items, Notify notify=Notify::No) &
```

设置数据并渲染

### onChange

```cpp
TemplateList & onChange(F &&f, EventHandle *handle=nullptr) &
```

绑定选择事件回调，重复绑定追加

### appendItem

```cpp
TemplateList & appendItem(const T &item, Notify notify=Notify::No) &
```

在列表末尾追加一条数据

仅更新数据和虚拟高度，不触发布局同步。 滚动事件或后续显式刷新时自动渲染。

### beginUpdate

```cpp
TemplateList & beginUpdate() &
```

暂停视图刷新，用于批量操作

### endUpdate

```cpp
TemplateList & endUpdate() &
```

恢复视图刷新并立即更新

### columnCount

```cpp
TemplateList & columnCount(int count) &
```

设置 Grid 固定列数，&lt;=0 表示按最小宽度自适应

### minItemWidth

```cpp
TemplateList & minItemWidth(int width) &
```

设置 Grid 自适应最小 item 宽度

### rowGap

```cpp
TemplateList & rowGap(int gap) &
```

设置 Grid 行间距，HIYUI_NONE_INT 表示复用 gap

### columnGap

```cpp
TemplateList & columnGap(int gap) &
```

设置 Grid 列间距，HIYUI_NONE_INT 表示复用 gap
