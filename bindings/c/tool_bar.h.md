---
title: "tool_bar.h"
---

# tool_bar.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/tool_bar.h>`

## 枚举

### hiyui_tool_orientation_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOL_HORIZONTAL` |  |
| `HIYUI_TOOL_VERTICAL` |  |

### hiyui_tool_overflow_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOL_OVERFLOW_MENU` |  |
| `HIYUI_TOOL_OVERFLOW_WRAP` |  |
| `HIYUI_TOOL_OVERFLOW_SCROLL` |  |

### hiyui_tool_overflow_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOL_AUTO` |  |
| `HIYUI_TOOL_NEVER` |  |
| `HIYUI_TOOL_ALWAYS` |  |

### hiyui_tool_button_kind_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOL_COMMAND` |  |
| `HIYUI_TOOL_TOGGLE` |  |
| `HIYUI_TOOL_RADIO` |  |
| `HIYUI_TOOL_DROPDOWN` |  |
| `HIYUI_TOOL_SPLIT` |  |

### hiyui_tool_check_state_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOL_OFF` |  |
| `HIYUI_TOOL_ON` |  |
| `HIYUI_TOOL_MIXED` |  |

### hiyui_tool_display_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOL_ICON_AND_TEXT` |  |
| `HIYUI_TOOL_ICON_ONLY` |  |
| `HIYUI_TOOL_TEXT_ONLY` |  |

## 类型别名

### hiyui_tool_menu_item_t

```c
typedef struct hiyui_tool_menu_item_s hiyui_tool_menu_item_t
```

菜单输入在 set_menu 调用期间递归复制，非分隔项 id 非零且在整棵菜单中唯一。

### hiyui_tool_activate_fn

```c
typedef void(HIYUI_CALL * hiyui_tool_activate_fn) (const hiyui_tool_event_t *event, void *user_data)
```

event 仅在回调期间有效，可按值复制。

### hiyui_tool_change_fn

```c
typedef void(HIYUI_CALL * hiyui_tool_change_fn) (hiyui_tool_check_state_t value, void *user_data)
```

### hiyui_tool_menu_snapshot_t

```c
typedef struct hiyui_tool_menu_snapshot_s hiyui_tool_menu_snapshot_t
```

## 函数

### hiyui_tool_bar_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_props_init(hiyui_tool_bar_props_t *props)
```

### hiyui_tool_button_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_props_init(hiyui_tool_button_props_t *props)
```

### hiyui_tool_group_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_group_props_init(hiyui_tool_group_props_t *props)
```

### hiyui_tool_separator_props_init

```c
HIYUI_API void HIYUI_CALL hiyui_tool_separator_props_init(hiyui_tool_separator_props_t *props)
```

### hiyui_tool_bar_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_bar_create(hiyui_widget_t *parent, const hiyui_tool_bar_props_t *props)
```

props 为 NULL 使用默认值，parent 为 NULL 返回 NULL；控件随父对象销毁。

### hiyui_tool_button_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_button_create(hiyui_widget_t *parent, const hiyui_tool_button_props_t *props)
```

### hiyui_tool_group_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_group_create(hiyui_widget_t *parent, const hiyui_tool_group_props_t *props)
```

### hiyui_tool_separator_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_separator_create(hiyui_widget_t *parent, const hiyui_tool_separator_props_t *props)
```

### hiyui_tool_bar_set_orientation

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_orientation(hiyui_widget_t *bar, hiyui_tool_orientation_t value)
```

### hiyui_tool_bar_get_orientation

```c
HIYUI_API hiyui_tool_orientation_t HIYUI_CALL hiyui_tool_bar_get_orientation(hiyui_widget_t *bar)
```

### hiyui_tool_bar_set_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_overflow(hiyui_widget_t *bar, hiyui_tool_overflow_mode_t value)
```

### hiyui_tool_bar_get_overflow

```c
HIYUI_API hiyui_tool_overflow_mode_t HIYUI_CALL hiyui_tool_bar_get_overflow(hiyui_widget_t *bar)
```

### hiyui_tool_bar_set_button_size

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_button_size(hiyui_widget_t *bar, int value)
```

### hiyui_tool_bar_set_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_enabled(hiyui_widget_t *bar, int value)
```

### hiyui_tool_bar_set_hidden

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_set_hidden(hiyui_widget_t *bar, int value)
```

### hiyui_tool_bar_append

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_append(hiyui_widget_t *bar, hiyui_widget_t *item)
```

### hiyui_tool_bar_move_item

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_move_item(hiyui_widget_t *bar, hiyui_widget_t *item, int index)
```

### hiyui_tool_bar_remove_item

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_remove_item(hiyui_widget_t *bar, hiyui_widget_t *item)
```

### hiyui_tool_bar_clear

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_clear(hiyui_widget_t *bar)
```

### hiyui_tool_bar_get_item_count

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_get_item_count(hiyui_widget_t *bar)
```

### hiyui_tool_bar_get_item

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tool_bar_get_item(hiyui_widget_t *bar, int index)
```

返回借用组件，越界或 bar 为 NULL 时返回 NULL。

