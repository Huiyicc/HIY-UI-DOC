---
title: "Spin"
---

# Spin <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/spin.h>`

**命名空间：** `hiyui`

加载旋转器组件

**继承自：** `hiyui::Chainable< Spin >`

## 公开方法

### spinning

```cpp
Spin & spinning(bool on) &
```

控制旋转动画

### spinning

```cpp
bool spinning() const
```

查询当前是否旋转中

### color

```cpp
Spin & color(uint32_t c) &
```

运行时更改颜色

| 参数 | 说明 |
|---|---|
| `c` | 0xRRGGBB |

### color

```cpp
Spin & color(ThemeRole role) &
```

绑定颜色到主题语义角色，主题切换时自动更新

### type

```cpp
Spin & type(SpinType t) &
```

运行时更改形态

### speed

```cpp
Spin & speed(float s) &
```

运行时更改速度倍率

| 参数 | 说明 |
|---|---|
| `s` | 速度倍率，0=静止，1.0=正常，&gt;1=加速 |

### speed

```cpp
float speed() const
```

查询当前速度倍率
