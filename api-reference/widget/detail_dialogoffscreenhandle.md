---
title: "detail::DialogOffScreenHandle"
---

# detail::DialogOffScreenHandle <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/detail/offscreen_dialog.h>`

**命名空间：** `hiyui`

离屏会话打开结果

调用方在 screen 上构建卡片后调用 fitDialogOffScreen 完成测量、居中与显示。

## 公开成员

### screen

```cpp
lv_obj_t * screen
```

离屏窗口活动屏幕，卡片挂载点

### display

```cpp
lv_display_t * display
```

离屏 display

### session

```cpp
DialogOffScreenSession * session
```

会话句柄，失败为 nullptr
