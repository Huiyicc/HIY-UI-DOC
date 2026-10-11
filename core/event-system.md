---
title: 事件
---

# 事件

`EventCode` 枚举对应 LVGL 的 `LV_EVENT_*` 事件码。`Widget::on()` 把 C++ 回调保存到 LVGL 事件回调中，组件删除时自动释放。

## 快捷方法

`onClick()` 绑定按钮点击，`onChange()` 绑定滑块、复选框等值变化。

```cpp
button.onClick([] { submit(); });
slider.onChange([] { updatePreview(); });
```

## 通用注册

`on(EventCode, callback)` 注册任意事件。回调可不接收参数，也可接收 `Event&`。

```cpp
widget.on(EventCode::Focused, [] {
  showFocusRing();
});

widget.on(EventCode::Key, [](Event &event) {
  handleKey(event.keyCode());
});
```

重复绑定追加处理器，不替换已有回调。`targetWidget()` 返回实际触发事件的组件包装器，`currentTargetWidget()` 返回挂载回调的组件包装器；两者均为非拥有对象，仅在当前回调内使用。`data()` 返回事件附加数据，可为空，不得保存到回调之外。

## 解绑

`on()` 与 Widget 及各组件的 `on*` 订阅方法接受可选的 `EventHandle *handle` 出参，包括 `onThemeChange()` 和 `onDpiChange()`。`PopupPanel::onClose()` 和 `Part::onActivate()` 为替换式单槽入口，不提供句柄，见下表。`handle->off()` 解绑单个订阅：重复调用无操作，组件销毁后调用安全，回调内部调用时注册立即移除、闭包延迟到最外层回调返回后销毁，挂载前调用取消尚未连接的订阅。`ScopedEventHandle` 在作用域结束、重新绑定或移动赋值时解绑。

事件订阅为追加式。以下绑定类 API 的语义与清除入口：

| API | 语义 | 清除方式 |
| --- | --- | --- |
| `on()`、`on*()`、`onThemeChange()`、`onDpiChange()` | 追加 | `EventHandle::off()` 或组件销毁 |
| `bindText()` | 替换 | `clearTextBinding()` |
| `tooltip()` | 替换 | `tooltip(nullptr)` |
| `surface()` | 替换 | 显式设置默认状态背景 |
| `themeStyle(provider)` | 追加 | 组件销毁时释放 |
| `PopupPanel::onClose()`、`Part::onActivate()` | 替换 | 重复调用替换原回调 |

`keyCode()` 在 `EventCode::Key`、`inputKeyEventCode()` 和 `keyPreviewEventCode()` 回调中返回按键值，其他事件返回 `KeyCode::None`。`pointerPositionPx(Point&)` 获取相对当前传播对象的局部物理坐标，无指针输入时返回 `false` 并清零输出。

## 常用事件

| 类别 | EventCode |
| --- | --- |
| 指针 | `Pressed`, `Pressing`, `Released`, `Clicked`, `LongPressed` |
| 焦点 | `Focused`, `Defocused`, `Leave` |
| 输入 | `Key`, `ValueChanged` |
| 滚动 | `ScrollBegin`, `Scroll`, `ScrollEnd` |
| 对象 | `ChildChanged`, `SizeChanged`, `StyleChanged`, `StateChanged`, `Delete` |
| 布局 | `LayoutChanged`, `LayoutCompleted` |

回调捕获对象的生命周期须覆盖回调执行期。组件删除时，库释放其事件包装器。

`LayoutCompleted` 订阅的是注册时所属显示器的布局完成通知。`inputKeyEventCode()` 订阅注册时该显示器已接入键盘的按下通知，在焦点导航处理前触发。

## 按键预处理与事件停止

`keyPreviewEventCode()` 在焦点控件处理按键前通知。调用 `event.stopProcessing()` 消费该按键，后续输入处理不再执行。

以下绑定使输入框收到 Escape 时执行取消操作。

