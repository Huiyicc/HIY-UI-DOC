---
title: "FileDialog"
---

# FileDialog <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/file_dialog.h>`

**Namespace:** `hiyui`

Cross-platform file dialog, static interface only

Opens the platform native file picker and returns the result through a callback. Call on the UI thread that runs the Application main loop; calls after the main loop stops are no-ops. All text and filters are copied at call time; the callback is held by value and move-only closures are supported. The picker does not block the HIY-UI main loop; the result is delivered at most once in a later UI loop iteration, including cancellation and Error when the platform is unsupported. The result callback is not invoked before open() returns. Undelivered callbacks are released at application exit; an already open native picker is not guaranteed to be closed.

## Static Methods

### open

```cpp
static void open(FileDialogProps props, F &&callback)
```

Opens the file dialog

Callback type, signature void(const FileDialogResult&amp;)

### open

```cpp
static void open(const Ref< T > &owner, FileDialogProps props, F &&callback)
```

Opens the file dialog and binds the callback lifetime to the target widget. No-op when the target is unmounted or invalid; if the target becomes invalid while waiting, the callback is released and the result is discarded. owner only controls the callback lifetime and does not set the native parent window.

### openFile

```cpp
static void openFile(F &&cb, const FileFilter *filters=nullptr, int filterCount=0, const char *defaultPath=nullptr)
```

Opens a single file, convenience method

### saveFile

```cpp
static void saveFile(F &&cb, const char *defaultFilename=nullptr, const FileFilter *filters=nullptr, int filterCount=0, const char *defaultPath=nullptr)
```

Saves a file, convenience method

### selectFolder

```cpp
static void selectFolder(F &&cb, const char *defaultPath=nullptr)
```

Selects a directory, convenience method
