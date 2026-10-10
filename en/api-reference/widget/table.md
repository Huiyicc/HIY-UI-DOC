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

Internal table event types

| Value | Description |
|---|---|
| `RowClick` | Row clicked |
| `Select` | Selection changed |
| `SortChange` | Sort changed |
| `CellEdit` | Cell edit committed |

## Public Methods

### part

```cpp
Table & part(TablePart part, Part customization) &
```

Replace the customization of the given part. Can be called before initialization. A default-constructed Part restores the default. Style overrides are kept until the widget is destroyed and stay in effect across theme changes, DPI changes and part rebuilds. For the Header click callback, column is the column index and the selection column is HIYUI_NO_SELECTION. For the Row activate callback, index is the flattened data row index, column is the focus column on keyboard activation and HIYUI_NO_SELECTION otherwise. The Footer supports styling only.

### footer

```cpp
Table & footer(const char *text) &
```

Set the footer text, copying the input. Before initialization the footer is created. After initialization only an existing footer is updated. A null pointer clears the text and unbinds the translation.

### footer

```cpp
Table & footer(const LocalizedText &text) &
```

Bind the footer translation, copying the description. Before initialization the footer is created. After initialization only an existing footer is updated.

### bordered

```cpp
Table & bordered(bool b) &
```

Toggle borders at runtime

### striped

```cpp
Table & striped(bool b) &
```

Toggle zebra stripes at runtime

### tableSize

```cpp
Table & tableSize(TableSize s) &
```

Toggle the size density at runtime

### multiSort

```cpp
Table & multiSort(const std::vector< std::pair< int, SortDirection > > &keys) &
```

Run a multi-column sort in key array order

### selectedRowIndices

```cpp
std::vector< int > selectedRowIndices() const
```

Get the original indices of the selected rows

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

Get the internal table event code.
