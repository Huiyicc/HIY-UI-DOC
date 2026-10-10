---
title: "widget.h"
---

# widget.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/widget.h>`

通用 widget 操作：尺寸、样式、事件、提示

## 枚举

### hiyui_primitive_kind_t

| 值 | 说明 |
|---|---|
| `HIYUI_PRIMITIVE_OBJECT` = 0 |  |
| `HIYUI_PRIMITIVE_TEXT` |  |
| `HIYUI_PRIMITIVE_PRESSABLE` |  |

### hiyui_text_overflow_t

| 值 | 说明 |
|---|---|
| `HIYUI_TEXT_OVERFLOW_WRAP` = 0 |  |
| `HIYUI_TEXT_OVERFLOW_ELLIPSIS` |  |
| `HIYUI_TEXT_OVERFLOW_DOTS` |  |

### hiyui_flex_flow_t

| 值 | 说明 |
|---|---|
| `HIYUI_FLEX_ROW` = 0 |  |
| `HIYUI_FLEX_COLUMN` |  |
| `HIYUI_FLEX_ROW_WRAP` |  |
| `HIYUI_FLEX_COLUMN_WRAP` |  |
| `HIYUI_FLEX_ROW_REVERSE` |  |
| `HIYUI_FLEX_COLUMN_REVERSE` |  |

### hiyui_scrollbar_mode_t

| 值 | 说明 |
|---|---|
| `HIYUI_SCROLLBAR_OFF` |  |
| `HIYUI_SCROLLBAR_AUTO` |  |
| `HIYUI_SCROLLBAR_ACTIVE` |  |
| `HIYUI_SCROLLBAR_ALWAYS` |  |

### hiyui_scroll_snap_t

| 值 | 说明 |
|---|---|
| `HIYUI_SCROLL_SNAP_NONE` |  |
| `HIYUI_SCROLL_SNAP_START` |  |
| `HIYUI_SCROLL_SNAP_CENTER` |  |
| `HIYUI_SCROLL_SNAP_END` |  |

### hiyui_direction_t

| 值 | 说明 |
|---|---|
| `HIYUI_DIRECTION_ROW` = 0 |  |
| `HIYUI_DIRECTION_COLUMN` |  |

### hiyui_style_state_t

| 值 | 说明 |
|---|---|
| `HIYUI_STATE_NORMAL` = 0 |  |
| `HIYUI_STATE_HOVERED` |  |
| `HIYUI_STATE_PRESSED` |  |
| `HIYUI_STATE_FOCUSED` |  |
| `HIYUI_STATE_CHECKED` |  |
| `HIYUI_STATE_DISABLED` |  |
| `HIYUI_STATE_FOCUS_KEY` |  |
| `HIYUI_STATE_MIXED` |  |
| `HIYUI_STATE_EXPANDED` |  |

### hiyui_accessibility_role_t

| 值 | 说明 |
|---|---|
| `HIYUI_ACCESSIBILITY_WINDOW` = 0 |  |
| `HIYUI_ACCESSIBILITY_GROUP` |  |
| `HIYUI_ACCESSIBILITY_TEXT` |  |
| `HIYUI_ACCESSIBILITY_BUTTON` |  |
| `HIYUI_ACCESSIBILITY_CHECKBOX` |  |
| `HIYUI_ACCESSIBILITY_RADIO` |  |
| `HIYUI_ACCESSIBILITY_SWITCH` |  |
| `HIYUI_ACCESSIBILITY_SLIDER` |  |
| `HIYUI_ACCESSIBILITY_PROGRESS` |  |
| `HIYUI_ACCESSIBILITY_EDIT` |  |

### hiyui_cursor_t

| 值 | 说明 |
|---|---|
| `HIYUI_CURSOR_ARROW` = 0 |  |
| `HIYUI_CURSOR_HAND` |  |
| `HIYUI_CURSOR_IBEAM` |  |
| `HIYUI_CURSOR_CROSSHAIR` |  |
| `HIYUI_CURSOR_SIZE_H` |  |
| `HIYUI_CURSOR_SIZE_V` |  |
| `HIYUI_CURSOR_NO_ACTION` |  |

