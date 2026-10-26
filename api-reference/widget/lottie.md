---
title: "Lottie"
---

# Lottie <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/lottie.h>`

**命名空间：** `hiyui`

`Lottie` 矢量动画组件

文件路径源使用系统文件系统，不经过 LVGL 文件系统驱动。渲染缓冲由组件持有， 随组件尺寸更新。



**参见：** `LottieProps`

**继承自：** `hiyui::Chainable< Lottie >`

## 公开方法

### Lottie

```cpp
Lottie(lv_obj_t *raw)
```

包装已有 LVGL 对象

### Lottie

```cpp
Lottie(LottieProps props={})
```

通过属性聚合构造

### init

```cpp
Lottie & init(lv_obj_t *parent) &
```

在父对象上创建 LVGL lottie 对象

### init

```cpp
Lottie & init(Widget &parent) &
```

在父对象上创建 LVGL lottie 对象

### src

```cpp
Lottie & src(const char *path) &
```

运行时切换动画文件

路径在返回前复制。换源后从头播放，保持播放/暂停、循环和速度设置。

### srcData

```cpp
Lottie & srcData(const void *data, uint32_t size) &
```

运行时切换为内嵌 JSON 数据

已挂载时数据在返回前复制，调用后即可释放；未挂载时数据保持借用直到挂载。 换源后从头播放，保持播放/暂停、循环和速度设置。

### play

```cpp
Lottie & play() &
```

恢复播放

### pause

```cpp
Lottie & pause() &
```

暂停播放

### restart

```cpp
Lottie & restart() &
```

回到第 0 帧并播放

### playing

```cpp
bool playing() const
```

是否正在播放

### loop

```cpp
Lottie & loop(bool infinite) &
```

设置循环模式

| 参数 | 说明 |
|---|---|
| `infinite` | true = 无限循环，false = 播放一次 |

### speed

```cpp
Lottie & speed(float multiplier) &
```

设置播放速度

| 参数 | 说明 |
|---|---|
| `multiplier` | 速度倍率，大于 0，1 = 原速 |

### recolor

```cpp
Lottie & recolor(uint32_t color, uint8_t opa=255) &
```

设置重着色，固定颜色

作用于每一帧，透明度保留，运行时可切换。



| 参数 | 说明 |
|---|---|
| `color` | 重着色颜色，0xRRGGBB |
| `opa` | 重着色强度 [0,255]，默认 255 |

### recolor

```cpp
Lottie & recolor(ThemeRole role, uint8_t opa=255) &
```

设置重着色，主题角色色

颜色由主题解析，主题切换时自动重取。



| 参数 | 说明 |
|---|---|
| `role` | 主题角色 |
| `opa` | 重着色强度 [0,255]，默认 255 |

### progress

```cpp
float progress() const
```

当前循环播放进度

**返回值：** 0..1，未加载源时返回 0

### durationMs

```cpp
uint32_t durationMs() const
```

单次循环时长

**返回值：** 毫秒，含速度倍率，未加载源时返回 0
