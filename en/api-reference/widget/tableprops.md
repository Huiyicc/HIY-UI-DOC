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

Zebra stripes

### showHeader

```cpp
bool showHeader
```

Show the header

### rowSelection

```cpp
bool rowSelection
```

Row selection mode, checkboxes

### selectable

```cpp
bool selectable
```

Drag to select a cell area and copy TSV text

### indentSize

```cpp
int indentSize
```

Tree indentation in pixels

### maxHeight

```cpp
int maxHeight
```

Maximum height, effective when height=HIYUI_AUTO, 0 = unlimited

### scrollX

```cpp
int scrollX
```

Total horizontal scroll width. &gt;0 enables horizontal scrolling

### footer

```cpp
const char * footer
```

Footer text
