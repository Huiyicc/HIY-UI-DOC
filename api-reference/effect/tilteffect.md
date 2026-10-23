---
title: "TiltEffect"
---

# TiltEffect <Badge type="info" text="类" />

**头文件：** `#include <hiyui/effect/tilt_effect.h>`

**命名空间：** `hiyui`

指针跟随 3D 倾斜效果，挂载到任意 LVGL 对象

指针进入对象布局矩形后，对象子树以中心为原点按光标偏移做透视倾斜并跟随光标， 指针移出后回弹复原。布局保持不变，指针命中位置随倾斜画面映射；倾斜期间子树按 刷新周期持续重新渲染，子对象的输入与状态变化即时生效。弹出层按对象布局位置锚 定，与倾斜画面的偏差不超过当前倾角的透视偏移。对象尺寸或样式变化时自动复原， 父容器滚动时覆盖层跟随移动。触摸按住对象拖动时同样跟随，抬起或移出布局矩形后 回弹。



**参见：** `TiltParams`

## 静态方法

### attach

```cpp
static void attach(_lv_obj_t *obj, TiltParams params={})
```

挂载倾斜效果，重复挂载仅更新参数

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象 |
| `params` | 倾斜参数 |

### detach

```cpp
static void detach(_lv_obj_t *obj)
```

移除倾斜效果，倾斜中移除时立即复原

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象 |

### reset

```cpp
static void reset(_lv_obj_t *obj)
```

立即回平，效果保持挂载，下次悬停或按住时重新生效

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象 |

### isAttached

```cpp
static bool isAttached(const _lv_obj_t *obj)
```

查询挂载状态

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象 |


**返回值：** 已挂载返回 true
