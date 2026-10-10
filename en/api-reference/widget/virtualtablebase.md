---
title: "VirtualTableBase"
---

# VirtualTableBase <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/virtual_table.h>`

**Namespace:** `hiyui`

Virtual table rendering base

Provides common methods such as anchor restoration and offset synchronization. Subclasses manage their own row object pool and data binding.


Final component type

**Inherits:** `hiyui::Chainable< Derived >`

## Protected Methods

### doCaptureAnchor

```cpp
virtual VirtualAnchor doCaptureAnchor()=0
```

Captures the anchor item of the current viewport, implemented by subclasses

### doFindVisibleIndexById

```cpp
virtual int doFindVisibleIndexById(int itemId)=0
```

Finds the visible index by itemId, implemented by subclasses

### doGetTotalContentHeight

```cpp
virtual int doGetTotalContentHeight()=0
```

Returns the current total content height, implemented by subclasses

### doGetRowHeight

```cpp
virtual int doGetRowHeight()=0
```

Returns the default row height, implemented by equal-height row subclasses

### doGetRowHeight

```cpp
virtual int doGetRowHeight(int)
```

Returns the height of a visible row, overridden by variable-height row subclasses

### doGetGap

```cpp
virtual int doGetGap()
```

Returns the row gap, required for anchor restoration with variable row heights

### restoreAnchorPosition

```cpp
virtual void restoreAnchorPosition(const VirtualAnchor &anchor)
```

Restores the anchor item to its original screen position

### correctScrollY

```cpp
virtual void correctScrollY()
```

Clamps scrollY to the valid range

### doRefreshPool

```cpp
virtual void doRefreshPool()
```

Refreshes visible rows after a synchronized refresh, implemented by subclasses

### syncRefresh

```cpp
void syncRefresh(const VirtualAnchor &anchor)
```

Unified synchronized refresh flow

### forceLayoutSync

```cpp
void forceLayoutSync()
```

Forces LVGL to complete layout computation

### captureAnchor

```cpp
VirtualAnchor captureAnchor()
```

Captures the current anchor, for subclass use
