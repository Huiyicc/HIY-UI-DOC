---
title: "FileDialogResult"
---

# FileDialogResult <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/file_dialog.h>`

**Namespace:** `hiyui`

File dialog result

## Public Members

### paths

```cpp
std::vector< std::string > paths
```

Selected file or directory paths

## Public Methods

### path

```cpp
const std::string & path() const
```

Returns the first selected path, convenience method

The first path, an empty string when nothing is selected
