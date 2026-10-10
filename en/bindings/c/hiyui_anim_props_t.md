---
title: "hiyui_anim_props_t"
---

# hiyui_anim_props_t <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/c/anim.h>`

## Public Members

### start

```c
int32_t start
```

### end

```c
int32_t end
```

### duration

```c
uint32_t duration
```

### ease

```c
hiyui_ease_t ease
```

### delay

```c
uint32_t delay
```

### playback

```c
uint32_t playback
```

### repeat_count

```c
int32_t repeat_count
```

### exec_cb

```c
hiyui_anim_exec_fn exec_cb
```

### finished_cb

```c
hiyui_anim_notify_fn finished_cb
```

Natural completion only; NULL disables notification.

### removed_cb

```c
hiyui_anim_notify_fn removed_cb
```

Completion, stop or replacement; NULL disables notification.
