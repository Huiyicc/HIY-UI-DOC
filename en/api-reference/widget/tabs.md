---
title: "Tabs"
---

# Tabs <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/tabs.h>`

**Namespace:** `hiyui`

Tabs component laying out a tab bar and content panels

**See also:** `TabsProps`

**Inherits:** `hiyui::Chainable< Tabs >`

## Public Methods

### itemText

```cpp
Tabs & itemText(int index, const char *value) &
```

Updates the text of the given item without emitting a selection event. Out-of-range indexes do nothing; nullptr shows empty text. The index is zero-based. Replacing the whole set clears bindings.

### itemText

```cpp
Tabs & itemText(int index, LocalizedText value) &
```

Binds item text; the set and the selection are preserved across language switches.

### Tabs

```cpp
Tabs(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Tabs

```cpp
Tabs(TabsProps props={})
```

Aggregate construction from properties

### init

```cpp
Tabs & init(lv_obj_t *parent) &
```

Creates the tabs on a parent object

### init

```cpp
Tabs & init(Widget &parent) &
```

Creates the tabs on a parent object

### activeIndex

```cpp
Tabs & activeIndex(int idx, Notify notify=Notify::No) &
```

Switches to the given tab

### activeIndex

```cpp
int activeIndex() const
```

Returns the current active tab index

Returns HIYUI_NO_SELECTION when the set is empty.

### itemData

```cpp
int itemData(int idx) const
```

Returns the user data bound to the given tab.

Tab index, matching the activeIndex() indexing. The item data value; 0 when the index is out of range.

### items

```cpp
Tabs & items(const std::vector< TabItem > &items, Notify notify=Notify::No) &
```

Replaces all tabs and destroys the old pages and their content.

Text is copied before returning; Refs to old pages become invalid.

### appendItems

```cpp
Tabs & appendItems(const std::vector< TabItem > &items, Notify notify=Notify::No) &
```

Appends tabs; existing pages and their content are kept.

### position

```cpp
Tabs & position(TabPosition pos) &
```

Switches the tab bar position at runtime

### tabPanel

```cpp
Tabs & tabPanel(int idx, F &&builder) &
```

Fills the tab panel content through a callback

Callable type with signature void(Widget&amp;); the argument is the Widget wrapper of the panel

### tabContent

```cpp
lv_obj_t * tabContent(int idx) const
```

Returns the content panel of the given tab

### activeColor

```cpp
Tabs & activeColor(ThemeRole role) &
```

Binds the active tab color to a theme semantic role; updates automatically on theme switch.

### inactiveColor

```cpp
Tabs & inactiveColor(ThemeRole role) &
```

Binds the inactive tab color to a theme semantic role; updates automatically on theme switch.
