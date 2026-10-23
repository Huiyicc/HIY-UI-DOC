---
title: "chat_list.h"
---

# chat_list.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/chat_list.h>`

Chat message list with virtual rendering

Supports text, image, system, and time messages, rich text bubbles, avatars, grouping, and virtual scrolling.

## Enums

### hiyui_chat_align_t

| Value | Description |
|---|---|
| `HIYUI_CHAT_ALIGN_LEFT` = 0 |  |
| `HIYUI_CHAT_ALIGN_RIGHT` |  |
| `HIYUI_CHAT_ALIGN_CENTER` |  |

### hiyui_chat_item_type_t

| Value | Description |
|---|---|
| `HIYUI_CHAT_ITEM_TEXT` = 0 |  |
| `HIYUI_CHAT_ITEM_IMAGE` |  |
| `HIYUI_CHAT_ITEM_SYSTEM` |  |
| `HIYUI_CHAT_ITEM_TIME` |  |

### hiyui_chat_status_t

| Value | Description |
|---|---|
| `HIYUI_CHAT_STATUS_NONE` = 0 |  |
| `HIYUI_CHAT_STATUS_SENDING` |  |
| `HIYUI_CHAT_STATUS_SENT` |  |
| `HIYUI_CHAT_STATUS_DELIVERED` |  |
| `HIYUI_CHAT_STATUS_READ` |  |
| `HIYUI_CHAT_STATUS_FAILED` |  |

## Functions

### hiyui_chat_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_chat_list_create(hiyui_widget_t *parent, const hiyui_chat_list_props_t *props)
```

Creates a chat list; a NULL props uses all defaults

### hiyui_chat_add_message

```c
HIYUI_API void HIYUI_CALL hiyui_chat_add_message(hiyui_widget_t *cl, const hiyui_chat_item_t *item)
```

Appends one message

### hiyui_chat_add_messages

```c
HIYUI_API void HIYUI_CALL hiyui_chat_add_messages(hiyui_widget_t *cl, const hiyui_chat_item_t *items, int count)
```

Appends messages in bulk

### hiyui_chat_prepend_messages

```c
HIYUI_API void HIYUI_CALL hiyui_chat_prepend_messages(hiyui_widget_t *cl, const hiyui_chat_item_t *items, int count)
```

Prepends messages in bulk, for history

### hiyui_chat_clear

```c
HIYUI_API void HIYUI_CALL hiyui_chat_clear(hiyui_widget_t *cl)
```

Clears all messages

### hiyui_chat_begin_update

```c
HIYUI_API void HIYUI_CALL hiyui_chat_begin_update(hiyui_widget_t *cl)
```

Starts a batch update; layout is not refreshed during it

### hiyui_chat_end_update

```c
HIYUI_API void HIYUI_CALL hiyui_chat_end_update(hiyui_widget_t *cl)
```

Ends a batch update and refreshes layout

### hiyui_chat_scroll_to_bottom

```c
HIYUI_API void HIYUI_CALL hiyui_chat_scroll_to_bottom(hiyui_widget_t *cl, int animate)
```

Scrolls to the bottom; a non-zero animate value enables animation

### hiyui_chat_scroll_to_top

```c
HIYUI_API void HIYUI_CALL hiyui_chat_scroll_to_top(hiyui_widget_t *cl, int animate)
```

Scrolls to the top

### hiyui_chat_is_at_bottom

```c
HIYUI_API int HIYUI_CALL hiyui_chat_is_at_bottom(hiyui_widget_t *cl)
```

Whether the list is already at the bottom

### hiyui_chat_on_bubble_click

```c
HIYUI_API void HIYUI_CALL hiyui_chat_on_bubble_click(hiyui_widget_t *cl, void(HIYUI_CALL *cb)(const hiyui_chat_item_t *item, int idx, void *ud), void *ud)
```

Bubble click callback; item fields borrow internal storage and are valid inside the callback

### hiyui_chat_on_bubble_long_press

```c
HIYUI_API void HIYUI_CALL hiyui_chat_on_bubble_long_press(hiyui_widget_t *cl, void(HIYUI_CALL *cb)(const hiyui_chat_item_t *item, int idx, void *ud), void *ud)
```

Bubble long-press callback

### hiyui_chat_on_scroll_to_top

```c
HIYUI_API void HIYUI_CALL hiyui_chat_on_scroll_to_top(hiyui_widget_t *cl, void(HIYUI_CALL *cb)(void *ud), void *ud)
```

Scroll-to-top callback, used to load more history

### hiyui_chat_message_count

```c
HIYUI_API int HIYUI_CALL hiyui_chat_message_count(hiyui_widget_t *cl)
```

Total message count

### hiyui_chat_message_at

```c
HIYUI_API int HIYUI_CALL hiyui_chat_message_at(hiyui_widget_t *cl, int idx, hiyui_chat_item_t *out)
```

Copies the message at idx into out; returns 1 on success and 0 when out of range; fields borrow internal storage, valid until the next call
