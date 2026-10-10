---
title: "EmbedSvg"
---

# EmbedSvg <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/embed_svg.h>`

**命名空间：** `hiyui`

嵌入式 SVG 资源描述符

通过 lunasvg 将 SVG 预光栅化为 ARGB8888 位图。 内部持有像素缓冲区，生命周期需覆盖所有引用该图片的 widget。


支持 tintColor 强调色叠加，对非透明像素替换 RGB 通道、保留原 Alpha。

## 公开方法

### EmbedSvg

```cpp
EmbedSvg(const unsigned char *data, unsigned int size, int width=-1, int height=-1, uint32_t tintColor=HIYUI_NONE)
```

从 embed 数组构造

| 参数 | 说明 |
|---|---|
| `data` | incbin 生成的 unsigned char 数组，SVG 文本 |
| `size` | 数据大小，字节 |
| `width` | 渲染宽度，HIYUI_AUTO(-1) = 使用 SVG 固有尺寸 |
| `height` | 渲染高度，HIYUI_AUTO(-1) = 使用 SVG 固有尺寸 |
| `tintColor` | 强调色叠加，HIYUI_NONE = 不叠加 |

### dsc

```cpp
const lv_image_dsc_t * dsc() const
```

获取 lv_image_dsc_t 指针，可传给 `ImageProps::src` / `AvatarProps::src`
