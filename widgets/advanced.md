---
title: 复合组件
---

# 复合组件

复合组件包含内部对象、弹层或虚拟化数据结构。数据和回调的生命周期以对应 Props 与 API 注释为准。

## 容器与导航

| 组件 | 用途 |
| --- | --- |
| `Card` | 带标题的内容容器 |
| [Tabs](/widgets/navigation#tabs) | 标签页与内容面板 |
| [TabsEx](/widgets/navigation#tabsex) | 会话标签、关闭请求、重命名与排序 |
| [Menu](/widgets/navigation#menu) | 分组与嵌套菜单 |
| [MenuBar](/widgets/navigation#menubar) | 桌面顶部菜单栏 |
| [Segmented](/widgets/navigation#segmented) | 分段单选 |
| `Carousel` | 页面或图片轮播 |
| [Pagination](/widgets/navigation#pagination) | 有限宽度内的页码导航 |
| `TitleBar` | 无边框窗口标题栏 |

以下标签页创建两个导航项，并为第一页设置内容。

```cpp
Tabs tabs({.width = 600, .height = 400});
tabs.init(parent);
tabs.items({{.text = "General"}, {.text = "Advanced"}});
tabs.tabPanel(0, [](Widget &panel) {
  Label label({.text = "General settings"});
  label.init(panel);
});
```

`Card::title(const LocalizedText &)` 和 `TitleBar::title(const LocalizedText &)` 分别绑定卡片标题和标题栏文字，返回当前组件引用。`Card` 尚无标题区域时创建该区域。普通 `title(const char *)` 调用取消对应翻译绑定。

### 导航条目国际化

创建条目后可单独绑定其显示文字，切换语言保留内容面板和选中状态。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `Tabs::itemText(int, LocalizedText)` | `Tabs &` | 更新从 `0` 开始的标签文字 |
| `Menu::itemText(int, LocalizedText)` | `Menu &` | 更新菜单前序遍历的节点文字；索引包含父项和分隔线 |
| `Segmented::itemText(int, LocalizedText)` | `Segmented &` | 更新从 `0` 开始的分段文字 |

各方法均提供 `const char *` 重载，调用时取消对应条目的翻译绑定。越界索引不操作。替换整个条目集合会清除集合上的翻译绑定；`Menu` 分隔线只更新已有的分组标签。

以下片段为已创建的标签页绑定标题。

```cpp
tabs.itemText(0, tr("settings.general", "常规"))
    .itemText(1, tr("settings.advanced", "高级"));
```

### Pagination 宽度

`PaginationProps::width` 默认为 `HIYUI_AUTO`，组件按内容宽度排列页码。设置有限宽度或调用 `fillWidth()` 后，组件在父容器尺寸变化时调整可见页码数量；上一页、下一页和当前页状态保持不变。父容器重新变宽时，可见页码数量同步恢复。

以下分页组件使用父容器的可用宽度。

```cpp
Pagination pagination({.total = 500, .pageSize = 10, .buttonSize = 32});
pagination.init(parent);
pagination.fillWidth();
pagination.onChange([](int page) { loadPage(page); });
```

## 选择与弹层

`Dropdown`、`DatePicker`、`TimePicker`、`ColorPicker`、`ContextMenu` 和 `PopupPanel` 在独立弹层中展示内容。父对象、滚动祖先或窗口关闭时，弹层同步清理。

### 弹出方式与关闭通知

`PopupPanelProps::mode` 默认为 `PopupMode::Inline`。设置 `Window` 时使用独立系统子窗口；没有窗口管理器或 `closeOnOutsideClick == false` 时使用 `Inline`。面板关闭会销毁由内容构造回调创建的子组件。

桌面 `ContextMenu::open(items, x, y, screen, owner, mode, maxHeight, closed)` 接收公开的 `Widget` 屏幕和可空的所有者，返回是否成功创建。`x`、`y` 为所在屏幕的物理像素坐标；条目在调用期间复制。`closed` 在成功打开后的关闭过程中通知一次，可在回调中重新打开菜单；创建失败不调用。

`ContextMenu::close(screen)` 关闭指定屏幕上的菜单，重复关闭无操作。C 接口为 `hiyui_context_menu_open()`、`hiyui_context_menu_close()` 和 `hiyui_context_menu_close_all()`。C 的关闭回调数据由 `destroy` 在菜单关闭且已选操作返回后释放，打开失败时也释放；条目 `action_ud` 须保持有效到对应操作返回。

完整 C 参数见 [ContextMenu](/bindings/c/context_menu.h) 和 [PopupPanel](/bindings/c/popup_panel.h)。

### Picker 面板呈现

`DatePicker`、`TimePicker` 和非内嵌模式的 `ColorPicker` 通过 `presentation` 设置面板呈现方式。

| 值 | 说明 |
| --- | --- |
| `PickerPresentation::Auto` | 打开时读取窗口可用区域的逻辑宽度；小于 `720` 时使用底部滑窗，大于或等于 `720` 时使用锚点弹层 |
| `PickerPresentation::Anchored` | 相对 Picker 输入区域定位；`placement` 设置对齐方向 |
| `PickerPresentation::BottomSheet` | 在窗口可用区域底部显示全宽面板；忽略 `placement` |

可用区域使用 `WindowArea.availableArea`，已排除已知安全区限制与键盘遮挡；没有窗口宿主时使用所属屏幕范围。平台未提供的遮挡不能自动避让，区域含义见[响应式布局](/core/responsive#窗口区域)。

面板打开期间，窗口尺寸或可用区域变化只重新布局当前呈现方式，受约束内容可滚动。可用区域为空、锚点销毁、隐藏或移到另一窗口时关闭。关闭后再次打开时，`Auto` 重新读取可用宽度。`ColorPickerProps::panelMode` 为 `true` 时面板直接嵌入父容器，并忽略 `presentation`。

窗口返回请求关闭当前 Picker，关闭期间不触发后方页面返回。主题切换关闭日期、时间面板，以及未调用过 `palette()` 的颜色弹层；已设置实例配色的 ColorPicker 更新现有控件并保留草稿、输入模式和弹层状态。DPI 变化关闭日期、时间面板，颜色面板重新布局。

以下日期选择器在窄可用区域中使用底部滑窗，在宽可用区域中使用右对齐锚点弹层。

```cpp
DatePicker picker({
    .placement = DatePickerPlacement::BottomRight,
    .presentation = PickerPresentation::Auto,
});
picker.init(parent);
```

以下下拉框设置初始选中项并监听变化。

```cpp
Dropdown dropdown({.selectedIndex = 1});
dropdown.init(parent);
dropdown.items({{"Small"}, {"Medium"}, {"Large"}});
dropdown.onChange([&] { setSize(dropdown.selectedIndex()); });
```

### ColorPicker 实例配色

`<hiyui/widget/color_picker.h>` 中的 `ColorPickerPalette` 设置当前实例的面板、输入框及模式按钮颜色。各字段接受 `0xRRGGBB`，`HIYUI_DEFAULT` 跟随全局主题，定义见[常量与哨兵值](/core/constants)。

| 字段 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 弹层或内嵌面板底色 |
| `inputBg` | `uint32_t` | `HIYUI_DEFAULT` | 输入框和未选中模式按钮底色 |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | 输入文字颜色 |
| `secondaryTextColor` | `uint32_t` | `HIYUI_DEFAULT` | 标签和未选中模式文字颜色 |
| `borderColor` | `uint32_t` | `HIYUI_DEFAULT` | 面板、色块及输入框边框色 |
| `accentColor` | `uint32_t` | `HIYUI_DEFAULT` | 聚焦边框和选中模式按钮底色 |

| 方法 | 返回 | 说明 |
|---|---|---|
| `palette(const ColorPickerPalette &)` | `ColorPicker &` / `ColorPicker &&` | 复制配色，保留选中颜色、草稿、输入模式和弹层状态；挂载前可调用，失效对象无操作 |

为单个选择器设置深色面板，当前选中颜色仍为蓝色：

```cpp
ColorPicker picker({.color = 0x2196F3});
picker.init(parent).palette({
    .bg = 0x252526, .inputBg = 0x1e1e1e, .textColor = 0xcccccc,
    .secondaryTextColor = 0x9d9d9d, .borderColor = 0x3f3f46,
    .accentColor = 0x0078d4,
});
```

调用 `picker.palette({})` 将全部字段恢复为跟随主题。重复调用可更新已打开的弹层，不改变全局主题或其他组件配色。

C 接口为 `hiyui_color_picker_set_palette`。配色结构使用 `HIYUI_COLOR_PICKER_PALETTE_INIT` 初始化，字段采用下划线命名；传入 `NULL` 恢复主题配色，显式 `0` 表示黑色。

### 选择器与菜单文案

`Dropdown`、`DatePicker` 和 `TimePicker` 的默认占位文字使用库内文案；日期标题、星期名称、确认按钮及下拉框搜索与空结果提示随语言更新。自定义占位文字通过以下方法绑定。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `Dropdown::placeholder(LocalizedText)` | `Dropdown &` | 绑定占位文字，保留当前值 |
| `DatePicker::placeholder(LocalizedText)` | `DatePicker &` | 绑定占位文字，保留所选日期 |
| `TimePicker::placeholder(LocalizedText)` | `TimePicker &` | 绑定占位文字，保留所选时间 |
| `Dropdown::itemText(int, LocalizedText)` | `Dropdown &` | 绑定从 `0` 开始的条目文字，保留集合和选中状态；越界不操作 |

以上方法的普通字符串重载取消对应绑定。`placeholder(nullptr)` 恢复默认文案；替换下拉框的整个集合会清除条目文字绑定。

桌面 `ContextMenuItem::localizedText` 接收 `tr()` 或 `trn()` 返回的拥有型描述，设置后覆盖该条目的 `text`。编辑菜单的复制、粘贴等内置操作名称使用库内翻译。

## 数据组件

| 组件 | 数据模型 |
| --- | --- |
| `List` | `ListItem` 数组 |
| `TemplateList<T>` | 数据数组与 `ItemTemplate<T>` |
| `Table` | `TableColumn` 与 `TableRow` |
| `Tree` | `TreeNodeConfig` |
| `ChatList` | `ChatItem` |

`TemplateList`、`Table` 和 `Tree` 只为可见区域维护行对象。更新数据后使用组件公开的刷新或批量更新方法。

## 对话框

`ConfirmDialog`、`MessageBox` 和 `Toast` 用于确认、消息与通知。回调可能在对象删除前执行，不在回调中保存弹层内部对象指针。

`ConfirmDialogProps::confirmText`、`ConfirmDialogProps::cancelText` 和 `MessageBoxProps::confirmText` 均默认为 `nullptr`，表示使用随语言变化的库内按钮文案。显式传入普通字符串后，该文字固定；自定义国际化文字使用下面的运行时方法。

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `ConfirmDialog::title(LocalizedText)` | `ConfirmDialog &` | 绑定标题 |
| `ConfirmDialog::content(LocalizedText)` | `ConfirmDialog &` | 绑定正文 |
| `ConfirmDialog::confirmText(LocalizedText)` | `ConfirmDialog &` | 绑定确认按钮文字 |
| `ConfirmDialog::cancelText(LocalizedText)` | `ConfirmDialog &` | 绑定取消按钮文字 |
| `MessageBox::title(LocalizedText)` | `MessageBox &` | 绑定标题 |
| `MessageBox::content(LocalizedText)` | `MessageBox &` | 绑定正文 |
| `MessageBox::confirmText(LocalizedText)` | `MessageBox &` | 绑定确认按钮文字 |
| `Toast::message(LocalizedText)` | `Toast &` | 绑定通知文字 |

各方法均提供普通字符串重载，用于取消对应翻译绑定。对话框显示后只更新已经创建的文字区域；需要显示后绑定标题或正文时，创建时用非空指针保留相应区域，空字符串 `""` 也可使用。C API 创建后绑定同样遵守此限制。

`Toast::info()`、`success()`、`warning()` 和 `error()` 接受 `LocalizedText`，默认显示 `3000` 毫秒，位置为 `ToastPosition::TopCenter`。通知仍可见时切换语言会更新文案。

以下通知使用应用语言包中的文案。

```cpp
Toast::success(tr("app.saved", "已保存"));
```

语言包制作和加载见 [国际化](/core/i18n)。

## 图表

图表组件包括折线图、柱状图、饼图、仪表盘和波形图。共用坐标轴、图例和交互配置。大量时序点可使用 `TiledPointBuffer`。
