---
title: "nav.h"
---

# nav.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/nav.h>`

导航组件：Tabs / Menu / Segmented

## 枚举

### hiyui_segmented_size_t

| 值 | 说明 |
|---|---|
| `HIYUI_SEGMENTED_SIZE_DEFAULT` = 0 |  |
| `HIYUI_SEGMENTED_SIZE_SMALL` |  |
| `HIYUI_SEGMENTED_SIZE_MEDIUM` |  |
| `HIYUI_SEGMENTED_SIZE_LARGE` |  |
| `HIYUI_SEGMENTED_SIZE_FIT` |  |

### hiyui_tab_position_t

| 值 | 说明 |
|---|---|
| `HIYUI_TAB_POSITION_TOP` = 0 |  |
| `HIYUI_TAB_POSITION_BOTTOM` |  |
| `HIYUI_TAB_POSITION_LEFT` |  |
| `HIYUI_TAB_POSITION_RIGHT` |  |

### hiyui_menu_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_MENU_MODE_DEFAULT` = 0 |  |
| `HIYUI_MENU_MODE_WIDE` |  |
| `HIYUI_MENU_MODE_NARROW_ICON_TEXT` |  |
| `HIYUI_MENU_MODE_NARROW_ICON` |  |

### hiyui_menu_toggle_pos_t

| 值 | 说明 |
|---|---|
| `HIYUI_MENU_TOGGLE_BOTTOM` = 0 |  |
| `HIYUI_MENU_TOGGLE_TOP` |  |
| `HIYUI_MENU_TOGGLE_NONE` |  |

## 类型别名

### hiyui_menu_item_t

```c
typedef struct hiyui_menu_item hiyui_menu_item_t
```

### hiyui_menu_expand_fn

```c
typedef void(* hiyui_menu_expand_fn) (int node_index, int expanded, void *user_data)
```

## 函数

### hiyui_segmented_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_segmented_create(hiyui_widget_t *parent, const hiyui_segmented_props_t *props)
```

### hiyui_segmented_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_segmented_set_items(hiyui_widget_t *seg, const hiyui_segmented_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_segmented_set_selected_index

```c
HIYUI_API void HIYUI_CALL hiyui_segmented_set_selected_index(hiyui_widget_t *seg, int idx, hiyui_notify_t notify)
```

### hiyui_segmented_get_selected_index

```c
HIYUI_API int HIYUI_CALL hiyui_segmented_get_selected_index(hiyui_widget_t *seg)
```

### hiyui_segmented_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_segmented_on_change(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_tabs_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tabs_create(hiyui_widget_t *parent, const hiyui_tabs_props_t *props)
```

