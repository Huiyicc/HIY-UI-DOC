---
title: "PopupDisplay"
---

# PopupDisplay <Badge type="info" text="Class" />

**Header:** `#include <hiyui/platform/popup_display.h>`

**Namespace:** `hiyui`

Offscreen popup display, RAII held

Destruction first deletes the bound indevs, then lv_display_delete, whose driver destroys the popup window.

## Static Methods

### create

```cpp
static std::unique_ptr< PopupDisplay > create(lv_display_t *parentDisp, int offsetX, int offsetY, int initW, int initH, bool transparent)
```

Creates an offscreen popup display

Parent display, the popup becomes its child window X offset from the parent window origin, SDL logical pixels Y offset from the parent window origin, SDL logical pixels Initial width, canvas pixels Initial height, canvas pixels Whether to enable per-pixel alpha Returns nullptr when creation fails

### createStandalone

```cpp
static std::unique_ptr< PopupDisplay > createStandalone(lv_display_t *referenceDisp, int screenX, int screenY, int initW, int initH, bool transparent)
```

Creates a standalone top-level window display without a parent window

Used for popup scenarios detached from the main window such as the system tray. The window starts hidden and does not appear in taskbars or window lists; the caller resizes it to the content size and calls SDL_ShowWindow itself.


Reference display for fonts and scaling; nullptr means the current default display SDL desktop coordinate X SDL desktop coordinate Y Initial width, canvas pixels Initial height, canvas pixels Whether to enable per-pixel alpha Returns nullptr when creation fails

### fromDisplay

```cpp
static PopupDisplay * fromDisplay(lv_display_t *display) noexcept
```

Finds a live popup host; returns nullptr for non-popup displays, ownership is not transferred.

### resolveHostDisplay

```cpp
static lv_display_t * resolveHostDisplay(lv_display_t *disp) noexcept
```

Resolves the display where global overlays should mount. A popup display walks up the host chain and returns the first non-popup display. When the chain is broken or the window is standalone, returns the first non-popup display, or the input unchanged when no candidate exists.

## Public Methods

### display

```cpp
lv_display_t * display() const
```

Underlying LVGL display

### screen

```cpp
lv_obj_t * screen() const
```

Active screen object, mount point for menu panels

### sdlWindow

```cpp
SDL_Window * sdlWindow() const
```

Underlying SDL window

### setBackdrop

```cpp
bool setBackdrop(lv_obj_t *panel, bool enabled)
```

Binds system blur to the first child panel of the screen; disabling releases native resources.

Returns true when blur is enabled; false when not enabled, unsupported, or enabling failed.

### clearBackdrop

```cpp
void clearBackdrop(lv_obj_t *panel) noexcept
```

Unbinds blur from the given panel; no-op when the panel is not bound.

### resizeCanvas

```cpp
void resizeCanvas(int width, int height) noexcept
```

Resizes the window and display resolution together by canvas pixels

During the resize, SDL size events are suppressed from feeding back into the display resolution, so the resolution is not rewritten when zoom and input_scale disagree. Target canvas width in pixels Target canvas height in pixels

### releaseFromDisplayDelete

```cpp
void releaseFromDisplayDelete()
```

Releases the display and associated input devices taken over by an external delete flow

### releaseFromWindowDestroy

```cpp
void releaseFromWindowDestroy() noexcept
```

Marks the SDL window as destroyed externally, keeping the display for deferred reclamation.
