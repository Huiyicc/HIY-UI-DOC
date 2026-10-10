---
title: "Segmented"
---

# Segmented <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/segmented.h>`

**Namespace:** `hiyui`

Segmented control component

Predefines multiple members; clicking switches the thumb with an animation, and individual items can be disabled.



**See also:** `SegmentedProps`


**See also:** `SegmentedItem`

**Inherits:** `hiyui::Chainable< Segmented >`

## Types

### SegmentedEventType

Segmented control internal event types

| Value | Description |
|---|---|
| `Changed` | Selected item changed |

## Public Methods

### itemText

```cpp
Segmented & itemText(int index, const char *value) &
```

Updates the text of the given item without emitting a selection event. Out-of-range indexes do nothing; nullptr shows empty text. The index is zero-based. Replacing the whole set clears bindings.

### itemText

```cpp
Segmented & itemText(int index, LocalizedText value) &
```

Binds item text; the set and the selection are preserved across language switches.

### Segmented

```cpp
Segmented(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Segmented

```cpp
Segmented(SegmentedProps props={})
```

Aggregate construction from properties

### init

```cpp
Segmented & init(lv_obj_t *parent) &
```

Creates the LVGL object on a parent

### init

```cpp
Segmented & init(Widget &parent) &
```

Creates the LVGL object on a parent

### items

```cpp
Segmented & items(const std::vector< SegmentedItem > &items, Notify notify=Notify::No) &
```

Sets or replaces the item list, supporting dynamic loading

The current selection is kept while its index is still valid and selectable; otherwise an available item is selected.

### items

```cpp
Segmented & items(std::initializer_list< const char * > texts, Notify notify=Notify::No) &
```

Shortcut to set plain-text items

### selectedIndex

```cpp
Segmented & selectedIndex(int idx, Notify notify=Notify::No) &
```

Switches the selected item programmatically

### selectedIndex

```cpp
int selectedIndex() const
```

Returns the current selected index

### itemData

```cpp
int itemData(int idx) const
```

Returns the user data bound to the given item.

Item index, matching the onChange callback index. The item data value; 0 when the index is out of range.

### onChange

```cpp
Segmented & onChange(F &&f, EventHandle *handle=nullptr) &
```

Registers a change callback; repeated bindings are appended

Callback; the argument is the newly selected index Optional output parameter receiving the unbind handle for this binding

### disableItem

```cpp
Segmented & disableItem(int idx, bool disable=true, Notify notify=Notify::No) &
```

Disables or enables the given item at runtime

### activeColor

```cpp
Segmented & activeColor(ThemeRole role) &
```

Binds the selected item text color to a theme semantic role; updates automatically on theme switch.

### activeBg

```cpp
Segmented & activeBg(ThemeRole role) &
```

Binds the selected item thumb background color to a theme semantic role; updates automatically on theme switch.

### textColor

```cpp
Segmented & textColor(ThemeRole role) &
```

Binds the unselected item text color to a theme semantic role; updates automatically on theme switch.

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(SegmentedEventType type)
```

Returns the internal event code of the segmented control.
