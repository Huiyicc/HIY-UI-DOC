---
title: "TableEditorFactory"
---

# TableEditorFactory <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/table_editor.h>`

**Namespace:** `hiyui`

A copyable editor factory that accepts a void(Widget &amp;, TableEditor) callable. The host is positioned and destroyed by the table, borrowed only during the factory call. Child widgets created in it belong to the host. The host must not be destroyed or reparented. The factory only configures the host subtree and must not modify or destroy the table or its ancestors. Interaction is handled through child widget events. The factory can be empty. After a column config is copied, the copy shares the factory and its captured state.