### hiyui_tool_bar_refresh

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_refresh(hiyui_widget_t *bar)
```

### hiyui_tool_bar_get_overflow_count

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_get_overflow_count(hiyui_widget_t *bar)
```

### hiyui_tool_bar_is_overflowed

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_is_overflowed(hiyui_widget_t *bar, hiyui_widget_t *item)
```

### hiyui_tool_bar_open_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_open_overflow(hiyui_widget_t *bar)
```

### hiyui_tool_bar_close_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_bar_close_overflow(hiyui_widget_t *bar)
```

### hiyui_tool_bar_is_overflow_open

```c
HIYUI_API int HIYUI_CALL hiyui_tool_bar_is_overflow_open(hiyui_widget_t *bar)
```

### hiyui_tool_group_set_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_group_set_overflow(hiyui_widget_t *group, hiyui_tool_overflow_t value)
```

### hiyui_tool_group_get_overflow

```c
HIYUI_API hiyui_tool_overflow_t HIYUI_CALL hiyui_tool_group_get_overflow(hiyui_widget_t *group)
```

### hiyui_tool_button_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_text(hiyui_widget_t *button, const char *text)
```

### hiyui_tool_button_get_text

```c
HIYUI_API size_t HIYUI_CALL hiyui_tool_button_get_text(hiyui_widget_t *button, char *buffer, size_t capacity)
```

返回所需字节数，不含结尾 NUL；capacity 非零时写入以 NUL 结束的截断副本。

### hiyui_tool_button_bind_text

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_bind_text(hiyui_widget_t *button, const hiyui_localized_text_t *text)
```

### hiyui_tool_button_set_icon

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_icon(hiyui_widget_t *button, uint32_t codepoint)
```

### hiyui_tool_button_set_icon_src

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_icon_src(hiyui_widget_t *button, const void *source)
```

### hiyui_tool_button_set_display

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_display(hiyui_widget_t *button, hiyui_tool_display_t value)
```

### hiyui_tool_button_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_checked(hiyui_widget_t *button, hiyui_tool_check_state_t value, hiyui_notify_t notify)
```

### hiyui_tool_button_get_checked

```c
HIYUI_API hiyui_tool_check_state_t HIYUI_CALL hiyui_tool_button_get_checked(hiyui_widget_t *button)
```

### hiyui_tool_button_get_kind

```c
HIYUI_API hiyui_tool_button_kind_t HIYUI_CALL hiyui_tool_button_get_kind(hiyui_widget_t *button)
```

### hiyui_tool_button_get_command_id

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_get_command_id(hiyui_widget_t *button)
```

### hiyui_tool_button_set_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_overflow(hiyui_widget_t *button, hiyui_tool_overflow_t value)
```

### hiyui_tool_button_get_overflow

```c
HIYUI_API hiyui_tool_overflow_t HIYUI_CALL hiyui_tool_button_get_overflow(hiyui_widget_t *button)
```

### hiyui_tool_button_set_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_enabled(hiyui_widget_t *button, int value)
```

### hiyui_tool_button_set_hidden

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_set_hidden(hiyui_widget_t *button, int value)
```

### hiyui_tool_button_set_menu

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_set_menu(hiyui_widget_t *button, const hiyui_tool_menu_item_t *items, size_t count)
```

成功返回 1；无效数据拒绝整次替换，count 为 0 清空菜单。

### hiyui_tool_button_get_menu

```c
HIYUI_API hiyui_tool_menu_snapshot_t *HIYUI_CALL hiyui_tool_button_get_menu(hiyui_widget_t *button)
```

返回调用方拥有的菜单快照，控件变化或销毁不影响该副本。

### hiyui_tool_menu_snapshot_items

```c
HIYUI_API const hiyui_tool_menu_item_t *HIYUI_CALL hiyui_tool_menu_snapshot_items(const hiyui_tool_menu_snapshot_t *snapshot, size_t *count)
```

### hiyui_tool_menu_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_tool_menu_snapshot_destroy(hiyui_tool_menu_snapshot_t *snapshot)
```

### hiyui_tool_button_activate

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_activate(hiyui_widget_t *button)
```

### hiyui_tool_button_activate_menu

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_activate_menu(hiyui_widget_t *button, int id)
```

### hiyui_tool_button_open_menu

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_open_menu(hiyui_widget_t *button)
```

### hiyui_tool_button_close_menu

```c
HIYUI_API void HIYUI_CALL hiyui_tool_button_close_menu(hiyui_widget_t *button)
```

### hiyui_tool_button_is_menu_open

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_is_menu_open(hiyui_widget_t *button)
```

### hiyui_tool_button_set_shortcut

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_set_shortcut(hiyui_widget_t *button, const hiyui_hotkey_t *spec)
```

桌面 SDL 后端绑定快捷键，其他后端返回 0；spec 为 NULL 解除绑定。

### hiyui_tool_button_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_on_activate(hiyui_widget_t *button, hiyui_tool_activate_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

追加订阅，destroy 接管 user_data，注册失败时也释放；out_handle 非空时其值须为 NULL。

### hiyui_tool_button_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_tool_button_on_change(hiyui_widget_t *button, hiyui_tool_change_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```
