---
title: "TableEditorFactory"
---

# TableEditorFactory <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/table_editor.h>`

**Namespace:** `hiyui`

Copyable editor factory accepting a void(Widget &amp;, TableEditor) callable. host is positioned and destroyed by the table and can only be borrowed during the factory call. Created child components are owned by host. Do not destroy host or change its parent. The factory only configures the host subtree and must not modify or destroy the table or its ancestors. Interaction is handled through child component events. The factory can be empty. After a column configuration is copied, the copy shares the factory and its captured state.
