---
title: "VirtualTableBase"
---

# VirtualTableBase <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/virtual_table.h>`

**Namespace:** `hiyui`

Virtual table rendering base class

Provides anchor restore, offset sync and other common methods. Subclasses manage their own row object pools and data binding.


The final component type

**Inherits:** `hiyui::Chainable< Derived >`

## Protected Methods

### doCaptureAnchor

```cpp
virtual VirtualAnchor doCaptureAnchor()=0
```

Capture the anchor item of the current viewport; implemented by subclasses

### doFindVisibleIndexById

```cpp
virtual int doFindVisibleIndexById(int itemId)=0
```

Find the visible index by itemId; implemented by subclasses

### doGetTotalContentHeight

```cpp
virtual int doGetTotalContentHeight()=0
```

Get the current total content height; implemented by subclasses

### doGetRowHeight

```cpp
virtual int doGetRowHeight()=0
```

Get the default row height; implemented by equal-height-row subclasses

### doGetRowHeight

```cpp
virtual int doGetRowHeight(int)
```

Get the height of a given visible row; overridden by variable-height-row subclasses

### doGetGap

```cpp
virtual int doGetGap()
```

Get the row gap; needed for variable-height-row anchor restore

### restoreAnchorPosition

```cpp
virtual void restoreAnchorPosition(const VirtualAnchor &anchor)
```

Restore the anchor item to its original screen position

### correctScrollY

```cpp
virtual void correctScrollY()
```

Clamp scrollY to the valid range

### doRefreshPool

```cpp
virtual void doRefreshPool()
```

Refresh visible rows after a synchronous refresh; implemented by subclasses

### syncRefresh

```cpp
void syncRefresh(const VirtualAnchor &anchor)
```

Unified synchronous refresh flow

### forceLayoutSync

```cpp
void forceLayoutSync()
```

Force LVGL to complete layout calculation

### captureAnchor

```cpp
VirtualAnchor captureAnchor()
```

Capture the current anchor, for subclass use
