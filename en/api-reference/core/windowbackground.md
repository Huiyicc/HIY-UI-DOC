---
title: "WindowBackground"
---

# WindowBackground <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/core/window.h>`

**Namespace:** `hiyui`

Window background; the caller keeps the image descriptor and pixels until the background changes or the window is destroyed.

## Public Members

### image

```cpp
BgImage image
```

Effective only in Content mode; the window copies the file path, and the theme background color is used when src is empty.

### blur

```cpp
Backdrop blur
```

Effective only for image blur; radius is in logical pixels, HIYUI_NONE_INT = follow theme, 0 = show the original image.

### overlay

```cpp
Overlay overlay
```

When unset, image and system blur use the theme overlay color and transparent mode uses none; an explicit alpha of 0 means no overlay.

### mode

```cpp
WindowBackgroundMode mode
```

System blur strength is controlled by the operating system.
