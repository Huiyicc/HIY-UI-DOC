---
title: "ItemTemplate"
---

# ItemTemplate <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/item_template.h>`

**Namespace:** `hiyui`

Data-driven item template

The data model type Consumed by components such as TemplateList / Grid.

## Public Methods

### height

```cpp
ItemTemplate & height(int h)
```

Set the item height

### stateStyle

```cpp
ItemTemplate & stateStyle(const ItemStateStyle &s)
```

Set the four-state style

### builder

```cpp
ItemTemplate & builder(BuilderFn fn)
```

Set the UI builder function

Called for each data item on first render to build child widgets inside the item row container.

### updater

```cpp
ItemTemplate & updater(UpdaterFn fn)
```

Set the data refresh function, optional

Called on data updates, keeping the existing UI tree. When unset, the default is to destroy and rebuild.

### onItemClick

```cpp
ItemTemplate & onItemClick(ClickFn fn)
```

Set the item click callback

### onItemDoubleClick

```cpp
ItemTemplate & onItemDoubleClick(ClickFn fn)
```

Set the item double-click callback

### expandedHeight

```cpp
ItemTemplate & expandedHeight(int h)
```

Set the expanded row height, 0 = expansion mode disabled

### detailBuilder

```cpp
ItemTemplate & detailBuilder(BuilderFn fn)
```

Set the UI builder for the expanded state
