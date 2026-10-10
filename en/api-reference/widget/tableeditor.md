---
title: "TableEditor"
---

# TableEditor <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/table_editor.h>`

**Namespace:** `hiyui`

Non-owning table edit session. Can be captured by value. All operations must run on the UI thread. Invalidated when editing ends, the edit area is deleted, or the table data structure changes. An invalidated session cannot modify data.

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

Returns the flattened data row index. Returns -1 when invalid.

### column

```cpp
int column() const
```

Returns the column index. Returns -1 when invalid.

### inlineEditing

```cpp
bool inlineEditing() const
```

Whether this is inline editing that writes back immediately. Returns false when invalid.

### value

```cpp
std::string value() const
```

Returns a copy of the current draft. Returns an empty string when invalid.

### setValue

```cpp
bool setValue(std::string value) const
```

Updates the edit value. Inline editing writes back immediately; explicit editing saves a draft.

Returns false when invalid. Returns true without re-notifying when the value is unchanged.

### commit

```cpp
bool commit() const
```

Commits the current cell or whole-row edit. Inline editing stays enabled. Returns false when invalid.

### cancel

```cpp
bool cancel() const
```

Discards the current cell or whole-row draft. Inline editing does not roll back data already written back. Returns false when invalid.