### hiyui_align_pos_t

| 值 | 说明 |
|---|---|
| `HIYUI_ALIGN_POS_CENTER` = 0 |  |
| `HIYUI_ALIGN_POS_TOP_LEFT` |  |
| `HIYUI_ALIGN_POS_TOP_MID` |  |
| `HIYUI_ALIGN_POS_TOP_RIGHT` |  |
| `HIYUI_ALIGN_POS_BOTTOM_LEFT` |  |
| `HIYUI_ALIGN_POS_BOTTOM_MID` |  |
| `HIYUI_ALIGN_POS_BOTTOM_RIGHT` |  |
| `HIYUI_ALIGN_POS_LEFT_MID` |  |
| `HIYUI_ALIGN_POS_RIGHT_MID` |  |

## 类型别名

### hiyui_text_binding_fn

```c
typedef void(* hiyui_text_binding_fn) (hiyui_widget_t *widget, const char *text, void *user_data)
```

文案借用至回调返回；回调在 UI 线程调用，可用 set_text_content 更新节点。

### hiyui_theme_style_fn

```c
typedef void(* hiyui_theme_style_fn) (hiyui_style_spec_set_t *out, void *user_data)
```

填写已初始化的默认样式，out 仅在回调内有效；回调不得改变主题或删除组件。 输出的图片源及路径为借用值，须保持有效至替换该图片或组件销毁。

## 函数

### hiyui_primitive_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_primitive_create(hiyui_widget_t *parent, hiyui_primitive_kind_t kind)
```

创建无组件主题的基础节点，由父级拥有；父级为空或类型无效时返回 NULL。

### hiyui_wdg_set_text_content

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_set_text_content(hiyui_widget_t *w, const char *text)
```

基础文本节点设置内容；text 为 NULL 时刷新现有文本，w 为 NULL 或非文本节点时无操作。

### hiyui_wdg_get_text_content

```c
HIYUI_API size_t HIYUI_CALL hiyui_wdg_get_text_content(hiyui_widget_t *w, char *buffer, size_t capacity)
```

复制文本，返回含 NUL 的所需容量；buffer 可空，容量不足时写入空串，无文本时返回 1。

### hiyui_wdg_text_overflow

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_overflow(hiyui_widget_t *w, hiyui_text_overflow_t value)
```

Ellipsis 为单行省略，Dots 保留高度；NULL 或非文本节点无操作。

### hiyui_wdg_get_text_color

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_wdg_get_text_color(hiyui_widget_t *w)
```

### hiyui_selectable_text_by_default

```c
HIYUI_API int HIYUI_CALL hiyui_selectable_text_by_default(void)
```

### hiyui_image_source_is_text

```c
HIYUI_API int HIYUI_CALL hiyui_image_source_is_text(const void *source)
```

是否为路径或符号字符串，NULL 返回 0。

### hiyui_wdg_bind_text

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_bind_text(hiyui_widget_t *w, const hiyui_localized_text_t *text, hiyui_text_binding_fn setter, void *user_data, hiyui_destroy_fn destroy)
```

复制翻译描述并立即更新，后续语言变化时更新；重复绑定替换原绑定。 destroy 非 NULL 时接管 user_data，失败、替换、解除或组件销毁时释放。

**返回值：** 成功为 1；NULL 参数或无效文案描述为 0。

### hiyui_wdg_clear_text_binding

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clear_text_binding(hiyui_widget_t *w)
```

解除翻译绑定并保留文本；NULL 或重复调用无操作。

### hiyui_wdg_parent

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_parent(hiyui_widget_t *w)
```

返回借用节点；NULL、越界或不存在时返回 NULL，父级删除后不可使用。

### hiyui_wdg_child_at

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_child_at(hiyui_widget_t *w, int index)
```

