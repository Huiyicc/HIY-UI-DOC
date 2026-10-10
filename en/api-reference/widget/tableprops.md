---
title: "TableProps"
---

# TableProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/table.h>`

**Namespace:** `hiyui`

Table creation properties

## Public Members

### bordered

```cpp
bool bordered
```

Show border lines

### striped

```cpp
bool striped
```

Striped rows

### showHeader

```cpp
bool showHeader
```

Show header

### rowSelection

```cpp
bool rowSelection
```

Row selection mode with checkboxes

### selectable

```cpp
bool selectable
```

Drag-select a cell region and copy TSV text

### indentSize

```cpp
int indentSize
```

Tree indent in pixels

### maxHeight

```cpp
int maxHeight
```

Maximum height, effective when height=HIYUI_AUTO. 0 = unlimited

### scrollX

```cpp
int scrollX
```

Total width for horizontal scrolling. &gt;0 enables horizontal scrolling

### footer

```cpp
const char * footer
```

Footer text
