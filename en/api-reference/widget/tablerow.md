---
title: "TableRow"
---

# TableRow <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/table.h>`

**Namespace:** `hiyui`

Table row data

cells stores cell text in column order. Rows with disabled=true cannot be selected.

## Public Members

### cells

```cpp
std::vector< std::string > cells
```

Cell text, indexed by column

### disabled

```cpp
bool disabled
```

Whether selection is disabled

### userData

```cpp
void * userData
```

User-defined data

### spans

```cpp
std::vector< CellSpan > spans
```

Cell span configuration, same length as cells

### expanded

```cpp
bool expanded
```

Expanded state

### children

```cpp
std::vector< TableRow > children
```

Child rows

### depth_

```cpp
int depth_
```

Nesting depth, computed internally

### expandedContent

```cpp
std::function< int(Widget &, int)> expandedContent
```

Expanded content callback. Returns the height of the created child object
