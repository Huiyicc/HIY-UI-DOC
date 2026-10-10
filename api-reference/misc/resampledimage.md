---
title: "ResampledImage"
---

# ResampledImage <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/misc/image_resample.h>`

**命名空间：** `hiyui`

重采样产物，持有像素和 lv_image_dsc_t 描述符

仅可移动，dsc.data 指向 pixels 内部缓冲，移动后仍有效。 生命周期需覆盖所有引用它的 widget。

## 公开方法

### valid

```cpp
bool valid() const
```

是否持有有效位图
