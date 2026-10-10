---
title: "TiledPointBuffer"
---

# TiledPointBuffer <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chart/tiled_point_buffer.h>`

**命名空间：** `hiyui`

多层 LOD 分片点缓冲区


Level-0 保存原始数据，更高层保存下层 tile 的 min/max 聚合值。 push() 与 query() 可从不同线程调用。

## 公开方法

### queryLttb

```cpp
std::vector< LodPoint > queryLttb(size_t startIdx, size_t endIdx, int pixelW, float spikeThreshold=3.0f) const
```

二级 LOD 查询，MinMax 降维 → LTTB 平滑 + 毛刺标记


第一级，MinMax 将原始数据快速降至 min(rawCount, pixelW×4) 个中间点 第二级，LTTB 从中间层选出 pixelW 个视觉代表点 毛刺检测，MinMax 阶段 |max-min| &gt; spikeThreshold × σ 标记为 spike



| 参数 | 说明 |
|---|---|
| `startIdx` | 数据起始索引 |
| `endIdx` | 数据结束索引 |
| `pixelW` | 最终输出点数，= 屏幕像素宽度 |
| `spikeThreshold` | 毛刺阈值，标准差倍数，默认 3.0 |
