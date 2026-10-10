---
title: "FlowBoxProps"
---

# FlowBoxProps <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/flowbox.h>`

**Namespace:** `hiyui`

Flow layout container creation properties

## Public Members

### padding

```cpp
int padding
```

Inner padding

### gap

```cpp
int gap
```

Gap between children

### margin

```cpp
int margin
```

Outer margin of the container within its parent layout

### bg

```cpp
uint32_t bg
```

Background color. HIYUI_DEFAULT = follow theme

### radius

```cpp
uint32_t radius
```

Corner radius. HIYUI_DEFAULT = follow theme

### align

```cpp
Align align
```

Main axis alignment, horizontal within a row

### crossAlign

```cpp
Align crossAlign
```

Cross axis alignment, vertical between rows

### minChildWidth

```cpp
int minChildWidth
```

Minimum child width. 0 = unlimited

### maxChildWidth

```cpp
int maxChildWidth
```

Maximum child width. 0 = unlimited

### childGrow

```cpp
bool childGrow
```

Whether children flex-grow to fill remaining row space

### scroll

```cpp
ScrollMode scroll
```

Scroll mode
