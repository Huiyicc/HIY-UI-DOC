---
title: "BlurSource"
---

# BlurSource <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/effect/glass_effect.h>`

**命名空间：** `hiyui`

模糊源配置，指定模糊前的底图和颜色

当 bgFill / bgImage 有有效值时，GlassEffect 会先合成底图再模糊； 若为空，则模糊组件下方已绘制区域，backdrop-filter 行为。

## 公开成员

### bgFill

```cpp
BgFill bgFill
```

底色填充配置

### bgImage

```cpp
BgImage bgImage
```

底图配置

## 公开方法

### empty

```cpp
bool empty() const
```

是否包含任何有效的底图或颜色

**返回值：** 无底图且无底色时返回 true
