---
title: "WaveformChart"
---

# WaveformChart <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chart/waveform_chart.h>`

**Namespace:** `hiyui`

Waveform chart widget

Waveform visualization for high-frequency data streams, with multiple channels, viewport control and thread-safe data pushing.



**See also:** `WaveformChartProps`


**See also:** `WaveformChannel`


**See also:** `ChartBase`

**Inherits:** `hiyui::ChartBase< WaveformChart >`

## Public Methods

### WaveformChart

```cpp
WaveformChart(lv_obj_t *raw)
```

Wraps an existing LVGL object

### WaveformChart

```cpp
WaveformChart(WaveformChartProps props={})
```

Aggregate construction from properties

Waveform chart properties

### init

```cpp
WaveformChart & init(lv_obj_t *parent) &
```

Creates the waveform chart on a parent object

Parent LVGL object pointer

### init

```cpp
WaveformChart & init(Widget &parent) &
```

Creates the waveform chart on a parent object

Parent LVGL object pointer

### addChannel

```cpp
int addChannel(WaveformChannel config={})
```

Adds a channel

Channel configuration Index of the new channel, incrementing from 0

### pushValue

```cpp
WaveformChart & pushValue(int channelIdx, float value) &
```

Pushes a single sample to a channel

Thread-safe; callable from a data acquisition thread.


Channel index Sample value This component

### pushValues

```cpp
WaveformChart & pushValues(int channelIdx, const float *values, size_t count) &
```

Pushes a batch of samples to a channel

Thread-safe; callable from a data acquisition thread.


Channel index Sample value array Number of samples This component

### viewport

```cpp
WaveformChart & viewport(size_t startIdx, size_t endIdx) &
```

Sets the visible viewport range

Start data index End data index This component

### viewAll

```cpp
WaveformChart & viewAll() &
```

Shows all data

This component

### viewLatest

```cpp
WaveformChart & viewLatest(size_t windowSize) &
```

Follows the latest data automatically

Number of samples in the visible window This component

### yRange

```cpp
WaveformChart & yRange(float min, float max) &
```

Sets the Y axis range

Minimum value Maximum value This component

### channelSize

```cpp
size_t channelSize(int channelIdx) const
```

Returns the number of data points in a channel

Channel index Number of data points

### refresh

```cpp
WaveformChart & refresh() &
```

Refreshes the display

Call after data updates or periodically to redraw the waveform.


This component

### chartObj

```cpp
lv_obj_t * chartObj() const
```

Returns the underlying waveform chart draw object

Waveform chart LVGL object pointer for advanced custom drawing
