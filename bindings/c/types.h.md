---
title: "types.h"
---

# types.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/types.h>`

基础类型定义：导出宏、不透明句柄、回调类型、枚举、哨兵值

## 枚举

### hiyui_notify_t

| 值 | 说明 |
|---|---|
| `HIYUI_NOTIFY_NO` = 0 |  |
| `HIYUI_NOTIFY_YES` = 1 |  |

### hiyui_bool_t

| 值 | 说明 |
|---|---|
| `HIYUI_BOOL_DEFAULT` = 0 |  |
| `HIYUI_BOOL_FALSE` = -1 |  |
| `HIYUI_BOOL_TRUE` = 1 |  |

### hiyui_align_t

| 值 | 说明 |
|---|---|
| `HIYUI_ALIGN_START` = 0 |  |
| `HIYUI_ALIGN_CENTER` |  |
| `HIYUI_ALIGN_END` |  |
| `HIYUI_ALIGN_SPACE_BETWEEN` |  |
| `HIYUI_ALIGN_SPACE_AROUND` |  |
| `HIYUI_ALIGN_SPACE_EVENLY` |  |

### hiyui_scroll_t

| 值 | 说明 |
|---|---|
| `HIYUI_SCROLL_OFF` = 0 |  |
| `HIYUI_SCROLL_AUTO` |  |
| `HIYUI_SCROLL_HORIZONTAL` |  |
| `HIYUI_SCROLL_VERTICAL` |  |
| `HIYUI_SCROLL_BOTH` |  |

### hiyui_btn_variant_t

| 值 | 说明 |
|---|---|
| `HIYUI_BTN_VARIANT_PRIMARY` = 0 |  |
| `HIYUI_BTN_VARIANT_SECONDARY` |  |
| `HIYUI_BTN_VARIANT_OUTLINE` |  |
| `HIYUI_BTN_VARIANT_GHOST` |  |
| `HIYUI_BTN_VARIANT_LINK` |  |

### hiyui_image_fit_t

| 值 | 说明 |
|---|---|
| `HIYUI_IMAGE_FIT_DEFAULT` = 0 |  |
| `HIYUI_IMAGE_FIT_CENTER` |  |
| `HIYUI_IMAGE_FIT_STRETCH` |  |
| `HIYUI_IMAGE_FIT_CONTAIN` |  |
| `HIYUI_IMAGE_FIT_COVER` |  |
| `HIYUI_IMAGE_FIT_TILE` |  |

### hiyui_indicator_side_t

| 值 | 说明 |
|---|---|
| `HIYUI_INDICATOR_SIDE_LEFT` = 0 |  |
| `HIYUI_INDICATOR_SIDE_RIGHT` |  |

### hiyui_text_align_t

| 值 | 说明 |
|---|---|
| `HIYUI_TEXT_ALIGN_LEFT` = 0 |  |
| `HIYUI_TEXT_ALIGN_CENTER` |  |
| `HIYUI_TEXT_ALIGN_RIGHT` |  |

### hiyui_progress_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_PROGRESS_LINE` = 0 |  |
| `HIYUI_PROGRESS_CIRCLE` |  |
| `HIYUI_PROGRESS_DASHBOARD` |  |
| `HIYUI_PROGRESS_STEPS` |  |

### hiyui_spin_type_t

| 值 | 说明 |
|---|---|
| `HIYUI_SPIN_ARC` = 0 |  |
| `HIYUI_SPIN_DOTS` |  |

### hiyui_tooltip_placement_t

| 值 | 说明 |
|---|---|
| `HIYUI_TOOLTIP_TOP` = 0 |  |
| `HIYUI_TOOLTIP_TOP_START` |  |
| `HIYUI_TOOLTIP_TOP_END` |  |
| `HIYUI_TOOLTIP_BOTTOM` |  |
| `HIYUI_TOOLTIP_BOTTOM_START` |  |
| `HIYUI_TOOLTIP_BOTTOM_END` |  |
| `HIYUI_TOOLTIP_LEFT` |  |
| `HIYUI_TOOLTIP_LEFT_START` |  |
| `HIYUI_TOOLTIP_LEFT_END` |  |
| `HIYUI_TOOLTIP_RIGHT` |  |
| `HIYUI_TOOLTIP_RIGHT_START` |  |
| `HIYUI_TOOLTIP_RIGHT_END` |  |

