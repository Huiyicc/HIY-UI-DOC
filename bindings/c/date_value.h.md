---
title: "date_value.h"
---

# date_value.h <Badge type="info" text="头文件" />

**头文件：** `#include <hiyui/c/date_value.h>`

日期 / 时间值与选择器通用回调类型

TimePicker / DatePicker 共享。year=0 表示未选择。

## 类型别名

### hiyui_picker_footer_fn

```c
typedef void(HIYUI_CALL * hiyui_picker_footer_fn) (hiyui_widget_t *panel, void *ud)
```

选择器浮层页脚构建回调，在浮层底部容器内构建自定义子组件
