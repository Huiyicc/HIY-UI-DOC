---
title: "ThemeTransition"
---

# ThemeTransition <Badge type="info" text="类" />

**头文件：** `#include <hiyui/effect/theme_transition.h>`

**命名空间：** `hiyui`

主题切换过渡动画调度器

纯静态接口，调用 `play()` 执行完整的截图 → 切换 → 动画流程。 默认使用 SlideRevealEffect，可通过 `setEffect()` 替换。

## 静态方法

### play

```cpp
static void play(const Theme &newTheme, TransitionDirection dir)
```

执行主题切换过渡动画

流程，截屏 → setTheme → overlay 遮盖 → 动画揭露新内容。 非动画模式下直接切换，无 overlay。



| 参数 | 说明 |
|---|---|
| `newTheme` | 目标主题 |
| `dir` | 动画方向 |

### setEffect

```cpp
static void setEffect(std::unique_ptr< TransitionEffect > effect)
```

设置过渡动画效果策略

| 参数 | 说明 |
|---|---|
| `effect` | 效果实例，所有权转移 |

### setExclusionZone

```cpp
static void setExclusionZone(const ExclusionZone &zone)
```

设置排除区域，矩形或圆形

| 参数 | 说明 |
|---|---|
| `zone` | 排除区域配置 |

### setExclusionObj

```cpp
static void setExclusionObj(_lv_obj_t *obj)
```

从 LVGL 对象坐标自动设置矩形排除区域

| 参数 | 说明 |
|---|---|
| `obj` | 目标 LVGL 对象 |

### clearExclusionZone

```cpp
static void clearExclusionZone()
```

清除排除区域
