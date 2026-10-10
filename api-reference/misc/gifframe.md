---
title: "GifFrame"
---

# GifFrame <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/gif_frame.h>`

**命名空间：** `hiyui`

GIF 首帧静态图

持有 ARGB8888 像素与对应 lv_image_dsc_t。pixels 随对象存活， dsc() 返回的描述符在对象存活期间有效。仅可移动。
