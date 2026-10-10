---
title: "VirtualTableBase"
---

# VirtualTableBase <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/virtual_table.h>`

**命名空间：** `hiyui`

虚表渲染基类

提供锚定恢复、偏移同步等通用方法。 子类负责管理自己的行对象池和数据绑定。



| 名称 | 说明 |
|---|---|
| `Derived` | 最终组件类型 |

**继承自：** `hiyui::Chainable< Derived >`

## 保护方法

### doCaptureAnchor

```cpp
virtual VirtualAnchor doCaptureAnchor()=0
```

记录当前视口的锚定项，子类实现

### doFindVisibleIndexById

```cpp
virtual int doFindVisibleIndexById(int itemId)=0
```

通过itemId找到可见索引，子类实现

### doGetTotalContentHeight

```cpp
virtual int doGetTotalContentHeight()=0
```

获取当前总内容高度，子类实现

### doGetRowHeight

```cpp
virtual int doGetRowHeight()=0
```

获取默认行高度，等高行子类实现

### doGetRowHeight

```cpp
virtual int doGetRowHeight(int)
```

获取指定可见行的高度，变高行子类 override

### doGetGap

```cpp
virtual int doGetGap()
```

获取行间距，变高行锚定恢复需要

### restoreAnchorPosition

```cpp
virtual void restoreAnchorPosition(const VirtualAnchor &anchor)
```

恢复锚定项到原来的屏幕位置

### correctScrollY

```cpp
virtual void correctScrollY()
```

校正scrollY到有效范围

### doRefreshPool

```cpp
virtual void doRefreshPool()
```

同步刷新后刷新可见行，子类实现

### syncRefresh

```cpp
void syncRefresh(const VirtualAnchor &anchor)
```

统一的同步刷新流程

### forceLayoutSync

```cpp
void forceLayoutSync()
```

强制LVGL完成布局计算

### captureAnchor

```cpp
VirtualAnchor captureAnchor()
```

获取当前锚定，供子类调用
