---
title: "TableEditor"
---

# TableEditor <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/table_editor.h>`

**命名空间：** `hiyui`

非拥有的表格编辑会话，可以按值捕获，全部操作须在 UI 线程进行。 编辑结束、编辑区域删除或表格数据结构变化后失效，失效会话不能修改数据。

## 公开方法

### valid

```cpp
bool valid() const
```

会话及其编辑区域是否仍然有效。

### row

```cpp
int row() const
```

获取展平后的数据行索引，失效时返回 -1。

### column

```cpp
int column() const
```

获取列索引，失效时返回 -1。

### inlineEditing

```cpp
bool inlineEditing() const
```

是否为立即回写的行内编辑，失效时返回 false。

### value

```cpp
std::string value() const
```

获取当前草稿的副本，失效时返回空字符串。

### setValue

```cpp
bool setValue(std::string value) const
```

更新编辑值；行内编辑立即回写，显式编辑保存草稿。

**返回值：** 失效时返回 false；值未变化时返回 true 且不重复通知。

### commit

```cpp
bool commit() const
```

提交当前单元格或整行编辑；行内编辑保持开启，失效时返回 false。

### cancel

```cpp
bool cancel() const
```

丢弃当前单元格或整行草稿；行内编辑不回滚已回写数据，失效时返回 false。
