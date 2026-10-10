---
title: "TableColumn"
---

# TableColumn <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/table.h>`

**命名空间：** `hiyui`

表格列配置

## 公开成员

### title

```cpp
const char * title
```

表头文本

### dataIndex

```cpp
const char * dataIndex
```

数据字段标识

### width

```cpp
int width
```

列宽, 0=按比例分配

### minWidth

```cpp
int minWidth
```

最小列宽

### ellipsis

```cpp
bool ellipsis
```

文本溢出省略

### iconCodepoint

```cpp
uint32_t iconCodepoint
```

表头图标码点

### fixed

```cpp
ColumnFixed fixed
```

固定列方向

### sorter

```cpp
std::function< int(int, int)> sorter
```

排序比较函数: (rowIndexA, rowIndexB) -&gt; int (&lt;0, 0, &gt;0)

### colSpan

```cpp
int colSpan
```

表头列合并数

### editorType

```cpp
CellEditorType editorType
```

编辑器类型

### dropdownOptions

```cpp
std::vector< std::string > dropdownOptions
```

`Dropdown` 选项列表，editorType=`Dropdown` 时使用

### resizable

```cpp
bool resizable
```

列宽可拖拽调整

### editorFactory

```cpp
TableEditorFactory editorFactory
```

Custom 编辑器工厂；在 host 内构建组件，通过会话更新值。

### customRender

```cpp
std::function< void(DrawCtx &, int, Rect, int)> customRender
```

单元格自定义渲染回调

### localizedTitle

```cpp
std::optional< LocalizedText > localizedTitle
```

设置后覆盖原文本，并随语言切换更新；描述在传入组件时复制。
