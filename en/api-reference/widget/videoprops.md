---
title: "VideoProps"
---

# VideoProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/video.h>`

**Namespace:** `hiyui`

Initial video configuration.

## Public Members

### src

```cpp
const char * src
```

UTF-8 file path or network URL, copied at construction.

### width

```cpp
int width
```

Logical pixels; HIYUI_AUTO fills the parent width.

### height

```cpp
int height
```

Logical pixels; HIYUI_AUTO fills the parent height.

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

Range 0-100; muting does not change the saved volume.

### ioTimeoutMs

```cpp
int ioTimeoutMs
```

Timeout in milliseconds for open and probe, for a single seek, and for continuous packet-read waiting; non-positive uses 10000.

### reconnectAttempts

```cpp
int reconnectAttempts
```

Maximum reconnect attempts per interruption; non-positive disables it, and the count restarts once frames resume.

### reconnectDelayMs

```cpp
int reconnectDelayMs
```

Milliseconds to wait before each reconnect; non-positive uses 1000.
