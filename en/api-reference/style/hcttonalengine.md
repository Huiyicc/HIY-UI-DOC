---
title: "HctTonalEngine"
---

# HctTonalEngine <Badge type="info" text="Class" />

**Header:** `#include <hiyui/style/tonal_engine.h>`

**Namespace:** `hiyui`

HCT (CAM16 + L*) based tonal mapping engine

chroma is an absolute HCT chroma value; typical MD3 TonalSpot values are Primary=36, Secondary=16, Tertiary=24, Neutral=6, NeutralVariant=8. Perceptually uniform with high color accuracy.

**Inherits:** `hiyui::TonalEngine`

## Public Methods

### extractSeed

```cpp
virtual void extractSeed(uint32_t seedColor) override
```

Extracts hue and chroma parameters from a seed color

Seed color in 0xRRGGBB format

### tonalColor

```cpp
virtual uint32_t tonalColor(double chroma, int tone) const override
```

Generates a color at the given tone under the current hue

Chroma ratio [0.0, 1.0], 1.0 = the seed color original chroma Tone [0, 100] A 0xRRGGBB value

### tonalColorWithHueShift

```cpp
virtual uint32_t tonalColorWithHueShift(int hueDelta, double chroma, int tone) const override
```

Generates a color after shifting the hue, used for Tertiary and similar

Hue shift in degrees Chroma ratio [0.0, 1.0] Tone [0, 100] A 0xRRGGBB value
