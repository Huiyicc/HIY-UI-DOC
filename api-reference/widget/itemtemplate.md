---
title: "ItemTemplate"
---

# ItemTemplate <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/item_template.h>`

**命名空间：** `hiyui`

数据驱动的 Item 模板

| 名称 | 说明 |
|---|---|
| `T` | 数据模型类型 |

由 `TemplateList` / Grid 等组件消费。

## 公开方法

### height

```cpp
ItemTemplate & height(int h)
```

设置 item 高度

### stateStyle

```cpp
ItemTemplate & stateStyle(const ItemStateStyle &s)
```

设置四状态样式

### builder

```cpp
ItemTemplate & builder(BuilderFn fn)
```

设置 UI 构建函数

首次渲染时为每条数据调用此函数，在 item 行容器内构建子组件。

### updater

```cpp
ItemTemplate & updater(UpdaterFn fn)
```

设置数据刷新函数，可选

数据更新时调用，保留现有 UI 树。 不设置时默认销毁重建。

### onItemClick

```cpp
ItemTemplate & onItemClick(ClickFn fn)
```

设置 item 点击回调

### onItemDoubleClick

```cpp
ItemTemplate & onItemDoubleClick(ClickFn fn)
```

设置 item 双击回调

### expandedHeight

```cpp
ItemTemplate & expandedHeight(int h)
```

设置展开后行高，0 = 不启用展开模式

### detailBuilder

```cpp
ItemTemplate & detailBuilder(BuilderFn fn)
```

设置展开状态的 UI 构建函数
