---
title: "ListItem"
---

# ListItem <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/list.h>`

**Namespace:** `hiyui`

List item configuration

## Public Members

### text

```cpp
const char * text
```

Item text

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

Icon codepoint

### iconSrc

```cpp
const void * iconSrc
```

Image source

### iconStyle

```cpp
FontIconStyle iconStyle
```

Icon style

### separator

```cpp
bool separator
```

Whether this is a separator

### data

```cpp
int data
```

User-bound data, read by itemData()

### localizedText

```cpp
std::optional< LocalizedText > localizedText
```

When set, overrides the original text and updates on language switch, the description is copied when passed to the component.
