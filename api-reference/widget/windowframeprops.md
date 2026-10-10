---
title: "WindowFrameProps"
---

# WindowFrameProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/window_frame.h>`

**命名空间：** `hiyui`

响应式窗口框架创建属性。

## 公开成员

### wideMinWidth

```cpp
int wideMinWidth
```

进入宽布局的最小内容逻辑宽度，必须大于 0。

### narrowNavigation

```cpp
FrameNavigationPresentation narrowNavigation
```

窄布局导航呈现。

### wideNavigation

```cpp
FrameNavigationPresentation wideNavigation
```

宽布局导航呈现。

### navigationEdge

```cpp
FrameNavigationEdge navigationEdge
```

导航依附边缘。

### navigationWidth

```cpp
int navigationWidth
```

停靠导航宽度；`HIYUI_AUTO` 时跟随内容，正数为逻辑像素。

### drawerWidth

```cpp
int drawerWidth
```

抽屉导航最大宽度，逻辑像素。

### drawerMaxWidthPercent

```cpp
int drawerMaxWidthPercent
```

抽屉占框架宽度的最大百分比。

### scrimOpacity

```cpp
uint8_t scrimOpacity
```

抽屉遮罩透明度。

### animated

```cpp
bool animated
```

是否启用导航抽屉动画。

### dockedNavigationFullHeight

```cpp
bool dockedNavigationFullHeight
```

停靠导航是否跨越 Header 区域。
