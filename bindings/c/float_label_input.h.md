---
title: "float_label_input.h"
---

# float_label_input.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/float_label_input.h>`

浮动标签输入框

## 函数

### hiyui_float_label_input_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_float_label_input_create(hiyui_widget_t *parent, const hiyui_float_label_input_props_t *props)
```

创建浮动标签输入框；label 为 NULL 时使用 input.placeholder。

### hiyui_float_label_input_set_text

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_set_text(hiyui_widget_t *w, const char *text, hiyui_notify_t notify)
```

### hiyui_float_label_input_get_text

```c
HIYUI_API const char *HIYUI_CALL hiyui_float_label_input_get_text(hiyui_widget_t *w)
```

**返回值：** 当前文本；w 为 NULL 时返回 NULL。

### hiyui_float_label_input_set_label

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_set_label(hiyui_widget_t *w, const char *label)
```

设置浮动标签文本；NULL 或空串隐藏标签。

### hiyui_float_label_input_clear

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_clear(hiyui_widget_t *w, hiyui_notify_t notify)
```

### hiyui_float_label_input_focus

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_focus(hiyui_widget_t *w)
```

聚焦内部输入框。

### hiyui_float_label_input_add_to_group

```c
HIYUI_API void HIYUI_CALL hiyui_float_label_input_add_to_group(hiyui_widget_t *w)
```

将内部输入框加入默认输入组。
