---
title: "TonalEngine"
---

# TonalEngine <Badge type="info" text="Class" />

**Header:** `#include <hiyui/style/tonal_engine.h>`

**Namespace:** `hiyui`

Tonal mapping engine base class

Subclasses implement extracting hue parameters from a seed color and generating RGB for a given tone/chroma.

## Public Methods

### extractSeed

```cpp
virtual void extractSeed(uint32_t seedColor)=0
```

Extracts hue and chroma parameters from a seed color

Seed color in 0xRRGGBB format

### tonalColor

```cpp
virtual uint32_t tonalColor(double chroma, int tone) const =0
```

Generates a color of the given tone at the current hue

Chroma ratio [0.0, 1.0], 1.0 = the seed color original chroma Tone [0, 100]

### tonalColorWithHueShift

```cpp
virtual uint32_t tonalColorWithHueShift(int hueDelta, double chroma, int tone) const =0
```

Generates a color after shifting the hue, for Tertiary and similar

Hue shift in degrees Chroma ratio [0.0, 1.0] Tone [0, 100]
