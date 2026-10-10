---
title: "hiyui_video_props_t"
---

# hiyui_video_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/video.h>`

Can be zero-initialized. Boolean defaults are all false.

## Public Members

### src

```c
const char * src
```

UTF-8 path or URL, copied at creation. NULL or an empty string means an empty source.

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

With false, pauses after loading the first frame.

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

0 uses the default volume 100; other values are clamped to 0-100, and muting uses muted.

### io_timeout_ms

```c
int io_timeout_ms
```

Timeout in milliseconds for opening and probing, a single seek, or continuously waiting for packets. Non-positive values use 10000.

### reconnect_attempts

```c
int reconnect_attempts
```

Maximum reconnection attempts per interruption. Non-positive values disable reconnection, and the count restarts after frames resume.

### reconnect_delay_ms

```c
int reconnect_delay_ms
```

Delay in milliseconds before each reconnection attempt. Non-positive values use 1000.
