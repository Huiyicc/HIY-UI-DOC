---
title: "TiledPointBuffer"
---

# TiledPointBuffer <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/tiled_point_buffer.h>`

**Namespace:** `hiyui`

Multi-level LOD tiled point buffer


Level-0 stores raw data. Higher levels store min/max aggregates of the tiles below. push() and query() may be called from different threads.

## Public Methods

### queryLttb

```cpp
std::vector< LodPoint > queryLttb(size_t startIdx, size_t endIdx, int pixelW, float spikeThreshold=3.0f) const
```

Two-stage LOD query with MinMax reduction, LTTB smoothing and spike marking


Stage one, MinMax quickly reduces the raw data to min(rawCount, pixelW×4) intermediate points. Stage two, LTTB selects pixelW visually representative points from the intermediate layer. Spike detection, the MinMax stage marks |max-min| &gt; spikeThreshold × σ as spike.


Start data index End data index Number of output points, equal to the screen pixel width Spike threshold as a multiple of the standard deviation, default 3.0
