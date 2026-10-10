---
title: "dock.h"
---

# dock.h <Badge type="info" text="Header" />

**Header:** `#include <hiyui/c/dock.h>`

Docking window container

## Enums

### hiyui_dock_edge_t

| Value | Description |
|---|---|
| `HIYUI_DOCK_EDGE_DEFAULT` = 0 |  |
| `HIYUI_DOCK_EDGE_LEFT` |  |
| `HIYUI_DOCK_EDGE_TOP` |  |
| `HIYUI_DOCK_EDGE_RIGHT` |  |
| `HIYUI_DOCK_EDGE_BOTTOM` |  |
| `HIYUI_DOCK_EDGE_CENTER` |  |

### hiyui_dock_event_type_t

| Value | Description |
|---|---|
| `HIYUI_DOCK_EVENT_PANE_ACTIVATED` = 0 |  |
| `HIYUI_DOCK_EVENT_CLOSE_REQUEST` |  |
| `HIYUI_DOCK_EVENT_PANE_DOCKED` |  |
| `HIYUI_DOCK_EVENT_PANE_FLOATED` |  |
| `HIYUI_DOCK_EVENT_PANE_HIDDEN` |  |
| `HIYUI_DOCK_EVENT_PANE_SHOWN` |  |
| `HIYUI_DOCK_EVENT_LAYOUT_CHANGED` |  |

## Type Aliases

### hiyui_dock_event_fn

```c
typedef void(* hiyui_dock_event_fn) (const hiyui_dock_event_t *event, void *user_data)
```

### hiyui_dock_snapshot_t

```c
typedef struct hiyui_dock_snapshot_s hiyui_dock_snapshot_t
```

## Functions

### hiyui_dock_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dock_create(hiyui_widget_t *parent, const hiyui_dock_props_t *props)
```

Creates a dock container, returns NULL when parent is NULL.

### hiyui_dock_pane_create

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dock_pane_create(hiyui_widget_t *dock, const hiyui_dock_pane_props_t *props)
```

Creates a pane content container on the dock, hiyui_dock_add_pane must be called to enter the layout.

Pane widget, returns NULL when dock is NULL.

### hiyui_dock_add_pane

```c
HIYUI_API int HIYUI_CALL hiyui_dock_add_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

Docks the pane on the edge declared by its properties, no state change when the pane does not belong to this container.

### hiyui_dock_remove_pane

```c
HIYUI_API int HIYUI_CALL hiyui_dock_remove_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

Removes the pane and unregisters it, no state change when the pane does not belong to this container.

### hiyui_dock_hide_pane

```c
HIYUI_API void HIYUI_CALL hiyui_dock_hide_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

Hides the pane, keeping registration and the original position record, restorable via hiyui_dock_show_pane.

### hiyui_dock_show_pane

```c
HIYUI_API void HIYUI_CALL hiyui_dock_show_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

Restores a hidden pane, preferring its group and tab position before hiding.

### hiyui_dock_activate_pane

```c
HIYUI_API void HIYUI_CALL hiyui_dock_activate_pane(hiyui_widget_t *dock, hiyui_widget_t *pane)
```

Activates the tab containing the pane or brings its floating window to the front.

### hiyui_dock_set_floating

```c
HIYUI_API void HIYUI_CALL hiyui_dock_set_floating(hiyui_widget_t *dock, hiyui_widget_t *pane, int floating)
```

Programmatically switches the pane floating state, non-zero floating turns it into floating.

### hiyui_dock_pane_count

```c
HIYUI_API int HIYUI_CALL hiyui_dock_pane_count(hiyui_widget_t *dock)
```

Number of registered panes, returns 0 when dock is NULL.

### hiyui_dock_pane_by_name

```c
HIYUI_API hiyui_widget_t *HIYUI_CALL hiyui_dock_pane_by_name(hiyui_widget_t *dock, const char *name)
```

Pane widget, returns NULL when not found or arguments are invalid.

### hiyui_dock_pane_set_title

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_title(hiyui_widget_t *pane, const char *title)
```

### hiyui_dock_pane_set_closable

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_closable(hiyui_widget_t *pane, int value)
```

### hiyui_dock_pane_set_movable

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_movable(hiyui_widget_t *pane, int value)
```

### hiyui_dock_pane_set_floatable

```c
HIYUI_API void HIYUI_CALL hiyui_dock_pane_set_floatable(hiyui_widget_t *pane, int value)
```

### hiyui_dock_pane_name

```c
HIYUI_API const char *HIYUI_CALL hiyui_dock_pane_name(hiyui_widget_t *pane)
```

Pane unique name, returns NULL when pane is not registered.

### hiyui_dock_pane_is_floating

```c
HIYUI_API int HIYUI_CALL hiyui_dock_pane_is_floating(hiyui_widget_t *pane)
```

Returns 1 when floating, otherwise 0.

### hiyui_dock_pane_is_shown

```c
HIYUI_API int HIYUI_CALL hiyui_dock_pane_is_shown(hiyui_widget_t *pane)
```

Returns 1 when shown, otherwise 0.

### hiyui_dock_save_layout

```c
HIYUI_API hiyui_dock_snapshot_t *HIYUI_CALL hiyui_dock_save_layout(hiyui_widget_t *dock)
```

Saves a snapshot of the current layout, including floating geometry and the hidden list.

Snapshot handle that must be freed by hiyui_dock_snapshot_destroy, returns NULL when dock is NULL.

### hiyui_dock_restore_layout

```c
HIYUI_API int HIYUI_CALL hiyui_dock_restore_layout(hiyui_widget_t *dock, const hiyui_dock_snapshot_t *snapshot)
```

Restores a layout snapshot, matching registered panes by name. Unregistered names are skipped.

Returns 1 on success, returns 0 for invalid arguments.

### hiyui_dock_snapshot_destroy

```c
HIYUI_API void HIYUI_CALL hiyui_dock_snapshot_destroy(hiyui_dock_snapshot_t *snapshot)
```

Frees the snapshot handle, passing NULL is safe.

### hiyui_dock_on_pane_event

```c
HIYUI_API int HIYUI_CALL hiyui_dock_on_pane_event(hiyui_widget_t *dock, hiyui_dock_event_type_t type, hiyui_dock_event_fn cb, void *ud, hiyui_destroy_fn destroy, hiyui_event_handle_t **out_handle)
```

Binds a pane business event, subscriptions append. Unbinding goes through the returned handle.

Returns 1 on successful registration, returns 0 for invalid arguments.
