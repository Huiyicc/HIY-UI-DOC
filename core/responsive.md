---
title: 响应式布局
---

# 响应式布局

## 一句话定义

`layoutRules()` 按祖先内容尺寸应用布局规则。`layoutEnvironment()` 查询内容尺寸、窗口区域和输入能力，`onEnvironmentChange()` 在布局完成后通知变化。`viewportMetrics()` 查询外部尺寸与宽度级别，`WindowFrame` 管理导航呈现。

## 对照表

| 项目 | C++ | C |
| --- | --- | --- |
| 宽度级别 | `LayoutWidthClass` | `hiyui_layout_width_class_t` |
| 断点 | `LayoutBreakpoints::wideMinWidth` | `hiyui_wdg_get_viewport_metrics()` 的 `wide_min_width` |
| 查询结果 | `ViewportMetrics` | `hiyui_viewport_metrics_t` |
| 查询函数 | `viewportMetrics()` | `hiyui_wdg_get_viewport_metrics()` |
| 环境快照 | `LayoutEnvironment` | `hiyui_layout_environment_t` |
| 环境查询 | `layoutEnvironment()` | `hiyui_wdg_layout_environment()` |
| 环境订阅 | `Widget::onEnvironmentChange()` | `hiyui_wdg_on_environment_change()` |
| 布局规则 | `LayoutRules`、`LayoutRule`、`LayoutValues` | `hiyui_layout_rules_t`、`hiyui_layout_rule_t`、`hiyui_layout_values_t` |
| 安装／清除规则 | `Widget::layoutRules()`、`clearLayoutRules()` | `hiyui_wdg_layout_rules()`、`hiyui_wdg_clear_layout_rules()` |
| 窗口区域 | `WindowArea`、`LogicalRect` | `hiyui_window_area_t`、`hiyui_logical_rect_t` |
| 输入能力 | `InputCapabilities`、`CapabilityState` | `hiyui_input_capabilities_t`、`hiyui_capability_state_t` |
| 显示形状 | `DisplayShape` | `hiyui_display_shape_t` |
| 尺寸变化事件 | `EventCode::SizeChanged` | `hiyui_wdg_on_size_changed()` |
| 窗口框架 | `WindowFrame` | `hiyui_window_frame_create()` |
| 顶部区域 | `FrameHeader` | `hiyui_frame_header_create()` |
| 导航区域 | `FrameNavigation` | `hiyui_frame_navigation_create()` |
| 内容区域 | `FrameContent` | `hiyui_frame_content_create()` |

宽度级别由断点决定。`LayoutBreakpoints::wideMinWidth` 默认为 `720` 逻辑像素：`viewportMetrics()` 的逻辑宽度小于断点时返回 `Narrow`，大于或等于断点时返回 `Wide`。`width` 和 `height` 不含 DPI 缩放的像素倍率。

组件无效时，`viewportMetrics()` 返回宽高均为 `0` 的 `Narrow` 指标。自定义断点必须大于 `0`。

## 环境查询

包含 `<hiyui/core/responsive.h>` 后，在 UI 线程调用 `layoutEnvironment(widget)`。查询不会强制布局；需要同步几何时先调用 `widget.updateLayout()`。组件未挂载或已请求销毁时返回默认快照；已挂载但没有窗口宿主时，局部内容尺寸仍可有效。

`LayoutEnvironment` 的字段如下。

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `valid` | `bool` | `false` | 当前组件是否可查询 |
| `contentWidth` | `int` | `0` | 内容宽度，逻辑像素，已扣除边框和内边距 |
| `contentHeight` | `int` | `0` | 内容高度，逻辑像素，已扣除边框和内边距 |
| `scale` | `float` | `1.0f` | 逻辑像素到物理像素的倍率，不含组件变换 |
| `input` | `InputCapabilities` | `{}` | 后端当前已接入的输入设施 |
| `window` | `WindowArea` | `{}` | 所属窗口的安全区域、可用区域和键盘遮挡 |

内容尺寸不扣除滚动偏移，也不再次扣除窗口安全区。局部排列使用 `contentWidth/contentHeight`；嵌套容器不能拿窗口宽度当自己的宽度。`viewportMetrics()` 的宽高包含组件边框与内边距，适合按外部尺寸设断点的场景。

### 窗口区域