### hiyui_wdg_screen

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_screen(hiyui_widget_t *w)
```

### hiyui_wdg_reparent

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_reparent(hiyui_widget_t *w, hiyui_widget_t *parent)
```

改挂父级；NULL 或构成祖先循环时无操作。

### hiyui_wdg_contains

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_contains(hiyui_widget_t *w, hiyui_widget_t *other)
```

包含自身的祖先关系；NULL 返回 0。

### hiyui_wdg_is_hidden

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_is_hidden(hiyui_widget_t *w)
```

### hiyui_wdg_is_visible

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_is_visible(hiyui_widget_t *w)
```

### hiyui_wdg_floating

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_floating(hiyui_widget_t *w, int on)
```

### hiyui_wdg_event_bubble

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_event_bubble(hiyui_widget_t *w, int on)
```

### hiyui_wdg_set_state

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_set_state(hiyui_widget_t *w, hiyui_style_state_t state, int on)
```

### hiyui_wdg_flow

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_flow(hiyui_widget_t *w, hiyui_flex_flow_t flow)
```

### hiyui_wdg_flex_align

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_flex_align(hiyui_widget_t *w, hiyui_align_t main, hiyui_align_t cross, hiyui_align_t track)
```

### hiyui_wdg_gap

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_gap(hiyui_widget_t *w, int gap)
```

间距和最小尺寸为逻辑像素；NULL 无操作。

### hiyui_wdg_minimum_size

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_minimum_size(hiyui_widget_t *w, int width, int height)
```

### hiyui_wdg_scroll_direction

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_direction(hiyui_widget_t *w, hiyui_direction_t direction)
```

### hiyui_wdg_scroll_mode

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_mode(hiyui_widget_t *w, hiyui_scroll_t value)
```

### hiyui_wdg_scrollbars

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scrollbars(hiyui_widget_t *w, hiyui_scrollbar_mode_t value)
```

### hiyui_wdg_scroll_snap

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_snap(hiyui_widget_t *w, hiyui_direction_t axis, hiyui_scroll_snap_t value)
```

