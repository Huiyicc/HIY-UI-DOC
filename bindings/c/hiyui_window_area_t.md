---
title: "hiyui_window_area_t"
---

# hiyui_window_area_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/types.h>`

窗口客户区坐标下的逻辑区域，布尔字段输出为 0 或 1。

## 公开成员

### valid

```c
int valid
```

### safe_area

```c
hiyui_logical_rect_t safe_area
```

排除装饰及已知系统保留区。

### available_area

```c
hiyui_logical_rect_t available_area
```

排除键盘后的最大矩形，同面积取上方再左方。

### keyboard_area

```c
hiyui_logical_rect_t keyboard_area
```

### safe_area_known

```c
int safe_area_known
```

0 时 safe_area 仅保证当前已知内容范围。

### keyboard_area_known

```c
int keyboard_area_known
```

空键盘区域为未知或关闭，由此字段区分。

### shape

```c
hiyui_display_shape_t shape
```
