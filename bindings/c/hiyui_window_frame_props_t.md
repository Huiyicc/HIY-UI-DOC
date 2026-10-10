---
title: "hiyui_window_frame_props_t"
---

# hiyui_window_frame_props_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/layout.h>`

响应式窗口框架创建属性。

## 公开成员

### wide_min_width

```c
int wide_min_width
```

宽布局最小内容逻辑宽度，0 使用 720。

### narrow_navigation

```c
hiyui_frame_navigation_presentation_t narrow_navigation
```

窄布局导航呈现，默认 Drawer。

### wide_navigation

```c
hiyui_frame_navigation_presentation_t wide_navigation
```

宽布局导航呈现，默认 Docked。

### navigation_edge

```c
hiyui_frame_navigation_edge_t navigation_edge
```

导航依附边缘。

### navigation_width

```c
int navigation_width
```

停靠导航逻辑宽度，0 使用 196，HIYUI_AUTO 跟随内容。

### drawer_width

```c
int drawer_width
```

抽屉最大逻辑宽度，0 使用 320。

### drawer_max_width_percent

```c
int drawer_max_width_percent
```

抽屉最大宽度百分比，0 使用 82。

### scrim_opacity

```c
uint8_t scrim_opacity
```

遮罩透明度，0 使用 112。

### animated

```c
hiyui_bool_t animated
```

是否启用抽屉动画，默认启用。

### docked_navigation_full_height

```c
hiyui_bool_t docked_navigation_full_height
```

停靠导航是否跨越 Header 区域。
