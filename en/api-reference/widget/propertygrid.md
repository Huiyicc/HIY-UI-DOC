---
title: "PropertyGrid"
---

# PropertyGrid <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_grid.h>`

**Namespace:** `hiyui`

Property grid supporting custom editors and synchronous or asynchronous commit. All operations run on the UI thread; programmatic updates do not notify by default. Chained configuration and events can be set before mounting. Data queries and edits require mounting; when invalid they return an empty value, false or an invalid session.

**Inherits:** `hiyui::Chainable< PropertyGrid >`

## Public Methods

### properties

```cpp
PropertyGrid & properties(std::vector< PropertyItem > items) &
```

Atomically replaces the property tree and cancels old drafts and requests; an invalid description keeps the original tree. See lastError for the failure.

### insert

```cpp
bool insert(PropertyItem item, PropertyId parent=HIYUI_NO_PROPERTY)
```

Appends a property subtree; parent equal to HIYUI_NO_PROPERTY appends a root node. Failure does not modify data.

### update

```cpp
bool update(PropertyItem item)
```

Replaces an existing property description and subtree, cancelling drafts and requests in that subtree. Failure does not modify data.

### remove

```cpp
bool remove(PropertyId id)
```

Removes a subtree; returns false when the property does not exist.

### property

```cpp
std::optional< PropertyItem > property(PropertyId id) const
```

Returns a copy of the description including child properties; an empty value when the property does not exist.

### value

```cpp
bool value(PropertyId id, PropertyValue value, Notify notify=Notify::No)
```

Updates the committed value and invalidates old replies; uncommitted input keeps the draft and marks a conflict.

### value

```cpp
std::optional< PropertyValue > value(PropertyId id) const
```

Returns an empty value when the property does not exist; the property's own empty value is contained in the optional.

### lastError

```cpp
std::string lastError() const
```

Returns the reason for the most recent structural or programmatic assignment failure; a successful operation clears the error.

### status

```cpp
PropertyStatus status(PropertyId id) const
```

Returns Idle when the property does not exist.

### filter

```cpp
PropertyGrid & filter(std::string text) &
```

Filters by name and description; ASCII is case-insensitive. Matched ancestors and uncommitted drafts are kept.

### select

```cpp
bool select(PropertyId id, Notify notify=Notify::No)
```

Selects a visible property; HIYUI_NO_PROPERTY clears the selection. Returns false when the current edit has not passed commit.

### edit

```cpp
bool edit(PropertyId id)
```

Starts editing; returns false when not editable or the current draft has not passed commit. A Tuple without a dedicated editor expands and edits its first editable child.

### reset

```cpp
bool reset(PropertyId id)
```

Commits the default value through the same validation and reply flow; returns false when there is no default value.

### cancelRequest

```cpp
bool cancelRequest(PropertyId id)
```

Cancels the pending request for this property and keeps the candidate draft; external operations already performed by the caller are not undone.

### registerEditor

```cpp
PropertyGrid & registerEditor(std::string key, PropertyEditorFactory factory, PropertyFormatter formatter={}) &
```

Registers or replaces an editor for this instance; an empty factory unregisters and invalidates sessions of that editor.

### commitHandler

```cpp
PropertyGrid & commitHandler(PropertyCommitHandler handler) &
```

Replaces the single commit handler and cancels pending requests; an empty handler restores direct commit after local validation.

### onChange

```cpp
PropertyGrid & onChange(F &&fn, EventHandle *handle=nullptr) &
```

Appends a committed value change subscription; unchanged non-Mixed values do not notify again.

### onSelect

```cpp
PropertyGrid & onSelect(F &&fn, EventHandle *handle=nullptr) &
```

Appends a selection subscription; clearing the selection delivers HIYUI_NO_PROPERTY.

### onStateChange

```cpp
PropertyGrid & onStateChange(F &&fn, EventHandle *handle=nullptr) &
```

Appends an edit state subscription, delivering the ID of the property that changed. Shared state of a Tuple and its children is reported with the parent Tuple ID.
