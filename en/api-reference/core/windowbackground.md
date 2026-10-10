---
title: "WindowBackground"
---

# WindowBackground <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/window.h>`

**Namespace:** `hiyui`

Window background; the caller keeps the image descriptor and pixels until the background is replaced or the window is destroyed.

## Public Members

### image

```cpp
BgImage image
```

Effective only for Content; the file path is copied by the window, an empty src uses the theme background color.

### blur

```cpp
Backdrop blur
```

Effective only for image blur; radius in logical pixels, HIYUI_NONE_INT = follow theme, 0 = show the original image.

### overlay

```cpp
Overlay overlay
```

When unset, image and system blur use the theme tint color and transparent mode applies no tint; an explicit alpha of 0 applies no tint.

### mode

```cpp
WindowBackgroundMode mode
```

System blur strength is controlled by the operating system.
