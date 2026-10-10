---
title: "TableProps"
---

# TableProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/table.h>`

**命名空间：** `hiyui`

表格创建属性

## 公开成员

### bordered

```cpp
bool bordered
```

显示边框线

### striped

```cpp
bool striped
```

斑马纹

### showHeader

```cpp
bool showHeader
```

显示表头

### rowSelection

```cpp
bool rowSelection
```

行选择模式，checkbox

### selectable

```cpp
bool selectable
```

拖拽框选单元格区域并复制 TSV 文本

### indentSize

```cpp
int indentSize
```

树形缩进像素

### maxHeight

```cpp
int maxHeight
```

最大高度，height=HIYUI_AUTO 时生效，0 = 不限

### scrollX

```cpp
int scrollX
```

横向滚动总宽度，&gt;0 启用横向滚动

### footer

```cpp
const char * footer
```

页脚文本
