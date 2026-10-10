---
title: "TableEditorFactory"
---

# TableEditorFactory <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/table_editor.h>`

**命名空间：** `hiyui`

可复制的编辑器工厂，接受 void(Widget &amp;, TableEditor) 可调用对象。 host 由表格定位和销毁，只能在工厂调用期间借用，创建的子组件归 host 所有。 不得销毁 host 或改变其父组件。 工厂只配置 host 子树，不得修改或销毁表格及其祖先；交互操作通过子组件事件处理。 工厂可以为空；列配置复制后共享工厂及其捕获状态。