`WindowArea` 的所有矩形相对所属窗口客户区左上角，单位为逻辑像素；这些坐标不能直接用作任意子容器的局部坐标。

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `valid` | `bool` | `false` | 是否找到窗口宿主 |
| `safeArea` | `LogicalRect` | `{}` | 已排除装饰和已知系统保留区；已知圆屏时限制到内接矩形 |
| `availableArea` | `LogicalRect` | `{}` | 安全区域内排除已知键盘遮挡后的最大矩形 |
| `keyboardArea` | `LogicalRect` | `{}` | 键盘遮挡；未知或确认关闭时为空 |
| `safeAreaKnown` | `bool` | `false` | 是否取得宿主安全区信息；为 false 时只保证当前已知内容范围 |
| `keyboardAreaKnown` | `bool` | `false` | 是否取得键盘区域信息；为 true 且区域为空表示确认关闭或没有遮挡 |
| `shape` | `DisplayShape` | `DisplayShape::Unknown` | 宿主报告的物理显示形状 |

`availableArea` 的候选区域面积相同时取上方，再取左方；安全区域被完全遮挡时返回空矩形。键盘遮挡未知时，`availableArea` 等于 `safeArea`。窗口内容已因安全区或键盘缩小时，只按窗口坐标求交，不重复扣减。

`LogicalRect` 的字段如下，宽或高为 `0` 表示空区域。

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `x` | `int` | `0` | 左边界，逻辑像素 |
| `y` | `int` | `0` | 上边界，逻辑像素 |
| `width` | `int` | `0` | 宽度，逻辑像素 |
| `height` | `int` | `0` | 高度，逻辑像素 |

显示形状不会自动决定应用应保留哪些任务。

| 值 | 说明 |
| --- | --- |
| `DisplayShape::Unknown` | 宿主未提供形状 |
| `DisplayShape::Rectangle` | 矩形显示区域 |
| `DisplayShape::Circle` | 圆形显示区域 |

### 输入能力

`InputCapabilities` 可同时报告多种可用设施，不表示互斥的设备类型。

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `pointer` | `CapabilityState` | `CapabilityState::Unknown` | 精确指针，不包含触摸模拟鼠标 |
| `touch` | `CapabilityState` | `CapabilityState::Unknown` | 直接触摸输入 |
| `keyboard` | `CapabilityState` | `CapabilityState::Unknown` | 已接入键盘，包括后端支持的屏幕键盘 |
| `encoder` | `CapabilityState` | `CapabilityState::Unknown` | 已接入的旋钮输入 |

能力状态区分未知与不可用。

| 值 | 说明 |
| --- | --- |
| `CapabilityState::Unknown` | 后端没有足够信息确认 |
| `CapabilityState::Unavailable` | 当前没有接入可用设施 |
| `CapabilityState::Available` | 已接入可用于交互的设施 |

后端提供的信息范围如下。

| 后端 | 信息范围 |
| --- | --- |
| SDL 桌面／Android | 提供 SDL 安全区和已接入输入信息；尚未发现的直接触摸设备保持未知；软键盘活动但没有遮挡矩形时，区域保持未知 |
| Linux fbdev／evdev | 提供已接入按键和旋钮；通用指针无法区分鼠标与触摸时，两项保持未知 |
| Web／其他宿主 | 未提供的环境和能力字段保持未知；内容尺寸仍按当前布局查询 |

### 环境通知

`widget.onEnvironmentChange(callback, handle)` 追加订阅，`handle` 默认为 `nullptr`。回调接受 `const LayoutEnvironment &` 或无参数，支持只可移动闭包。首次有效布局完成后通知首个快照，后续尺寸、DPI、窗口区域、输入能力或宿主变化在布局完成后通知；相同快照不重复通知，绑定调用栈中不调用处理器。

支持挂载前订阅和取消。组件或祖先改挂父级后，订阅跟随实际宿主；移动 C++ 包装器不会改变订阅目标。回调中的快照只借用至回调返回，可复制保存。

`EventHandle::off()` 可重复调用，句柄析构不自动解绑；使用 `ScopedEventHandle` 可在离开作用域时解绑。回调内可以解绑或请求删除组件，组件销毁时清理订阅。

