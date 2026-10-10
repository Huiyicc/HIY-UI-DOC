---
title: "Tooltip"
---

# Tooltip <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/tooltip.h>`

**命名空间：** `hiyui`

悬浮提示，内部管理，不直接实例化

通过 `Widget::tooltip`("文本") 或 `Widget::tooltip`({...}) 绑定到任意组件， 鼠标悬浮约 500ms 后自动弹出，移出后立即关闭。

## 静态方法

### showAt

```cpp
static void showAt(lv_obj_t *target, const TooltipConfig &config)
```

在目标对象附近显示 tooltip

### showAtArea

```cpp
static void showAtArea(const lv_area_t &area, const TooltipConfig &config)
```

在屏幕矩形附近显示 tooltip

| 参数 | 说明 |
|---|---|
| `area` | 目标区域，屏幕绝对坐标 |

### dismiss

```cpp
static void dismiss()
```

关闭当前显示的 tooltip
