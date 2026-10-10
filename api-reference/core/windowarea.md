---
title: "WindowArea"
---

# WindowArea <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/core/responsive.h>`

**命名空间：** `hiyui`

相对窗口客户区原点的逻辑区域，不是子容器局部坐标。

## 公开成员

### valid

```cpp
bool valid
```

无窗口宿主时为 false。

### safeArea

```cpp
LogicalRect safeArea
```

已排除装饰和已知系统保留区。

### availableArea

```cpp
LogicalRect availableArea
```

排除已知键盘遮挡后的最大矩形，同面积取上方再左方。

### keyboardArea

```cpp
LogicalRect keyboardArea
```

未知或确认关闭时为空，由 keyboardAreaKnown 区分。

### safeAreaKnown

```cpp
bool safeAreaKnown
```

false 时 safeArea 仅保证当前已知内容范围。
