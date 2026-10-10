---
title: "PopupDisplay"
---

# PopupDisplay <Badge type="info" text="Class" />

**Header:** `#include <hiyui/platform/popup_display.h>`

**Namespace:** `hiyui`

Offscreen popup display held by RAII.

On destruction, deletes the bound indev first, then lv_display_delete, whose driver destroys the popup window.

## Static Methods

### create

```cpp
static std::unique_ptr< PopupDisplay > create(lv_display_t *parentDisp, int offsetX, int offsetY, int initW, int initH, bool transparent)
```

Creates an offscreen popup display.

Parent display, the popup becomes its child window. X offset from the parent window origin, SDL logical pixels. Y offset from the parent window origin, SDL logical pixels. Initial width in canvas pixels. Initial height in canvas pixels. Whether to enable per-pixel alpha. Returns nullptr on creation failure.

### createStandalone

```cpp
static std::unique_ptr< PopupDisplay > createStandalone(lv_display_t *referenceDisp, int screenX, int screenY, int initW, int initH, bool transparent)
```

Creates a standalone top-level window display without a parent window.

Used for popup scenarios detached from the main window such as the system tray. The window starts hidden and does not appear in the taskbar or window list. After adjusting to the content size, the caller performs SDL_ShowWindow itself.


Reference display for font and scaling. nullptr means the current default display. SDL desktop coordinate X. SDL desktop coordinate Y. Initial width in canvas pixels. Initial height in canvas pixels. Whether to enable per-pixel alpha. Returns nullptr on creation failure.

### fromDisplay

```cpp
static PopupDisplay * fromDisplay(lv_display_t *display) noexcept
```

Finds a live popup host. Returns nullptr for a non-popup display. The return value does not transfer ownership.

### resolveHostDisplay

```cpp
static lv_display_t * resolveHostDisplay(lv_display_t *disp) noexcept
```

Resolves the display that global overlays should mount on. A popup display walks up the host chain and returns the first non-popup display. When the host chain is broken or is a standalone window, returns the first non-popup display. With no candidate, returns the input unchanged.

## Public Methods

### display

```cpp
lv_display_t * display() const
```

The underlying LVGL display.

### screen

```cpp
lv_obj_t * screen() const
```

The active screen object, mount point for menu panels.

### sdlWindow

```cpp
SDL_Window * sdlWindow() const
```

The underlying SDL window.

### setBackdrop

```cpp
bool setBackdrop(lv_obj_t *panel, bool enabled)
```

Binds system blur to the first child panel of the screen, releasing native resources when disabled.

Returns true when blur is enabled. Returns false when not enabled, unsupported, or enabling fails.

### clearBackdrop

```cpp
void clearBackdrop(lv_obj_t *panel) noexcept
```

Unbinds blur from the given panel. No-op when the panel is not bound.

### resizeCanvas

```cpp
void resizeCanvas(int width, int height) noexcept
```

Resizes the window and display resolution together in canvas pixels.

During the resize, SDL size events are suppressed from feeding back the display resolution. This prevents the resolution from being rewritten when zoom and input_scale disagree. Target canvas width in pixels. Target canvas height in pixels.

### releaseFromDisplayDelete

```cpp
void releaseFromDisplayDelete()
```

Releases the display and associated input devices taken over by an external delete flow.

### releaseFromWindowDestroy

```cpp
void releaseFromWindowDestroy() noexcept
```

Marks the SDL window as destroyed externally, keeping the display for deferred reclaim.
