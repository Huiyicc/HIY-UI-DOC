---
title: "Part"
---

# Part <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/part.h>`

**命名空间：** `hiyui`

按值保存部件定制，复制时共享回调；不持有部件或控件所有权。

## 公开方法

### onActivate

```cpp
Part & onActivate(F &&callback) &
```

设置默认行为之前执行的激活回调，重复设置替换原回调。
