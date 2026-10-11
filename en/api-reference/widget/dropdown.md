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

Search matcher slot, returning true keeps the option

## Public Methods

### placeholder

```cpp
Dropdown & placeholder(const char *value) &
```

Sets the placeholder text, nullptr restores the default. Plain text unbinds localization and keeps the current value.

### placeholder

```cpp
Dropdown & placeholder(LocalizedText value) &
```

Binds the placeholder text, the text and parameters are copied and update with the language.

### itemText

```cpp
Dropdown & itemText(int index, const char *value) &
```

Updates the text of the given item without firing selection events, out-of-range indices are ignored and nullptr shows empty text. index is 0-based. The binding is cleared when the whole item set is replaced.

### itemText

```cpp
Dropdown & itemText(int index, LocalizedText value) &
```

Binds item text, the set contents and selection state are kept across language changes.

### part

```cpp
Dropdown & part(DropdownPart part, Part customization) &
```

Replaces the customization of the given part, callable before initialization, a default Part value restores defaults. Style overrides last until the component is destroyed and keep effect across theme and DPI changes and part rebuilds. The Item activation callback runs before selection, index is the option index. Other parts support style only.

### Dropdown

```cpp
Dropdown(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Dropdown

```cpp
Dropdown(DropdownProps props={})
```

Constructs through aggregate property initialization

Dropdown selection properties, aggregate initialization supported

### init

```cpp
Dropdown & init(lv_obj_t *parent) &
```

Creates the LVGL object on the parent

Parent LVGL object pointer This component

### init

```cpp
Dropdown & init(Widget &parent) &
```

Creates the LVGL object on the parent

Parent LVGL object pointer This component

### items

```cpp
Dropdown & items(const std::vector< DropdownItem > &items, Notify notify=Notify::No) &
```

Sets the option list

Option list This component By default replacement is silent, the selection is cleared when the previous index is out of range, and an open list is closed first. The no-selection state is HIYUI_NO_SELECTION, the closed state shows the placeholder.

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

Index of the currently selected item

### itemData

```cpp
int itemData(int index) const
```

Returns the user-bound data of the given option.

Option index, consistent with selectedIndex(). The data value of the item, 0 when the index is out of range.

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

true = free text can be typed while closed This component

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

Sets the search filter toggle, an open list is closed immediately

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

Return true to keep the option, passing empty restores the default matcher This component

### textColor

```cpp
uint32_t textColor() const
```

Queries the text color

Current text color of the root

### textColor

```cpp
Dropdown & textColor(uint32_t color) &
```

Sets the text color

Color, HIYUI_DEFAULT = restore the default This component In editable mode the internal input area is updated as well.

### textColor

```cpp
Dropdown & textColor(ThemeRole role) &
```

Sets the text color from a theme role

This component In editable mode the internal input area is updated as well.

### fontSize

```cpp
Dropdown & fontSize(int size) &
```

Sets the font size

Font size, HIYUI_DEFAULT_INT = restore the default This component In editable mode the internal input area is updated as well.

### style

```cpp
Dropdown & style(const Style &s) &
```

Applies a style

This component Font size and text color fields are synced to the internal input area.

### text

```cpp
std::string text() const
```

Returns the current text

Editable mode returns the typed text, non-editable mode returns the selected item text, and an empty string when nothing is selected

### text

```cpp
Dropdown & text(const std::string &t, Notify notify=Notify::No) &
```

Sets the text, effective only in editable mode

New text This component By default the set is silent, text exactly matching an option restores the corresponding selected index.
