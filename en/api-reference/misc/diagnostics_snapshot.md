---
title: "diagnostics::Snapshot"
---

# diagnostics::Snapshot <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Self-contained capture copy; the resource table is read only when an object snapshot is requested, and resource overwrite and truncation state are described by the fields.

## Public Members

### untrackedResources

```cpp
uint64_t untrackedResources
```

Failed registrations since initialization plus truncations in this snapshot; may include duplicate observations.

### recorderBytes

```cpp
uint64_t recorderBytes
```

Ring buffer element storage; excludes registries, strings, snapshots and the panel.

### resourcesTimeUs

```cpp
uint64_t resourcesTimeUs
```

Time of the resource snapshot; may be later than durationUs at stop.

### overwrittenProfilerEvents

```cpp
uint64_t overwrittenProfilerEvents
```

Number of LVGL detail entries overwritten within overwrittenEvents.

### filteredProfilerEvents

```cpp
uint64_t filteredProfilerEvents
```

Number of finished calls below the detail threshold; not counted in overwrittenEvents.

### eventLossEndUs

```cpp
uint64_t eventLossEndUs
```

Largest end time among overwritten normal spans; 0 when nothing was overwritten.

### profilerLossEndUs

```cpp
uint64_t profilerLossEndUs
```

Largest end time among overwritten LVGL details; 0 when nothing was overwritten.

### incompleteProfilerSpans

```cpp
uint64_t incompleteProfilerSpans
```

Number of LVGL calls in incompleteSpans that exceeded the nesting limit or had not ended when stopping.

### filteredEventCallbacks

```cpp
uint64_t filteredEventCallbacks
```

Number of finished event callbacks below eventMinDurationUs; not counted in overwrittenEvents.
