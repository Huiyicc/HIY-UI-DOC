---
title: "hiyui_list_item_t"
---

# hiyui_list_item_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/item_list.h>`

## 公开成员

### text

```c
const char * text
```

### icon_codepoint

```c
uint32_t icon_codepoint
```

### icon_src

```c
const void * icon_src
```

### icon_style

```c
hiyui_font_icon_style_t icon_style
```

### separator

```c
hiyui_bool_t separator
```

### localized_text

```c
const hiyui_localized_text_t * localized_text
```

调用时复制翻译描述并覆盖普通文字；空值或无效描述使用普通文字。
