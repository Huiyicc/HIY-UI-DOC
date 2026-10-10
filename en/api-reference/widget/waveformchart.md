---
title: "WaveformChart"
---

# WaveformChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/waveform_chart.h>`

**Namespace:** `hiyui`

Waveform chart widget

Waveform visualization for high-frequency data streams with multi-channel support, viewport control and thread-safe data pushing.



**See also:** `WaveformChartProps`


**See also:** `WaveformChannel`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< WaveformChart >`

## Public Methods

### WaveformChart

```cpp
WaveformChart(lv_obj_t *raw)
```

Wrap an existing LVGL object

### WaveformChart

```cpp
WaveformChart(WaveformChartProps props={})
```

Construct from aggregated properties

Waveform chart properties

### init

```cpp
WaveformChart & init(lv_obj_t *parent) &
```

Create the waveform chart under a parent object

Parent LVGL object pointer

### init

```cpp
WaveformChart & init(Widget &parent) &
```

Create the waveform chart under a parent object

Parent LVGL object pointer

### addChannel

```cpp
int addChannel(WaveformChannel config={})
```

Add a channel

Channel configuration Index of the added channel, incrementing from 0

### pushValue

```cpp
WaveformChart & pushValue(int channelIdx, float value) &
```

Push a single sample to a channel

Thread safe, can be called from a data acquisition thread.


Channel index Sample value This component

### pushValues

```cpp
WaveformChart & pushValues(int channelIdx, const float *values, size_t count) &
```

Push a batch of samples to a channel

Thread safe, can be called from a data acquisition thread.


Channel index Array of sample values Number of samples This component

### viewport

```cpp
WaveformChart & viewport(size_t startIdx, size_t endIdx) &
```

Set the visible viewport range

Start data index End data index This component

### viewAll

```cpp
WaveformChart & viewAll() &
```

Show all data

This component

### viewLatest

```cpp
WaveformChart & viewLatest(size_t windowSize) &
```

Follow the latest data automatically

Number of samples in the visible window This component

### yRange

```cpp
WaveformChart & yRange(float min, float max) &
```

Set the Y axis range

Minimum value Maximum value This component

### channelSize

```cpp
size_t channelSize(int channelIdx) const
```

Get the number of data points in a channel

Channel index Number of data points

### refresh

```cpp
WaveformChart & refresh() &
```

Refresh the display

Call after data updates, or periodically, to redraw the waveform.


This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Get the underlying waveform chart draw object

Pointer to the waveform chart LVGL object for advanced custom drawing
