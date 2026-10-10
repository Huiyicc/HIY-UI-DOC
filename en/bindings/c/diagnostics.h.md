---
title: "diagnostics.h"
---

# diagnostics.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/diagnostics.h>`

## 快照读取

### hiyui_diagnostics_snapshot_get_info

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_info(const hiyui_diagnostics_snapshot_t *snapshot, hiyui_diagnostics_snapshot_info_t *out)
```

### hiyui_diagnostics_snapshot_get_span

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_span(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_span_t *out)
```

### hiyui_diagnostics_snapshot_get_frame

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_frame(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_frame_t *out)
```

### hiyui_diagnostics_snapshot_get_sample

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_sample(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_sample_t *out)
```

### hiyui_diagnostics_snapshot_get_display

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_display(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_display_t *out)
```

### hiyui_diagnostics_snapshot_get_resource

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_snapshot_get_resource(const hiyui_diagnostics_snapshot_t *snapshot, size_t index, hiyui_diagnostics_resource_t *out)
```

## Enums

### hiyui_diagnostics_mode_t

| Value | Description |
|---|---|
| `HIYUI_DIAGNOSTICS_SUMMARY` = 0 |  |
| `HIYUI_DIAGNOSTICS_DETAILED` = 1 |  |

### hiyui_diagnostics_status_t

| Value | Description |
|---|---|
| `HIYUI_DIAGNOSTICS_OK` = 0 |  |
| `HIYUI_DIAGNOSTICS_UNAVAILABLE` = 1 |  |
| `HIYUI_DIAGNOSTICS_NOT_RUNNING` = 2 |  |
| `HIYUI_DIAGNOSTICS_INVALID_CONFIG` = 3 |  |
| `HIYUI_DIAGNOSTICS_BUSY` = 4 |  |
| `HIYUI_DIAGNOSTICS_OUT_OF_MEMORY` = 5 |  |
| `HIYUI_DIAGNOSTICS_IO_ERROR` = 6 |  |

### hiyui_diagnostics_phase_t

| Value | Description |
|---|---|
| `HIYUI_DIAGNOSTICS_PHASE_APPLICATION` = 0 |  |
| `HIYUI_DIAGNOSTICS_PHASE_INPUT` = 1 |  |
| `HIYUI_DIAGNOSTICS_PHASE_EVENT` = 2 |  |
| `HIYUI_DIAGNOSTICS_PHASE_QUEUE_WAIT` = 3 |  |
| `HIYUI_DIAGNOSTICS_PHASE_QUEUE_TASK` = 4 |  |
| `HIYUI_DIAGNOSTICS_PHASE_LAYOUT` = 5 |  |
| `HIYUI_DIAGNOSTICS_PHASE_RENDER` = 6 |  |
| `HIYUI_DIAGNOSTICS_PHASE_FLUSH` = 7 |  |
| `HIYUI_DIAGNOSTICS_PHASE_FLUSH_WAIT` = 8 |  |
| `HIYUI_DIAGNOSTICS_PHASE_PRESENT` = 9 |  |
| `HIYUI_DIAGNOSTICS_PHASE_IDLE_WAIT` = 10 |  |
| `HIYUI_DIAGNOSTICS_PHASE_ACCESSIBILITY` = 11 |  |
| `HIYUI_DIAGNOSTICS_PHASE_RESOURCE` = 12 |  |
| `HIYUI_DIAGNOSTICS_PHASE_DIAGNOSTIC` = 13 |  |
| `HIYUI_DIAGNOSTICS_PHASE_USER` = 14 |  |
| `HIYUI_DIAGNOSTICS_PHASE_LVGL` = 15 |  |

### hiyui_diagnostics_resource_kind_t

| Value | Description |
|---|---|
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_OBJECT` = 0 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_EVENT_BINDING` = 1 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_TIMER` = 2 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_ANIMATION` = 3 |  |
| `HIYUI_DIAGNOSTICS_RESOURCE_KIND_C_REFERENCE` = 4 |  |

## Type Aliases

### hiyui_diagnostics_snapshot_t

```c
typedef struct hiyui_diagnostics_snapshot_s hiyui_diagnostics_snapshot_t
```

## Functions

### hiyui_diagnostics_config_init

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_config_init(hiyui_diagnostics_config_t *config)
```

NULL is a no-op; fills in the same defaults as the C++ Config.

### hiyui_diagnostics_available

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_available(void)
```

### hiyui_diagnostics_recording

```c
HIYUI_API int HIYUI_CALL hiyui_diagnostics_recording(void)
```

### hiyui_diagnostics_start

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_start(const hiyui_diagnostics_config_t *config)
```

Starts a new capture on the UI thread; NULL uses the default config, capturing returns BUSY, and failure keeps the old recording.

### hiyui_diagnostics_stop

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_stop(void)
```

Stops spans, frames, and system sampling on the UI thread and keeps the results; the resource snapshot still reflects current state, and repeated calls are no-ops.

### hiyui_diagnostics_clear

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_clear(void)
```

Stops and clears the recording on the UI thread without destroying observed objects.

### hiyui_diagnostics_show_panel

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_show_panel(hiyui_widget_t *owner)
```

Opens the singleton panel on the UI thread; owner must not be NULL, and closing the panel does not stop the capture.

### hiyui_diagnostics_hide_panel

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_hide_panel(void)
```

Closes the panel on the UI thread; repeated calls are no-ops and the capture is not stopped.

### hiyui_diagnostics_snapshot_create

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_snapshot_create(int include_objects, hiyui_diagnostics_snapshot_t **out)
```

Creates a self-contained snapshot on the UI thread; a non-zero include_objects reads resources at call time, and failure sets *out to NULL. On success the caller owns it and must free it with snapshot_destroy; it must not run concurrently with destroy or JSON reads of the same snapshot.

### hiyui_diagnostics_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_snapshot_destroy(hiyui_diagnostics_snapshot_t *snapshot)
```

Frees the snapshot and its borrowed text; NULL is a no-op.

### hiyui_diagnostics_snapshot_json

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_snapshot_json(hiyui_diagnostics_snapshot_t *snapshot, const char **text, size_t *size)
```

Returns the snapshot-owned UTF-8 JSON; size excludes the terminator, the text stays valid until the snapshot is destroyed, and failure clears the outputs.

### hiyui_diagnostics_snapshot_export

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_snapshot_export(const hiyui_diagnostics_snapshot_t *snapshot, const char *path)
```

Writes to a UTF-8 path and overwrites an existing file; NULL arguments or a write failure returns IO_ERROR.

### hiyui_diagnostics_scope_begin

```c
HIYUI_API hiyui_diagnostics_status_t HIYUI_CALL hiyui_diagnostics_scope_begin(hiyui_diagnostics_scope_t *scope, const char *name, hiyui_diagnostics_phase_t phase, uint64_t display_id, uint64_t object_id)
```

Begins a span and copies the UTF-8 name up to 63 bytes; scope must not be NULL or still active, and the name may be NULL. When not capturing it must still be paired with end; returns UNAVAILABLE when disabled at compile time.

### hiyui_diagnostics_scope_end

```c
HIYUI_API void HIYUI_CALL hiyui_diagnostics_scope_end(hiyui_diagnostics_scope_t *scope)
```

Ends the span; NULL, a zero-initialized scope, or a repeated end is a no-op.
