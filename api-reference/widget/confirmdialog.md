---
title: "ConfirmDialog"
---

# ConfirmDialog <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/confirm_dialog.h>`

**命名空间：** `hiyui`

确认弹窗组件

显示标题 + 正文 + 确认/取消按钮的模态弹窗。



**参见：** `ConfirmDialogProps`

**继承自：** `hiyui::Chainable< ConfirmDialog >`

## 公开方法

### ConfirmDialog

```cpp
ConfirmDialog(lv_obj_t *raw)
```

包装已有 LVGL 对象

### ConfirmDialog

```cpp
ConfirmDialog(ConfirmDialogProps props={})
```

通过属性聚合构造

| 参数 | 说明 |
|---|---|
| `props` | 弹窗属性 |

### title

```cpp
ConfirmDialog & title(const char *value) &
```

设置标题；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### title

```cpp
ConfirmDialog & title(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### content

```cpp
ConfirmDialog & content(const char *value) &
```

设置正文；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### content

```cpp
ConfirmDialog & content(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### confirmText

```cpp
ConfirmDialog & confirmText(const char *value) &
```

设置确认按钮文本；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### confirmText

```cpp
ConfirmDialog & confirmText(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### cancelText

```cpp
ConfirmDialog & cancelText(const char *value) &
```

设置取消按钮文本；显示后仅更新已创建的文字区域，普通文本取消语言绑定。

### cancelText

```cpp
ConfirmDialog & cancelText(LocalizedText value) &
```

绑定拥有型文案并随语言变化更新。

### show

```cpp
ConfirmDialog & show(lv_obj_t *parent=nullptr) &
```

显示弹窗

| 参数 | 说明 |
|---|---|
| `parent` | 挂载父对象，nullptr = 当前活动屏幕 |


**返回值：** 当前组件

### onConfirm

```cpp
ConfirmDialog & onConfirm(F &&f) &
```

绑定确认按钮回调

`show()` 之前绑定的回调在弹窗显示后生效。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名 void() |

| 参数 | 说明 |
|---|---|
| `f` | 回调函数 |


**返回值：** 当前组件

### onCancel

```cpp
ConfirmDialog & onCancel(F &&f) &
```

绑定取消按钮回调

`show()` 之前绑定的回调在弹窗显示后生效。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名 void() |

| 参数 | 说明 |
|---|---|
| `f` | 回调函数 |


**返回值：** 当前组件

### close

```cpp
ConfirmDialog & close() &
```

关闭弹窗 释放当前绑定，后续可再次 show；回调需重新绑定。

**返回值：** 当前组件

## 静态方法

### ask

```cpp
static void ask(const char *title, const char *content, F &&callback, lv_obj_t *parent=nullptr, PopupMode mode=PopupMode::Inline)
```

Win32 `MessageBox` 风格静态调用

一行代码弹出确认框，回调参数 true=确认 false=取消。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名 void(bool confirmed) |

| 参数 | 说明 |
|---|---|
| `title` | 标题 |
| `content` | 内容 |
| `callback` | 结果回调，true=确认 false=取消 |
| `parent` | 父对象，nullptr = 当前活动屏幕 |
