---
title: "hiyui_video_props_t"
---

# hiyui_video_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/video.h>`

Can be zero-initialized; boolean defaults are all false.

## Public Members

### src

```c
const char * src
```

UTF-8 path or URL, copied at creation; NULL or an empty string means an empty source.

### width

```c
int width
```

Logical pixels; 0 or HIYUI_AUTO fills the parent width.

### height

```c
int height
```

Logical pixels; 0 or HIYUI_AUTO fills the parent height.

### fit

```c
hiyui_image_fit_t fit
```

HIYUI_IMAGE_FIT_DEFAULT uses Contain.

### autoplay

```c
hiyui_bool_t autoplay
```

false pauses after loading the first frame.

### loop

```c
hiyui_bool_t loop
```

Only seekable media supports looping.

### muted

```c
hiyui_bool_t muted
```

### volume

```c
int volume
```

0 uses the default volume 100; other values clamp to 0-100, and muting uses muted.

### io_timeout_ms

```c
int io_timeout_ms
```

Timeout in milliseconds for open and probe, a single seek, or continuous packet-read waiting; non-positive values use 10000.

### reconnect_attempts

```c
int reconnect_attempts
```

Maximum reconnect attempts per interruption; non-positive values disable it, and the count resets after frames resume.

### reconnect_delay_ms

```c
int reconnect_delay_ms
```

Milliseconds to wait before each reconnect; non-positive values use 1000.
