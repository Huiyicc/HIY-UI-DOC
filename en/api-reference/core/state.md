---
title: "State"
---

# State <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/state.h>`

**Namespace:** `hiyui`

Subscribable reactive state handle

Copies share one state node and moving invalidates the source; assignment between State handles is unavailable. Read, write, subscribe and dispatch all run on the UI thread.


int32_t, bool or std::string

## Public Methods

### State

```cpp
State()
```

Creates an independent state with value T{}.

### State

```cpp
State(T initial)
```

Creates an independent state; the initial value is normalized by the fixed rules and dispatches no change.

### get

```cpp
T get() const
```

Reads the current value.

StateError when the handle was moved from

### set

```cpp
State & set(T value)
```

Normalizes and commits synchronously; failures throw StateError.

### operator=

```cpp
State & operator=(T value)
```

Identical to set.

### trySet

```cpp
StateWriteResult trySet(T value)
```

Normalizes and commits, returning the full result without throwing write errors.

### valid

```cpp
bool valid() const
```

true while the handle still owns a state node; false for a moved-from handle.

### watch

```cpp
StateSubscription< T > watch(F &&f)
```

Subscribes to later effective changes; the callback is not invoked on registration.

Signature void(const T&amp;, const T&amp;); the references are valid only during the callback Scoped subscription; dropping the handle cancels it

## Static Methods

### bounded

```cpp
static State bounded(int32_t initial, int32_t min, int32_t max)
```

Creates an integer state with a fixed closed range.

StateError when min is greater than max

### text

```cpp
static State text(std::string initial, TextRules rules)
```

Creates a state with fixed text rules.

StateError when the initial value is not valid UTF-8 or contains an embedded NUL
