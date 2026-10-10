---
title: "PropertyGrid"
---

# PropertyGrid <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_grid.h>`

**Namespace:** `hiyui`

Property grid supporting custom editors and synchronous or asynchronous commit. All operations run on the UI thread, programmatic updates do not notify by default, chained configuration and events can be set before mounting. Data queries and edit operations require mounting, stale objects return empty values, false or an invalid session.

**Inherits:** `hiyui::Chainable< PropertyGrid >`

## Public Methods

### properties

```cpp
PropertyGrid & properties(std::vector< PropertyItem > items) &
```

Atomically replaces the property tree and cancels old drafts and requests, invalid descriptors keep the original tree, see lastError for the error.

### insert

```cpp
bool insert(PropertyItem item, PropertyId parent=HIYUI_NO_PROPERTY)
```

Appends a property subtree, a parent of HIYUI_NO_PROPERTY appends a root node, failure leaves the data unchanged.

### update

```cpp
bool update(PropertyItem item)
```

Replaces an existing property descriptor and subtree and cancels drafts and requests in that subtree, failure leaves the data unchanged.

### remove

```cpp
bool remove(PropertyId id)
```

Removes a subtree, returns false when the property does not exist.

### property

```cpp
std::optional< PropertyItem > property(PropertyId id) const
```

Returns a copy of the descriptor including child properties, an empty value when the property does not exist.

### value

```cpp
bool value(PropertyId id, PropertyValue value, Notify notify=Notify::No)
```

Updates the committed value and invalidates older responses, uncommitted input keeps the draft and marks a conflict.

### value

```cpp
std::optional< PropertyValue > value(PropertyId id) const
```

Returns an empty value when the property does not exist, an empty property value is contained in the optional.

### lastError

```cpp
std::string lastError() const
```

Returns the reason of the latest structural or programmatic assignment failure, successful operations clear the error.

### status

```cpp
PropertyStatus status(PropertyId id) const
```

Returns Idle when the property does not exist.

### filter

```cpp
PropertyGrid & filter(std::string text) &
```

Filters by name and description, ASCII case-insensitive, matching ancestors and uncommitted drafts are kept.

### select

```cpp
bool select(PropertyId id, Notify notify=Notify::No)
```

Selects a visible property, HIYUI_NO_PROPERTY clears the selection, returns false when the current edit has not been committed.

### edit

```cpp
bool edit(PropertyId id)
```

Starts editing, returns false when not editable or the current draft fails to commit. A Tuple without a registered editor expands and edits its first editable child.

### reset

```cpp
bool reset(PropertyId id)
```

Commits the default value through the same validation and response flow, returns false when no default exists.

### cancelRequest

```cpp
bool cancelRequest(PropertyId id)
```

Cancels the pending request of this property and keeps the candidate draft, external operations already performed by the caller are not undone.

### registerEditor

```cpp
PropertyGrid & registerEditor(std::string key, PropertyEditorFactory factory, PropertyFormatter formatter={}) &
```

Registers or replaces an editor for this instance, an empty factory unregisters and invalidates sessions of that editor.

### commitHandler

```cpp
PropertyGrid & commitHandler(PropertyCommitHandler handler) &
```

Replaces the single commit handler and cancels pending requests, an empty handler restores commit after local validation.

### onChange

```cpp
PropertyGrid & onChange(F &&fn, EventHandle *handle=nullptr) &
```

Subscribes to committed value changes, unchanged non-Mixed values do not notify again.

### onSelect

```cpp
PropertyGrid & onSelect(F &&fn, EventHandle *handle=nullptr) &
```

Subscribes to selection changes, HIYUI_NO_PROPERTY is received when the selection is cleared.

### onStateChange

```cpp
PropertyGrid & onStateChange(F &&fn, EventHandle *handle=nullptr) &
```

Subscribes to edit-state changes, receives the ID of the changed property. Shared state of a Tuple and its children is reported with the parent Tuple ID.
