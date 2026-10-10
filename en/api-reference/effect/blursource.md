---
title: "BlurSource"
---

# BlurSource <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/effect/glass_effect.h>`

**Namespace:** `hiyui`

Blur source configuration specifying the base image and color before blurring

When bgFill / bgImage hold valid values, GlassEffect composites the base first and then blurs. When empty, blurs the already drawn area below the component, the backdrop-filter behavior.

## Public Members

### bgFill

```cpp
BgFill bgFill
```

Base color fill configuration

### bgImage

```cpp
BgImage bgImage
```

Base image configuration

## Public Methods

### empty

```cpp
bool empty() const
```

Whether any valid base image or color is present

Returns true when there is no base image and no base color
