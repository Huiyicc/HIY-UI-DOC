---
title: "LottieProps"
---

# LottieProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/lottie.h>`

**Namespace:** `hiyui`

Creation properties of the Lottie animation widget.

## Public Members

### src

```cpp
const void * src
```

Animation source, a file path (const char*) or JSON data, distinguished by srcSize

### srcSize

```cpp
uint32_t srcSize
```

When greater than 0, src is JSON data of that many bytes; when 0, src is a UTF-8 file path

### width

```cpp
int width
```

Render width in theme logical pixels, must be greater than 0

### height

```cpp
int height
```

Render height in theme logical pixels, must be greater than 0

### autoplay

```cpp
bool autoplay
```

Plays automatically after mounting

### loop

```cpp
bool loop
```

Loops forever

### recolor

```cpp
uint32_t recolor
```

Recolor color, HIYUI_NONE = no recoloring

### recolorOpa

```cpp
uint8_t recolorOpa
```

Recolor intensity [0,255]
