---
title: "XmlLayout"
---

# XmlLayout <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_layout.h>`

**Namespace:** `hiyui`

Creates a Hiy-UI component tree from an XML document synchronously.

All operations must run on the LVGL/Hiy-UI UI thread. The layout only observes the mounted component tree; destroying the layout does not destroy components. After a component is destroyed, its ID lookup returns an empty reference.

## Public Methods

### get

```cpp
Ref< T > get(const char *id) const
```

Gets a type-matched component reference by ID.

Returns an empty reference when the ID does not exist, the object is destroyed, or the actual component type does not match.

### getRaw

```cpp
lv_obj_t * getRaw(const char *id) const
```

Gets the underlying object by ID without checking the component type.

### diagnostics

```cpp
const std::vector< XmlDiagnostic > & diagnostics() const
```

Returns all structured diagnostics produced by the load.

### hasErrors

```cpp
bool hasErrors() const
```

Whether the current result contains error diagnostics.

### context

```cpp
XmlContext context() const
```

Returns the shared context used by this layout.

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

Returns true only when the root object is valid and there are no error diagnostics.

## Static Methods

### fromFile

```cpp
static XmlLayout fromFile(Widget &parent, const char *path, XmlContext context={}, XmlLoadOptions options={})
```

Loads through the host filesystem convenience interface; the return value always retains failure diagnostics.

### fromReader

```cpp
static XmlLayout fromReader(Widget &parent, XmlReadCallback reader, void *userData=nullptr, XmlContext context={}, XmlLoadOptions options={})
```

Reads and loads synchronously; the reader return value must not exceed capacity.

reader and userData are used only during the call; the caller manages opening and closing the resource.

### fromString

```cpp
static XmlLayout fromString(Widget &parent, std::string_view xml, XmlContext context={}, XmlLoadOptions options={})
```

Loads from an in-memory string; parsing and component creation finish before return.
