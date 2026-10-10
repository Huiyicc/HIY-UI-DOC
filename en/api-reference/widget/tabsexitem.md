---
title: "TabsExItem"
---

# TabsExItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tabs_ex.h>`

**Namespace:** `hiyui`

Session tab item configuration.

When `title` is empty, `host` is used. A nonzero `iconCodepoint` takes precedence over `iconSrc`. `data` binds an external session object index.

## Public Members

### title

```cpp
const char * title
```

Custom title; host is used when empty.

### host

```cpp
const char * host
```

Host/IP text, UTF-8 encoded.

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Material Symbols icon codepoint, 0 = no icon.

### iconSrc

```cpp
const void * iconSrc
```

Image path is copied on set; the descriptor and pixels are borrowed until the tab item is removed or replaced.

### iconStyle

```cpp
FontIconStyle iconStyle
```

Font icon axis parameters.

### connection

```cpp
TabConnectionState connection
```

Connection state.

### showStatus

```cpp
bool showStatus
```

Whether to show the connection status dot.

### closable

```cpp
bool closable
```

Whether closing is allowed; the close control is shown only on hover/active.

### pinned

```cpp
bool pinned
```

Whether the tab is placed in the Pin group.

### disabled

```cpp
bool disabled
```

Whether activation and dragging are disabled.

### data

```cpp
int data
```

User data.
