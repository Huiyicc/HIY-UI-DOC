---
title: "Table"
---

# Table <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/table.h>`

**命名空间：** `hiyui`

虚拟化表格组件，仅渲染可见行

**继承自：** `hiyui::VirtualTableBase< Table >`

## 类型定义

### TableEventType

表格内部事件类型

| 值 | 说明 |
|---|---|
| `RowClick` | 行点击 |
| `Select` | 选择变化 |
| `SortChange` | 排序变化 |
| `CellEdit` | 单元格编辑提交 |

## 公开方法

### part

```cpp
Table & part(TablePart part, Part customization) &
```

替换指定部件的定制，初始化前可调用，Part{} 恢复默认。 样式覆盖保留到组件销毁，并在主题、DPI 变化和部件重建后继续生效。 Header 点击回调的 column 为列索引，选择列为 HIYUI_NO_SELECTION；Row 激活回调的 index 为展平后的数据行索引，键盘激活时 column 为焦点列，其余为 HIYUI_NO_SELECTION；Footer 仅支持样式。

### footer

```cpp
Table & footer(const char *text) &
```

设置页脚文字，复制输入；初始化前创建页脚，初始化后仅更新已有页脚，空指针清空文字并解除翻译绑定。

### footer

```cpp
Table & footer(const LocalizedText &text) &
```

绑定页脚翻译，复制描述；初始化前创建页脚，初始化后仅更新已有页脚。

### bordered

```cpp
Table & bordered(bool b) &
```

运行时切换边框

### striped

```cpp
Table & striped(bool b) &
```

运行时切换斑马纹

### tableSize

```cpp
Table & tableSize(TableSize s) &
```

运行时切换尺寸密度

### multiSort

```cpp
Table & multiSort(const std::vector< std::pair< int, SortDirection > > &keys) &
```

按键数组顺序执行多列排序

### selectedRowIndices

```cpp
std::vector< int > selectedRowIndices() const
```

获取选中行的原始索引列表

### onRowClick

```cpp
Table & onRowClick(F &&f, EventHandle *handle=nullptr) &
```

行点击回调: void(int rowIdx)，重复绑定追加

### onChange

```cpp
Table & onChange(F &&f, EventHandle *handle=nullptr) &
```

选择变化回调: void(const std::vector&lt;int&gt;&amp;)，重复绑定追加

### onSortChange

```cpp
Table & onSortChange(F &&f, EventHandle *handle=nullptr) &
```

排序变化回调: void(const char* dataIndex, SortDirection dir)，重复绑定追加

### onCellEdit

```cpp
Table & onCellEdit(F &&f, EventHandle *handle=nullptr) &
```

单元格编辑回调: void(int flatRow, int col, oldVal, newVal)，重复绑定追加

## 静态方法

### eventCode

```cpp
static lv_event_code_t eventCode(TableEventType type)
```

获取表格内部事件码。
