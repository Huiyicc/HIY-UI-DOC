---
title: "XmlContext"
---

# XmlContext <Badge type="info" text="Class" />

**Header:** `#include <hiyui/xml/xml_context.h>`

**Namespace:** `hiyui`

Resources, styles, binding values, and commands of one XML usage scope.

All operations must run on the LVGL/Hiy-UI UI thread. Copies share the same context state.

## Public Methods

### registerCommand

```cpp
XmlContextRegistration registerCommand(const char *name, XmlCommandCallback callback, void *userData=nullptr, XmlContextUserDataDestroy destroyUserData=nullptr)
```

Registers a named command.

On success the context takes ownership of `userData` and calls `destroyUserData` after unregistration and after in-flight callbacks finish. On failure ownership remains with the caller.

### unregisterCommand

```cpp
XmlContextRegistrationStatus unregisterCommand(uint64_t token)
```

Unregisters a command token; subsequent events on bound objects no longer invoke the command.

### setResource

```cpp
bool setResource(const char *name, const char *value)
```

Sets a string resource used by the `resource:name` placeholder.

### setStyle

```cpp
bool setStyle(const char *name, const StyleSet &style)
```

Sets a named StyleSet referenced by the component `style` attribute.

### registerMenuResource

```cpp
bool registerMenuResource(const char *name, const std::vector< ContextMenuItem > &items, PopupMode mode=PopupMode::Inline)
```

Registers a named menu resource referenced by ContextMenu/MenuBar in any layout.

Resource id; the same name replaces the previous entry. Menu items; text and shortcut are deep-copied internally, and the caller may free the original strings after return. Popup mode of the right-click binding, the ContextMenu resource; when referenced by MenuBar its popupMode decides. Returns true when the name is valid and the resource is stored.

### setBinding

```cpp
bool setBinding(const char *name, const char *value)
```

Sets the value of the `binding:name` placeholder and updates targets whose bindings are still valid.

Returns true when name and value are valid and all targets accept the value.

### updateBinding

```cpp
XmlBindingUpdateResult updateBinding(const char *name, const char *value)
```

Validates all targets before setting the binding and returns target counts and runtime diagnostics.

On validation failure the value is not saved and no setter is called. `ApplyFailed` means the setter violated the contract that a validated value must not be rejected; already updated targets are not rolled back.

### lastBindingUpdateResult

```cpp
XmlBindingUpdateResult lastBindingUpdateResult() const
```

Returns the most recent synchronous binding update result of this context.

### setCollection

```cpp
XmlCollectionUpdateResult setCollection(const char *name, std::span< const XmlCollectionItem > items)
```

Replaces a named collection; if building any repeater fails, the original collection and UI are kept.

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

Clears a named collection; creates an empty collection when it does not exist.
