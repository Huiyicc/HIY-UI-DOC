---
title: "tilt.h"
---

# tilt.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/tilt.h>`

指针跟随 3D 倾斜效果。

组件操作须在 UI 线程调用；非 NULL 句柄须指向存活组件，组件销毁后不得继续使用。 效果随组件销毁自动清理。

## 函数

### hiyui_tilt_params_init

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_params_init(hiyui_tilt_params_t *params)
```

填入与 TiltParams 一致的默认值。

| 参数 | 说明 |
|---|---|
| `params` | NULL 时无操作。 |

### hiyui_tilt_attach

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_attach(hiyui_widget_t *obj, const hiyui_tilt_params_t *params)
```

挂载倾斜效果，重复调用更新全部参数。

运行中关闭动画会立即到达目标角度，回弹中关闭会立即回平。



| 参数 | 说明 |
|---|---|
| `obj` | NULL 时无操作。 |
| `params` | NULL 使用默认值；非 NULL 时在返回前复制全部字段，零值按原值生效。 |

### hiyui_tilt_detach

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_detach(hiyui_widget_t *obj)
```

移除倾斜效果，倾斜中立即复原。

| 参数 | 说明 |
|---|---|
| `obj` | NULL 或未挂载时无操作。 |

### hiyui_tilt_reset

```c
HIYUI_API void HIYUI_CALL hiyui_tilt_reset(hiyui_widget_t *obj)
```

立即回平并保持挂载，后续悬停或按住拖动可再次触发倾斜。

| 参数 | 说明 |
|---|---|
| `obj` | NULL 或未挂载时无操作。 |

### hiyui_tilt_is_attached

```c
HIYUI_API int HIYUI_CALL hiyui_tilt_is_attached(hiyui_widget_t *obj)
```

查询倾斜效果的挂载状态。

**返回值：** 已挂载返回 1，未挂载或 obj 为 NULL 返回 0。
