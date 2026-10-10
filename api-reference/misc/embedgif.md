---
title: "EmbedGif"
---

# EmbedGif <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/embed_gif.h>`

**命名空间：** `hiyui`

嵌入式 GIF 资源描述符

图像描述符引用 embed 数组。数组生命周期须覆盖引用该 GIF 的组件。

## 公开方法

### EmbedGif

```cpp
EmbedGif(const unsigned char *data, unsigned int size)
```

从 embed 数组构造

| 参数 | 说明 |
|---|---|
| `data` | incbin 生成的 GIF 二进制数组 |
| `size` | 数据大小，字节 |

### dsc

```cpp
const lv_image_dsc_t * dsc() const
```

获取 lv_image_dsc_t 指针，可传给 `ImageProps::src` / `AvatarProps::src`
