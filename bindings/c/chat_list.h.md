---
title: "chat_list.h"
---

# chat_list.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/chat_list.h>`

聊天消息列表（虚表渲染）

支持文本/图片/系统/时间消息、富文本气泡、头像、分组、虚拟滚动。

## 枚举

### hiyui_chat_align_t

| 值 | 说明 |
|---|---|
| `HIYUI_CHAT_ALIGN_LEFT` = 0 |  |
| `HIYUI_CHAT_ALIGN_RIGHT` |  |
| `HIYUI_CHAT_ALIGN_CENTER` |  |

### hiyui_chat_item_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_CHAT_ITEM_TEXT` = 0 |  |
| `HIYUI_CHAT_ITEM_IMAGE` |  |
| `HIYUI_CHAT_ITEM_SYSTEM` |  |
| `HIYUI_CHAT_ITEM_TIME` |  |

### hiyui_chat_status_t

| 值 | 说明 |
|---|---|
| `HIYUI_CHAT_STATUS_NONE` = 0 |  |
| `HIYUI_CHAT_STATUS_SENDING` |  |
| `HIYUI_CHAT_STATUS_SENT` |  |
| `HIYUI_CHAT_STATUS_DELIVERED` |  |
| `HIYUI_CHAT_STATUS_READ` |  |
| `HIYUI_CHAT_STATUS_FAILED` |  |

## 函数

### hiyui_chat_list_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_chat_list_create(hiyui_widget_t *parent, const hiyui_chat_list_props_t *props)
```

创建聊天列表，props 为 NULL 时全默认

### hiyui_chat_add_message

```c
HIYUI_API void HIYUI_CALL hiyui_chat_add_message(hiyui_widget_t *cl, const hiyui_chat_item_t *item)
```

追加单条消息

### hiyui_chat_add_messages

```c
HIYUI_API void HIYUI_CALL hiyui_chat_add_messages(hiyui_widget_t *cl, const hiyui_chat_item_t *items, int count)
```

批量追加消息

### hiyui_chat_prepend_messages

```c
HIYUI_API void HIYUI_CALL hiyui_chat_prepend_messages(hiyui_widget_t *cl, const hiyui_chat_item_t *items, int count)
```

批量前置消息（历史消息）

### hiyui_chat_clear

```c
HIYUI_API void HIYUI_CALL hiyui_chat_clear(hiyui_widget_t *cl)
```

清空消息

### hiyui_chat_begin_update

```c
HIYUI_API void HIYUI_CALL hiyui_chat_begin_update(hiyui_widget_t *cl)
```

批量更新开始，期间不刷新布局

### hiyui_chat_end_update

```c
HIYUI_API void HIYUI_CALL hiyui_chat_end_update(hiyui_widget_t *cl)
```

批量更新结束，刷新布局

### hiyui_chat_scroll_to_bottom

```c
HIYUI_API void HIYUI_CALL hiyui_chat_scroll_to_bottom(hiyui_widget_t *cl, int animate)
```

滚动到底部，animate 非 0 带动画

### hiyui_chat_scroll_to_top

```c
HIYUI_API void HIYUI_CALL hiyui_chat_scroll_to_top(hiyui_widget_t *cl, int animate)
```

滚动到顶部

### hiyui_chat_is_at_bottom

```c
HIYUI_API int HIYUI_CALL hiyui_chat_is_at_bottom(hiyui_widget_t *cl)
```

是否已在底部

### hiyui_chat_on_bubble_click

```c
HIYUI_API void HIYUI_CALL hiyui_chat_on_bubble_click(hiyui_widget_t *cl, void(*cb)(const hiyui_chat_item_t *item, int idx, void *ud), void *ud)
```

气泡点击回调，item 字段借用内部，回调内有效

### hiyui_chat_on_bubble_long_press

```c
HIYUI_API void HIYUI_CALL hiyui_chat_on_bubble_long_press(hiyui_widget_t *cl, void(*cb)(const hiyui_chat_item_t *item, int idx, void *ud), void *ud)
```

气泡长按回调

### hiyui_chat_on_scroll_to_top

```c
HIYUI_API void HIYUI_CALL hiyui_chat_on_scroll_to_top(hiyui_widget_t *cl, void(*cb)(void *ud), void *ud)
```

滚动到顶部回调（用于加载更多历史）

### hiyui_chat_message_count

```c
HIYUI_API int HIYUI_CALL hiyui_chat_message_count(hiyui_widget_t *cl)
```

消息总数

### hiyui_chat_message_at

```c
HIYUI_API int HIYUI_CALL hiyui_chat_message_at(hiyui_widget_t *cl, int idx, hiyui_chat_item_t *out)
```

取指定消息到 out，成功返回 1，越界返回 0；字段借用内部，下次调用前有效
