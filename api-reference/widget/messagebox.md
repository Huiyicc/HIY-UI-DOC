---
title: "MessageBox"
---

# MessageBox <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/message_box.h>`

**命名空间：** `hiyui`

信息弹窗组件

显示标题 + 正文 + 确认按钮的模态弹窗。点击确认按钮或遮罩层关闭。



**参见：** `MessageBoxProps`

**继承自：** `hiyui::Chainable< MessageBox >`

## 公开方法

### MessageBox

```cpp
MessageBox(lv_obj_t *raw)
```

包装已有 LVGL 对象

### MessageBox

```cpp
MessageBox(MessageBoxProps props={})
```

通过属性聚合构造

### title

```cpp
MessageBox & title(const char *value) &
```

设置标题；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### title

```cpp
MessageBox & title(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### content

```cpp
MessageBox & content(const char *value) &
```

设置正文；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### content

```cpp
MessageBox & content(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### confirmText

```cpp
MessageBox & confirmText(const char *value) &
```

设置确认按钮文本；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### confirmText

```cpp
MessageBox & confirmText(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### show

```cpp
MessageBox & show(lv_obj_t *parent=nullptr) &
```

显示弹窗

| 参数 | 说明 |
|---|---|
| `parent` | 挂载父对象，nullptr = 当前活动屏幕 |

### onConfirm

```cpp
MessageBox & onConfirm(F &&f, EventHandle *handle=nullptr) &
```

绑定确认按钮回调

`show()` 之前绑定的回调在弹窗显示后生效。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名 void() |

| 参数 | 说明 |
|---|---|
| `f` | 回调函数 |
| `handle` | 可选出参，接收该绑定的解绑句柄 |

### close

```cpp
MessageBox & close() &
```

关闭弹窗 释放当前绑定，后续可再次 show；回调需重新绑定。

### destroy

```cpp
virtual void destroy() override
```

请求删除当前控件及其子树，立即使引用失效，实际释放在 UI 主循环中完成。 在 UI 线程调用，允许从当前控件的回调中调用；重复调用无操作。
