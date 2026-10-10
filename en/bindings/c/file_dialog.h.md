---
title: "file_dialog.h"
---

# file_dialog.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/file_dialog.h>`

Native file selection dialog

Call on the Application UI thread; input texts and filters are copied during the call. Opening is non-blocking and the result callback runs at most once in a later UI main-loop iteration; unsupported platforms return HIYUI_FILE_DIALOG_ERROR. Undelivered results are discarded at application exit, and calls after the main loop stops do nothing. ud is owned by the caller and must stay valid until the callback runs or the application exits.

## Enums

### hiyui_file_dialog_mode_t

| Value | Description |
|---|---|
| `HIYUI_FILE_DIALOG_OPEN_FILE` = 0 |  |
| `HIYUI_FILE_DIALOG_OPEN_FILES` |  |
| `HIYUI_FILE_DIALOG_SAVE_FILE` |  |
| `HIYUI_FILE_DIALOG_SELECT_FOLDER` |  |

### hiyui_file_dialog_status_t

| Value | Description |
|---|---|
| `HIYUI_FILE_DIALOG_OK` = 0 |  |
| `HIYUI_FILE_DIALOG_CANCELLED` |  |
| `HIYUI_FILE_DIALOG_ERROR` |  |

## Type Aliases

### hiyui_file_dialog_result_fn

```c
typedef void(* hiyui_file_dialog_result_fn) (hiyui_file_dialog_status_t status, const char *const *paths, int count, void *ud)
```

Result callback; the paths array is valid inside the callback, deep-copy it to keep it

## Functions

### hiyui_file_dialog_open

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_open(const hiyui_file_dialog_props_t *props, hiyui_file_dialog_result_fn cb, void *ud)
```

General entry point

### hiyui_file_dialog_open_file

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_open_file(hiyui_file_dialog_result_fn cb, void *ud, const hiyui_file_filter_t *filters, int filter_count, const char *default_path)
```

Convenience entry for single file selection

### hiyui_file_dialog_save_file

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_save_file(hiyui_file_dialog_result_fn cb, void *ud, const char *default_filename, const hiyui_file_filter_t *filters, int filter_count, const char *default_path)
```

Convenience entry for saving a file

### hiyui_file_dialog_select_folder

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_select_folder(hiyui_file_dialog_result_fn cb, void *ud, const char *default_path)
```

Convenience entry for folder selection
