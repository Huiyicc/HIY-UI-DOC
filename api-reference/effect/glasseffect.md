---
title: "GlassEffect"
---

# GlassEffect <Badge type="info" text="类" />

**头文件：** `#include <hiyui/effect/glass_effect.h>`

**命名空间：** `hiyui`

毛玻璃模糊效果，将模糊滤镜挂载到 LVGL 对象

渲染层级，底图 -&gt; 颜色层 -&gt; 模糊层。  - 无底图/颜色时，模糊组件下方已绘制区域，backdrop-filter 行为
- 有底图/颜色时，内部合成后再模糊






**参见：** `BlurSource`


**参见：** `Backdrop`

## 静态方法

### attach

```cpp
static void attach(_lv_obj_t *obj, const Backdrop &params, const BlurSource &source={})
```

挂载模糊效果到指定对象

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象指针 |
| `params` | 模糊参数，半径、饱和度等 |
| `source` | 模糊源配置，默认为空，backdrop-filter 模式 |

### detach

```cpp
static void detach(_lv_obj_t *obj)
```

移除指定对象上的模糊效果

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象指针 |

### invalidateCache

```cpp
static void invalidateCache(_lv_obj_t *obj)
```

标记缓存脏，下次绘制时重新生成模糊图像

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象指针 |

### isAttached

```cpp
static bool isAttached(_lv_obj_t *obj)
```

查询指定对象是否已挂载模糊效果

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象指针 |


**返回值：** 已挂载返回 true

### invalidateBackdrops

```cpp
static void invalidateBackdrops()
```

标记所有背后采样缓存失效，下次重绘时更新。
