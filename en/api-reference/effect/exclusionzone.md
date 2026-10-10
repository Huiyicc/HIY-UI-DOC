---
title: "ExclusionZone"
---

# ExclusionZone <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/effect/theme_transition.h>`

**Namespace:** `hiyui`

Exclusion area for the transition animation

Overlay pixels inside the exclusion area stay transparent, letting active components below, such as the Segmented thumb, render normally during the transition.

## Public Members

### x

```cpp
int x
```

Top-left X

### y

```cpp
int y
```

Top-left Y

### w

```cpp
int w
```

Width

### h

```cpp
int h
```

Height

### circular

```cpp
bool circular
```

When true, a circle centered on the rect with radius min(w,h)/2
