---
title: "List"
---

# List <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/list.h>`

**Namespace:** `hiyui`

List widget with virtual table rendering

Based on the VirtualTableBase row object pool, creating lv_obj_t only for rows visible in the viewport. While scrolling, row objects are reused and rebound to new data.



**See also:** `ListProps`


**See also:** `ListItem`

**Inherits:** `hiyui::VirtualTableBase< List >`

## Types

### ListEventType

List internal event types

| Value | Description |
|---|---|
| `Activate` |  |
| `Select` | Selection changed |

## Public Methods

### List

```cpp
List(lv_obj_t *raw)
```

Wraps an existing LVGL object

### List

```cpp
List(ListProps props={})
```

Aggregate construction from properties

### init

```cpp
List & init(lv_obj_t *parent) &
```

Creates the LVGL object under a parent

### init

```cpp
List & init(Widget &parent) &
```

Creates the LVGL object under a parent

### items

```cpp
List & items(const std::vector< ListItem > &listItems, Notify notify=Notify::No) &
```

Sets the list items in batch

### selectedIndex

```cpp
List & selectedIndex(int idx, Notify notify=Notify::No) &
```

Sets the selected item

User-side logical index, excluding separators

### selectedIndex

```cpp
int selectedIndex() const
```

Returns the current selected item index

Selected item index, -1 = no selection

### itemData

```cpp
int itemData(int logicalIdx) const
```

Returns the user bound data of one item.

Logical index matching the onSelect callback index, excluding separators. The item data value; returns 0 when the index is out of range.

### onActivate

```cpp
List & onActivate(F &&f, EventHandle *handle=nullptr) &
```

Binds the item activation event callback; repeated binds append

Callable type with signature void(int) Receives the logical index of the activated item Optional out parameter receiving the unbind handle of this binding

### hoverBg

```cpp
List & hoverBg(ThemeRole role) &
```

Binds the hover background color to a theme semantic role, updated automatically on theme switch

### selectedBg

```cpp
List & selectedBg(ThemeRole role) &
```

Binds the selected item background color to a theme semantic role, updated automatically on theme switch

### textColor

```cpp
List & textColor(ThemeRole role) &
```

Binds the text color to a theme semantic role, updated automatically on theme switch

### selectedTextColor

```cpp
List & selectedTextColor(ThemeRole role) &
```

Binds the selected item text color to a theme semantic role, updated automatically on theme switch

### itemCount

```cpp
int itemCount() const
```

Returns the total data item count, excluding separators

### appendItem

```cpp
List & appendItem(const ListItem &item, Notify notify=Notify::No) &
```

Appends one data item

During beginUpdate only the data changes; endUpdate refreshes once. Outside beginUpdate each append refreshes immediately.

### beginUpdate

```cpp
List & beginUpdate() &
```

Pauses view refresh for batch operations

### endUpdate

```cpp
List & endUpdate() &
```

Resumes view refresh and updates immediately

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(ListEventType type)
```

Returns the list internal event code.
