---
title: "TabsExEvent"
---

# TabsExEvent <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tabs_ex.h>`

**命名空间：** `hiyui`

`TabsEx` 事件内容。

`index` 是事件发生时的当前标签索引；重排事件的 `previousIndex` 是拖拽开始 时的索引。`text` 仅在回调执行期间有效，`data` 是标签项的用户数据。

## 公开成员

### type

```cpp
TabsExEventType type
```

事件类型。

### index

```cpp
int index
```

事件发生时的标签索引；新建事件为 -1。

### previousIndex

```cpp
int previousIndex
```

重排或激活前的标签索引。

### data

```cpp
int data
```

标签项的用户数据。

### text

```cpp
const char * text
```

当前标题，仅回调执行期间有效。

### pinned

```cpp
bool pinned
```

事件发生时的 Pin 状态。
