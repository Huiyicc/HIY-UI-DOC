---
title: "hiyui_state_result_t"
---

# hiyui_state_result_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/state.h>`

写入结果；committed 表示候选值已替换旧值，失败状态也可能为真。

## 公开成员

### status

```c
hiyui_state_status_t status
```

### normalized

```c
int normalized
```

### committed

```c
int committed
```
