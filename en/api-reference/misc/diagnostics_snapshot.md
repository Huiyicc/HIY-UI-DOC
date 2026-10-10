---
title: "diagnostics::Snapshot"
---

# diagnostics::Snapshot <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Self-contained capture copy; the resource table is read only when an object snapshot is requested, overwrite and truncation state is described by fields.

## Public Members

### untrackedResources

```cpp
uint64_t untrackedResources
```

Failed registrations since initialization plus this snapshot's truncations, may include duplicate observations.

### recorderBytes

```cpp
uint64_t recorderBytes
```

Ring buffer element usage, excluding registry, strings, snapshot and panel.

### resourcesTimeUs

```cpp
uint64_t resourcesTimeUs
```

Resource snapshot time, may be later than durationUs when capture stopped.

### overwrittenProfilerEvents

```cpp
uint64_t overwrittenProfilerEvents
```

LVGL detail entries within overwrittenEvents that were overwritten.

### filteredProfilerEvents

```cpp
uint64_t filteredProfilerEvents
```

Finished calls below the detail threshold, not counted in overwrittenEvents.

### eventLossEndUs

```cpp
uint64_t eventLossEndUs
```

Largest end time of overwritten normal spans, 0 when nothing was overwritten.

### profilerLossEndUs

```cpp
uint64_t profilerLossEndUs
```

Largest end time of overwritten LVGL details, 0 when nothing was overwritten.

### incompleteProfilerSpans

```cpp
uint64_t incompleteProfilerSpans
```

LVGL calls within incompleteSpans that exceeded the nesting limit or were unfinished at stop.

### filteredEventCallbacks

```cpp
uint64_t filteredEventCallbacks
```

Finished event callbacks below eventMinDurationUs, not counted in overwrittenEvents.
