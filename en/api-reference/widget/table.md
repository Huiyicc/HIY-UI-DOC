---
title: "Table"
---

# Table <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/table.h>`

**Namespace:** `hiyui`

Virtualized table widget that renders only visible rows

**Inherits:** `hiyui::VirtualTableBase< Table >`

## Types

### TableEventType

Table internal event types

| Value | Description |
|---|---|
| `RowClick` | Row clicked |
| `Select` | Selection changed |
| `SortChange` | Sorting changed |
| `CellEdit` | Cell edit committed |

## Public Methods

### part

```cpp
Table & part(TablePart part, Part customization) &
```

Replaces the customization of the given part. Callable before init; a default-constructed Part restores the default. Style overrides persist until the widget is destroyed and remain effective across theme and DPI changes and part rebuilds. In the Header click callback, column is the column index and the selection column is HIYUI_NO_SELECTION. In the Row activation callback, index is the flattened data row index; on keyboard activation column is the focused column, otherwise HIYUI_NO_SELECTION. Footer supports styles only.

### footer

```cpp
Table & footer(const char *text) &
```

Sets the footer text and copies the input. Creates the footer before init; after init only updates an existing footer. A null pointer clears the text and unbinds the translation.

### footer

```cpp
Table & footer(const LocalizedText &text) &
```

Binds the footer translation and copies the description. Creates the footer before init; after init only updates an existing footer.

### bordered

```cpp
Table & bordered(bool b) &
```

Toggles the border at runtime

### striped

```cpp
Table & striped(bool b) &
```

Toggles striped rows at runtime

### tableSize

```cpp
Table & tableSize(TableSize s) &
```

Toggles the size density at runtime

### multiSort

```cpp
Table & multiSort(const std::vector< std::pair< int, SortDirection > > &keys) &
```

Performs multi-column sorting in key array order

### selectedRowIndices

```cpp
std::vector< int > selectedRowIndices() const
```

Returns the raw indices of selected rows

### onRowClick

```cpp
Table & onRowClick(F &&f, EventHandle *handle=nullptr) &
```

Row click callback: void(int rowIdx). Repeated bindings are appended

### onChange

```cpp
Table & onChange(F &&f, EventHandle *handle=nullptr) &
```

Selection change callback: void(const std::vector&lt;int&gt;&amp;). Repeated bindings are appended

### onSortChange

```cpp
Table & onSortChange(F &&f, EventHandle *handle=nullptr) &
```

Sort change callback: void(const char* dataIndex, SortDirection dir). Repeated bindings are appended

### onCellEdit

```cpp
Table & onCellEdit(F &&f, EventHandle *handle=nullptr) &
```

Cell edit callback: void(int flatRow, int col, oldVal, newVal). Repeated bindings are appended

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(TableEventType type)
```

Gets the table internal event code.
