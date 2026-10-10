---
title: "FrameContent"
---

# FrameContent <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/window_frame.h>`

**命名空间：** `hiyui`

`WindowFrame` 的主内容区域。

**继承自：** `hiyui::Container< FrameContent >`

## 公开方法

### FrameContent

```cpp
FrameContent(lv_obj_t *raw)
```

包装已有主内容区域对象。

### init

```cpp
FrameContent & init(lv_obj_t *parent, const FrameRegionProps &props={}) &
```

在 `WindowFrame` 中创建内容区域，父对象无效或区域已存在时不创建。
