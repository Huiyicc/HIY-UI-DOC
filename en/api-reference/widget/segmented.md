---
title: "Segmented"
---

# Segmented <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/segmented.h>`

**Namespace:** `hiyui`

Segmented control widget

Predefines multiple members; the thumb animates between them on click; individual items can be disabled.



**See also:** `SegmentedProps`


**See also:** `SegmentedItem`

**Inherits:** `hiyui::Chainable< Segmented >`

## Types

### SegmentedEventType

Segmented control internal event types

| Value | Description |
|---|---|
| `Changed` | Selection changed |

## Public Methods

### itemText

```cpp
Segmented & itemText(int index, const char *value) &
```

Update the text of one item without firing the selection event; out-of-range indexes do nothing; nullptr shows empty text. index is zero-based. Replacing the whole collection clears bindings.

### itemText

```cpp
Segmented & itemText(int index, LocalizedText value) &
```

Bind item text; switching language keeps the items and the selection.

### Segmented

```cpp
Segmented(lv_obj_t *raw)
```

Wrap an existing LVGL object

### Segmented

```cpp
Segmented(SegmentedProps props={})
```

Aggregate construct from properties

### init

```cpp
Segmented & init(lv_obj_t *parent) &
```

Create the LVGL object on a parent

### init

```cpp
Segmented & init(Widget &parent) &
```

Create the LVGL object on a parent

### items

```cpp
Segmented & items(const std::vector< SegmentedItem > &items, Notify notify=Notify::No) &
```

Set or replace the item list; dynamic loading is supported

The selection is kept while the current index is still valid and selectable; otherwise an available item is selected.

### items

```cpp
Segmented & items(std::initializer_list< const char * > texts, Notify notify=Notify::No) &
```

Shortcut to set plain-text items

### selectedIndex

```cpp
Segmented & selectedIndex(int idx, Notify notify=Notify::No) &
```

Switch the selected item programmatically

### selectedIndex

```cpp
int selectedIndex() const
```

Get the current selected index

### itemData

```cpp
int itemData(int idx) const
```

Get the user data bound to an item.

Item index, matching the onChange callback index. The item data value; 0 when the index is out of range.

### onChange

```cpp
Segmented & onChange(F &&f, EventHandle *handle=nullptr) &
```

Register the change event callback; repeated binds append

Callback; its argument is the new selected index Optional out parameter receiving the unbind handle of this binding

### disableItem

```cpp
Segmented & disableItem(int idx, bool disable=true, Notify notify=Notify::No) &
```

Disable or enable an item at runtime

### activeColor

```cpp
Segmented & activeColor(ThemeRole role) &
```

Bind the selected item text color to a theme semantic role; updates automatically on theme change

### activeBg

```cpp
Segmented & activeBg(ThemeRole role) &
```

Bind the selected item thumb background color to a theme semantic role; updates automatically on theme change

### textColor

```cpp
Segmented & textColor(ThemeRole role) &
```

Bind the unselected item text color to a theme semantic role; updates automatically on theme change

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(SegmentedEventType type)
```

Get the internal event code of the segmented control.
