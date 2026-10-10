---
title: "VideoProps"
---

# VideoProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/video.h>`

**Namespace:** `hiyui`

Initial configuration of a video.

## Public Members

### src

```cpp
const char * src
```

UTF-8 file path or network address, copied at construction.

### width

```cpp
int width
```

Logical pixels, HIYUI_AUTO fills the parent container width.

### height

```cpp
int height
```

Logical pixels, HIYUI_AUTO fills the parent container height.

### autoplay

```cpp
bool autoplay
```

Play after loading; false shows the first frame and pauses.

### loop

```cpp
bool loop
```

Restart from the beginning when seekable media ends; ignored for live streams.

### volume

```cpp
int volume
```

Range 0-100; muting does not change the stored volume.

### ioTimeoutMs

```cpp
int ioTimeoutMs
```

Timeout in milliseconds for open and probe, a single seek, or continuous packet-read waiting; non-positive values use 10000.

### reconnectAttempts

```cpp
int reconnectAttempts
```

Maximum reconnection attempts per interruption; non-positive disables it, and the count resets after frames recover.

### reconnectDelayMs

```cpp
int reconnectDelayMs
```

Milliseconds to wait before each reconnection; non-positive values use 1000.
