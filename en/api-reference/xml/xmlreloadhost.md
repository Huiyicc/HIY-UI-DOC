---
title: "XmlReloadHost"
---

# XmlReloadHost <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_reload.h>`

**Namespace:** `hiyui`

Manages reloadable XML layouts as whole-tree transactions under a fixed parent.

The host owns the currently committed XML root tree. Every load uses strict mode; on failure the candidate tree is destroyed and the current tree kept, on success the old tree is destroyed. All loads share the `XmlContext` passed at construction, and all operations must run on the LVGL/Hiy-UI UI thread.

## Public Methods

### reloadFromFile

```cpp
bool reloadFromFile(const char *path, XmlLoadOptions options={})
```

Builds a candidate tree from a file synchronously; returns true when the commit succeeds.

### reloadFromString

```cpp
bool reloadFromString(std::string_view xml, XmlLoadOptions options={})
```

Builds a candidate tree from an in-memory string synchronously; returns true when the commit succeeds.

### reloadFromReader

```cpp
bool reloadFromReader(XmlReadCallback reader, void *userData=nullptr, XmlLoadOptions options={})
```

Builds a candidate tree from a reader synchronously; returns true when the commit succeeds.

reader and userData are used only during the call; the caller manages opening and closing the resource.

### layout

```cpp
const XmlLayout & layout() const noexcept
```

Returns the currently committed layout; an empty layout when none was committed.

### get

```cpp
Ref< T > get(const char *id) const
```

Gets a component reference by ID in the current layout; old references become invalid after a successful replacement or reset.

### getRaw

```cpp
lv_obj_t * getRaw(const char *id) const
```

Gets the underlying object by ID in the current layout; old pointers become invalid after a successful replacement or reset.

### status

```cpp
XmlReloadStatus status() const noexcept
```

Returns the status of the most recent load attempt.

### diagnostics

```cpp
const std::vector< XmlDiagnostic > & diagnostics() const
```

Returns the most recent load diagnostics; the reference becomes invalid after the next load or reset.

### sourceId

```cpp
const std::string & sourceId() const
```

Returns the root source ID of the most recent load; the reference becomes invalid after the next load or reset.

### dependencies

```cpp
const std::vector< std::string > & dependencies() const
```

Returns the Include source IDs of the most recent load; the reference becomes invalid after the next load or reset.

### context

```cpp
XmlContext context() const
```

Returns the context shared by all loads.

### reset

```cpp
void reset() noexcept
```

Destroys the current root tree and clears the most recent load result, keeping the parent and context.

### operator bool

```cpp
operator bool() const
```

Whether a valid committed layout exists.
