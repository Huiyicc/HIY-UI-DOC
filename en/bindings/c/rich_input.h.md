---
title: "rich_input.h"
---

# rich_input.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/rich_input.h>`

Rich text editor with inline images, mentions, selection, and undo/redo

## Functions

### hiyui_rich_input_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_rich_input_create(hiyui_widget_t *parent, const hiyui_rich_input_props_t *props)
```

Creates a rich text editor; NULL props uses all defaults

### hiyui_rich_input_insert_text

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_insert_text(hiyui_widget_t *ri, const char *text, hiyui_notify_t notify)
```

Inserts text at the cursor, normalizing emoji internally

### hiyui_rich_input_insert_image

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_insert_image(hiyui_widget_t *ri, const void *src, int h, hiyui_notify_t notify)
```

Inserts an image at the cursor. src can be a file path string or lv_image_dsc_t* and must stay valid for the editor lifetime.

### hiyui_rich_input_insert_mention

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_insert_mention(hiyui_widget_t *ri, const char *id, const char *display, hiyui_notify_t notify)
```

Inserts a mention node at the cursor

### hiyui_rich_input_plain_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_rich_input_plain_text(hiyui_widget_t *ri)
```

Returns the plain text. Borrows internal storage, valid until the next call.

### hiyui_rich_input_length

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_length(hiyui_widget_t *ri)
```

Document character count. Images and mentions each count as 1; this is not the UTF-8 byte count.

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

Exports HTML. Borrows internal storage, valid until the next call. Only file-path images are exported.

### hiyui_rich_input_set_html

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_html(hiyui_widget_t *ri, const char *html, hiyui_notify_t notify)
```

Replaces the content with HTML. Unknown tags are ignored and their text is kept.

### hiyui_rich_input_set_nodes

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_nodes(hiyui_widget_t *ri, const hiyui_rich_node_t *nodes, int count, hiyui_notify_t notify)
```

Replaces the whole node array

### hiyui_rich_input_node_count

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_node_count(hiyui_widget_t *ri)
```

Returns the node count and builds an internal snapshot for node_at to borrow.

### hiyui_rich_input_node_at

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_node_at(hiyui_widget_t *ri, int idx, hiyui_rich_node_t *out)
```

Copies the node at idx into out, returning 1 on success. Fields borrow internal storage, valid until the next call.

### hiyui_rich_input_cursor_pos

```c
HIYUI_API int HIYUI_CALL hiyui_rich_input_cursor_pos(hiyui_widget_t *ri)
```

Cursor position as a UTF-8 byte offset. Each inline object occupies 3 bytes.

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

Returns the plain text of the selection. Borrows internal storage, valid until the next call.

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
HIYUI_API int HIYUI_CALL hiyui_rich_input_on_change(hiyui_widget_t *widget, void(*cb)(void *), void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Content change callback

### hiyui_rich_input_char_format_at

```c
HIYUI_API hiyui_rich_char_format_t HIYUI_CALL hiyui_rich_input_char_format_at(hiyui_widget_t *ri)
```

Returns the character format at the cursor. A NULL ri returns all defaults.

### hiyui_rich_input_apply_char_format

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_apply_char_format(hiyui_widget_t *ri, const hiyui_rich_char_format_t *fmt, hiyui_notify_t notify)
```

Applies a character format to the selection or to subsequent input.

### hiyui_rich_input_set_block_format

```c
HIYUI_API void HIYUI_CALL hiyui_rich_input_set_block_format(hiyui_widget_t *ri, const hiyui_rich_block_format_t *fmt, hiyui_notify_t notify)
```

Applies a block format to the paragraph containing the selection.
