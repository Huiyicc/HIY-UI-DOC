---
title: "XmlLoadOptions"
---

# XmlLoadOptions <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/xml/xml_diagnostic.h>`

**Namespace:** `hiyui`

Error handling and resource limits for XML loading.

## Public Members

### strict

```cpp
bool strict
```

Destroys the complete component tree created by this load on error.

### maxDepth

```cpp
size_t maxDepth
```

Maximum element nesting depth; the root element has depth 1.

### maxNodes

```cpp
size_t maxNodes
```

Maximum number of elements processed per load, including ItemList child items.

### maxBytes

```cpp
size_t maxBytes
```

Maximum number of XML bytes read per load.

### maxIncludeDepth

```cpp
size_t maxIncludeDepth
```

Maximum Include nesting depth per load.

### sourceId

```cpp
const char * sourceId
```

Source ID of the memory or reader root document; nullptr means no source ID, borrowed until the call returns.

### sourceResolver

```cpp
XmlSourceResolver sourceResolver
```

Include source resolver; when the callback is empty the host file resolver is used.
