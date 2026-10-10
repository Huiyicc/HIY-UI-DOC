---
title: "glass.h"
---

# glass.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/glass.h>`

毛玻璃模糊效果，对齐 hiyui::GlassEffect

## 函数

### hiyui_glass_attach

```c
HIYUI_API void HIYUI_CALL hiyui_glass_attach(hiyui_widget_t *obj, const hiyui_backdrop_t *backdrop, const hiyui_blur_source_t *source)
```

挂载毛玻璃效果到组件。

| 参数 | 说明 |
|---|---|
| `obj` | 目标组件 |
| `backdrop` | 模糊参数，blur_radius=0 时无效 |
| `source` | 模糊源，NULL 表示 backdrop-filter 模式（模糊组件下方区域） |

### hiyui_glass_detach

```c
HIYUI_API void HIYUI_CALL hiyui_glass_detach(hiyui_widget_t *obj)
```

移除组件上的毛玻璃效果

### hiyui_glass_invalidate_cache

```c
HIYUI_API void HIYUI_CALL hiyui_glass_invalidate_cache(hiyui_widget_t *obj)
```

标记缓存失效，组件尺寸或位置变化后重新生成模糊图像

### hiyui_glass_is_attached

```c
HIYUI_API int HIYUI_CALL hiyui_glass_is_attached(hiyui_widget_t *obj)
```

查询组件是否已挂载毛玻璃效果
