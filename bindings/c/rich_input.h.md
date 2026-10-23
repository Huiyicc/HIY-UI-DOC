---
title: "rich_input.h"
---

# rich_input.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/rich_input.h>`

富文本编辑器，支持内联图片、@提及、选区、撤销重做

## 函数

### hiyui_rich_input_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_rich_input_create(hiyui_widget_t *parent, const hiyui_rich_input_props_t *props)
```

创建富文本编辑器，props 为 NULL 时全默认

### hiyui_rich_input_insert_text

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_insert_text(hiyui_widget_t *ri, const char *text, hiyui_notify_t notify)
```

在光标处插入文本，内部自动归一化 emoji

### hiyui_rich_input_insert_image

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_insert_image(hiyui_widget_t *ri, const void *src, int h, hiyui_notify_t notify)
```

在光标处插入图片，src 可为文件路径字符串或 lv_image_dsc_t*；须在编辑器存活期有效

### hiyui_rich_input_insert_mention

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_insert_mention(hiyui_widget_t *ri, const char *id, const char *display, hiyui_notify_t notify)
```

在光标处插入 @提及节点

### hiyui_rich_input_plain_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_rich_input_plain_text(hiyui_widget_t *ri)
```

纯文本，借用内部，下次调用前有效

### hiyui_rich_input_length

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_length(hiyui_widget_t *ri)
```

文档字符数（图片/提及各算 1，非 UTF-8 字节数）

### hiyui_rich_input_empty

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_empty(hiyui_widget_t *ri)
```

### hiyui_rich_input_clear

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_clear(hiyui_widget_t *ri, hiyui_notify_t notify)
```

### hiyui_rich_input_get_html

```c
HIYUI_API const char *HIYUI_CALL hiyui_rich_input_get_html(hiyui_widget_t *ri)
```

导出 HTML，借用内部，下次调用前有效；仅文件路径图片可导出

### hiyui_rich_input_set_html

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_html(hiyui_widget_t *ri, const char *html, hiyui_notify_t notify)
```

以 HTML 整体替换内容，未知标签被忽略并保留文本

### hiyui_rich_input_set_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_nodes(hiyui_widget_t *ri, const hiyui_rich_node_t *nodes, int count, hiyui_notify_t notify)
```

整体替换节点数组

### hiyui_rich_input_node_count

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_node_count(hiyui_widget_t *ri)
```

节点总数，并建立内部快照供 node_at 借用

### hiyui_rich_input_node_at

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_node_at(hiyui_widget_t *ri, int idx, hiyui_rich_node_t *out)
```

取指定节点到 out，成功返回 1；字段借用内部，下次调用前有效

### hiyui_rich_input_cursor_pos

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_cursor_pos(hiyui_widget_t *ri)
```

光标位置，UTF-8 字节偏移，内联对象占 3 字节

### hiyui_rich_input_set_cursor_pos

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_cursor_pos(hiyui_widget_t *ri, int pos)
```

### hiyui_rich_input_has_selection

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_has_selection(hiyui_widget_t *ri)
```

### hiyui_rich_input_selected_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_rich_input_selected_text(hiyui_widget_t *ri)
```

选中区域纯文本，借用内部，下次调用前有效

### hiyui_rich_input_select_all

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_select_all(hiyui_widget_t *ri)
```

### hiyui_rich_input_clear_selection

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_clear_selection(hiyui_widget_t *ri)
```

### hiyui_rich_input_undo

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_undo(hiyui_widget_t *ri, hiyui_notify_t notify)
```

### hiyui_rich_input_redo

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_redo(hiyui_widget_t *ri, hiyui_notify_t notify)
```

### hiyui_rich_input_can_undo

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_can_undo(hiyui_widget_t *ri)
```

### hiyui_rich_input_can_redo

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_can_redo(hiyui_widget_t *ri)
```

### hiyui_rich_input_set_placeholder

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_placeholder(hiyui_widget_t *ri, const char *text)
```

### hiyui_rich_input_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_on_change(hiyui_widget_t *widget, void(HIYUI_CALL *cb)(void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

内容变化回调

### hiyui_rich_input_char_format_at

```c
HIYUI_API hiyui_rich_char_format_t HIYUI_CALL hiyui_rich_input_char_format_at(hiyui_widget_t *ri)
```

查询光标处字符格式；ri 为 NULL 时返回全默认值。

### hiyui_rich_input_apply_char_format

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_apply_char_format(hiyui_widget_t *ri, const hiyui_rich_char_format_t *fmt, hiyui_notify_t notify)
```

对选区或 subsequently 输入应用字符格式。

### hiyui_rich_input_set_block_format

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_block_format(hiyui_widget_t *ri, const hiyui_rich_block_format_t *fmt, hiyui_notify_t notify)
```

对选区所在段落应用段落格式。
