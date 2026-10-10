---
title: "PropertyCommitRequest"
---

# PropertyCommitRequest <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_editor.h>`

**Namespace:** `hiyui`

Commit request, valid only during the handler call and non-copyable. Must be accepted, rejected, or deferred; unanswered requests are rejected. Asynchronous operations keep the handle returned by defer.
