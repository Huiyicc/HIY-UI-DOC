---
title: "svg.h"
---

# svg.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/svg.h>`

SVG 资源句柄，经 lunasvg 光栅化为位图

## 类型别名

### hiyui_svg_t

```c
typedef struct hiyui_svg_s hiyui_svg_t
```

## 函数

### hiyui_svg_from_file

```c
HIYUI_API hiyui_svg_t *HIYUI_CALL hiyui_svg_from_file(const char *path, int w, int h, uint32_t tint)
```

从文件加载 SVG 并光栅化。

| 参数 | 说明 |
|---|---|
| `path` | LVGL fs 路径，需带驱动字母，如 "D:res/x.svg" |
| `w` | 渲染宽度，HIYUI_AUTO = SVG 固有尺寸 |
| `h` | 渲染高度，HIYUI_AUTO = SVG 固有尺寸 |
| `tint` | 强调色叠加，HIYUI_NONE = 不叠加 |


**返回值：** 句柄，失败返回 NULL，调用者负责 hiyui_svg_destroy

### hiyui_svg_from_data

```c
HIYUI_API hiyui_svg_t *HIYUI_CALL hiyui_svg_from_data(const void *data, unsigned int size, int w, int h, uint32_t tint)
```

从内存数据加载 SVG 并光栅化。

| 参数 | 说明 |
|---|---|
| `data` | SVG 文本 |
| `size` | data 字节数 |
| `w` | 渲染宽度，HIYUI_AUTO = SVG 固有尺寸 |
| `h` | 渲染高度，HIYUI_AUTO = SVG 固有尺寸 |
| `tint` | 强调色叠加，HIYUI_NONE = 不叠加 |


**返回值：** 句柄，失败返回 NULL，调用者负责 hiyui_svg_destroy

### hiyui_svg_src

```c
HIYUI_API const void *HIYUI_CALL hiyui_svg_src(hiyui_svg_t *svg)
```

取位图描述符，传给 hiyui_avatar_props_t::src 或 hiyui_image_props_t::src。

**返回值：** lv_image_dsc_t 指针，在句柄存活期间有效

### hiyui_svg_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_svg_destroy(hiyui_svg_t *svg)
```

释放句柄，之后不得再使用其 src
