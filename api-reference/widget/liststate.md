---
title: "ListState"
---

# ListState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/list.h>`

**命名空间：** `hiyui`

列表运行时状态，生命周期跟随 LVGL 对象

堆分配后挂载到 lv_obj_t 的 user_data 上， 通过 LV_EVENT_DELETE 回调自动释放。

## 公开成员

### updating

```cpp
bool updating
```

beginUpdate 期间为 true，暂停视图刷新
