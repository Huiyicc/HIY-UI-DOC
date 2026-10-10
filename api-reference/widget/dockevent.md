---
title: "DockEvent"
---

# DockEvent <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/dock.h>`

**命名空间：** `hiyui`

`Dock` 事件内容。

`name` 是面板唯一名，仅回调执行期间有效；`index` 是事件发生时的组内 tab 索引；`edge` 仅 PaneDocked 事件携带落位边。

## 公开成员

### type

```cpp
DockEventType type
```

事件类型。

### name

```cpp
const char * name
```

面板唯一名，仅回调执行期间有效。

### index

```cpp
int index
```

组内 tab 索引，无意义时为 -1。

### edge

```cpp
DockEdge edge
```

PaneDocked 的落位边。
