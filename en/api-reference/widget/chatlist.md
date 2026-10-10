---
title: "ChatList"
---

# ChatList <Badge type="info" text="Class" />

**Header:** `#include <hiyui/widget/chat_list.h>`

**Namespace:** `hiyui`

**Inherits:** `hiyui::VirtualTableBase< ChatList >`

## Types

### ChatListEventType

Chat list internal event types

| Value | Description |
|---|---|
| `BubbleClick` | Bubble click |
| `BubbleLongPress` | Bubble long press |
| `ScrollToTop` | Scrolled to top |

## Public Methods

### onBubbleClick

```cpp
ChatList & onBubbleClick(F &&f, EventHandle *handle=nullptr) &
```

Binds a bubble click callback; repeated bindings are appended

Callback; the arguments are the message item and its index Optional output parameter receiving the unbind handle for this binding This component

### onBubbleLongPress

```cpp
ChatList & onBubbleLongPress(F &&f, EventHandle *handle=nullptr) &
```

Binds a bubble long press callback; repeated bindings are appended

Callback; the arguments are the message item and its index Optional output parameter receiving the unbind handle for this binding This component

### onScrollToTop

```cpp
ChatList & onScrollToTop(F &&f, EventHandle *handle=nullptr) &
```

Binds a scrolled-to-top callback; repeated bindings are appended

Callback function Optional output parameter receiving the unbind handle for this binding This component

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(ChatListEventType type)
```

Returns the internal event code of the chat list.