C 环境接口声明位于 `<hiyui/c/widget.h>`，类型位于 `<hiyui/c/types.h>`。查询成功返回 `1`；空输出返回 `0`，无效组件向非空输出写入默认快照并返回 `0`，其中 `scale` 为 `1.0f`。

`hiyui_wdg_on_environment_change()` 成功返回 `1`；无效组件、空回调或已占用的输出句柄返回 `0`。`out_handle` 可以为空，否则必须指向空句柄；非空 `destroy` 表示接管 `user_data`，绑定失败也释放一次。`hiyui_event_off()` 解绑，`hiyui_event_handle_destroy()` 解绑并释放句柄；在回调中解绑或销毁组件时，回调上下文延迟到当前派发结束后释放。

## 容器布局规则

包含 `<hiyui/core/layout_rules.h>`，通过 Widget 的布局方法安装规则。所有长度条件使用宿主内容区的逻辑像素，已扣除内边距和边框。

| 方法 | 返回 | 说明 |
|---|---|---|
| `layoutRules(rules)` | `Widget &` | 观察直接父容器，改挂后跟随新父级 |
| `layoutRules(host, rules)` | `Widget &` | 观察已挂载祖先，不接受自身、后代或失效对象 |
| `clearLayoutRules()` | `Widget &` | 恢复仍受控字段的 base，移除规则和订阅；重复调用无操作 |

每个组件最多保留一组规则。配置与数组在调用时复制，支持挂载前配置和移动包装器。`base.fields` 声明受控字段；每条规则的 `values.fields` 必须是它的子集。每次更新从 base 开始，按数组顺序覆盖所有匹配规则的已标记字段。

规则的两轴条件同时满足时生效，下界包含、上界不包含。`HIYUI_AUTO` 表示无上界，上下界相等表示永不匹配；哨兵定义见 [常量与哨兵值](/core/constants)。未知字段位、已标记字段的非法枚举或数值、负下界、有限上界小于下界使整组配置无效，原规则保持。

参与断点的宿主轴必须由父布局或显式尺寸分配，不能由受控后代的内容决定。显式宿主失效、脱离祖先链或断点轴失去尺寸约束时，恢复仍受控 base 并清除规则。

### 规则数据

`LayoutRules` 的字段如下。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `base` | `LayoutValues` | `{}` | 基础值和受控字段集合 |
| `rules` | `const LayoutRule *` | `nullptr` | 规则数组，count 大于 0 时必须有效 |
| `count` | `size_t` | `0` | 为 0 时仅应用 base，不读取数组；默认空配置等价清除 |

`LayoutRule` 的字段如下。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `minWidth` | `int` | `0` | 内容宽度下界，非负逻辑像素 |
| `maxWidth` | `int` | `HIYUI_AUTO` | 内容宽度上界，非负逻辑像素或无上界 |
| `minHeight` | `int` | `0` | 内容高度下界，非负逻辑像素 |
| `maxHeight` | `int` | `HIYUI_AUTO` | 内容高度上界，非负逻辑像素或无上界 |
| `values` | `LayoutValues` | `{}` | 命中时覆盖的字段和值 |

`LayoutValues` 的字段如下；未被 fields 标记的值被忽略。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `fields` | `LayoutField` | `LayoutField::None` | 使用 `\|` 组合字段位 |
| `flow` | `FlexFlow` | `FlexFlow::Row` | Flex 方向 |
| `gap` | `int` | `0` | 非负逻辑像素 |
| `paddingX` | `int` | `0` | 左右内边距，非负逻辑像素 |
| `paddingY` | `int` | `0` | 上下内边距，非负逻辑像素 |
| `width` | `LayoutLength` | `{}` | 宽度描述 |
| `height` | `LayoutLength` | `{}` | 高度描述 |
| `minWidth` | `int` | `0` | 最小宽度，非负逻辑像素 |
| `minHeight` | `int` | `0` | 最小高度，非负逻辑像素 |
| `maxWidth` | `int` | `HIYUI_AUTO` | 最大宽度，非负逻辑像素；AUTO 移除局部上限 |
| `maxHeight` | `int` | `HIYUI_AUTO` | 最大高度，非负逻辑像素；AUTO 移除局部上限 |
| `flex` | `int` | `0` | 主轴剩余空间分配比例，范围 0 至 255 |
| `hidden` | `bool` | `false` | 是否隐藏子树 |

`LayoutField` 的值与受控项对应。

