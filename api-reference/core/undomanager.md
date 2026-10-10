---
title: "UndoManager"
---

# UndoManager <Badge type="info" text="类" />

**头文件：** `#include <hiyui/core/undo_manager.h>`

**命名空间：** `hiyui`

撤销/重做管理器

## 公开方法

### record

```cpp
void record(const std::string &text, uint32_t cursorPos, UndoActionType actionType=UndoActionType::Typing)
```

记录当前状态

| 参数 | 说明 |
|---|---|
| `actionType` | 影响合并策略 |

合并规则，  - Typing: 500ms 内的连续输入合并为一条记录
- Edit/Program: 每次独立记录

### undo

```cpp
Snapshot undo(const std::string &currentText, uint32_t currentCursor)
```

执行撤销

将当前状态压入重做栈，弹出撤销栈顶返回。 若不存在可撤销状态，返回空快照。

### redo

```cpp
Snapshot redo(const std::string &currentText, uint32_t currentCursor)
```

执行重做

将重做状态压入撤销栈并返回。 若重做栈空，返回空快照。

### setMaxSteps

```cpp
void setMaxSteps(size_t maxSteps)
```

设置最大历史步数，小于当前记录数时自动裁剪旧记录
