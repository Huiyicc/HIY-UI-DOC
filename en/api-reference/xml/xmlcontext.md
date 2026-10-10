---
title: "XmlContext"
---

# XmlContext <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_context.h>`

**Namespace:** `hiyui`

Collection of resources, styles, binding values, and commands for one XML usage scope.

All operations must be called on the LVGL/Hiy-UI UI thread. Copies share the same context state.

## Public Methods

### registerCommand

```cpp
XmlContextRegistration registerCommand(const char *name, XmlCommandCallback callback, void *userData=nullptr, XmlContextUserDataDestroy destroyUserData=nullptr)
```

Registers a named command.

On success the context takes ownership of `userData` and calls `destroyUserData` after unregistration and after in-flight callbacks finish. On failure ownership stays with the caller.

### unregisterCommand

```cpp
XmlContextRegistrationStatus unregisterCommand(uint64_t token)
```

Unregisters a command token; later events from bound objects no longer invoke the command.

### setResource

```cpp
bool setResource(const char *name, const char *value)
```

Sets a string resource referenced through the resource:name expression.

### setStyle

```cpp
bool setStyle(const char *name, const StyleSet &style)
```

Sets a named StyleSet referenced by the component `style` attribute.

### registerMenuResource

```cpp
bool registerMenuResource(const char *name, const std::vector< ContextMenuItem > &items, PopupMode mode=PopupMode::Inline)
```

Registers a named menu resource referenced by the ContextMenu/MenuBar of any layout.

Resource id; an existing name is overwritten. Menu items; text/shortcut are deep-copied internally, and the caller may free the original strings after return. Popup mode of the right-click binding as a ContextMenu resource; when referenced by a MenuBar its popupMode decides. Returns true when the name is valid and the resource is stored successfully.

### setBinding

```cpp
bool setBinding(const char *name, const char *value)
```

Sets the value of a binding referenced through the binding:name expression and updates binding targets that are still valid.

Returns true when name and value are valid and every target accepts the value.

### updateBinding

```cpp
XmlBindingUpdateResult updateBinding(const char *name, const char *value)
```

Validates all targets, then sets the binding, and returns target counts and runtime diagnostics.

On validation failure the value is not saved and the setter is not called. `ApplyFailed` means the setter rejected a validated value, which violates its contract; already updated targets are not rolled back.

### lastBindingUpdateResult

```cpp
XmlBindingUpdateResult lastBindingUpdateResult() const
```

Returns the most recent synchronous binding update result of this context.

### setCollection

```cpp
XmlCollectionUpdateResult setCollection(const char *name, std::span< const XmlCollectionItem > items)
```

Replaces a named collection; the original collection and UI are kept when any repeater fails to build.

### appendCollectionItem

```cpp
XmlCollectionUpdateResult appendCollectionItem(const char *name, const XmlCollectionItem &item)
```

Appends one item to the end of a named collection.

### insertCollectionItem

```cpp
XmlCollectionUpdateResult insertCollectionItem(const char *name, size_t index, const XmlCollectionItem &item)
```

Inserts one item at the given index.

### replaceCollectionItem

```cpp
XmlCollectionUpdateResult replaceCollectionItem(const char *name, size_t index, const XmlCollectionItem &item)
```

Replaces the item at the given index.

### removeCollectionItem

```cpp
XmlCollectionUpdateResult removeCollectionItem(const char *name, size_t index)
```

Removes the item at the given index.

### clearCollection

```cpp
XmlCollectionUpdateResult clearCollection(const char *name)
```

Clears a named collection; an empty collection is created when it does not exist.
