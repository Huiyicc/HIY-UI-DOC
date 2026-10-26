---
title: "Input"
---

# Input <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/input.h>`

**Namespace:** `hiyui`

Text input widget

Provides single-line or multi-line plain text editing, desktop builds can enable additional selections and multi-cursor input.



**See also:** `InputProps`

**Inherits:** `hiyui::Chainable< Input >`

## Public Methods

### Input

```cpp
Input(lv_obj_t *raw)
```

Wraps an existing LVGL object

### Input

```cpp
Input(InputProps props={})
```

Aggregate construction from properties

### init

```cpp
Input & init(lv_obj_t *parent) &
```

Creates the input on a parent object

### init

```cpp
Input & init(Widget &parent) &
```

Creates the input on a parent object

### text

```cpp
Input & text(const std::string &t, Notify notify=Notify::No) &
```

Sets the text content at runtime

### text

```cpp
Input & text(const char *t, Notify notify=Notify::No) &
```

Sets the text content at runtime

### text

```cpp
std::string text() const
```

Returns the current text content

### model

```cpp
Input & model(State< std::string > state, BindingHandle *handle=nullptr) &
```

Two-way binding of committed text installing the model text rules

Requires a state with fixed text rules created by State&lt;std::string&gt;::text; the rules and current value are applied once at mount completion. IME pre-edit is not written to the state; when the model value equals the source content the rewrite is skipped, preserving caret, selection and undo stack. User edits and program writes are normalized by the model and synced to all connections; an effective multiline change unbinds.


BindingError for an invalid state handle or missing text rules

### clearTextBinding

```cpp
Input & clearTextBinding() &
```

Removes the text model binding, keeping the current text and rule configuration; repeated calls do nothing.

### placeholder

```cpp
Input & placeholder(const char *p) &
```

Sets the placeholder hint text

UTF-8 encoded

### placeholder

```cpp
Input & placeholder(const LocalizedText &p) &
```

Binds a placeholder that updates with the language and keeps the input content, a plain placeholder call replaces this binding.

### passwordMode

```cpp
Input & passwordMode(bool p) &
```

Sets password mode

### readOnly

```cpp
Input & readOnly(bool enabled) &
```

Sets the read-only state, focus, selection, copy, and scrolling are preserved.

In read-only mode undo, redo, canUndo, and canRedo return false, history is preserved. Programmatic calls to text, clear, and insertText still update the content. Entering read-only cancels the uncommitted IME composition.

### isReadOnly

```cpp
bool isReadOnly() const
```

Returns the read-only state, false when not initialized.

### multiline

```cpp
Input & multiline(bool m, Notify notify=Notify::No) &
```

Switches multi-line/single-line mode at runtime

### horizontalScroll

```cpp
Input & horizontalScroll(bool h) &
```

Sets the horizontal scrollbar at runtime, effective only in multi-line mode

true disables automatic wrapping

### clear

```cpp
Input & clear(Notify notify=Notify::No) &
```

Clears the input content

### undo

```cpp
bool undo(Notify notify=Notify::No)
```

Performs undo

Always returns false in password mode

### redo

```cpp
bool redo(Notify notify=Notify::No)
```

Performs redo

Always returns false in password mode

### canUndo

```cpp
bool canUndo() const
```

Returns whether undo is available

### canRedo

```cpp
bool canRedo() const
```

Returns whether redo is available

### multiCursor

```cpp
Input & multiCursor(bool enabled) &
```

Sets whether additional selections and multi-cursor input are allowed, clicking with Alt/Option adds a cursor by default.

### multiCursorModifier

```cpp
Input & multiCursorModifier(InputMultiCursorModifier modifier) &
```

Sets the mouse modifier key for adding multi-cursors, no effect on non-desktop backends.

### selection

```cpp
InputSelection selection() const
```

Returns the primary selection, positions are UTF-8 byte offsets.

### selections

```cpp
std::vector< InputSelection > selections() const
```

Returns all selections, non-desktop backends return the primary selection.

### addSelection

```cpp
Input & addSelection(InputSelection sel) &
```

Adds a selection.

Positions beyond the text or inside a UTF-8 character are adjusted forward.

### clearAdditionalSelections

```cpp
Input & clearAdditionalSelections() &
```

Removes additional selections and keeps the primary selection.

### selectAll

```cpp
Input & selectAll() &
```

Selects all text.

### clearSelection

```cpp
Input & clearSelection() &
```

Collapses the primary selection and removes additional selections.

### selectedText

```cpp
std::string selectedText() const
```

Returns the primary selection text.

### insertText

```cpp
Input & insertText(const std::string &t, Notify notify=Notify::No) &
```

Inserts text at the selection and replaces the selected content.

### cursorPos

```cpp
int32_t cursorPos() const
```

Returns the primary caret position as a UTF-8 byte offset.

### cursorPos

```cpp
Input & cursorPos(int32_t bytePos) &
```

Sets the primary caret position as a UTF-8 byte offset and clears the selection.

Positions beyond the text or inside a UTF-8 character are adjusted forward.