| 值 | 说明 |
|---|---|
| `None` | 不控制字段 |
| `Flow`、`Gap` | 方向、间距 |
| `PaddingX`、`PaddingY` | 水平、垂直内边距 |
| `Width`、`Height` | 宽度、高度 |
| `MinWidth`、`MinHeight` | 最小宽度、高度 |
| `MaxWidth`、`MaxHeight` | 最大宽度、高度 |
| `Flex`、`Hidden` | 伸展比例、隐藏状态 |

`LayoutLength` 的字段如下。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `kind` | `LayoutLengthKind` | `LayoutLengthKind::Content` | 长度含义 |
| `value` | `int` | `0` | 逻辑长度或百分数 |

长度类型的取值如下。

| 值 | 说明 |
|---|---|
| `Content` | 按内容计算，忽略 value |
| `Logical` | value 为非负逻辑像素 |
| `Percent` | value 为父内容区百分数，范围 0 至 100 |

### 显式赋值与清除

普通布局 setter 解除所写字段的规则控制；样式内边距赋值解除对应轴。未写的字段继续适配。清除或成功替换规则时，只恢复旧组仍受控字段的 base，不恢复安装前的像素值，也不覆盖已经手动赋值的字段。

主题和 DPI 更新保留规则控制，逻辑长度随缩放更新。最小尺寸大于有限上限时以最小尺寸为准；溢出由应用指定的滚动容器处理。规则不重建子树、不提交业务数据、不派发 ValueChanged。隐藏子树退出命中和焦点遍历，重新显示不移动已有有效焦点。

### C 规则调用

包含 `<hiyui/c/layout.h>`，使用 `hiyui_layout_values_init()`、`hiyui_layout_rule_init()` 和 `hiyui_layout_rules_init()` 写入对应默认值；NULL 出参无操作，重复初始化覆盖原值。整数 0 保持实际含义，不能用全零初始化代替带 AUTO 上界的默认值。

`hiyui_wdg_layout_rules(w, host, rules)` 返回 1 表示接受安装或清除，返回 0 表示目标或配置无效且原组保持。host 为 NULL 时观察直接父级；rules 为 NULL 时清除。结构和数组在返回前复制。Hidden 已标记时 DEFAULT／FALSE 表示显示，TRUE 表示隐藏，初始化函数写入 FALSE。清除入口对 NULL、失效对象和重复调用无操作；已释放句柄不能再次传入。

以下 C 操作组与本页 C++ 示例一致：父内容宽度小于 320 时纵向排列，达到 320 时横向排列。`parent` 须由外部布局分配宽度。

```c
hiyui_layout_rule_t rule;
hiyui_layout_rule_init(&rule);
rule.min_width = 320;
rule.values.fields = HIYUI_LAYOUT_FIELD_FLOW;
rule.values.flow = HIYUI_FLEX_ROW;

hiyui_layout_rules_t rules;
hiyui_layout_rules_init(&rules);
rules.base.fields = HIYUI_LAYOUT_FIELD_FLOW;
rules.base.flow = HIYUI_FLEX_COLUMN;
rules.rules = &rule;
rules.count = 1;

hiyui_widget_t *actions = hiyui_vbox_create(parent, NULL);
hiyui_wdg_fill_width(actions);
int accepted = hiyui_wdg_layout_rules(actions, NULL, &rules);
```

`accepted` 为 1 表示配置已复制，局部 `rule` 和 `rules` 可在调用后离开作用域。

## WindowFrame

`WindowFrame` 管理 Header、Navigation 和 Content 三个区域。每种区域最多创建一个直接子对象。跨越断点时，框架只更新区域的位置和导航呈现，不销毁区域对象及其子树。

断点使用框架自身的内容逻辑宽度，已扣除边框和内边距，与 `layoutEnvironment(frame).contentWidth` 一致。外部尺寸查询 `viewportMetrics()` 保持自身原有含义。

导航呈现由当前宽度级别对应的属性决定：

| 值 | 说明 |
| --- | --- |
| `FrameNavigationPresentation::Docked` | 导航停靠在框架左侧或右侧，内容占用剩余宽度 |
| `FrameNavigationPresentation::Drawer` | 导航从框架边缘滑出，并显示遮罩 |
| `FrameNavigationPresentation::Hidden` | 隐藏导航区域 |

