---
title: "UndoManager"
---

# UndoManager <Badge type="info" text="Class" />

**Header:** `#include <hiyui/core/undo_manager.h>`

**Namespace:** `hiyui`

Undo/redo manager

## Public Methods

### record

```cpp
void record(const std::string &text, uint32_t cursorPos, UndoActionType actionType=UndoActionType::Typing)
```

Records the current state

Determines the merge strategy Merge rules: Typing: consecutive input within 500ms merges into one record Edit/Program: each call records independently

### undo

```cpp
Snapshot undo(const std::string &currentText, uint32_t currentCursor)
```

Performs undo

Pushes the current state onto the redo stack and pops the top of the undo stack to return. Returns an empty snapshot when there is nothing to undo.

### redo

```cpp
Snapshot redo(const std::string &currentText, uint32_t currentCursor)
```

Performs redo

Pushes the redo state onto the undo stack and returns it. Returns an empty snapshot when the redo stack is empty.

### setMaxSteps

```cpp
void setMaxSteps(size_t maxSteps)
```

Sets the maximum history steps; when smaller than the current record count, old records are trimmed automatically
