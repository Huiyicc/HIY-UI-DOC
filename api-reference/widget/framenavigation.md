---
title: "FrameNavigation"
---

# FrameNavigation <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/window_frame.h>`

**命名空间：** `hiyui`

`WindowFrame` 的导航区域。

**继承自：** `hiyui::Container< FrameNavigation >`

## 公开方法

### FrameNavigation

```cpp
FrameNavigation(lv_obj_t *raw)
```

包装已有导航区域对象。

### init

```cpp
FrameNavigation & init(lv_obj_t *parent, const FrameRegionProps &props={}) &
```

在 `WindowFrame` 中创建导航区域，父对象无效或区域已存在时不创建。
