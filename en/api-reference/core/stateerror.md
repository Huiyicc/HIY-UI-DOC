---
title: "StateError"
---

# StateError <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/state.h>`

**Namespace:** `hiyui`

Error thrown by set and assignment failures; carries no business value.

**Inherits:** `std::runtime_error`

## Public Methods

### result

```cpp
const StateWriteResult & result() const
```

The complete write result
