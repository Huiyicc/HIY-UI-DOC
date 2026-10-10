---
title: "TableRow"
---

# TableRow <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/table.h>`

**命名空间：** `hiyui`

表格行数据

cells 按列顺序存储单元格文本内容。 disabled=true 的行不可被选中。

## 公开成员

### cells

```cpp
std::vector< std::string > cells
```

单元格文本, 按列索引

### disabled

```cpp
bool disabled
```

是否禁用选择

### userData

```cpp
void * userData
```

用户自定义数据

### spans

```cpp
std::vector< CellSpan > spans
```

单元格合并配置, 与 cells 等长

### expanded

```cpp
bool expanded
```

展开状态

### children

```cpp
std::vector< TableRow > children
```

子行

### depth_

```cpp
int depth_
```

层级深度，内部计算

### expandedContent

```cpp
std::function< int(Widget &, int)> expandedContent
```

展开行内嵌内容回调，返回创建的子对象高度
