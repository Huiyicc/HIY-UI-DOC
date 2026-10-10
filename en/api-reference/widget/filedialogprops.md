---
title: "FileDialogProps"
---

# FileDialogProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/file_dialog.h>`

**Namespace:** `hiyui`

Creation properties of the file dialog

## Public Members

### mode

```cpp
FileDialogMode mode
```

Dialog mode

### title

```cpp
const char * title
```

Title, nullptr = platform default

### defaultPath

```cpp
const char * defaultPath
```

Initial directory

### defaultFilename

```cpp
const char * defaultFilename
```

Default file name, SaveFile only

### filters

```cpp
const FileFilter * filters
```

Filter array

### filterCount

```cpp
int filterCount
```

Number of filters