### hiyui_tabs_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_set_items(hiyui_widget_t *tabs, const hiyui_tab_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_tabs_append_items

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_append_items(hiyui_widget_t *tabs, const hiyui_tab_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_tabs_content

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_tabs_content(hiyui_widget_t *tabs, int index)
```

### hiyui_tabs_set_active_index

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_set_active_index(hiyui_widget_t *tabs, int idx, hiyui_notify_t notify)
```

### hiyui_tabs_get_active_index

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_get_active_index(hiyui_widget_t *tabs)
```

### hiyui_tabs_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_on_change(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_tabs_set_position

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_set_position(hiyui_widget_t *tabs, hiyui_tab_position_t pos)
```

### hiyui_pagination_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_pagination_create(hiyui_widget_t *parent, const hiyui_pagination_props_t *props)
```

### hiyui_pagination_set_current

```c
HIYUI_API void HIYUI_CALL hiyui_pagination_set_current(hiyui_widget_t *pagination, int page, hiyui_notify_t notify)
```

### hiyui_pagination_get_current

```c
HIYUI_API int HIYUI_CALL hiyui_pagination_get_current(hiyui_widget_t *pagination)
```

### hiyui_pagination_get_total_pages

```c
HIYUI_API int HIYUI_CALL hiyui_pagination_get_total_pages(hiyui_widget_t *pagination)
```

### hiyui_pagination_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_pagination_on_change(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_menu_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_menu_create(hiyui_widget_t *parent, const hiyui_menu_props_t *props)
```

### hiyui_menu_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_menu_set_items(hiyui_widget_t *menu, const hiyui_menu_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_menu_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_menu_set_selected(hiyui_widget_t *menu, int idx, hiyui_notify_t notify)
```

### hiyui_menu_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_menu_get_selected(hiyui_widget_t *menu)
```

### hiyui_menu_set_mode

```c
HIYUI_API void HIYUI_CALL hiyui_menu_set_mode(hiyui_widget_t *menu, hiyui_menu_mode_t mode)
```

### hiyui_menu_get_mode

```c
HIYUI_API hiyui_menu_mode_t HIYUI_CALL hiyui_menu_get_mode(hiyui_widget_t *menu)
```

### hiyui_menu_set_collapsed

```c
HIYUI_API void HIYUI_CALL hiyui_menu_set_collapsed(hiyui_widget_t *menu, int collapsed)
```

### hiyui_menu_is_collapsed

```c
HIYUI_API int HIYUI_CALL hiyui_menu_is_collapsed(hiyui_widget_t *menu)
```

### hiyui_menu_on_activate

```c
HIYUI_API int HIYUI_CALL hiyui_menu_on_activate(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_menu_on_collapse

```c
HIYUI_API int HIYUI_CALL hiyui_menu_on_collapse(hiyui_widget_t *menu, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_menu_bar_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_menu_bar_create(hiyui_widget_t *parent, const hiyui_menu_bar_props_t *props)
```

Creates a top-level menu bar.

### hiyui_menu_bar_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_menu_bar_set_items(hiyui_widget_t *bar, const hiyui_menu_bar_item_t *items, int count)
```

Replaces the top-level menu bar items.


Passing a null list or a non-positive count clears the menu bar.

### hiyui_menu_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_menu_on_change(hiyui_widget_t *widget, hiyui_int_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_menu_on_expand

```c
HIYUI_API int HIYUI_CALL hiyui_menu_on_expand(hiyui_widget_t *widget, hiyui_menu_expand_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_menu_expand_item

```c
HIYUI_API void HIYUI_CALL hiyui_menu_expand_item(hiyui_widget_t *widget, int index, int expanded)
```

### hiyui_menu_collapse_all

```c
HIYUI_API void HIYUI_CALL hiyui_menu_collapse_all(hiyui_widget_t *widget)
```

### hiyui_segmented_disable_item

```c
HIYUI_API void HIYUI_CALL hiyui_segmented_disable_item(hiyui_widget_t *widget, int index, int disabled, hiyui_notify_t notify)
```

### hiyui_tabs_item_data

```c
HIYUI_API int HIYUI_CALL hiyui_tabs_item_data(hiyui_widget_t *widget, int index)
```

### hiyui_menu_item_data

```c
HIYUI_API int HIYUI_CALL hiyui_menu_item_data(hiyui_widget_t *widget, int index)
```

### hiyui_segmented_item_data

```c
HIYUI_API int HIYUI_CALL hiyui_segmented_item_data(hiyui_widget_t *widget, int index)
```

### hiyui_tabs_active_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_active_color_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```

### hiyui_tabs_inactive_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_tabs_inactive_color_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```

### hiyui_segmented_active_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_segmented_active_color_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```

### hiyui_segmented_active_bg_role

```c
HIYUI_API void HIYUI_CALL hiyui_segmented_active_bg_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```

### hiyui_segmented_text_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_segmented_text_color_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```

### hiyui_pagination_active_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_pagination_active_color_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```

### hiyui_pagination_text_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_pagination_text_color_role(hiyui_widget_t *widget, hiyui_theme_role_t role)
```
