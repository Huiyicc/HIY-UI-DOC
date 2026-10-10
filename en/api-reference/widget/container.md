---
title: "Container"
---

# Container <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/container.h>`

**Namespace:** `hiyui`

CRTP container base providing operator() child mounting for derived classes.

Mounts child components to this container through operator()(children...). Holds child configuration while unmounted; after mounting the parent widget manages child lifetime. Named children must be explicitly std::move'd; the source wrapper is emptied and bound Refs stay attached.


Derived class type for CRTP. For example Button inherits Container&lt;Button&gt;. Lvalue calls return lvalue references, rvalue calls return rvalue references.

**Inherits:** `hiyui::Chainable< Derived >`

## Public Methods

### operator()

```cpp
Derived & operator()(Children &&...children) &
```

Mounts child components to this container

Pack of Widget-derived types Child component rvalues; the source wrapper is emptied after the call; already mounted child widgets are remounted to this container. Derived class reference, chainable
