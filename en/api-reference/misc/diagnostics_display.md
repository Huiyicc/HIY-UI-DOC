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

Size of draw buffers registered with LVGL, excluding SDL textures and GPU driver allocations.

### renderer

```cpp
std::string renderer
```

Current compositing backend.

### fallbackReason

```cpp
std::string fallbackReason
```

Most recent fallback reason, empty if none occurred.

### gpuTasks

```cpp
uint64_t gpuTasks
```

Draw tasks submitted to the GPU compositor since display creation.

### softwareTasks

```cpp
uint64_t softwareTasks
```

Tasks drawn in software within the GPU compositor.

### uploadBytes

```cpp
uint64_t uploadBytes
```

Pixel bytes uploaded in total by the compositor and display backend.

### readbackBytes

```cpp
uint64_t readbackBytes
```

Pixel bytes read back in total by the compositor and shaders.

### submittedFrames

```cpp
uint64_t submittedFrames
```

Frames whose submit returned during this capture, excluding refreshes with no observed submit.

### continuousIntervals

```cpp
uint64_t continuousIntervals
```

Submit intervals counted into active statistics during this capture.

### continuousIntervalSumUs

```cpp
uint64_t continuousIntervalSumUs
```

Sum of submit intervals in active statistics, in microseconds.