```cpp
input.on(keyPreviewEventCode(), [](Event &event) {
  if (event.keyCode() != KeyCode::Escape) return;
  event.stopProcessing();
  cancelEditing();
});
```

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `Event::stopProcessing()` | `void` | 停止后续处理器；按键预处理时同时消费按键；`Delete` 事件调用无操作 |
| `Event::stopBubbling()` | `void` | 停止当前事件向祖先传播 |

## 返回请求

`Widget::onBackRequest(handler, handle)` 追加局部返回处理器。回调接受 `BackRequest &`，`handle` 默认为 `nullptr`；支持挂载前绑定和只可移动闭包。请求由 `Window::requestBack()` 派发，处理顺序见[窗口导航](/window/multi-window)。

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `handled` | `bool` | `false` | 设置为 `true` 后，本次请求不再执行后续处理器、组件默认返回或页面历史返回 |

同一对象上的用户处理器先于组件默认行为。请求参数只在回调期间有效。订阅随组件销毁而解除；使用 `EventHandle::off()` 主动解绑，或用 `ScopedEventHandle` 在作用域结束时解绑。

下例使用已绑定的 `confirmationRef` 显示确认区并消费返回请求。

```cpp
page.onBackRequest([confirmationRef](BackRequest &request) {
  if (!confirmationRef) return;
  request.handled = true;
  confirmationRef->hidden(false);
});
```

## 自定义事件

在 UI 线程调用 `registerEventCode()` 分配进程内唯一事件码，通过 `sendEvent(code, data)` 同步发送。数据借用至发送调用返回；不允许发送 `Delete`，失效对象返回 `false`。

以下代码在同一组件上订阅并发送自定义事件。

```cpp
const auto activated = registerEventCode();
widget.on(activated, [](Event &event) {
  if (const auto *value = static_cast<const int *>(event.data()))
    handleActivation(*value);
});
int command = 1;
widget.sendEvent(activated, &command);
```

## C 接口

| C++ 操作 | C 函数或枚举 |
| --- | --- |
| `on()` | `hiyui_wdg_on()` |
| `onBackRequest()` | `hiyui_wdg_on_back_request()` |
| `BackRequest` | `hiyui_back_request_t`，`handled` 非零表示消费 |
| `registerEventCode()` | `hiyui_event_register()` |
| `sendEvent()` | `hiyui_wdg_send_event()` |
| `Event::data()` | `hiyui_event_data()` |
| `Event::keyCode()` | `hiyui_event_key()` |
| `EventCode::LayoutCompleted` | `HIYUI_EVENT_LAYOUT_COMPLETED` |
| `inputKeyEventCode()` | `HIYUI_EVENT_INPUT_KEY` |
| `keyPreviewEventCode()` | `HIYUI_EVENT_KEY_PREVIEW` |
| `Event::stopProcessing()`、`Event::stopBubbling()` | `hiyui_event_stop_processing()`、`hiyui_event_stop_bubbling()` |

`hiyui_wdg_on()` 的订阅在组件删除或主动解绑后释放回调数据；非空 `destroy` 表示接管 `user_data`，注册失败时也会释放。请求返回事件句柄后，调用方须使用 `hiyui_event_handle_destroy()` 解绑并释放句柄。

`HIYUI_EVENT_KEY_PREVIEW` 只用于订阅，不能通过 `hiyui_wdg_send_event()` 手动发送。回调内使用 `hiyui_event_key()` 获取按键。

`hiyui_wdg_on_back_request()` 返回 `1` 表示成功，无效组件、空回调或已占用的输出句柄返回 `0`。`out_handle` 可为空，否则须指向空句柄。非空 `destroy` 表示接管 `user_data`，绑定失败也释放；回调内解绑或销毁组件时，当前派发结束后释放回调数据。请求参数不得保存到回调之外。

桌面 C 接口 `hiyui_mouse_move_register()` 追加移动监听，`hiyui_mouse_wheel_register()` 替换滚轮监听；对应的 `unregister()` 函数解绑。回调坐标为物理像素；组件删除或解绑会释放注册时的数据，非桌面构建返回 `0`。完整签名见 [事件 C 参考](/bindings/c/event.h)。
