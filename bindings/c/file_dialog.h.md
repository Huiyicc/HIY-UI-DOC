---
title: "file_dialog.h"
---

# file_dialog.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/file_dialog.h>`

原生文件选择对话框

在 Application 的 UI 线程调用，输入文本与 filters 在调用时复制。 非阻塞打开，结果回调在后续 UI 主循环中至多执行一次；不支持的平台返回 HIYUI_FILE_DIALOG_ERROR。应用退出时丢弃未交付的结果，主循环停止后调用无操作。 ud 由调用方持有，须在回调执行或应用退出前保持有效。

## 枚举

### hiyui_file_dialog_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_FILE_DIALOG_OPEN_FILE` = 0 |  |
| `HIYUI_FILE_DIALOG_OPEN_FILES` |  |
| `HIYUI_FILE_DIALOG_SAVE_FILE` |  |
| `HIYUI_FILE_DIALOG_SELECT_FOLDER` |  |

### hiyui_file_dialog_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_FILE_DIALOG_OK` = 0 |  |
| `HIYUI_FILE_DIALOG_CANCELLED` |  |
| `HIYUI_FILE_DIALOG_ERROR` |  |

## 类型别名

### hiyui_file_dialog_result_fn

```c
typedef void(HIYUI_CALL * hiyui_file_dialog_result_fn) (hiyui_file_dialog_status_t status, const char *const *paths, int count, void *ud)
```

结果回调，paths 数组在回调内有效，需持有请深拷贝

## 函数

### hiyui_file_dialog_open

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_open(const hiyui_file_dialog_props_t *props, hiyui_file_dialog_result_fn cb, void *ud)
```

通用入口

### hiyui_file_dialog_open_file

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_open_file(hiyui_file_dialog_result_fn cb, void *ud, const hiyui_file_filter_t *filters, int filter_count, const char *default_path)
```

单选文件便捷入口

### hiyui_file_dialog_save_file

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_save_file(hiyui_file_dialog_result_fn cb, void *ud, const char *default_filename, const hiyui_file_filter_t *filters, int filter_count, const char *default_path)
```

保存文件便捷入口

### hiyui_file_dialog_select_folder

```c
HIYUI_API void HIYUI_CALL hiyui_file_dialog_select_folder(hiyui_file_dialog_result_fn cb, void *ud, const char *default_path)
```

选择目录便捷入口
