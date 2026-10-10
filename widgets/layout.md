---
title: 布局
---

# 布局

布局组件继承 `Container<T>`。构造时传入的 Props 在 `init(parent)` 创建时应用；`init(parent, props)` 传入的属性覆盖构造值。`init` 返回组件自身，可继续链式调用。

## Box

`Box` 不设置排列方向，适合绝对定位、叠放和作为样式容器。

```cpp
Box overlay({.width = 320, .height = 180, .padding = 12});
overlay.init(parent);

Label({.text = "Overlay"}).init(overlay).align(Anchor::TopLeft);
Button({.text = "Close"}).init(overlay).align(Anchor::TopRight);
```

## VBox 与 HBox

`VBox` 垂直排列，`HBox` 水平排列。`padding` 控制内边距，`gap` 控制子组件间距，`align` 控制主轴对齐。

```cpp
VBox profile({.padding = 16, .gap = 12});
profile.init(parent);

Label({.text = "Profile"}).init(profile);

HBox actions({.gap = 8});
actions.init(profile);

Button({.text = "Cancel"}).init(actions);
Button({.text = "Save"}).init(actions);
```

## FlowBox

`FlowBox` 使用横向换行布局。`minChildWidth`、`maxChildWidth` 和 `childGrow` 控制每项宽度，挂载子项时应用。

```cpp
FlowBox cards({.gap = 8, .minChildWidth = 160, .childGrow = true});
cards.init(parent);

Card({.title = "A"}).init(cards);
Card({.title = "B"}).init(cards);
```

## Spacer

`Spacer` 在 Flex 容器中占用剩余空间。

```cpp
HBox bar({.gap = 8});
bar.init(parent);

Label({.text = "Document"}).init(bar);
Spacer().init(bar);
Button({.text = "Save"}).init(bar);
```

## 尺寸与约束

布局方法区分内容尺寸、填充和剩余空间；非 Px 方法使用主题逻辑像素。

| 配置 | 行为 |
|---|---|
| `width(HIYUI_AUTO)`、`height(HIYUI_AUTO)` | 对应轴按内容计算 |
| `fillWidth()`、`fillHeight()`、`fill()` | 对应轴使用父内容区的 100%，仍受最小／最大尺寸约束 |
| `flex(grow)` | 在父 Flex 容器主轴按比例分配剩余空间；0 不参与分配 |
| `minimumSize(w, h)` | 设置两轴最小尺寸；0 不限制 |
| `maxWidth(w)`、`maxHeight(h)` | 设置逻辑最大尺寸；0 为零上限，`HIYUI_AUTO` 移除局部上限，其他负值无操作 |

父容器应在需要分配剩余空间或滚动的轴具有确定尺寸。最小尺寸大于最大尺寸时按最小尺寸布局；最小尺寸超过父内容区时可溢出。最大尺寸不自动创建滚动区域。哨兵定义见 [常量与哨兵值](/core/constants)，完整方法契约见 [Widget](/core/widget)。

按父内容区改变方向、间距、尺寸或可见性时，可以使用 [容器布局规则](/core/responsive#容器布局规则)。规则保留现有子树；业务选择和草稿由应用持有。

以下内容区填满可用宽度，并将编辑内容限制在 640 个逻辑像素内。

```cpp
VBox content({.padding = 16, .gap = 12, .scroll = ScrollMode::Vertical});
content.init(parent).fill();
VBox editor({.gap = 12});
editor.init(content).fillWidth().maxWidth(640);
Label({.text = "设备设置"}).init(editor);
```

## 滚动

VBox、HBox 和 FlowBox 的 `scroll` 字段接收 `ScrollMode`。桌面后端为可滚动容器接入鼠标滚轮和浮动滚动条。

滚动区域应在滚动轴具有确定尺寸；内容超出该区域后可滚动，子组件的最小尺寸和字号保持原值。

## 列表详情

[ListDetail](/widgets/list-detail) 根据自身内容宽度切换单栏和双栏。列表与详情分别放入 `ListDetailList`、`ListDetailContent`，宽窄切换保留同一子树；各区域需要滚动时，在其中放置设置了 `scroll` 的布局容器。
