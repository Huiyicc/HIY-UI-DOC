---
title: "terminal.h"
---

# terminal.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/terminal.h>`

## 枚举

### hiyui_terminal_input_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_TERMINAL_INPUT_TEXT` |  |
| `HIYUI_TERMINAL_INPUT_KEY` |  |
| `HIYUI_TERMINAL_INPUT_CHARACTER` |  |
| `HIYUI_TERMINAL_INPUT_PASTE` |  |
| `HIYUI_TERMINAL_INPUT_FOCUS` |  |
| `HIYUI_TERMINAL_INPUT_MOUSE` |  |

### hiyui_terminal_key_t

| 值 | 说明 |
|---|---|
| `HIYUI_TERMINAL_KEY_NONE` |  |
| `HIYUI_TERMINAL_KEY_ENTER` |  |
| `HIYUI_TERMINAL_KEY_TAB` |  |
| `HIYUI_TERMINAL_KEY_BACKSPACE` |  |
| `HIYUI_TERMINAL_KEY_ESCAPE` |  |
| `HIYUI_TERMINAL_KEY_UP` |  |
| `HIYUI_TERMINAL_KEY_DOWN` |  |
| `HIYUI_TERMINAL_KEY_LEFT` |  |
| `HIYUI_TERMINAL_KEY_RIGHT` |  |
| `HIYUI_TERMINAL_KEY_INSERT` |  |
| `HIYUI_TERMINAL_KEY_DELETE` |  |
| `HIYUI_TERMINAL_KEY_HOME` |  |
| `HIYUI_TERMINAL_KEY_END` |  |
| `HIYUI_TERMINAL_KEY_PAGE_UP` |  |
| `HIYUI_TERMINAL_KEY_PAGE_DOWN` |  |
| `HIYUI_TERMINAL_KEY_F1` = 257 |  |
| `HIYUI_TERMINAL_KEY_F2` |  |
| `HIYUI_TERMINAL_KEY_F3` |  |
| `HIYUI_TERMINAL_KEY_F4` |  |
| `HIYUI_TERMINAL_KEY_F5` |  |
| `HIYUI_TERMINAL_KEY_F6` |  |
| `HIYUI_TERMINAL_KEY_F7` |  |
| `HIYUI_TERMINAL_KEY_F8` |  |
| `HIYUI_TERMINAL_KEY_F9` |  |
| `HIYUI_TERMINAL_KEY_F10` |  |
| `HIYUI_TERMINAL_KEY_F11` |  |
| `HIYUI_TERMINAL_KEY_F12` |  |

## 类型别名

### hiyui_terminal_input_fn

```c
typedef void(* hiyui_terminal_input_fn) (const hiyui_terminal_input_t *input, void *user_data)
```

### hiyui_terminal_model_t

```c
typedef struct hiyui_terminal_model hiyui_terminal_model_t
```

### hiyui_terminal_data_fn

```c
typedef void(* hiyui_terminal_data_fn) (const char *data, size_t size, void *user_data)
```

数据仅在回调期间有效，可包含零字节；回调在 UI 线程调用。

### hiyui_terminal_resize_fn

```c
typedef void(* hiyui_terminal_resize_fn) (hiyui_terminal_size_t size, void *user_data)
```

## 函数

### hiyui_terminal_model_create

```c
HIYUI_API hiyui_terminal_model_t *HIYUI_CALL hiyui_terminal_model_create(hiyui_terminal_size_t size, int scrollback_lines)
```

创建无窗口 VT 模型；非正尺寸取 1，负历史行数取零，失败返回 NULL。

### hiyui_terminal_model_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_destroy(hiyui_terminal_model_t *model)
```

释放模型；NULL 无操作。

### hiyui_terminal_model_write

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_write(hiyui_terminal_model_t *model, const char *data, size_t size)
```

模型调用须串行化；NULL 模型或 NULL 数据无操作。

### hiyui_terminal_model_input

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_input(hiyui_terminal_model_t *model, const hiyui_terminal_input_t *input)
```

### hiyui_terminal_model_resize

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_resize(hiyui_terminal_model_t *model, hiyui_terminal_size_t size)
```

### hiyui_terminal_model_get_size

```c
HIYUI_API hiyui_terminal_size_t HIYUI_CALL hiyui_terminal_model_get_size(hiyui_terminal_model_t *model)
```

