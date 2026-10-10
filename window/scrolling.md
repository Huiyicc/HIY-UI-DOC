---
title: 桌面滚动
---

# 桌面滚动

桌面滚动指鼠标滚轮滚动和自动隐藏的浮动滚动条。VBox、HBox、FlowBox、Input、Table、Tree、Tabs 等列表类组件已接入。

## 容器配置

```cpp
VBox list({.scroll = ScrollMode::Vertical});
list.init(parent).height(420);
```

`ScrollMode::Off` 禁用滚动，其余取值（`Auto`、`Horizontal`、`Vertical`、`Both`）配置滚动方向。内容尺寸超过视口尺寸时产生滚动范围。

## 工具接口

组件实现通常在 `init()` 中完成绑定。自定义滚动容器可直接使用 `<hiyui/core/scroll_utils.h>` 中的接口：

| 函数 | 说明 |
| --- | --- |
| `enablePcScroll(obj)` | 为对象安装桌面滚动行为：隐藏原生滚动条，创建三态浮动滚动条 |
| `findScrollableAtPoint(parent, p)` | 查找坐标处最深的桌面可滚动对象 |
| `applyScrollbarStyle(obj)` | 为未启用桌面滚动但有滚动条的组件应用浮动滚动条样式 |
| `updatePcScrollDir(obj)` | 滚动方向变更后按需创建或销毁对应轴的浮动滚动条 |
| `blockPointerDragScroll(obj)` | 禁止指针拖拽引发该对象滚动；仅桌面编译单元生效 |

## 嵌套滚动

指针位于嵌套容器时，事件分发选择命中的内层可滚动对象。到达边界后的传播遵循 LVGL 的滚动链配置。

## 生命周期

滚动状态绑定到 LVGL 对象，对象删除时在删除事件中释放。
