---
title: "form.h"
---

# form.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/form.h>`

表单组件：Input / Slider / Switch / Checkbox / Radio / Dropdown

## 枚举

### hiyui_arrow_side_t

| 值 | 说明 |
|---|---|
| `HIYUI_ARROW_SIDE_RIGHT` = 0 |  |
| `HIYUI_ARROW_SIDE_LEFT` |  |
| `HIYUI_ARROW_SIDE_NONE` |  |

### hiyui_dropdown_align_t

| 值 | 说明 |
|---|---|
| `HIYUI_DROPDOWN_ALIGN_LEFT` = 0 |  |
| `HIYUI_DROPDOWN_ALIGN_CENTER` |  |
| `HIYUI_DROPDOWN_ALIGN_RIGHT` |  |

### hiyui_dropdown_part_t

| 值 | 说明 |
|---|---|
| `HIYUI_DROPDOWN_PART_POPUP` = 0 |  |
| `HIYUI_DROPDOWN_PART_ITEM` |  |
| `HIYUI_DROPDOWN_PART_SEARCH` |  |
| `HIYUI_DROPDOWN_PART_EMPTY` |  |

## 函数

### hiyui_input_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_input_create(hiyui_widget_t *parent, const hiyui_input_props_t *props)
```

### hiyui_input_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_input_set_text(hiyui_widget_t *input, const char *text, hiyui_notify_t notify)
```

### hiyui_input_get_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_input_get_text(hiyui_widget_t *input)
```

### hiyui_input_set_placeholder

```c
HIYUI_API void HIYUI_CALL hiyui_input_set_placeholder(hiyui_widget_t *input, const char *text)
```

### hiyui_input_clear

```c
HIYUI_API void HIYUI_CALL hiyui_input_clear(hiyui_widget_t *input, hiyui_notify_t notify)
```

### hiyui_input_set_read_only

```c
HIYUI_API void HIYUI_CALL hiyui_input_set_read_only(hiyui_widget_t *input, int read_only)
```

非 0 禁止编辑，仍允许选择和复制。

### hiyui_slider_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_slider_create(hiyui_widget_t *parent, const hiyui_slider_props_t *props)
```

### hiyui_slider_set_value

```c
HIYUI_API void HIYUI_CALL hiyui_slider_set_value(hiyui_widget_t *s, int value, hiyui_notify_t notify)
```

### hiyui_slider_get_value

```c
HIYUI_API int HIYUI_CALL hiyui_slider_get_value(hiyui_widget_t *s)
```

### hiyui_switch_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_switch_create(hiyui_widget_t *parent, const hiyui_switch_props_t *props)
```

### hiyui_switch_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_switch_set_checked(hiyui_widget_t *s, int checked, hiyui_notify_t notify)
```

### hiyui_switch_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_switch_is_checked(hiyui_widget_t *s)
```

### hiyui_checkbox_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_checkbox_create(hiyui_widget_t *parent, const hiyui_checkbox_props_t *props)
```

### hiyui_checkbox_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_checkbox_set_checked(hiyui_widget_t *cb, int checked, hiyui_notify_t notify)
```

### hiyui_checkbox_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_checkbox_is_checked(hiyui_widget_t *cb)
```

### hiyui_radio_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_radio_create(hiyui_widget_t *parent, const hiyui_radio_props_t *props)
```

### hiyui_radio_set_checked

```c
HIYUI_API void HIYUI_CALL hiyui_radio_set_checked(hiyui_widget_t *r, int checked, hiyui_notify_t notify)
```

### hiyui_radio_is_checked

```c
HIYUI_API int HIYUI_CALL hiyui_radio_is_checked(hiyui_widget_t *r)
```

### hiyui_dropdown_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dropdown_create(hiyui_widget_t *parent, const hiyui_dropdown_props_t *props)
```

创建下拉选择组件。

| 参数 | 说明 |
|---|---|
| `props` | NULL 等价零初始化；popup_mode 零值与 HIYUI_POPUP_MODE_WINDOW 均为浮窗弹出，无浮窗能力时由库回退内嵌。 |

### hiyui_dropdown_set_items

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_items(hiyui_widget_t *dd, const hiyui_dropdown_item_t *items, int count, hiyui_notify_t notify)
```

### hiyui_dropdown_set_selected

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_selected(hiyui_widget_t *dd, int idx, hiyui_notify_t notify)
```

### hiyui_dropdown_get_selected

```c
HIYUI_API int HIYUI_CALL hiyui_dropdown_get_selected(hiyui_widget_t *dd)
```

### hiyui_dropdown_set_part

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_part(hiyui_widget_t *dd, hiyui_dropdown_part_t part, const hiyui_part_styles_t *styles, hiyui_part_event_fn on_activate, void *ud, hiyui_destroy_fn destroy)
```

覆盖 Dropdown 部件样式并绑定默认行为前的激活回调。 styles 为 NULL 仅绑定回调；on_activate 为 NULL 时立即释放 user_data。

### hiyui_dropdown_set_search_matcher

```c
HIYUI_API void HIYUI_CALL hiyui_dropdown_set_search_matcher(hiyui_widget_t *dd, int(*matcher)(const char *item_text, const char *query, void *ud), void *ud, hiyui_destroy_fn destroy)
```

自定义搜索匹配；返回非 0 表示命中。matcher 为 NULL 恢复默认子串匹配。
