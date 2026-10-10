---
title: "emoji.h"
---

# emoji.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/emoji.h>`

Emoji text rasterization utility

## Functions

### hiyui_emoji_render

```c
HIYUI_API int HIYUI_CALL hiyui_emoji_render(const char *text, int font_size, const void **out_src, int *out_w, int *out_h)
```

Rasterizes a single emoji text into an image descriptor.

Emoji text in UTF-8 Font size in pixels; a value of 0 or less uses 22 Output image source; borrows the internal font_cache and stays valid long term Output width Output height 1 on success, 0 when the emoji cannot be rendered as an image and the caller falls back to text
