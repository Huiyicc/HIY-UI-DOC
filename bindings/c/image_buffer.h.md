---
title: "image_buffer.h"
---

# image_buffer.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/image_buffer.h>`

## 枚举

### hiyui_pixel_format_t

每像素四字节，字节顺序 B、G、R、A；alpha 为直通 alpha。

| 值 | 说明 |
|---|---|
| `HIYUI_PIXEL_XRGB8888` = 0 |  |
| `HIYUI_PIXEL_ARGB8888` |  |

## 类型别名

### hiyui_image_buffer_t

```c
typedef struct hiyui_image_buffer_s hiyui_image_buffer_t
```

## 函数

### hiyui_image_buffer_create

```c
HIYUI_API hiyui_image_buffer_t *HIYUI_CALL hiyui_image_buffer_create(uint32_t width, uint32_t height, hiyui_pixel_format_t format, const uint8_t *pixels, size_t byte_count)
```

复制像素创建图片，行自上而下且无行间填充。

| 参数 | 说明 |
|---|---|
| `byte_count` | 必须等于 width × height × 4，宽高须大于 0。 |


**返回值：** 参数无效返回 NULL；成功句柄须由 hiyui_image_buffer_destroy 释放。

### hiyui_image_buffer_width

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_image_buffer_width(const hiyui_image_buffer_t *image)
```

返回物理像素宽度；NULL 返回 0。

### hiyui_image_buffer_height

```c
HIYUI_API uint32_t HIYUI_CALL hiyui_image_buffer_height(const hiyui_image_buffer_t *image)
```

返回物理像素高度；NULL 返回 0。

### hiyui_image_buffer_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_image_buffer_destroy(hiyui_image_buffer_t *image)
```

释放资源；NULL 安全，非空句柄只能释放一次。
