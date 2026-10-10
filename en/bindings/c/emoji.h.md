---
title: "emoji.h"
---

# emoji.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/emoji.h>`

Emoji text rasterization utilities

## Functions

### hiyui_emoji_render

```c
HIYUI_API int HIYUI_CALL hiyui_emoji_render(const char *text, int font_size, const void **out_src, int *out_w, int *out_h)
```

Rasterizes a single emoji text into an image descriptor.

Emoji text in UTF-8. Font size in pixels. Values ≤ 0 use 22. Output image source. Borrows the internal font_cache and stays valid long-term. Output width. Output height. 1 on success. 0 means the text cannot be rendered as an image, so the caller falls back to text.
