---
title: "XmlWindowLayout"
---

# XmlWindowLayout <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_window.h>`

**Namespace:** `hiyui`

Synchronously creates a window and its content component tree from a \&lt;Window\&gt; root element.

The window lifetime is managed by the Application; this object holds a non-owning pointer. All operations must be called on the LVGL/Hiy-UI UI thread. Window content loading always rolls back as a transaction; partial content is never kept.

## Public Methods

### window

```cpp
Window * window() const
```

Returns the created window.

Returns nullptr when the window was not created or has been closed.

### diagnostics

```cpp
const std::vector< XmlDiagnostic > & diagnostics() const
```

Returns all structured diagnostics produced by the load.

### hasErrors

```cpp
bool hasErrors() const
```

Returns whether the current result contains error diagnostics.

### sourceId

```cpp
const std::string & sourceId() const
```

Returns the canonical source ID of the root document; an empty string when not provided.

### dependencies

```cpp
const std::vector< std::string > & dependencies() const
```

Returns the deduplicated Include source IDs resolved by this load.

### operator bool

```cpp
operator bool() const
```

Returns true only when the window has been created and there are no error diagnostics.

## Static Methods

### fromFile

```cpp
static XmlWindowLayout fromFile(const char *path, XmlContext context={}, XmlLoadOptions options={})
```

Loads through the host file system; the return value always keeps failure diagnostics.

### fromString

```cpp
static XmlWindowLayout fromString(std::string_view xml, XmlContext context={}, XmlLoadOptions options={})
```

Loads from an in-memory string; parsing and window creation complete before return.
