---
title: "FrameHeader"
---

# FrameHeader <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/window_frame.h>`

**命名空间：** `hiyui`

`WindowFrame` 的顶部区域。

**继承自：** `hiyui::Container< FrameHeader >`

## 公开方法

### FrameHeader

```cpp
FrameHeader(lv_obj_t *raw)
```

包装已有顶部区域对象。

### init

```cpp
FrameHeader & init(lv_obj_t *parent, const FrameRegionProps &props={}) &
```

在 `WindowFrame` 中创建顶部区域，父对象无效或区域已存在时不创建。
