---
title: "Callback"
---

# Callback <Badge type="info" text="结构体" />

**头文件：** `#include <hiyui/event/callback.h>`

**命名空间：** `hiyui`

将无参可调用对象桥接到 LVGL C 回调

由 `Widget::on()` 创建。



| 名称 | 说明 |
|---|---|
| `F` | 可调用对象类型，签名为 void()， 通常是 lambda 或 std::function&lt;void()&gt; |


**参见：** `EventCallback` 带 `Event`&amp; 参数的版本


**参见：** `Widget::on()`

**继承自：** `hiyui::EventBinding`
