---
title: "Tabs"
---

# Tabs <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tabs.h>`

**Namespace:** `hiyui`

Tabs widget laying out a tab bar and content panels

**See also:** `TabsProps`

**Inherits:** `hiyui::Chainable< Tabs >`

## Public Methods

### itemText

```cpp
Tabs & itemText(int index, const char *value) &
```

Update the text of one item without firing the selection event; out-of-range indexes do nothing; nullptr shows empty text. index is zero-based. Replacing the whole collection clears bindings.

### itemText

```cpp
Tabs & itemText(int index, LocalizedText value) &
```

Bind item text; switching language keeps the items and the selection.

### Tabs

```cpp
Tabs(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Tabs

```cpp
Tabs(TabsProps props={})
```

Aggregate construct from properties

### init

```cpp
Tabs & init(lv_obj_t *parent) &
```

Create the tabs on a parent object

### init

```cpp
Tabs & init(Widget &parent) &
```

Create the tabs on a parent object

### activeIndex

```cpp
Tabs & activeIndex(int idx, Notify notify=Notify::No) &
```

Switch to the given tab

### activeIndex

```cpp
int activeIndex() const
```

Get the current active tab index

Returns HIYUI_NO_SELECTION for an empty collection.

### itemData

```cpp
int itemData(int idx) const
```

Get the user data bound to a tab.

Tab index, matching the activeIndex() index. The item data value; 0 when the index is out of range.

### items

```cpp
Tabs & items(const std::vector< TabItem > &items, Notify notify=Notify::No) &
```

Replace all tabs and destroy the old pages and their content.

Text is copied before return; Refs to old pages become invalid.

### appendItems

```cpp
Tabs & appendItems(const std::vector< TabItem > &items, Notify notify=Notify::No) &
```

Append tabs; existing pages and their content are kept.

### position

```cpp
Tabs & position(TabPosition pos) &
```

Change the tab bar position at runtime

### tabPanel

```cpp
Tabs & tabPanel(int idx, F &&builder) &
```

Fill the tab panel content through a callback

Callable type, signature void(Widget&amp;); the argument is the Widget wrapper of the panel

### tabContent

```cpp
lv_obj_t * tabContent(int idx) const
```

Get the content panel of a tab

### activeColor

```cpp
Tabs & activeColor(ThemeRole role) &
```

Bind the active tab color to a theme semantic role; updates automatically on theme change

### inactiveColor

```cpp
Tabs & inactiveColor(ThemeRole role) &
```

Bind the inactive tab color to a theme semantic role; updates automatically on theme change