### hiyui_picker_presentation_t

Picker 面板呈现方式。

| 值 | 说明 |
|---|---|
| `HIYUI_PICKER_PRESENTATION_AUTO` = 0 |  |
| `HIYUI_PICKER_PRESENTATION_ANCHORED` |  |
| `HIYUI_PICKER_PRESENTATION_BOTTOM_SHEET` |  |

AUTO 在面板打开时根据窗口可用区逻辑宽度解析，无窗口宿主时使用屏幕逻辑宽度。 宽度小于 720 时使用 BOTTOM_SHEET，否则使用 ANCHORED。面板打开期间不切换 呈现方式，下次打开时重新解析。

### hiyui_layout_width_class_t

布局宽度级别。

| 值 | 说明 |
|---|---|
| `HIYUI_LAYOUT_WIDTH_NARROW` = 0 |  |
| `HIYUI_LAYOUT_WIDTH_WIDE` |  |

### hiyui_capability_state_t

后端已接入能力的状态，UNKNOWN 不等同于 UNAVAILABLE。

| 值 | 说明 |
|---|---|
| `HIYUI_CAPABILITY_UNKNOWN` = 0 |  |
| `HIYUI_CAPABILITY_UNAVAILABLE` |  |
| `HIYUI_CAPABILITY_AVAILABLE` |  |

### hiyui_display_shape_t

| 值 | 说明 |
|---|---|
| `HIYUI_DISPLAY_SHAPE_UNKNOWN` = 0 |  |
| `HIYUI_DISPLAY_SHAPE_RECTANGLE` |  |
| `HIYUI_DISPLAY_SHAPE_CIRCLE` |  |

## 类型别名

### hiyui_app_t

```c
typedef struct hiyui_app_s hiyui_app_t
```

### hiyui_win_t

```c
typedef struct hiyui_win_s hiyui_win_t
```

### hiyui_widget_t

```c
typedef struct hiyui_wdg_s hiyui_widget_t
```

### hiyui_localized_text_t

```c
typedef struct hiyui_localized_text_s hiyui_localized_text_t
```

### hiyui_setup_fn

```c
typedef void( * hiyui_setup_fn) (hiyui_app_t *app, void *user_data)
```

### hiyui_callback_fn

```c
typedef void( * hiyui_callback_fn) (void *user_data)
```

### hiyui_int_fn

```c
typedef void( * hiyui_int_fn) (int value, void *user_data)
```

### hiyui_string_fn

```c
typedef void( * hiyui_string_fn) (const char *text, void *user_data)
```

### hiyui_destroy_fn

```c
typedef void( * hiyui_destroy_fn) (void *user_data)
```

释放回调状态，按接收该回调的 API 约定的线程调用一次；不得抛出异常或操作正在销毁的组件。

### hiyui_environment_fn

```c
typedef void( * hiyui_environment_fn) (const hiyui_layout_environment_t *value, void *user_data)
```

value 仅在回调期间有效，可复制保存。

### hiyui_back_request_fn

```c
typedef void( * hiyui_back_request_fn) (hiyui_back_request_t *request, void *user_data)
```

request 仅在回调期间有效。

### hiyui_part_event_t

```c
typedef struct hiyui_part_event_s hiyui_part_event_t
```

### hiyui_part_event_fn

```c
typedef void( * hiyui_part_event_fn) (hiyui_part_event_t *event, void *user_data)
```

### hiyui_draw_ctx_t

```c
typedef struct hiyui_draw_ctx_s hiyui_draw_ctx_t
```

## 函数

### hiyui_part_event_index

```c
int hiyui_part_event_index(const hiyui_part_event_t *event)
```

**返回值：** 激活项索引，不适用时返回 HIYUI_NO_SELECTION。

### hiyui_part_event_column

```c
int hiyui_part_event_column(const hiyui_part_event_t *event)
```

**返回值：** 列索引，不适用时返回 HIYUI_NO_SELECTION。

### hiyui_part_event_prevent_default

```c
void hiyui_part_event_prevent_default(hiyui_part_event_t *event)
```

阻止此次激活的组件默认行为；event 仅在回调期间有效。
