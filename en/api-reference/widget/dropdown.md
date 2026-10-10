---
title: "Dropdown"
---

# Dropdown <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/dropdown.h>`

**Namespace:** `hiyui`

Dropdown selection widget

**See also:** `DropdownProps`

**Inherits:** `hiyui::Chainable< Dropdown >`

## Types

### SearchMatcher

```cpp
using hiyui::Dropdown::SearchMatcher = std::function<bool(const std::string &itemText,
                                          const std::string &query)>
```

Search matcher slot; returning true keeps the option

## Public Methods

### placeholder

```cpp
Dropdown & placeholder(const char *value) &
```

Sets the placeholder text; nullptr restores the default. Plain text unbinds the language binding and keeps the current value.

### placeholder

```cpp
Dropdown & placeholder(LocalizedText value) &
```

Binds the placeholder text, copying the text and arguments and updating with the language.

### itemText

```cpp
Dropdown & itemText(int index, const char *value) &
```

Updates the text of one item without firing the selection event. Out-of-range index does nothing; nullptr shows empty text. index is zero based. Replacing the whole collection clears the binding.

### itemText

```cpp
Dropdown & itemText(int index, LocalizedText value) &
```

Binds item text; switching the language keeps the collection content and selection state.

### part

```cpp
Dropdown & part(DropdownPart part, Part customization) &
```

Replaces the customization of one part; callable before init; an empty Part restores defaults. Style overrides last until the widget is destroyed and keep working after theme and DPI changes and part rebuilds. For Item the activation callback runs before selection and index is the option index; other parts support style only.

### Dropdown

```cpp
Dropdown(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Dropdown

```cpp
Dropdown(DropdownProps props={})
```

Aggregate construction from properties

Dropdown properties, supports aggregate initialization

### init

```cpp
Dropdown & init(lv_obj_t *parent) &
```

Creates the LVGL object under a parent

Parent LVGL object pointer This component

### init

```cpp
Dropdown & init(Widget &parent) &
```

Creates the LVGL object under a parent

Parent LVGL object pointer This component

### items

```cpp
Dropdown & items(const std::vector< DropdownItem > &items, Notify notify=Notify::No) &
```

Sets the option list

Option list This component By default the replacement is silent. An out-of-range previous selection is cleared. An open list closes first. The no-selection state is HIYUI_NO_SELECTION and the closed state shows the placeholder.

### selectedIndex

```cpp
Dropdown & selectedIndex(int idx, Notify notify=Notify::No) &
```

Sets the selected index

Selected item index This component

### selectedIndex

```cpp
int selectedIndex() const
```

Returns the current selected index

Index of the selected item

### itemData

```cpp
int itemData(int index) const
```

Returns the user bound data of one option.

Option index, same semantics as selectedIndex(). The item data value; returns 0 when the index is out of range.

### open

```cpp
Dropdown & open() &
```

Opens the dropdown list

This component

### close

```cpp
Dropdown & close() &
```

Closes the dropdown list

This component

### editable

```cpp
Dropdown & editable(bool enabled) &
```

Sets editable mode

true = the closed state accepts free-text input This component

### editable

```cpp
bool editable() const
```

Queries editable mode

Whether editable mode is active

### searchEnabled

```cpp
Dropdown & searchEnabled(bool enabled) &
```

Sets the search filter toggle; an open list closes immediately

true = enable search This component

### searchEnabled

```cpp
bool searchEnabled() const
```

Queries the search filter toggle

Whether search is enabled

### searchMatcher

```cpp
Dropdown & searchMatcher(SearchMatcher matcher) &
```

Sets the search matcher slot

Returning true keeps the option; passing empty restores the default matcher This component

### text

```cpp
std::string text() const
```

Returns the current text

Editable mode returns the input text; non-editable returns the selected item text, or an empty string with no selection

### text

```cpp
Dropdown & text(const std::string &t, Notify notify=Notify::No) &
```

Sets the text; only effective in editable mode

New text This component By default the set is silent. Text exactly equal to an option restores the matching selected index.
