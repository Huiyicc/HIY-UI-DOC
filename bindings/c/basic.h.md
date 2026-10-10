---
title: "basic.h"
---

# basic.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/basic.h>`

基础组件：Label / Button / Image / Icon / Progress / Avatar / Spin

## 函数

### hiyui_label_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_label_create(hiyui_widget_t *parent, const hiyui_label_props_t *props)
```

### hiyui_label_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_label_set_text(hiyui_widget_t *label, const char *text)
```

### hiyui_button_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_button_create(hiyui_widget_t *parent, const hiyui_button_props_t *props)
```

### hiyui_button_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_button_set_text(hiyui_widget_t *btn, const char *text)
```

### hiyui_button_set_icon

```c
HIYUI_API void HIYUI_CALL hiyui_button_set_icon(hiyui_widget_t *btn, uint32_t codepoint)
```

### hiyui_button_set_icon_src

```c
HIYUI_API void HIYUI_CALL hiyui_button_set_icon_src(hiyui_widget_t *btn, const void *source)
```

替换图片图标，复制字符串源；NULL 清除图标，图片数据借用至替换或销毁。

### hiyui_button_set_state_src

```c
HIYUI_API void HIYUI_CALL hiyui_button_set_state_src(hiyui_widget_t *btn, hiyui_style_state_t state, const void *src)
```

替换状态底图，复制路径源；仅 NORMAL/HOVERED/PRESSED/DISABLED 生效，NULL 清除该状态底图，图片数据借用至替换或销毁。

### hiyui_image_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_image_create(hiyui_widget_t *parent, const hiyui_image_props_t *props)
```

### hiyui_image_set_src

```c
HIYUI_API void HIYUI_CALL hiyui_image_set_src(hiyui_widget_t *img, const void *src)
```

### hiyui_image_set_recolor

```c
HIYUI_API void HIYUI_CALL hiyui_image_set_recolor(hiyui_widget_t *img, uint32_t color, uint8_t opa)
```

### hiyui_image_set_fit

```c
HIYUI_API void HIYUI_CALL hiyui_image_set_fit(hiyui_widget_t *img, hiyui_image_fit_t fit)
```

### hiyui_image_gif_pause

```c
HIYUI_API void HIYUI_CALL hiyui_image_gif_pause(hiyui_widget_t *img)
```

### hiyui_image_gif_resume

```c
HIYUI_API void HIYUI_CALL hiyui_image_gif_resume(hiyui_widget_t *img)
```

### hiyui_image_gif_restart

```c
HIYUI_API void HIYUI_CALL hiyui_image_gif_restart(hiyui_widget_t *img)
```

### hiyui_icon_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_icon_create(hiyui_widget_t *parent, const hiyui_icon_props_t *props)
```

### hiyui_icon_set_codepoint

```c
HIYUI_API void HIYUI_CALL hiyui_icon_set_codepoint(hiyui_widget_t *icon, uint32_t cp)
```

### hiyui_icon_set_size

```c
HIYUI_API void HIYUI_CALL hiyui_icon_set_size(hiyui_widget_t *icon, uint32_t size)
```

### hiyui_icon_set_icon_style

```c
HIYUI_API void HIYUI_CALL hiyui_icon_set_icon_style(hiyui_widget_t *icon, const hiyui_font_icon_style_t *style)
```

### hiyui_icon_set_color

```c
HIYUI_API void HIYUI_CALL hiyui_icon_set_color(hiyui_widget_t *icon, uint32_t color)
```

### hiyui_icon_set_theme_color

```c
HIYUI_API void HIYUI_CALL hiyui_icon_set_theme_color(hiyui_widget_t *icon, hiyui_theme_role_t role)
```

### hiyui_icon_set_opacity

```c
HIYUI_API void HIYUI_CALL hiyui_icon_set_opacity(hiyui_widget_t *icon, uint8_t opa)
```

### hiyui_icon_color_from

```c
HIYUI_API void HIYUI_CALL hiyui_icon_color_from(hiyui_widget_t *icon, hiyui_widget_t *source)
```

跟随来源当前文字颜色；重复调用替换来源，来源销毁后保持最后颜色，NULL 参数无操作。

### hiyui_icon_rendered

```c
HIYUI_API int HIYUI_CALL hiyui_icon_rendered(hiyui_widget_t *icon)
```

已有可显示图像时返回 1，NULL 或图标不可用时返回 0。

### hiyui_progress_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_progress_create(hiyui_widget_t *parent, const hiyui_progress_props_t *props)
```

### hiyui_progress_set_value

```c
HIYUI_API void HIYUI_CALL hiyui_progress_set_value(hiyui_widget_t *progress, int value, hiyui_notify_t notify)
```

### hiyui_progress_get_value

```c
HIYUI_API int HIYUI_CALL hiyui_progress_get_value(hiyui_widget_t *progress)
```

### hiyui_progress_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_progress_set_text(hiyui_widget_t *progress, const char *text)
```

### hiyui_progress_set_active_color

```c
HIYUI_API void HIYUI_CALL hiyui_progress_set_active_color(hiyui_widget_t *progress, uint32_t color)
```

### hiyui_progress_set_segments

```c
HIYUI_API void HIYUI_CALL hiyui_progress_set_segments(hiyui_widget_t *progress, const hiyui_progress_segment_t *segs, int count)
```

### hiyui_progress_set_current_step

```c
HIYUI_API void HIYUI_CALL hiyui_progress_set_current_step(hiyui_widget_t *progress, int step)
```

### hiyui_progress_get_current_step

```c
HIYUI_API int HIYUI_CALL hiyui_progress_get_current_step(hiyui_widget_t *progress)
```

### hiyui_progress_get_step_count

```c
HIYUI_API int HIYUI_CALL hiyui_progress_get_step_count(hiyui_widget_t *progress)
```

### hiyui_avatar_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_avatar_create(hiyui_widget_t *parent, const hiyui_avatar_props_t *props)
```

### hiyui_avatar_set_src

```c
HIYUI_API void HIYUI_CALL hiyui_avatar_set_src(hiyui_widget_t *avatar, const void *src)
```

### hiyui_spin_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_spin_create(hiyui_widget_t *parent, const hiyui_spin_props_t *props)
```

### hiyui_spin_set_spinning

```c
HIYUI_API void HIYUI_CALL hiyui_spin_set_spinning(hiyui_widget_t *spin, int on)
```

### hiyui_spin_is_spinning

```c
HIYUI_API int HIYUI_CALL hiyui_spin_is_spinning(hiyui_widget_t *spin)
```

### hiyui_spin_set_color

```c
HIYUI_API void HIYUI_CALL hiyui_spin_set_color(hiyui_widget_t *spin, uint32_t color)
```

### hiyui_spin_set_type

```c
HIYUI_API void HIYUI_CALL hiyui_spin_set_type(hiyui_widget_t *spin, hiyui_spin_type_t type)
```

### hiyui_spin_set_speed

```c
HIYUI_API void HIYUI_CALL hiyui_spin_set_speed(hiyui_widget_t *spin, float speed)
```

### hiyui_spin_get_speed

```c
HIYUI_API float HIYUI_CALL hiyui_spin_get_speed(hiyui_widget_t *spin)
```