导航边缘由 `FrameNavigationEdge` 设置：

| 值 | 说明 |
| --- | --- |
| `FrameNavigationEdge::Left` | 导航依附框架左侧 |
| `FrameNavigationEdge::Right` | 导航依附框架右侧 |

`FrameNavigationToggle` 必须创建在 `WindowFrame` 子树内。当前呈现为 `Drawer` 时按钮显示并控制抽屉，其他呈现方式下按钮隐藏。`openNavigation()`、`closeNavigation()` 和 `toggleNavigation()` 只在 `Drawer` 呈现下改变状态。

Drawer 打开时可通过窗口返回请求关闭；关闭动画期间再次返回不会穿透到页面历史。自定义处理见[返回请求](/core/event-system#返回请求)。

`WindowFrameProps` 参数如下：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `wideMinWidth` | `int` | `720` | 进入宽布局的最小内容逻辑宽度，必须大于 `0` |
| `narrowNavigation` | `FrameNavigationPresentation` | `FrameNavigationPresentation::Drawer` | 窄布局的导航呈现 |
| `wideNavigation` | `FrameNavigationPresentation` | `FrameNavigationPresentation::Docked` | 宽布局的导航呈现 |
| `navigationEdge` | `FrameNavigationEdge` | `FrameNavigationEdge::Left` | 导航依附的框架边缘 |
| `navigationWidth` | `int` | `196` | 停靠导航宽度，正逻辑像素；`HIYUI_AUTO` 跟随内容，见[常量与哨兵值](/core/constants) |
| `drawerWidth` | `int` | `320` | 抽屉最大宽度，逻辑像素 |
| `drawerMaxWidthPercent` | `int` | `82` | 抽屉占框架宽度的最大百分比 |
| `scrimOpacity` | `uint8_t` | `112` | 抽屉遮罩透明度 |
| `animated` | `bool` | `true` | 是否启用导航抽屉动画 |
| `dockedNavigationFullHeight` | `bool` | `false` | 停靠导航是否跨越 Header 区域 |

`WindowFrame` 的运行时方法如下：

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `widthClass()` | `LayoutWidthClass` | 获取当前宽度级别 |
| `openNavigation()` | `WindowFrame&` | 打开 Drawer 导航，其他呈现方式下不改变状态 |
| `closeNavigation()` | `WindowFrame&` | 关闭 Drawer 导航，其他呈现方式下不改变状态 |
| `toggleNavigation()` | `WindowFrame&` | 切换 Drawer 导航，其他呈现方式下不改变状态 |
| `navigationOpen()` | `bool` | Drawer 已打开或正在打开时返回 `true`，其他呈现方式返回 `false` |

## 代码示例

以下框架在窄布局中使用抽屉导航，在宽布局中使用左侧停靠导航。

```cpp
WindowFrame frame({.wideMinWidth = 720,
                   .navigationWidth = 220,
                   .drawerWidth = 320});
frame.init(parent);

FrameHeader header;
header.init(frame);
FrameNavigationToggle navigationToggle;
navigationToggle.init(header);

FrameNavigation navigation;
navigation.init(frame);
FrameContent content;
content.init(frame);
```

以下操作组根据父内容区宽度改变排列方向，保留原有子组件；parent 应具有由外部布局分配的宽度。

```cpp
const LayoutRule rules[] = {
    {.minWidth = 320, .values = {.fields = LayoutField::Flow, .flow = FlexFlow::Row}},
};
VBox actions;
actions.init(parent).fillWidth().layoutRules({
    .base = {.fields = LayoutField::Flow, .flow = FlexFlow::Column},
    .rules = rules,
    .count = 1,
});
```

示例的 `320` 是应用断点，按任务内容选择阈值；数组在调用返回后可释放。更复杂的运行时逻辑可以通过环境订阅实现。

列表选择、筛选和编辑草稿由任务状态持有。宽窄切换复用输入框和列表；手表等设备的精简任务由应用显式选择内容组合。

## 相关页面

- [Widget](/core/widget)
- [事件](/core/event-system)
- [布局组件](/widgets/layout)
- [复合组件](/widgets/advanced)
- [窗口创建与配置](/window/window-api)
- [列表详情](/widgets/list-detail)
- [跨端任务与布局](/guide/cross-platform)
