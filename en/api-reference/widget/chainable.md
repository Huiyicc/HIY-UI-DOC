---
title: "Chainable"
---

# Chainable <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chainable.h>`

**Namespace:** `hiyui`

CRTP chaining base that forwards all Widget chainable methods and returns derived class references.

Generic chainable methods preserve the derived type and the lvalue or rvalue category of the call object; component-specific methods can follow any generic method in a chain. Method contracts match the same-named Widget methods.


Derived class type, for example Label inherits Chainable&lt;Label&gt;

**Inherits:** `hiyui::Widget`
