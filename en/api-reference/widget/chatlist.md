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

Bind the bubble click callback; repeated binds append

Callback; its arguments are the message item and index Optional out parameter receiving the unbind handle of this binding This component

### onBubbleLongPress

```cpp
ChatList & onBubbleLongPress(F &&f, EventHandle *handle=nullptr) &
```

Bind the bubble long-press callback; repeated binds append

Callback; its arguments are the message item and index Optional out parameter receiving the unbind handle of this binding This component

### onScrollToTop

```cpp
ChatList & onScrollToTop(F &&f, EventHandle *handle=nullptr) &
```

Bind the scrolled-to-top callback; repeated binds append

Callback function Optional out parameter receiving the unbind handle of this binding This component

## Static Methods

### eventCode

```cpp
static lv_event_code_t eventCode(ChatListEventType type)
```

Get the internal event code of the chat list.
