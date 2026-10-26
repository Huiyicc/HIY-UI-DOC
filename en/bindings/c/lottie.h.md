---
title: "lottie.h"
---

# lottie.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/lottie.h>`

Lottie vector animation widget.

## Functions

### hiyui_lottie_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_lottie_create(hiyui_widget_t *parent, const hiyui_lottie_props_t *props)
```

Creates a Lottie animation widget

When src_size is greater than 0,
 src is JSON data copied at creation; otherwise src is a UTF-8 file path
 that is copied. NULL props uses defaults; zero autoplay / loop reads
 as TRUE and zero width / height reads as 96.


Widget handle, or NULL
 when parent is NULL

### hiyui_lottie_set_src

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_src(hiyui_widget_t *lottie, const char *path)
```

Switches the animation file, copying the path; NULL does nothing

### hiyui_lottie_set_src_data

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_src_data(hiyui_widget_t *lottie, const void *data, uint32_t size)
```

Switches to embedded JSON data, copied before return; NULL or zero size does nothing

### hiyui_lottie_play

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_play(hiyui_widget_t *lottie)
```

Resumes playback; NULL does nothing

### hiyui_lottie_pause

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_pause(hiyui_widget_t *lottie)
```

Pauses playback; NULL does nothing

### hiyui_lottie_restart

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_restart(hiyui_widget_t *lottie)
```

Seeks to frame 0 and plays; NULL does nothing

### hiyui_lottie_is_playing

```c
HIYUI_API int HIYUI_CALL hiyui_lottie_is_playing(hiyui_widget_t *lottie)
```

Whether the animation is playing

1 = playing, 0 = paused or NULL handle

### hiyui_lottie_set_loop

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_loop(hiyui_widget_t *lottie, hiyui_bool_t loop)
```

Sets the loop mode, HIYUI_BOOL_DEFAULT reads as TRUE; NULL does nothing

### hiyui_lottie_set_speed

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_speed(hiyui_widget_t *lottie, float multiplier)
```

Sets the speed multiplier, must be greater than 0 or no-op; NULL does nothing

### hiyui_lottie_set_recolor

```c
HIYUI_API void HIYUI_CALL hiyui_lottie_set_recolor(hiyui_widget_t *lottie, uint32_t color, uint8_t opa)
```

Sets recoloring applied to every frame; NULL does nothing

### hiyui_lottie_get_progress

```c
HIYUI_API int HIYUI_CALL hiyui_lottie_get_progress(hiyui_widget_t *lottie, float *out)
```

Reads the current cycle progress

Receives 0..1, or 0 when no source is loaded 1 = success, 0 = NULL arguments

### hiyui_lottie_get_duration

```c
HIYUI_API int HIYUI_CALL hiyui_lottie_get_duration(hiyui_widget_t *lottie, uint32_t *out)
```

Reads the single cycle duration

Receives milliseconds including the speed multiplier, or 0 when no source is loaded 1 = success, 0 = NULL arguments
