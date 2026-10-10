---
title: "diagnostics::Display"
---

# diagnostics::Display <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

## Public Members

### drawBufferBytes

```cpp
uint64_t drawBufferBytes
```

Size of draw buffers registered with LVGL; excludes SDL textures and GPU driver allocations.

### renderer

```cpp
std::string renderer
```

Current compositing backend.

### fallbackReason

```cpp
std::string fallbackReason
```

Reason of the most recent fallback; empty when none occurred.

### gpuTasks

```cpp
uint64_t gpuTasks
```

Number of draw tasks submitted to the GPU compositor since the display was created.

### softwareTasks

```cpp
uint64_t softwareTasks
```

Number of tasks drawn in software within the GPU compositor.

### uploadBytes

```cpp
uint64_t uploadBytes
```

Total pixel bytes uploaded by the compositor and display backend.

### readbackBytes

```cpp
uint64_t readbackBytes
```

Total pixel bytes read back by the compositor and shaders.

### submittedFrames

```cpp
uint64_t submittedFrames
```

Frames with an observed submit return in this capture; refreshes without an observed submit are excluded.

### continuousIntervals

```cpp
uint64_t continuousIntervals
```

Number of submit intervals counted into the activity statistics in this capture.

### continuousIntervalSumUs

```cpp
uint64_t continuousIntervalSumUs
```

Sum of submit intervals in the activity statistics, in microseconds.
