---
title: "emoji.h"
---

# emoji.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/emoji.h>`

emoji 文本光栅化工具

## 函数

### hiyui_emoji_render

```c
HIYUI_API int HIYUI_CALL hiyui_emoji_render(const char *text, int font_size, const void **out_src, int *out_w, int *out_h)
```

把单个 emoji 文本光栅化为图片描述符。

| 参数 | 说明 |
|---|---|
| `text` | emoji 文本（UTF-8） |
| `font_size` | 字号，像素；≤0 取 22 |
| `out_src` | 输出图片源，借用内部 font_cache，长期有效 |
| `out_w` | 输出宽度 |
| `out_h` | 输出高度 |


**返回值：** 1 成功，0 表示无法渲染为图片（调用方用文本回退）
