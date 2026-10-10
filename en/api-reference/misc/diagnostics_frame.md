---
title: "diagnostics::Frame"
---

# diagnostics::Frame <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

One content refresh; durationUs ends at CPU submit return or refresh end, renderUs includes flush.

## Public Members

### submitUs

```cpp
uint64_t submitUs
```

Software SDL: accumulated flush callback time; GL: swap call time.

### requestUs

```cpp
uint64_t requestUs
```

Time of this frame's first refresh request, valid only when requestAssociated is true.

### continuous

```cpp
bool continuous
```

This frame's first refresh request arrived within one frame budget after the previous submit; a request-continuity criterion, not a dropped-frame count.

### submitted

```cpp
bool submitted
```

CPU submit return observed; does not mean GPU completion or actual present.

### inputAssociated

```cpp
bool inputAssociated
```

Interval from the last input handling to the next submit; does not guarantee that input caused this frame.
