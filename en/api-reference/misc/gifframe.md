---
title: "GifFrame"
---

# GifFrame <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/gif_frame.h>`

**Namespace:** `hiyui`

GIF first frame static image.

Holds ARGB8888 pixels and the matching lv_image_dsc_t. pixels live with the object; the descriptor returned by dsc() stays valid while the object is alive. Move only.