### hiyui_wdg_snap_child

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_snap_child(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_one

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_one(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_on_focus

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_on_focus(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_chain

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_chain(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_to_x_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_x_px(hiyui_widget_t *w, int value, int animate)
```

### hiyui_wdg_scroll_to_y_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_y_px(hiyui_widget_t *w, int value, int animate)
```

### hiyui_wdg_scroll_by_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_by_px(hiyui_widget_t *w, int dx, int dy, int animate)
```

### hiyui_wdg_stop_scroll

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_stop_scroll(hiyui_widget_t *w)
```

### hiyui_wdg_scroll_into_view

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_into_view(hiyui_widget_t *w, int animate)
```

### hiyui_wdg_pos_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pos_px(hiyui_widget_t *w, int x, int y)
```

### hiyui_wdg_translate_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_translate_px(hiyui_widget_t *w, int x, int y)
```

### hiyui_wdg_minimum_size_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_minimum_size_px(hiyui_widget_t *w, int width, int height)
```

### hiyui_wdg_clip_corner

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clip_corner(hiyui_widget_t *w, int value)
```

### hiyui_wdg_overflow_visible

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_overflow_visible(hiyui_widget_t *w, int value)
```

### hiyui_wdg_text_align

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_align(hiyui_widget_t *w, hiyui_align_t value)
```

### hiyui_wdg_image_scale

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_image_scale(hiyui_widget_t *w, int value)
```

### hiyui_wdg_get_scroll_metrics

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_scroll_metrics(hiyui_widget_t *w, hiyui_scroll_metrics_t *out)
```

### hiyui_wdg_get_position_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_position_px(hiyui_widget_t *w, hiyui_point_t *out)
```

### hiyui_wdg_get_translation_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_translation_px(hiyui_widget_t *w, hiyui_point_t *out)
```

### hiyui_wdg_top_layer

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_wdg_top_layer(hiyui_widget_t *w)
```

### hiyui_wdg_scroll_to_x

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_x(hiyui_widget_t *w, int x)
```

### hiyui_wdg_move_to_index

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_move_to_index(hiyui_widget_t *w, int index)
```

### hiyui_wdg_size_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_size_px(hiyui_widget_t *w, int width, int height)
```

设置物理像素尺寸；NULL 无操作。

### hiyui_wdg_width_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_width_px(hiyui_widget_t *w, int width)
```

### hiyui_wdg_height_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_height_px(hiyui_widget_t *w, int height)
```

### hiyui_wdg_max_width

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_width(hiyui_widget_t *w, int value)
```

设置最大逻辑宽度，随 DPI 更新；最小宽度大于上限时按最小宽度布局。

| 参数 | 说明 |
|---|---|
| `value` | 非负逻辑像素；0 为零上限，HIYUI_AUTO 移除局部上限，其他负值无操作。 |
| `w` | NULL 或已请求销毁时无操作。 |

### hiyui_wdg_max_height

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_height(hiyui_widget_t *w, int value)
```

设置最大逻辑高度，随 DPI 更新；最小高度大于上限时按最小高度布局。

| 参数 | 说明 |
|---|---|
| `value` | 非负逻辑像素；0 为零上限，HIYUI_AUTO 移除局部上限，其他负值无操作。 |
| `w` | NULL 或已请求销毁时无操作。 |

### hiyui_wdg_max_width_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_width_px(hiyui_widget_t *w, int width)
```

最大物理像素尺寸，HIYUI_AUTO 解除限制；NULL 无操作。

### hiyui_wdg_max_height_px

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_max_height_px(hiyui_widget_t *w, int height)
```

### hiyui_wdg_get_layout_metrics

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_layout_metrics(hiyui_widget_t *w, hiyui_layout_metrics_t *out)
```

NULL 参数返回 0，非空输出清零。

### hiyui_wdg_update_layout

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_update_layout(hiyui_widget_t *w)
```

同步完成布局，回调可能删除组件；NULL 无操作。

### hiyui_wdg_invalidate_layout

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_invalidate_layout(hiyui_widget_t *w)
```

### hiyui_focused_widget

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_focused_widget(void)
```

默认输入组的借用焦点节点，不存在时为 NULL。

### hiyui_wdg_has_focus_group

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_has_focus_group(hiyui_widget_t *w)
```

### hiyui_wdg_focus_next

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_focus_next(hiyui_widget_t *w, int previous)
```

### hiyui_wdg_window_focused

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_window_focused(hiyui_widget_t *w)
```

所属桌面窗口是否获得键盘焦点，NULL 或非桌面平台返回 0。

### hiyui_wdg_accessibility_role

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_accessibility_role(hiyui_widget_t *w, hiyui_accessibility_role_t role, uint32_t group)
```

### hiyui_wdg_accessibility_changed

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_accessibility_changed(hiyui_widget_t *w)
```

### hiyui_wdg_theme_style

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_theme_style(hiyui_widget_t *w, hiyui_widget_type_t type)
```

应用内置组件主题，在设置显式样式前调用一次；NULL 无操作。

### hiyui_wdg_bind_theme_style

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_bind_theme_style(hiyui_widget_t *w, hiyui_theme_style_fn provider, void *user_data, hiyui_destroy_fn destroy)
```

追加默认样式提供者，立即执行并随主题、DPI 更新，显式样式覆盖其结果。 destroy 非 NULL 时接管 user_data，失败或组件销毁时释放。

**返回值：** 成功为 1；w 或 provider 为 NULL 时为 0。

### hiyui_wdg_apply_style_spec

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style_spec(hiyui_widget_t *w, const hiyui_style_spec_t *style)
```

合并显式样式，保留零值与 Alpha，随主题和 DPI 重应用；NULL 参数无操作。

### hiyui_wdg_apply_style_spec_set

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style_spec_set(hiyui_widget_t *w, const hiyui_style_spec_set_t *styles)
```

### hiyui_wdg_selectable_text

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_selectable_text(hiyui_widget_t *w, int with_menu)
```

开启文本选择；with_menu 非 0 时包含复制菜单，重复调用无额外效果，非桌面平台无操作。

### hiyui_wdg_cursor

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_cursor(hiyui_widget_t *w, hiyui_cursor_t cursor)
```

悬停时使用指定鼠标指针；NULL 或非桌面平台无操作。

### hiyui_wdg_pos

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pos(hiyui_widget_t *w, int x, int y)
```

### hiyui_wdg_size

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_size(hiyui_widget_t *w, int width, int height)
```

### hiyui_wdg_width

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_width(hiyui_widget_t *w, int width)
```

### hiyui_wdg_height

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_height(hiyui_widget_t *w, int height)
```

### hiyui_wdg_center

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_center(hiyui_widget_t *w)
```

### hiyui_wdg_fill

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_fill(hiyui_widget_t *w)
```

### hiyui_wdg_fill_width

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_fill_width(hiyui_widget_t *w)
```

### hiyui_wdg_fill_height

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_fill_height(hiyui_widget_t *w)
```

### hiyui_wdg_flex

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_flex(hiyui_widget_t *w, int grow)
```

### hiyui_wdg_hidden

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_hidden(hiyui_widget_t *w, int hidden)
```

### hiyui_wdg_enabled

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_enabled(hiyui_widget_t *w, int enabled)
```

### hiyui_wdg_get_width

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_width(hiyui_widget_t *w)
```

### hiyui_wdg_get_height

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_height(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_width

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_width(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_height

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_height(hiyui_widget_t *w)
```

### hiyui_wdg_get_width_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_width_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_height_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_height_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_width_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_width_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_content_height_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_height_px(hiyui_widget_t *w)
```

### hiyui_wdg_get_child_count

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_wdg_get_child_count(hiyui_widget_t *w)
```

### hiyui_wdg_get_bounds_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_bounds_px(hiyui_widget_t *w, hiyui_rect_t *out)
```

查询屏幕坐标中的未变换边界；NULL 参数返回 0，非空输出清零。

### hiyui_wdg_get_content_bounds_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_content_bounds_px(hiyui_widget_t *w, hiyui_rect_t *out)
```

查询局部内容区，单位为物理像素；NULL 参数返回 0，非空输出清零。

### hiyui_wdg_to_local_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_to_local_px(hiyui_widget_t *w, hiyui_point_t point, hiyui_point_t *out)
```

屏幕物理坐标转换为局部坐标，包含祖先变换；NULL 参数返回 0，非空输出清零。

### hiyui_wdg_to_screen_px

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_to_screen_px(hiyui_widget_t *w, hiyui_point_t point, hiyui_point_t *out)
```

局部物理坐标转换为屏幕坐标，包含祖先变换；NULL 参数返回 0，非空输出清零。

### hiyui_wdg_get_state

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_state(hiyui_widget_t *w, hiyui_widget_state_t *out)
```

查询交互状态；NULL 参数返回 0，非空输出清零。

### hiyui_wdg_redraw

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_redraw(hiyui_widget_t *w)
```

### hiyui_wdg_clickable

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clickable(hiyui_widget_t *w, int on)
```

### hiyui_wdg_focus

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_focus(hiyui_widget_t *w)
```

### hiyui_wdg_add_to_group

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_add_to_group(hiyui_widget_t *w)
```

### hiyui_wdg_key_focus

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_key_focus(hiyui_widget_t *w)
```

聚焦组件并接入键盘导航组。

### hiyui_wdg_get_viewport_metrics

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_get_viewport_metrics(hiyui_widget_t *w, int wide_min_width, hiyui_viewport_metrics_t *out)
```

查询组件当前 viewport。

| 参数 | 说明 |
|---|---|
| `wide_min_width` | 进入宽布局的最小逻辑宽度，必须大于 0。 |
| `out` | 成功时写入查询结果。 |


**返回值：** 成功返回 1；参数或组件无效时返回 0。

### hiyui_wdg_layout_environment

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_layout_environment(hiyui_widget_t *w, hiyui_layout_environment_t *out)
```

查询最近完成布局的环境，不强制同步布局；在 UI 线程调用。

**返回值：** 有效快照返回 1；out 为 NULL 返回 0，无效组件写入默认快照并返回 0。

### hiyui_wdg_on_environment_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_environment_change(hiyui_widget_t *w, hiyui_environment_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

追加环境订阅，在布局完成后通知首个快照及后续变化，相同快照不重复通知。 绑定调用栈中不调用处理器，跨父级移动跟随宿主；组件销毁时清理。 回调中解绑或销毁组件时，user_data 在当前派发结束后释放。

| 参数 | 说明 |
|---|---|
| `destroy` | 非 NULL 时接管 user_data，绑定失败也释放一次。 |
| `out_handle` | 可为 NULL，否则必须指向 NULL；通过 hiyui_event_off 解绑。 |


**返回值：** 绑定成功为 1；无效组件、NULL callback 或非空输出句柄为 0。

### hiyui_wdg_on_back_request

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_back_request(hiyui_widget_t *w, hiyui_back_request_fn callback, void *user_data, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

追加返回处理器，在该对象默认局部返回之前调用，首个消费后结束路由。 回调中解绑或销毁组件时，user_data 在当前派发结束后释放。

| 参数 | 说明 |
|---|---|
| `destroy` | 非 NULL 时接管 user_data，绑定失败也释放一次。 |
| `out_handle` | 可为 NULL，否则必须指向 NULL；使用现有事件句柄解绑和释放。 |


**返回值：** 绑定成功为 1；无效组件、NULL callback 或非空输出句柄为 0。

### hiyui_wdg_align

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_align(hiyui_widget_t *w, hiyui_align_pos_t pos, int dx, int dy)
```

相对父组件对齐到指定位置，dx/dy 为偏移。

### hiyui_wdg_bg

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_bg(hiyui_widget_t *w, uint32_t color)
```

### hiyui_wdg_bg_role

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_bg_role(hiyui_widget_t *w, hiyui_theme_role_t role)
```

### hiyui_wdg_surface

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_surface(hiyui_widget_t *w, hiyui_surface_role_t role)
```

绑定表面材质角色，颜色随主题与 DPI 更新。

### hiyui_wdg_text_color

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_color(hiyui_widget_t *w, uint32_t color)
```

### hiyui_wdg_text_color_role

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_text_color_role(hiyui_widget_t *w, hiyui_theme_role_t role)
```

### hiyui_wdg_font_size

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_font_size(hiyui_widget_t *w, int size)
```

### hiyui_wdg_radius

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_radius(hiyui_widget_t *w, int r)
```

### hiyui_wdg_padding

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_padding(hiyui_widget_t *w, int h, int v)
```

### hiyui_wdg_padding_all

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_padding_all(hiyui_widget_t *w, int all)
```

### hiyui_wdg_pad_left

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_left(hiyui_widget_t *w, int v)
```

### hiyui_wdg_pad_right

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_right(hiyui_widget_t *w, int v)
```

### hiyui_wdg_pad_top

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_top(hiyui_widget_t *w, int v)
```

### hiyui_wdg_pad_bottom

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_pad_bottom(hiyui_widget_t *w, int v)
```

### hiyui_wdg_opacity

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_opacity(hiyui_widget_t *w, uint8_t opa)
```

### hiyui_wdg_underline

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_underline(hiyui_widget_t *w, int on)
```

### hiyui_wdg_apply_style

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style(hiyui_widget_t *w, const hiyui_style_t *s)
```

### hiyui_wdg_apply_style_set

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_style_set(hiyui_widget_t *w, const hiyui_style_set_t *ss)
```

### hiyui_wdg_transition_bg

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_transition_bg(hiyui_widget_t *w, uint32_t ms)
```

### hiyui_wdg_transition_all

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_transition_all(hiyui_widget_t *w, uint32_t ms)
```

### hiyui_wdg_on_click

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_click(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

### hiyui_wdg_on_press

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_press(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

### hiyui_wdg_on_long_press

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_long_press(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

### hiyui_wdg_on_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_change(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

### hiyui_wdg_on_size_changed

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_size_changed(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

组件尺寸变化后触发。

### hiyui_wdg_on_delete

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_on_delete(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud)
```

组件销毁前触发；回调内不得访问 w。

### hiyui_wdg_on_theme_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_theme_change(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

主题变更回调；setTheme 刷新样式后执行，组件删除时自动解绑。

### hiyui_wdg_on_dpi_change

```c
HIYUI_API int HIYUI_CALL hiyui_wdg_on_dpi_change(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

DPI 变更回调；组件删除时自动解绑。

### hiyui_wdg_tooltip

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_tooltip(hiyui_widget_t *w, const char *text)
```

### hiyui_wdg_tooltip_ex

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_tooltip_ex(hiyui_widget_t *w, const hiyui_tooltip_config_t *config)
```

### hiyui_tooltip_dismiss

```c
HIYUI_API void HIYUI_CALL hiyui_tooltip_dismiss(void)
```

### hiyui_wdg_accessibility

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_accessibility(hiyui_widget_t *w, const hiyui_accessibility_props_t *props)
```

props 为 NULL 时恢复自动语义。

### hiyui_register_dpi_binding

```c
HIYUI_API int HIYUI_CALL hiyui_register_dpi_binding(hiyui_widget_t *w, hiyui_callback_fn cb, void *ud, hiyui_destroy_fn destroy)
```

注册 DPI 变化重算回调，组件销毁时自动注销。

**返回值：** 注册成功返回 1；参数无效或注册失败返回 0。

### hiyui_wdg_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_destroy(hiyui_widget_t *w)
```

销毁组件；父对象销毁时会级联销毁子组件

### hiyui_wdg_clean

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_clean(hiyui_widget_t *w)
```

清除所有子组件

### hiyui_wdg_scroll_to_y

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_to_y(hiyui_widget_t *w, int y)
```

滚动到指定 Y 位置

### hiyui_wdg_scrollable

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scrollable(hiyui_widget_t *w, int scrollable)
```

设置是否可滚动，0 禁用

### hiyui_wdg_raw

```c
HIYUI_API struct _lv_obj_t *HIYUI_CALL hiyui_wdg_raw(hiyui_widget_t *w)
```

获取底层 lv_obj_t*，允许混用裸 LVGL API

### hiyui_debug_print_obj

```c
HIYUI_API void HIYUI_CALL hiyui_debug_print_obj(hiyui_widget_t *w, const char *name)
```

Debug: 打印对象尺寸、padding、子元素数

### hiyui_debug_print_children

```c
HIYUI_API void HIYUI_CALL hiyui_debug_print_children(hiyui_widget_t *w, const char *prefix)
```

Debug: 打印对象所有子元素的宽高

### hiyui_wdg_press_lock

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_press_lock(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_elastic

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_elastic(hiyui_widget_t *w, int value)
```

### hiyui_wdg_scroll_momentum

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_scroll_momentum(hiyui_widget_t *w, int value)
```

### hiyui_wdg_enable_pc_scroll

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_enable_pc_scroll(hiyui_widget_t *w)
```

### hiyui_wdg_apply_scrollbar_style

```c
HIYUI_API void HIYUI_CALL hiyui_wdg_apply_scrollbar_style(hiyui_widget_t *w)
```

应用原生滚动条的常态和滚动中样式；NULL 无操作。
