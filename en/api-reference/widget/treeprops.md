---
title: "TreeProps"
---

# TreeProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Tree widget creation properties

## Public Members

### maxHeight

```cpp
int maxHeight
```

Maximum height when height=HIYUI_AUTO, 0 = unlimited

### indent

```cpp
int indent
```

Indentation in pixels

### checkable

```cpp
bool checkable
```

Global checkboxes

### accordion

```cpp
bool accordion
```

Accordion mode

### multiSelect

```cpp
bool multiSelect
```

Multi-selection for the tree

### expandIcon

```cpp
uint32_t expandIcon
```

0 = default HIYUI_ICON_ADD_BOX

### collapseIcon

```cpp
uint32_t collapseIcon
```

0 = default HIYUI_ICON_INDETERMINATE_CHECK_BOX

### checkIcon

```cpp
uint32_t checkIcon
```

Checked icon, 0 = default HIYUI_ICON_CHECK_BOX

### uncheckIcon

```cpp
uint32_t uncheckIcon
```

Unchecked icon, 0 = default HIYUI_ICON_CHECK_BOX_OUTLINE_BLANK

### indeterminateIcon

```cpp
uint32_t indeterminateIcon
```

Indeterminate icon, 0 = default HIYUI_ICON_DIALOGS
