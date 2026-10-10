---
title: "PropertyCommitRequest"
---

# PropertyCommitRequest <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/property_editor.h>`

**Namespace:** `hiyui`

Commit request, valid only during the handler call and non-copyable. It must be accepted, rejected, or deferred; an unanswered request is rejected. Asynchronous operations store the handle returned by defer.
