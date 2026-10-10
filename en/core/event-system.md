---
title: Events
---

# Events

The `EventCode` enumeration corresponds to the LVGL `LV_EVENT_*` event codes. `Widget::on()` stores the C++ callback in the LVGL event callback and releases it automatically when the widget is deleted.

## Shortcut methods

`onClick()` binds button clicks; `onChange()` binds value changes on sliders, checkboxes, and similar widgets.

```cpp
button.onClick([] { submit(); });
slider.onChange([] { updatePreview(); });
```

## General registration

`on(EventCode, callback)` registers any event. The callback can take no parameters or take an `Event&`.

```cpp
widget.on(EventCode::Focused, [] {
  showFocusRing();
});

widget.on(EventCode::Key, [](Event &event) {
  handleKey(event.keyCode());
});
```

Repeated binding appends handlers and does not replace existing callbacks. `targetWidget()` returns the widget wrapper that actually triggered the event, and `currentTargetWidget()` returns the widget wrapper the callback is attached to; both are non-owning objects and are valid only inside the current callback. `data()` returns the event payload, can be null, and must not be stored beyond the callback.

`keyCode()` returns the key value in `EventCode::Key`, `inputKeyEventCode()`, and `keyPreviewEventCode()` callbacks and `KeyCode::None` for other events. `pointerPositionPx(Point&)` obtains local physical coordinates relative to the object currently propagating the event and returns `false` with a zeroed output when there is no pointer input.

## Common events

| Category | EventCode |
| --- | --- |
| Pointer | `Pressed`, `Pressing`, `Released`, `Clicked`, `LongPressed` |
| Focus | `Focused`, `Defocused`, `Leave` |
| Input | `Key`, `ValueChanged` |
| Scrolling | `ScrollBegin`, `Scroll`, `ScrollEnd` |
| Object | `ChildChanged`, `SizeChanged`, `StyleChanged`, `StateChanged`, `Delete` |
| Layout | `LayoutChanged`, `LayoutCompleted` |

Objects captured by callbacks must outlive callback execution. When a widget is deleted, the library releases its event wrapper.

`LayoutCompleted` subscribes to the layout completion notification of the display the widget belonged to at registration time. `inputKeyEventCode()` subscribes to key press notifications of keyboards connected to that display at registration time and fires before focus navigation processing.

## Key preprocessing and event stopping

`keyPreviewEventCode()` notifies before the focused widget processes a key. Calling `event.stopProcessing()` consumes the key, and subsequent input processing is skipped.

The following binding makes an input field cancel editing when it receives Escape.

```cpp
input.on(keyPreviewEventCode(), [](Event &event) {
  if (event.keyCode() != KeyCode::Escape) return;
  event.stopProcessing();
  cancelEditing();
});
```

| Method | Returns | Description |
| --- | --- | --- |
| `Event::stopProcessing()` | `void` | Stops later handlers; during key preprocessing it also consumes the key; no-op on the `Delete` event |
| `Event::stopBubbling()` | `void` | Stops propagation of the current event to ancestors |

## Back Request

`Widget::onBackRequest(handler, handle)` appends a local back handler. The callback accepts a `BackRequest &`; `handle` defaults to `nullptr`; pre-mount binding and move-only closures are supported. Requests are dispatched by `Window::requestBack()`; the processing order is described in [Window Navigation](/en/window/multi-window).

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `handled` | `bool` | `false` | When set to `true`, this request no longer runs later handlers, the widget default back behavior, or page history back |

User handlers on the same object run before the widget default behavior. The request parameter is valid only during the callback. The subscription is removed when the widget is destroyed; unbind explicitly with `EventHandle::off()`, or use `ScopedEventHandle` to unbind at scope exit.

The following example uses a bound `confirmationRef` to show a confirmation area and consume the back request.

```cpp
page.onBackRequest([confirmationRef](BackRequest &request) {
  if (!confirmationRef) return;
  request.handled = true;
  confirmationRef->hidden(false);
});
```

## Custom events

Call `registerEventCode()` on the UI thread to allocate a process-unique event code and send it synchronously through `sendEvent(code, data)`. The data is borrowed until the send call returns; sending `Delete` is not allowed, and invalid objects return `false`.

The following code subscribes to and sends a custom event on the same widget.

```cpp
const auto activated = registerEventCode();
widget.on(activated, [](Event &event) {
  if (const auto *value = static_cast<const int *>(event.data()))
    handleActivation(*value);
});
int command = 1;
widget.sendEvent(activated, &command);
```

## C interface

| C++ operation | C function or enum |
| --- | --- |
| `on()` | `hiyui_wdg_on()` |
| `onBackRequest()` | `hiyui_wdg_on_back_request()` |
| `BackRequest` | `hiyui_back_request_t`, nonzero `handled` means consumed |
| `registerEventCode()` | `hiyui_event_register()` |
| `sendEvent()` | `hiyui_wdg_send_event()` |
| `Event::data()` | `hiyui_event_data()` |
| `Event::keyCode()` | `hiyui_event_key()` |
| `EventCode::LayoutCompleted` | `HIYUI_EVENT_LAYOUT_COMPLETED` |
| `inputKeyEventCode()` | `HIYUI_EVENT_INPUT_KEY` |
| `keyPreviewEventCode()` | `HIYUI_EVENT_KEY_PREVIEW` |
| `Event::stopProcessing()`, `Event::stopBubbling()` | `hiyui_event_stop_processing()`, `hiyui_event_stop_bubbling()` |

The `hiyui_wdg_on()` subscription releases the callback data when the widget is deleted or the subscription is explicitly removed; a non-null `destroy` takes ownership of `user_data` and is also called when registration fails. After the call returns an event handle, the caller must use `hiyui_event_handle_destroy()` to unbind and release the handle.

`HIYUI_EVENT_KEY_PREVIEW` is for subscription only and cannot be sent manually through `hiyui_wdg_send_event()`. Use `hiyui_event_key()` inside the callback to obtain the key.

`hiyui_wdg_on_back_request()` returns `1` on success and `0` for an invalid widget, a null callback, or an already occupied output handle. `out_handle` can be null; otherwise it must point to an empty handle. A non-null `destroy` takes ownership of `user_data` and is also called when binding fails; when the callback unbinds or destroys the widget, the callback data is released after the current dispatch ends. The request parameter must not be stored beyond the callback.

The desktop C interface `hiyui_mouse_move_register()` appends a move listener and `hiyui_mouse_wheel_register()` replaces the wheel listener; the corresponding `unregister()` functions unbind. Callback coordinates are physical pixels; data passed at registration is released when the widget is deleted or unbound, and non-desktop builds return `0`. For full signatures see [Events C Reference](/en/bindings/c/event.h).