### hiyui_terminal_model_get_screen

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_model_get_screen(hiyui_terminal_model_t *model, char *buffer, size_t capacity)
```

返回所需长度；容量非零时复制至多 capacity-1 字节并补零，NULL 模型返回空值。

### hiyui_terminal_model_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_model_get_text(hiyui_terminal_model_t *model, char *buffer, size_t capacity)
```

返回所需长度；容量非零时复制至多 capacity-1 字节并补零，NULL 模型返回空值。

### hiyui_terminal_model_take_output

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_model_take_output(hiyui_terminal_model_t *model, void(*callback)(const char *, size_t, void *), void *user_data)
```

将所有待发送字节交给回调并清空；NULL 模型或回调无操作。

### hiyui_terminal_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_props_init(hiyui_terminal_props_t *props)
```

填入与 TerminalProps 一致的默认值；NULL 无操作。

### hiyui_terminal_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_terminal_create(hiyui_widget_t *parent, const hiyui_terminal_props_t *props)
```

在父组件中创建终端；父对象为 NULL 或创建失败时返回 NULL。

### hiyui_terminal_write

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_write(hiyui_widget_t *widget, const char *data, size_t size)
```

写入输出字节；NULL 组件、NULL 数据或零长度无操作。

### hiyui_terminal_paste

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_paste(hiyui_widget_t *widget, const char *data, size_t size)
```

发送粘贴文本；NULL 组件、NULL 数据或零长度无操作。

### hiyui_terminal_clear_scrollback

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_clear_scrollback(hiyui_widget_t *widget)
```

### hiyui_terminal_scroll_lines

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_scroll_lines(hiyui_widget_t *widget, int lines)
```

### hiyui_terminal_set_font_size

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_set_font_size(hiyui_widget_t *widget, int size)
```

### hiyui_terminal_copy_selection

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_copy_selection(hiyui_widget_t *widget)
```

### hiyui_terminal_get_terminal_size

```c
HIYUI_API hiyui_terminal_size_t HIYUI_CALL hiyui_terminal_get_terminal_size(hiyui_widget_t *widget)
```

NULL 组件返回零行零列。

### hiyui_terminal_set_terminal_size

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_set_terminal_size(hiyui_widget_t *widget, hiyui_terminal_size_t size)
```

固定网格；任一维非正恢复自动网格，NULL 组件无操作。

### hiyui_terminal_set_read_only

```c
HIYUI_API void HIYUI_CALL hiyui_terminal_set_read_only(hiyui_widget_t *widget, hiyui_bool_t value)
```

### hiyui_terminal_get_read_only

```c
HIYUI_API hiyui_bool_t HIYUI_CALL hiyui_terminal_get_read_only(hiyui_widget_t *widget)
```

NULL 组件返回 HIYUI_BOOL_FALSE。

### hiyui_terminal_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_get_text(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

返回所需字节数，不含结尾零；容量非零时最多复制 capacity-1 字节并补零。

### hiyui_terminal_get_title

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_get_title(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

返回所需字节数，不含结尾零；容量非零时最多复制 capacity-1 字节并补零。

### hiyui_terminal_get_selection_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_terminal_get_selection_text(hiyui_widget_t *widget, char *buffer, size_t capacity)
```

返回所需字节数，不含结尾零；容量非零时最多复制 capacity-1 字节并补零。

### hiyui_terminal_on_data

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_data(hiyui_widget_t *widget, hiyui_terminal_data_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

绑定发送事件；返回 1 表示成功，0 表示失败；遵循事件句柄与 destroy 所有权契约。

### hiyui_terminal_on_input

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_input(hiyui_widget_t *widget, hiyui_terminal_input_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

绑定原始用户输入，不含协议响应；所有权与返回值同 hiyui_terminal_on_data。

### hiyui_terminal_on_resize

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_resize(hiyui_widget_t *widget, hiyui_terminal_resize_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

绑定网格变化事件，所有权与返回值同 hiyui_terminal_on_data。

### hiyui_terminal_on_title_change

```c
HIYUI_API int HIYUI_CALL hiyui_terminal_on_title_change(hiyui_widget_t *widget, hiyui_terminal_data_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

绑定标题变化，UTF-8 字节仅在回调期间有效，所有权与返回值同 hiyui_terminal_on_data。
