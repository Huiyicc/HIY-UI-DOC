---
title: "TiledPointBuffer"
---

# TiledPointBuffer <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/tiled_point_buffer.h>`

**Namespace:** `hiyui`

Multi-level LOD tiled point buffer


Level-0 stores raw data and higher levels store min/max aggregates of lower-level tiles. push() and query() may be called from different threads.

## Public Methods

### queryLttb

```cpp
std::vector< LodPoint > queryLttb(size_t startIdx, size_t endIdx, int pixelW, float spikeThreshold=3.0f) const
```

Two-stage LOD query: MinMax reduction, then LTTB smoothing with spike marking


Stage one: MinMax quickly reduces the raw data to min(rawCount, pixelW×4) intermediate points. Stage two: LTTB selects pixelW visual representative points from the intermediate layer. Spike detection: in the MinMax stage, |max-min| &gt; spikeThreshold × σ marks a point as spike.


Start index of the data range End index of the data range Number of output points, equal to the screen pixel width Spike threshold as a multiple of the standard deviation, default 3.0
