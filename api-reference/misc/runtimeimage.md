---
title: "RuntimeImage"
---

# RuntimeImage <Badge type="info" text="类" />

**头文件：** `#include <hiyui/misc/runtime_image.h>`

**命名空间：** `hiyui`

运行时加载的图片

持有图片原始数据与对应的 lv_image_dsc_t，data 缓冲区随对象存活。 `dsc()` 返回的指针在对象存活期间有效，传给 `Image` / `RichInput::insertImage` 等。

## 公开方法

### loadFromFile

```cpp
bool loadFromFile(const char *path)
```

从文件加载图片

**返回值：** 成功返回 true；文件不存在、读取错误或非 SDL 后端返回 false

### dsc

```cpp
const lv_image_dsc_t * dsc() const
```

获取图片描述符

**返回值：** 未加载时返回 nullptr
