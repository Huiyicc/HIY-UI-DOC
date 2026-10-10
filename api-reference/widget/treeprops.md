---
title: "TreeProps"
---

# TreeProps <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/widget/tree.h>`

**命名空间：** `hiyui`

树组件创建属性

## 公开成员

### maxHeight

```cpp
int maxHeight
```

height=HIYUI_AUTO 时最大高度，0=不限

### indent

```cpp
int indent
```

缩进像素

### checkable

```cpp
bool checkable
```

全局勾选框

### accordion

```cpp
bool accordion
```

手风琴模式

### multiSelect

```cpp
bool multiSelect
```

目录树多选

### expandIcon

```cpp
uint32_t expandIcon
```

0=默认 HIYUI_ICON_ADD_BOX

### collapseIcon

```cpp
uint32_t collapseIcon
```

0=默认 HIYUI_ICON_INDETERMINATE_CHECK_BOX

### checkIcon

```cpp
uint32_t checkIcon
```

勾选图标，0=默认 HIYUI_ICON_CHECK_BOX

### uncheckIcon

```cpp
uint32_t uncheckIcon
```

未选中图标，0=默认 HIYUI_ICON_CHECK_BOX_OUTLINE_BLANK

### indeterminateIcon

```cpp
uint32_t indeterminateIcon
```

半选图标，0=默认 HIYUI_ICON_DIALOGS
