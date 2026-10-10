---
title: "Chainable"
---

# Chainable <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chainable.h>`

**Namespace:** `hiyui`

CRTP chaining base that forwards all Widget chain methods and returns derived-class references.

Generic chain methods preserve the derived type and the lvalue or rvalue category of the object. Component-specific methods can follow any generic method in a chain. Method contracts match the identically named Widget methods.


Derived class type, for example Label derives from Chainable&lt;Label&gt;

**Inherits:** `hiyui::Widget`
