---
title: "diagnostics::Config"
---

# diagnostics::Config <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Capture configuration with finite capacity; capacities are record counts and time units are given in field names.

## Public Members

### eventCapacity

```cpp
uint32_t eventCapacity
```

64 to 1048576; in Detailed the capacity is split evenly between normal spans and LVGL details, with the remainder going to normal spans.

### frameCapacity

```cpp
uint32_t frameCapacity
```

16 to 65536.

### sampleCapacity

```cpp
uint32_t sampleCapacity
```

2 to 65536.

### frameBudgetUs

```cpp
uint32_t frameBudgetUs
```

Positive; a reference budget for continuous request intervals; does not change refresh scheduling.

### samplePeriodMs

```cpp
uint32_t samplePeriodMs
```

At least 250; sampling runs with the UI main loop and samples missed during blocking are not back-filled.

### profilerMinDurationUs

```cpp
uint32_t profilerMinDurationUs
```

Filters LVGL details only; 0 keeps all calls; does not affect normal spans or frame statistics.

### eventMinDurationUs

```cpp
uint32_t eventMinDurationUs
```

Automatic event callbacks below this many microseconds are only counted in filteredEventCallbacks; 0 keeps all; handwritten Scope is unaffected.
