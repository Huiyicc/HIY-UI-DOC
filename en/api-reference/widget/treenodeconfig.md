---
title: "TreeNodeConfig"
---

# TreeNodeConfig <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/tree.h>`

**Namespace:** `hiyui`

Tree node configuration provided by the user

## Public Members

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Custom icon codepoint before the text

### expanded

```cpp
bool expanded
```

Initially expanded

### checked

```cpp
bool checked
```

Initially checked

### disabled

```cpp
bool disabled
```

Disabled

### checkable

```cpp
bool checkable
```

Whether checking is allowed. Takes effect when the tree-level checkable is true

### userData

```cpp
void * userData
```

User-defined data

### lazyLoad

```cpp
std::function< void(TreeNodeId)> lazyLoad
```

Async load callback. Triggered on first expansion

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

Overrides the original text and updates on language switch. The description is copied when passed to the widget.
