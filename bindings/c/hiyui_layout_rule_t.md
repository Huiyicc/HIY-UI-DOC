---
title: "hiyui_layout_rule_t"
---

# hiyui_layout_rule_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/layout.h>`

两轴逻辑内容尺寸同时满足下界包含、上界不包含的区间时生效。 下界非负，上界非负或为 HIYUI_AUTO；下界不得大于有限上界，相等时永不匹配。

## 公开成员

### min_width

```c
int min_width
```

### max_width

```c
int max_width
```

### min_height

```c
int min_height
```

### max_height

```c
int max_height
```

### values

```c
hiyui_layout_values_t values
```

fields 必须是 base.fields 的子集。
