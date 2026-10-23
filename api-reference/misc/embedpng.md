---
title: "EmbedPng"
---

# EmbedPng <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/embed_png.h>`

**命名空间：** `hiyui`

嵌入式 PNG 资源描述符

相同数组地址与长度的实例共享描述符。数组须保持不变，数组和至少一个持有该资源的实例须覆盖组件引用期。

## 公开方法

### EmbedPng

```cpp
EmbedPng(const unsigned char *data, unsigned int size)
```

从 embed 数组构造

| 参数 | 说明 |
|---|---|
| `data` | incbin 生成的 unsigned char 数组 |
| `size` | 数据大小，字节 |

### dsc

```cpp
const lv_image_dsc_t * dsc() const
```

获取图片描述符，可传给 ImageProps::src。

**返回值：** 借用指针，移出后的对象返回 nullptr。
