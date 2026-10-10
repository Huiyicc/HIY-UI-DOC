---
title: "ItemTemplate"
---

# ItemTemplate <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/item_template.h>`

**Namespace:** `hiyui`

Data-driven item template

Data model type Consumed by components such as TemplateList and Grid.

## Public Methods

### height

```cpp
ItemTemplate & height(int h)
```

Sets the item height

### stateStyle

```cpp
ItemTemplate & stateStyle(const ItemStateStyle &s)
```

Sets the four-state style

### builder

```cpp
ItemTemplate & builder(BuilderFn fn)
```

Sets the UI builder function

Called for each data item on first render to build child widgets inside the item row container.

### updater

```cpp
ItemTemplate & updater(UpdaterFn fn)
```

Sets the optional data refresh function

Called on data updates and keeps the existing UI tree. When unset, the default behavior destroys and rebuilds.

### onItemClick

```cpp
ItemTemplate & onItemClick(ClickFn fn)
```

Sets the item click callback

### onItemDoubleClick

```cpp
ItemTemplate & onItemDoubleClick(ClickFn fn)
```

Sets the item double-click callback

### expandedHeight

```cpp
ItemTemplate & expandedHeight(int h)
```

Sets the expanded row height, 0 = expansion mode disabled

### detailBuilder

```cpp
ItemTemplate & detailBuilder(BuilderFn fn)
```

Sets the UI builder function for the expanded state
