---
title: "TableState"
---

# TableState <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/table.h>`

**命名空间：** `hiyui`

## 公开成员

### rows

```cpp
std::vector< TableRow > rows
```

原始行数据，树根

### sortedIndices

```cpp
std::vector< int > sortedIndices
```

排序后的间接索引

### poolRows

```cpp
std::vector< lv_obj_t * > poolRows
```

虚表行对象池

### poolStart

```cpp
int poolStart
```

池首行对应的 sortedIndices 偏移

### hasTree

```cpp
bool hasTree
```

数据中存在 children

### sortColumnIdx

```cpp
int sortColumnIdx
```

当前排序列索引，-1=无排序

### sortKeys

```cpp
std::vector< SortKey > sortKeys
```

多列排序键，按数组顺序应用

### selectedFlags

```cpp
std::vector< bool > selectedFlags
```

每行选中标记，按 flatRows 索引

### hoverRowIdx

```cpp
int hoverRowIdx
```

当前悬浮行，虚表可见行索引

### keyFocusSortedIdx

```cpp
int keyFocusSortedIdx
```

键盘焦点行，sortedIndices 索引，-1 = 无

### keyFocusColIdx

```cpp
int keyFocusColIdx
```

键盘焦点列，-1 = 无

### tipPendingSorted

```cpp
int tipPendingSorted
```

当前跟踪单元格所在行，sortedIdx，-1 = 无

### tipPendingCol

```cpp
int tipPendingCol
```

当前跟踪单元格列索引，-1 = 无

### textSelAnchorSorted

```cpp
int textSelAnchorSorted
```

框选锚点行，sortedIdx，-1 = 无选区

### textSelAnchorCol

```cpp
int textSelAnchorCol
```

框选锚点列

### textSelActiveSorted

```cpp
int textSelActiveSorted
```

框选当前行，sortedIdx

### textSelActiveCol

```cpp
int textSelActiveCol
```

框选当前列

### textSelArmed

```cpp
bool textSelArmed
```

已按下，位移未超过阈值

### textSelDragging

```cpp
bool textSelDragging
```

框选拖拽进行中

### textSelConsumedClick

```cpp
bool textSelConsumedClick
```

本次拖拽已消费点击

### textSelPressPt

```cpp
lv_point_t textSelPressPt
```

按下位置，屏幕坐标

### scrollXOffset

```cpp
int scrollXOffset
```

当前横向滚动偏移

### editingFlatIdx

```cpp
int editingFlatIdx
```

正在编辑的行，flatRows 索引

### editingColIdx

```cpp
int editingColIdx
```

正在编辑的列

### editorOverlay

```cpp
lv_obj_t * editorOverlay
```

编辑器叠加控件

### editingRow

```cpp
bool editingRow
```

整行编辑模式

### rowEditors

```cpp
std::vector< std::pair< int, lv_obj_t * > > rowEditors
```

行编辑模式编辑器，(列索引, 编辑器)

### resizingColIdx

```cpp
int resizingColIdx
```

正在拖拽调整的列索引

### resizeDragStartX

```cpp
int resizeDragStartX
```

拖拽起始 X

### resizeOrigWidth

```cpp
int resizeOrigWidth
```

拖拽前列宽

### hoverResizeColIdx

```cpp
int hoverResizeColIdx
```

当前 hover 到的可拖拽边界列索引

### totalColumnsWidth

```cpp
int totalColumnsWidth
```

所有列总宽度

### fixedLeftWidth

```cpp
int fixedLeftWidth
```

左固定列总宽

### fixedRightWidth

```cpp
int fixedRightWidth
```

右固定列总宽

### rightFixedStartX

```cpp
int rightFixedStartX
```

右固定列组在 colLayouts 中的起始 x

### scrollContentWidth

```cpp
int scrollContentWidth
```

bodyObj 子对象统一宽度，含行和 spacer

### groupHeaderHeight

```cpp
int groupHeaderHeight
```

分组表头行高度，0=无分组

### expandedFlatIdx

```cpp
int expandedFlatIdx
```

当前展开内嵌内容的行

### expandedPanel

```cpp
lv_obj_t * expandedPanel
```

展开内容面板

### expandedSortedIdx

```cpp
int expandedSortedIdx
```

展开行在排序索引中的位置

### expandedPanelHeight

```cpp
int expandedPanelHeight
```

展开面板高度

### poolEditors

```cpp
std::vector< PoolRowEditors > poolEditors
```

与 poolRows 等长

### hasInlineEditors

```cpp
bool hasInlineEditors
```

列定义中存在 editorType != None

### headerObj

```cpp
lv_obj_t * headerObj
```

表头行对象

### bodyObj

```cpp
lv_obj_t * bodyObj
```

数据区域容器

### footerObj

```cpp
lv_obj_t * footerObj
```

页脚行对象

### heightSpacer

```cpp
lv_obj_t * heightSpacer
```

撑起虚表总高度

### pcScrollEnabled

```cpp
bool pcScrollEnabled
```

浮动滚动条已初始化

### lastBodyScrollDir

```cpp
lv_dir_t lastBodyScrollDir
```

上次设置的 bodyObj 滚动方向
