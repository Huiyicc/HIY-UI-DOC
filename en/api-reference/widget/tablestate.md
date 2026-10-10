---
title: "TableState"
---

# TableState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/table.h>`

**Namespace:** `hiyui`

## Public Members

### rows

```cpp
std::vector< TableRow > rows
```

Original row data, tree roots

### sortedIndices

```cpp
std::vector< int > sortedIndices
```

Indirect indices after sorting

### poolRows

```cpp
std::vector< lv_obj_t * > poolRows
```

Virtual table row object pool

### poolStart

```cpp
int poolStart
```

Offset into sortedIndices of the first pooled row

### hasTree

```cpp
bool hasTree
```

children present in the data

### sortColumnIdx

```cpp
int sortColumnIdx
```

Current sort column index, -1 = no sorting

### sortKeys

```cpp
std::vector< SortKey > sortKeys
```

Multi-column sort keys, applied in array order

### selectedFlags

```cpp
std::vector< bool > selectedFlags
```

Per-row selection flags, indexed by flatRows

### hoverRowIdx

```cpp
int hoverRowIdx
```

Current hovered row, a virtual table visible row index

### keyFocusSortedIdx

```cpp
int keyFocusSortedIdx
```

Keyboard focus row, an index into sortedIndices, -1 = none

### keyFocusColIdx

```cpp
int keyFocusColIdx
```

Keyboard focus column, -1 = none

### tipPendingSorted

```cpp
int tipPendingSorted
```

Row of the currently tracked cell, sortedIdx, -1 = none

### tipPendingCol

```cpp
int tipPendingCol
```

Column index of the currently tracked cell, -1 = none

### textSelAnchorSorted

```cpp
int textSelAnchorSorted
```

Rubber-band selection anchor row, sortedIdx, -1 = no selection

### textSelAnchorCol

```cpp
int textSelAnchorCol
```

Rubber-band selection anchor column

### textSelActiveSorted

```cpp
int textSelActiveSorted
```

Rubber-band selection current row, sortedIdx

### textSelActiveCol

```cpp
int textSelActiveCol
```

Rubber-band selection current column

### textSelArmed

```cpp
bool textSelArmed
```

Pressed, movement below the threshold

### textSelDragging

```cpp
bool textSelDragging
```

Rubber-band drag in progress

### textSelConsumedClick

```cpp
bool textSelConsumedClick
```

The drag already consumed the click

### textSelPressPt

```cpp
lv_point_t textSelPressPt
```

Press position in screen coordinates

### scrollXOffset

```cpp
int scrollXOffset
```

Current horizontal scroll offset

### editingFlatIdx

```cpp
int editingFlatIdx
```

Row being edited, an index into flatRows

### editingColIdx

```cpp
int editingColIdx
```

Column being edited

### editorOverlay

```cpp
lv_obj_t * editorOverlay
```

Editor overlay widget

### editingRow

```cpp
bool editingRow
```

Whole-row editing mode

### rowEditors

```cpp
std::vector< std::pair< int, lv_obj_t * > > rowEditors
```

Row editing mode editors, (column index, editor)

### resizingColIdx

```cpp
int resizingColIdx
```

Column index being resized by dragging

### resizeDragStartX

```cpp
int resizeDragStartX
```

Drag start X

### resizeOrigWidth

```cpp
int resizeOrigWidth
```

Column width before the drag

### hoverResizeColIdx

```cpp
int hoverResizeColIdx
```

Column index of the hovered draggable edge

### totalColumnsWidth

```cpp
int totalColumnsWidth
```

Total width of all columns

### fixedLeftWidth

```cpp
int fixedLeftWidth
```

Total width of left fixed columns

### fixedRightWidth

```cpp
int fixedRightWidth
```

Total width of right fixed columns

### rightFixedStartX

```cpp
int rightFixedStartX
```

Start x of the right fixed column group in colLayouts

### scrollContentWidth

```cpp
int scrollContentWidth
```

Uniform width of the bodyObj children, including rows and the spacer

### groupHeaderHeight

```cpp
int groupHeaderHeight
```

Group header row height, 0 = no grouping

### expandedFlatIdx

```cpp
int expandedFlatIdx
```

Row currently showing expanded embedded content

### expandedPanel

```cpp
lv_obj_t * expandedPanel
```

Expanded content panel

### expandedSortedIdx

```cpp
int expandedSortedIdx
```

Position of the expanded row in the sort indices

### expandedPanelHeight

```cpp
int expandedPanelHeight
```

Expanded panel height

### poolEditors

```cpp
std::vector< PoolRowEditors > poolEditors
```

Same length as poolRows

### hasInlineEditors

```cpp
bool hasInlineEditors
```

A column definition has editorType != None

### headerObj

```cpp
lv_obj_t * headerObj
```

Header row object

### bodyObj

```cpp
lv_obj_t * bodyObj
```

Data area container

### footerObj

```cpp
lv_obj_t * footerObj
```

Footer row object

### heightSpacer

```cpp
lv_obj_t * heightSpacer
```

Spacer holding the virtual table total height

### pcScrollEnabled

```cpp
bool pcScrollEnabled
```

Floating scrollbar initialized

### lastBodyScrollDir

```cpp
lv_dir_t lastBodyScrollDir
```

Last scroll direction set on bodyObj
