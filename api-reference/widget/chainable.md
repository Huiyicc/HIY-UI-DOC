---
title: "Chainable"
---

# Chainable <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/chainable.h>`

**命名空间：** `hiyui`

CRTP 链式基类，转发 `Widget` 全部链式方法并返回派生类引用

通用链式方法保留派生类型及调用对象的左值或右值类别， 链式调用中组件专属方法可接在任意通用方法之后。 方法契约与 `Widget` 同名方法一致。



| 名称 | 说明 |
|---|---|
| `Derived` | 派生类类型，如 `Label` 继承 `Chainable<Label>` |


**参见：** `Widget`


**参见：** `Container`

**继承自：** `hiyui::Widget`
