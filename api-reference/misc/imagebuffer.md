---
title: "ImageBuffer"
---

# ImageBuffer <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/image_buffer.h>`

**命名空间：** `hiyui`

库持有存储的 32 位像素图像资源

create 从调用方缓冲复制像素；行自上而下排列，每行 width × 4 字节， 无行间填充。拷贝与移动后内部描述符仍指向自身存储。



**参见：** Image::src(const ImageBuffer &amp;)


**参见：** `SystemTray::create`

## 公开方法

### ImageBuffer

```cpp
ImageBuffer(const ImageBuffer &other)
```

深拷贝像素，描述符指向新存储

### operator=

```cpp
ImageBuffer & operator=(const ImageBuffer &other)
```

深拷贝像素，描述符指向新存储

### valid

```cpp
bool valid() const
```

是否持有有效位图

### width

```cpp
uint32_t width() const
```

位图宽度，像素；空资源为 0

### height

```cpp
uint32_t height() const
```

位图高度，像素；空资源为 0

## 静态方法

### create

```cpp
static ImageBuffer create(uint32_t width, uint32_t height, PixelFormat format, const uint8_t *pixels, size_t byteCount)
```

从调用方像素创建资源

| 参数 | 说明 |
|---|---|
| `width` | 宽度，像素，须大于 0 |
| `height` | 高度，像素，须大于 0 |
| `format` | 像素内存布局 |
| `pixels` | 像素字节首地址 |
| `byteCount` | 须等于 width × height × 4 |


**返回值：** 参数不符或总字节数超出 32 位描述符范围时返回 `valid()` 为 false 的空资源；超大分配的失败按标准库语义抛出
