---
title: "TableEditor"
---

# TableEditor <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/table_editor.h>`

**Namespace:** `hiyui`

A non-owning table editing session that can be captured by value. All operations must run on the UI thread. It becomes invalid after editing ends, when the edit area is deleted, or when the table data structure changes. Invalid sessions cannot modify data.

## Public Methods

### valid

```cpp
bool valid() const
```

Whether the session and its edit area are still valid.

### row

```cpp
int row() const
```

Get the flattened data row index. Returns -1 when invalid.

### column

```cpp
int column() const
```

Get the column index. Returns -1 when invalid.

### inlineEditing

```cpp
bool inlineEditing() const
```

Whether it is inline editing with immediate write-back. Returns false when invalid.

### value

```cpp
std::string value() const
```

Get a copy of the current draft. Returns an empty string when invalid.

### setValue

```cpp
bool setValue(std::string value) const
```

Update the edit value. Inline editing writes back immediately, explicit editing saves a draft.

Returns false when invalid. Returns true without notifying again when the value is unchanged.

### commit

```cpp
bool commit() const
```

Commit the current cell or whole-row edit. Inline editing stays open. Returns false when invalid.

### cancel

```cpp
bool cancel() const
```

Discard the current cell or whole-row draft. Inline editing does not roll back already written data. Returns false when invalid.
