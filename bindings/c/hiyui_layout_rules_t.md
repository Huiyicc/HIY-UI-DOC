---
title: "hiyui_layout_rules_t"
---

# hiyui_layout_rules_t <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/c/layout.h>`

从 base 开始，按数组顺序覆盖所有命中规则的已标记字段。

## 公开成员

### base

```c
hiyui_layout_values_t base
```

### rules

```c
const hiyui_layout_rule_t * rules
```

count 大于 0 时必须指向有效数组。

### count

```c
size_t count
```

0 表示只应用 base，不读取 rules。
