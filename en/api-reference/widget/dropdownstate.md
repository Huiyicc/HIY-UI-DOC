---
title: "DropdownState"
---

# DropdownState <Badge type="info" text="Struct" />

**Header:** `#include <hiyui/widget/dropdown.h>`

**Namespace:** `hiyui`

Dropdown selection runtime state, lifetime follows the LVGL object

Heap-allocated and attached to the lv_obj_t user_data. Released automatically through the LV_EVENT_DELETE callback.

## Public Members

### optionList

```cpp
std::vector< std::string > optionList
```

Parsed option list

### itemDataList

```cpp
std::vector< int > itemDataList
```

Per-option user-bound data

### selectedIdx

```cpp
int selectedIdx
```

Current selected index

### isOpen

```cpp
bool isOpen
```

Whether the popup list is open

### labelObj

```cpp
lv_obj_t * labelObj
```

Label showing the currently selected text

### listPanel

```cpp
lv_obj_t * listPanel
```

Popup list container, attached to the screen or a floating window

### overlay

```cpp
lv_obj_t * overlay
```

Transparent blocker layer, closes the list on outside clicks

### ddObj

```cpp
lv_obj_t * ddObj
```

Back-reference to the dropdown object

### valueCb

```cpp
std::function< void()> valueCb
```

Value change callback

### popupSurface

```cpp
detail::PopupSurface * popupSurface
```

Floating window panel, owned in Window mode, released on close

### editable

```cpp
bool editable
```

Editable mode

### searchEnabled

```cpp
bool searchEnabled
```

Search filter toggle

### setTextInternal

```cpp
bool setTextInternal
```

Set-text-in-progress flag, skips input-triggered auto open

### matchFn

```cpp
std::function< bool(const std::string &, const std::string &)> matchFn
```

Search matcher slot, empty = default case-insensitive substring match

### query

```cpp
std::string query
```

Current search text

### editObj

```cpp
lv_obj_t * editObj
```

Editable mode text area

### searchBox

```cpp
lv_obj_t * searchBox
```

Search input box at the top of the popup list

### itemsBox

```cpp
lv_obj_t * itemsBox
```

Option button container, present when the search box exists

### noMatchLabel

```cpp
lv_obj_t * noMatchLabel
```

No-match hint

### scrollCarrier

```cpp
lv_obj_t * scrollCarrier
```

Actual scrolling container, listPanel or itemsBox

### scrollListeners

```cpp
std::vector< std::pair< lv_obj_t *, lv_event_dsc_t * > > scrollListeners
```

Scroll listeners as a list of (ancestor object, event descriptor) pairs, removed on close

### listAnim

```cpp
lv_anim_t listAnim
```

Expand/collapse geometry animation slot

### listAnimOpa

```cpp
lv_anim_t listAnimOpa
```

Collapse fade-out animation slot (independent duration)

### closePending

```cpp
bool closePending
```

Collapse animation in progress (re-entry guard)

### openDownward

```cpp
bool openDownward
```

Current expand direction

### panelX0

```cpp
int32_t panelX0
```

Panel start x

### padTop

```cpp
int32_t padTop
```

Panel top padding

### padBottom

```cpp
int32_t padBottom
```

Panel bottom padding

### ddTargetY

```cpp
int32_t ddTargetY
```

Anchor item end screen center y, flush with the ddObj edge

### expandPanelH

```cpp
int32_t expandPanelH
```

Expand end height

### expandContentH

```cpp
int32_t expandContentH
```

Total list content height

### revealBottomY

```cpp
int32_t revealBottomY
```

Content coordinate the panel bottom aligns to when expanding upward

### anchorTopY

```cpp
int32_t anchorTopY
```

Expand downward, panel top anchor y

### anchorBottomY

```cpp
int32_t anchorBottomY
```

Expand upward, panel bottom anchor y

### panelH0

```cpp
int32_t panelH0
```

Collapse start height

### scrollY0

```cpp
int32_t scrollY0
```

Collapse start scroll_y

### scrollYTarget

```cpp
int32_t scrollYTarget
```

Collapse end scroll_y

### itemScreenY0

```cpp
int32_t itemScreenY0
```

Anchor item start screen center y

### itemContentCenterY

```cpp
int32_t itemContentCenterY
```

Anchor item content coordinate center y

### hEnd

```cpp
int32_t hEnd
```

Collapse end height (single line)
