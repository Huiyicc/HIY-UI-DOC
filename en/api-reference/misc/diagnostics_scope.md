---
title: "diagnostics::Scope"
---

# diagnostics::Scope <Badge type="info" text="Class" />

**Header:** `#include <hiyui/misc/diagnostics.h>`

**Namespace:** `hiyui`

Construct and destroy on the same thread to record a span; the UTF-8 name is copied at construction and truncated beyond 63 bytes. An empty name is valid; a no-op when not capturing.
