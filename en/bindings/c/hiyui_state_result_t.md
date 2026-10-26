---
title: "hiyui_state_result_t"
---

# hiyui_state_result_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/state.h>`

Write result; committed means the candidate replaced the old value and may be true together with a failure status.

## Public Members

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
