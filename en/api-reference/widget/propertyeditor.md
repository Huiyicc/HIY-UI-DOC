---
title: "PropertyEditor"
---

# PropertyEditor <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_editor.h>`

**Namespace:** `hiyui`

Copyable non-owning edit session; all methods must be called on the UI thread. Invalidated by editor switch, factory unregistration, or deletion of the property or widget; writes on an invalid session return false.

## Public Methods

### id

```cpp
PropertyId id() const
```

Returns HIYUI_NO_PROPERTY when invalid.

### property

```cpp
std::optional< PropertyItem > property() const
```

Returns a copy of the current description; empty when invalid.

### value

```cpp
PropertyValue value() const
```

Returns a copy of the current draft; an empty property value when invalid.

### text

```cpp
std::string text() const
```

Returns the edit text, including input that has not parsed; returns an empty string for Mixed with no input yet.

### setValue

```cpp
bool setValue(PropertyValue value) const
```

Updates the draft without changing the committed value.

### setText

```cpp
bool setText(std::string text) const
```

Saves the input and parses it by property type; on parse failure the input is kept and false is returned.

### error

```cpp
bool error(std::string message) const
```

Sets a custom validation error; an empty string clears it; commit is blocked while an error exists.

### commit

```cpp
bool commit() const
```

Requests a commit; returns true when accepted or when entering an asynchronous wait.

### cancel

```cpp
bool cancel() const
```

Discards the draft of this property and closes the editor.

### focusTarget

```cpp
bool focusTarget(Widget &target) const
```

Sets the initial focus; target must be a widget inside the current edit area.
