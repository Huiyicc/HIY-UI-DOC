---
title: "diagnostics::Frame"
---

# diagnostics::Frame <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

One content refresh; durationUs ends at CPU submit return or refresh end, and renderUs includes flush.

## Public Members

### submitUs

```cpp
uint64_t submitUs
```

For software SDL the accumulated flush callback time; for GL the swap call time.

### requestUs

```cpp
uint64_t requestUs
```

Time of the first refresh request for this frame; valid only when requestAssociated is true.

### continuous

```cpp
bool continuous
```

The first refresh request of this frame falls within one frame budget after the previous submit; a request continuity criterion, not a dropped-frame count.

### submitted

```cpp
bool submitted
```

The CPU submit return was observed; does not imply GPU completion or actual present.

### inputAssociated

```cpp
bool inputAssociated
```

The interval from the last input processing to the next submit; the input is not guaranteed to have caused this frame.
