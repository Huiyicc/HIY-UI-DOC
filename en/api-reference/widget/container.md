---
title: "Container"
---

# Container <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/container.h>`

**Namespace:** `hiyui`

CRTP container base providing operator() child mounting for derived classes.

operator()(children...) mounts child components into this container. Before mounting the child configuration is held; after mounting the parent widget manages child lifetime. Named children must be passed with explicit std::move; the source wrapper becomes empty and bound Refs stay attached.


Derived class type for CRTP; chaining returns the derived class. For example Button derives from Container&lt;Button&gt;; lvalue calls return an lvalue reference and rvalue calls return an rvalue reference.

**Inherits:** `hiyui::Chainable< Derived >`

## Public Methods

### operator()

```cpp
Derived & operator()(Children &&...children) &
```

Mounts child components into this container

Pack of Widget-derived types Child component rvalues; the source wrapper becomes empty after the call, and already-mounted child widgets are re-mounted to this container. Derived-class reference for chaining
