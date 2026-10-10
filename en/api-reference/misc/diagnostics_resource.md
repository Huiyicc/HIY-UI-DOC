---
title: "diagnostics::Resource"
---

# diagnostics::Resource <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Non-owning copy; id identifies the observed lifetime, 0 means only the current snapshot exists. address must not be dereferenced; properties of released entries come from the last observation.

## Public Members

### observedUs

```cpp
uint64_t observedUs
```

First observation time, 0 means earlier than the capture start or unknown.

### elapsedMs

```cpp
int32_t elapsedMs
```

Animation elapsed time, negative values mean start delay.

### targetAddress

```cpp
uint64_t targetAddress
```

Address of the animation target or timer user data, must not be dereferenced.
