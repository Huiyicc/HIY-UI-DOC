---
title: "TableColumn"
---

# TableColumn <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/table.h>`

**Namespace:** `hiyui`

Table column configuration

## Public Members

### title

```cpp
const char * title
```

Header text

### dataIndex

```cpp
const char * dataIndex
```

Data field identifier

### width

```cpp
int width
```

Column width, 0 = proportional

### minWidth

```cpp
int minWidth
```

Minimum column width

### ellipsis

```cpp
bool ellipsis
```

Ellipsis on text overflow

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Header icon codepoint

### fixed

```cpp
ColumnFixed fixed
```

Fixed column side

### sorter

```cpp
std::function< int(int, int)> sorter
```

Sort comparison: (rowIndexA, rowIndexB) -&gt; int (&lt;0, 0, &gt;0)

### colSpan

```cpp
int colSpan
```

Header column span

### editorType

```cpp
CellEditorType editorType
```

Editor type

### dropdownOptions

```cpp
std::vector< std::string > dropdownOptions
```

Dropdown option list, used when editorType=Dropdown.

### resizable

```cpp
bool resizable
```

Column width adjustable by dragging

### editorFactory

```cpp
TableEditorFactory editorFactory
```

Custom editor factory. Builds widgets inside the host and updates values through the session.

### customRender

```cpp
std::function< void(DrawCtx &, int, Rect, int)> customRender
```

Custom cell render callback

### localizedTitle

```cpp
std::optional< LocalizedText > localizedTitle
```

When set it overrides the original text and updates on language switch. The description is copied when passed to the widget.
