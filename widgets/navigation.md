---
title: 导航组件
---

# 导航组件

以下示例位于 `hiyui` 命名空间，`parent` 为已挂载的 `Widget &`。尺寸和字号使用主题逻辑像素；颜色为 `0xRRGGBB`，`HIYUI_DEFAULT` 表示跟随主题。哨兵值见 [常量与哨兵值](/core/constants)。

带 `Notify` 参数的方法默认使用 `Notify::No`；传入 `Notify::Yes` 时，仅实际选中值变化才触发 `onChange()`，用户点击导致选中值变化时同样触发。事件订阅可传入 `EventHandle *` 取得解绑句柄，重复订阅追加回调，组件销毁时解除。

## Menu

侧边菜单支持嵌套、分组、手风琴展开和三种显示模式。

### 头文件

`#include <hiyui/widget/menu.h>`

### 最小示例

创建两个叶节点和一个含子项的菜单。

```cpp
Menu menu({.width = 200, .height = 360});
menu.init(parent);
menu.items({{.text = "概览"}, {.text = "任务"},
            {.text = "设置", .children = {{.text = "常规"}, {.text = "网络"}}}});
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `width` | `int` | `180` | 宽模式宽度 |
| `height` | `int` | `HIYUI_AUTO` | 内容自适应高度 |
| `itemHeight` | `int` | `40` | 菜单行高度 |
| `selectedIndex` | `int` | `0` | 初始叶节点索引 |
| `indentPerLevel` | `int` | `16` | 每级子项缩进 |
| `accordion` | `bool` | `true` | 展开父项时折叠同级其他父项 |
| `iconFillOnSelected` | `bool` | `true` | 选中项字体图标使用填充样式 |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 背景色 |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | 选中指示器背景色 |
| `activeTextColor` | `uint32_t` | `HIYUI_DEFAULT` | 选中项文字色 |
| `hoverColor` | `uint32_t` | `HIYUI_DEFAULT` | 悬停背景色 |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | 未选中项文字色 |
| `fontSize` | `int` | `0` | `0` 使用主题默认字号 |
| `iconSize` | `int` | `20` | 图标尺寸 |
| `padding` | `int` | `8` | 内边距 |
| `mode` | `MenuMode` | `MenuMode::Wide` | 初始显示模式 |
| `collapsedWidth` | `int` | `56` | `NarrowIcon` 宽度 |
| `narrowIconTextWidth` | `int` | `88` | `NarrowIconText` 宽度 |
| `showToggleBtn` | `bool` | `true` | 是否显示模式切换按钮 |
| `toggleBtnPos` | `ToggleBtnPos` | `ToggleBtnPos::Bottom` | 模式切换按钮位置 |
| `toggleIcon` | `uint32_t` | `0` | 当前版本固定显示默认箭头，设置此字段不改变图标 |

### MenuItem 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | UTF-8 文本 |
| `iconSrc` | `const void *` | `nullptr` | 图片源 |
| `iconCodepoint` | `uint32_t` | `0` | 字体图标码点；非零时覆盖 `iconSrc` |
| `iconStyle` | `FontIconStyle` | `{}` | 字体图标样式 |
| `separator` | `bool` | `false` | 是否为分隔线，不参与叶节点索引 |
| `groupTag` | `const char *` | `nullptr` | 分隔线上方的分组文字，仅分隔线使用 |
| `expanded` | `bool` | `false` | 父项初始展开状态 |
| `data` | `int` | `0` | 叶节点关联的应用数据 |
| `children` | `std::vector<MenuItem>` | `{}` | 非空时该项为可展开父项 |

### 显示模式与按钮位置

| 值 | 说明 |
| --- | --- |
| `MenuMode::Wide` | 图标与文字横向排列，子项在菜单内展开 |
| `MenuMode::NarrowIcon` | 仅显示图标，悬停父项显示子菜单 |
| `MenuMode::NarrowIconText` | 图标上、文字下，悬停父项显示子菜单 |
| `ToggleBtnPos::Bottom` | 切换按钮位于底部 |
| `ToggleBtnPos::Top` | 切换按钮位于顶部 |
| `ToggleBtnPos::None` | 隐藏切换按钮 |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `init(Widget &)` | `Menu &` | 挂载到父组件 |
| `items(const std::vector<MenuItem> &, Notify)` | `Menu &` | 替换整棵菜单树；有效叶索引保留，否则无选中项 |
| `selectedIndex(int, Notify)` | `Menu &` | 选择叶节点；`HIYUI_NO_SELECTION` 清除选择，其他越界值无操作 |
| `selectedIndex()` | `int` | 当前叶索引，无选中项返回 `HIYUI_NO_SELECTION` |
| `itemData(int)` | `int` | 按叶索引读取 `data`，越界返回 `0` |
| `expandItem(int, bool = true)` | `Menu &` | 按前序节点索引展开或折叠父项；前序节点索引是整棵树先序遍历的序号，包含父项、叶项和分隔线 |
| `collapseAll()` | `Menu &` | 折叠所有展开的父项 |
| `mode(MenuMode)`、`mode()` | `Menu &` / `MenuMode` | 设置或读取显示模式 |
| `collapsed(bool)` | `Menu &` | `true` 切换为 `NarrowIcon`，`false` 切换为 `Wide` |
| `isCollapsed()` | `bool` | 两种窄模式均返回 `true` |
| `itemText(int, const char *)` | `Menu &` | 按前序节点索引更新文字，并解除该项翻译绑定 |
| `itemText(int, LocalizedText)` | `Menu &` | 绑定节点文字，语言切换保留选择和展开状态 |
| `onChange(callback, EventHandle * = nullptr)` | `Menu &` | 回调接收变化后的叶索引 |
| `onActivate(callback, EventHandle * = nullptr)` | `Menu &` | 点击叶节点时通知；再次点击当前项也触发 |
| `onExpand(callback, EventHandle * = nullptr)` | `Menu &` | 回调参数为前序节点索引与是否展开 |
| `onCollapse(callback, EventHandle * = nullptr)` | `Menu &` | 显示模式切换时回调接收是否处于窄模式 |

### 索引与重建

叶索引只计算可选择的叶节点。上例中“常规”的叶索引为 `2`，前序节点索引为 `3`；“设置”的前序节点索引为 `2`。

`items()` 使旧行的 `Ref` 立即失效，实际释放在 UI 主循环中完成。传入空集合清空选择；重建同时清除旧条目上的翻译绑定。`itemText()` 越界时无操作，传入 `nullptr` 显示空文字，分隔线仅更新已经存在的分组标签。

## MenuBar

顶部菜单栏由顶层菜单和 `ContextMenuItem` 子菜单组成，仅在 `LV_USE_SDL3` 桌面构建中可用。

### 头文件

`#include <hiyui/widget/menu_bar.h>`

### 最小示例

创建含两个子项的顶层菜单。

```cpp
MenuBar bar;
bar.init(parent);
bar.items({{.text = "文件", .children = {{.text = "打开"}, {.text = "保存"}}}});
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `height` | `int` | `36` | 菜单栏高度 |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 背景色 |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | 文字色 |
| `hoverColor` | `uint32_t` | `HIYUI_DEFAULT` | 顶层项悬停色 |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | 菜单打开时顶层项背景色 |
| `fontSize` | `int` | `0` | `0` 使用主题默认字号 |
| `itemPaddingX` | `int` | `12` | 顶层项水平内边距 |
| `popupMode` | `PopupMode` | `PopupMode::Inline` | 子菜单呈现方式 |

### MenuBarItem 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | 顶层项文字 |
| `iconCodepoint` | `uint32_t` | `0` | 字体图标码点，`0` 不显示图标 |
| `iconStyle` | `FontIconStyle` | `{}` | 字体图标样式 |
| `disabled` | `bool` | `false` | 禁用后点击不打开菜单 |
| `children` | `std::vector<ContextMenuItem>` | `{}` | 子菜单集合 |
| `localizedText` | `std::optional<LocalizedText>` | `{}` | 设置后覆盖 `text`，随语言更新 |

### 弹出模式

| 值 | 说明 |
| --- | --- |
| `PopupMode::Inline` | 在当前窗口内显示 |
| `PopupMode::Window` | 使用独立系统子窗口；无法确定父显示时使用 `Inline` |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `init(Widget &)` | `MenuBar &` | 挂载到父组件 |
| `items(const std::vector<MenuBarItem> &)` | `MenuBar &` | 替换所有顶层项及子菜单，空集合清空菜单栏 |

子菜单叶项通过 `ContextMenuItem::action` 处理操作，通过 `accelerator` 注册桌面快捷键。替换菜单项或销毁菜单栏会解除旧快捷键。子菜单文字可用 `localizedText` 绑定翻译，描述在设置时复制。

## Tabs

标签栏与内容面板组成的分页容器，支持四个方向和溢出滚动。

### 头文件

`#include <hiyui/widget/tabs.h>`

### 最小示例

创建两页，并在第一页放置标签。

```cpp
Tabs tabs({.width = 600, .height = 360});
tabs.init(parent);
tabs.items({{.text = "常规"}, {.text = "网络"}});
tabs.tabPanel(0, [](Widget &panel) {
  Label({.text = "常规设置"}).init(panel);
});
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `activeIndex` | `int` | `0` | 初始激活索引 |
| `position` | `TabPosition` | `TabPosition::Top` | 标签栏位置 |
| `tabBarHeight` | `int` | `44` | 上下栏高度；左右栏宽度 |
| `width` | `int` | `HIYUI_AUTO` | 默认填满父容器宽度 |
| `height` | `int` | `HIYUI_AUTO` | 默认按内容确定高度 |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | 激活项颜色，默认主题 Primary |
| `inactiveColor` | `uint32_t` | `HIYUI_DEFAULT` | 未激活项颜色，默认主题 TextSecondary |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 背景色 |
| `fontSize` | `int` | `0` | `0` 使用主题默认字号 |
| `maxVisibleTabs` | `int` | `0` | `0` 按实际尺寸判断溢出；正数使超出该数量时也显示滚动入口 |

### TabItem 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | 标签文字，设置时复制 |
| `iconCodepoint` | `uint32_t` | `0` | 字体图标码点 |
| `iconSrc` | `const void *` | `nullptr` | 图片源 |
| `iconStyle` | `FontIconStyle` | `{}` | 字体图标样式 |
| `data` | `int` | `0` | 应用数据 |

### 标签栏位置

| 值 | 说明 |
| --- | --- |
| `TabPosition::Top` | 位于内容上方 |
| `TabPosition::Bottom` | 位于内容下方 |
| `TabPosition::Left` | 位于内容左侧 |
| `TabPosition::Right` | 位于内容右侧 |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `init(Widget &)` | `Tabs &` | 挂载到父组件 |
| `items(const std::vector<TabItem> &, Notify)` | `Tabs &` | 替换标签集合，销毁旧面板及其内容，旧面板引用失效 |
| `appendItems(const std::vector<TabItem> &, Notify)` | `Tabs &` | 追加标签，保留现有面板及其内容 |
| `activeIndex(int, Notify)` | `Tabs &` | 切换激活项和内容页，越界无操作 |
| `activeIndex()` | `int` | 当前索引，空集合返回 `HIYUI_NO_SELECTION` |
| `position(TabPosition)` | `Tabs &` | 运行时切换标签栏方向 |
| `tabPanel(int, builder)` | `Tabs &` | 对指定面板执行 `builder(Widget &)`，越界不执行 |
| `tabContent(int)` | `lv_obj_t *` | 借用面板对象；越界返回 `nullptr`，构建内容可使用 `tabPanel()` |
| `itemData(int)` | `int` | 查询应用数据，越界返回 `0` |
| `itemText(int, const char *)`、`itemText(int, LocalizedText)` | `Tabs &` | 更新或绑定标签文字，保留内容与选择；普通字符串解除绑定 |
| `activeColor(ThemeRole)`、`inactiveColor(ThemeRole)` | `Tabs &` | 绑定激活项、未激活项颜色到主题角色 |
| `onChange(callback, EventHandle * = nullptr)` | `Tabs &` | 回调接收激活索引 |

标签数量或父容器尺寸变化后，溢出入口随布局更新。内容页滚动结束时同步激活索引和指示条。`items()` 清除旧项翻译绑定；`appendItems()` 保留已有面板。

## TabsEx

会话标签栏提供连接状态、关闭请求、重命名、Pin 分组和拖拽排序，内容页面由应用管理。

### 头文件

`#include <hiyui/widget/tabs_ex.h>`

### 最小示例

创建两个会话标签，并设置首项连接状态。

```cpp
TabsEx tabs;
tabs.init(parent);
tabs.items({{.title = "本地", .host = "127.0.0.1"}, {.host = "192.168.1.10"}});
tabs.connectionState(0, TabConnectionState::Connected);
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `activeIndex` | `int` | `0` | 初始激活索引 |
| `width` | `int` | `HIYUI_AUTO` | 默认填满父容器宽度 |
| `height` | `int` | `36` | 标签栏高度 |
| `fontSize` | `int` | `0` | `0` 使用主题默认字号 |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 背景色 |
| `activeBg` | `uint32_t` | `HIYUI_DEFAULT` | 激活项背景色 |
| `indicatorColor` | `uint32_t` | `HIYUI_DEFAULT` | 指示条颜色，默认主题 Primary |
| `indicatorSide` | `TabIndicatorSide` | `TabIndicatorSide::Bottom` | 指示条位置 |
| `animated` | `bool` | `true` | 激活指示条与定位滚动动画，同时受主题动画开关控制 |

### TabsExItem 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `const char *` | `nullptr` | 标题，为空时显示 `host`；设置时复制 |
| `host` | `const char *` | `nullptr` | Host 或 IP 文本，设置时复制 |
| `iconCodepoint` | `uint32_t` | `0` | 字体图标码点，非零时覆盖 `iconSrc` |
| `iconSrc` | `const void *` | `nullptr` | 图片路径在设置时复制；描述符及像素借用至该项移除或替换 |
| `iconStyle` | `FontIconStyle` | `{}` | 字体图标样式 |
| `connection` | `TabConnectionState` | `TabConnectionState::Disconnected` | 连接状态 |
| `showStatus` | `bool` | `true` | 显示状态点 |
| `closable` | `bool` | `true` | 允许关闭；关闭按钮在悬停或激活时显示 |
| `pinned` | `bool` | `false` | 放入 Pin 分组 |
| `disabled` | `bool` | `false` | 禁止激活和拖拽 |
| `data` | `int` | `0` | 应用数据 |

### 连接状态与指示条

| 值 | 说明 |
| --- | --- |
| `TabConnectionState::Connected` | 已连接 |
| `TabConnectionState::Disconnected` | 已断开 |
| `TabConnectionState::Error` | 连接错误 |
| `TabConnectionState::Connecting` | 正在连接 |
| `TabIndicatorSide::Bottom` | 指示条位于底部 |
| `TabIndicatorSide::Top` | 指示条位于顶部 |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `init(Widget &)` | `TabsEx &` | 挂载到父组件 |
| `items(const std::vector<TabsExItem> &, Notify)` | `TabsEx &` | 替换全部条目，按 Pin 状态排列；也接收初始化列表 |
| `append(const TabsExItem &, Notify)` | `TabsEx &` | 追加到对应分组 |
| `removeTab(int, Notify)` | `TabsEx &` | 删除当前索引对应项，越界无操作 |
| `activeIndex(int, Notify)`、`activeIndex()` | `TabsEx &` / `int` | 设置或读取激活索引；禁用项和越界设置无操作，无可选项返回 `HIYUI_NO_SELECTION` |
| `scrollToTab(int)` | `TabsEx &` | 滚动到指定标签，越界无操作 |
| `itemCount()` | `int` | 标签数量 |
| `itemData(int)` | `int` | 应用数据，越界返回 `0` |
| `tabTitle(int)` | `std::string` | 当前显示标题的副本，越界返回空串 |
| `connectionState(int, TabConnectionState)` | `TabsEx &` | 更新连接状态 |
| `closable(int, bool)` | `TabsEx &` | 设置是否允许关闭 |
| `pinned(int, bool = true, Notify)`、`isPinned(int)` | `TabsEx &` / `bool` | 更新分组或查询 Pin 状态，越界查询返回 `false` |
| `rename(int, const char *)` | `TabsEx &` | 复制新标题；空指针或空串恢复显示 `host` |
| `onChange()`、`onCloseRequest()`、`onNewRequest()` | `TabsEx &` | 绑定激活、关闭请求、新建请求回调 |
| `onRightClick()`、`onRename()`、`onReorder()` | `TabsEx &` | 绑定右键、重命名提交、拖拽重排回调 |

以上事件方法接收回调和可选的 `EventHandle *`。回调可接收 `const TabsExEvent &`、索引或无参数。

### 事件与交互

| 值 | 说明 |
| --- | --- |
| `TabsExEventType::Changed` | 激活索引变化 |
| `TabsExEventType::CloseRequest` | 请求关闭，由应用调用 `removeTab()` 完成删除 |
| `TabsExEventType::NewRequest` | 请求新建，`index` 为 `HIYUI_NO_SELECTION` |
| `TabsExEventType::RightClick` | 在标签上右键 |
| `TabsExEventType::Rename` | 用户确认重命名 |
| `TabsExEventType::Reorder` | 拖拽排序完成 |

`TabsExEvent` 的 `index` 是当前标签索引，`previousIndex` 是激活变化前或拖拽开始时的索引；`data`、`text`、`pinned` 对应当前项。`text` 仅在回调期间有效，需要保存时复制字符串。

Pin 项排列在普通项之前，拖拽只能在所属分组内移动。Pin、删除和排序会改变索引；应用可用 `data` 关联会话。双击标题进入编辑，Enter 提交，Escape 或失焦取消。标签溢出时可滚动或通过列表入口定位。

## Pagination

页码从 `1` 开始；有限宽度下自动减少可见页码数量。

### 头文件

`#include <hiyui/widget/pagination.h>`

### 最小示例

为 500 条记录创建分页，并填满父容器宽度。

```cpp
Pagination pagination({.total = 500, .pageSize = 10});
pagination.init(parent);
pagination.fillWidth();
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `total` | `int` | `0` | 总记录数 |
| `current` | `int` | `1` | 初始页码 |
| `pageSize` | `int` | `10` | 每页记录数 |
| `width` | `int` | `HIYUI_AUTO` | 默认按内容确定宽度；有限宽度内缩减可见页码 |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | 当前页码颜色，默认主题 Primary |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | 页码文字色 |
| `fontSize` | `int` | `0` | `0` 使用默认字号 |
| `buttonSize` | `int` | `32` | 页码按钮尺寸 |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `init(Widget &)` | `Pagination &` | 挂载到父组件 |
| `currentPage(int, Notify)` | `Pagination &` | 跳转到指定页码，越界无操作 |
| `currentPage()` | `int` | 当前页码 |
| `totalPages()` | `int` | 总页数，至少为 `1` |
| `activeColor(ThemeRole)`、`textColor(ThemeRole)` | `Pagination &` | 绑定当前页和其他页的颜色到主题角色 |
| `onChange(callback, EventHandle * = nullptr)` | `Pagination &` | 回调接收变化后的页码 |

`total <= 0` 或 `pageSize <= 0` 时显示一页。可见页码最多五个，当前页的高亮位于页码区域中间；调整宽度不会改变当前页。主题关闭动画时，切换立即到达目标页码。

## Segmented

分段单选控件支持选中滑块、图标和逐项禁用。

### 头文件

`#include <hiyui/widget/segmented.h>`

### 最小示例

创建三个选项，初始选择第二项。

```cpp
Segmented segmented({.selectedIndex = 1});
segmented.init(parent);
segmented.items({"日", "周", "月"});
```

### Props 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `selectedIndex` | `int` | `0` | 初始选中索引 |
| `size` | `SegmentedSize` | `SegmentedSize::Medium` | 尺寸预设 |
| `width` | `int` | `HIYUI_AUTO` | 默认填满父容器宽度 |
| `height` | `int` | `HIYUI_AUTO` | 默认由尺寸预设确定 |
| `activeColor` | `uint32_t` | `HIYUI_DEFAULT` | 选中项文字色 |
| `activeBg` | `uint32_t` | `HIYUI_DEFAULT` | 选中滑块背景色 |
| `bg` | `uint32_t` | `HIYUI_DEFAULT` | 整体背景色 |
| `textColor` | `uint32_t` | `HIYUI_DEFAULT` | 未选中项文字色 |
| `fontSize` | `int` | `0` | `0` 由尺寸预设确定 |
| `radius` | `int` | `HIYUI_NONE_INT` | 未设置时由尺寸预设确定 |
| `animated` | `bool` | `true` | 滑块动画，同时受主题动画开关控制 |

### SegmentedItem 参数表

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `const char *` | `nullptr` | UTF-8 文本 |
| `iconCodepoint` | `uint32_t` | `0` | 字体图标码点 |
| `iconSrc` | `const void *` | `nullptr` | 图片源 |
| `iconStyle` | `FontIconStyle` | `{}` | 字体图标样式 |
| `disabled` | `bool` | `false` | 禁止选择该项 |
| `data` | `int` | `0` | 应用数据 |

### 尺寸预设

| 值 | 说明 |
| --- | --- |
| `SegmentedSize::Small` | 默认高度 `26`、字号 `12`、圆角 `4` |
| `SegmentedSize::Medium` | 默认高度 `32`、字号 `14`、圆角 `6` |
| `SegmentedSize::Large` | 默认高度 `40`、字号 `16`、圆角 `8` |
| `SegmentedSize::Fit` | 使用显式 `height`；未设置高度时为 `32` |

### 运行时方法表

| 方法 | 返回 | 说明 |
| --- | --- | --- |
| `init(Widget &)` | `Segmented &` | 挂载到父组件 |
| `items(const std::vector<SegmentedItem> &, Notify)` | `Segmented &` | 替换集合；当前索引仍有效且可选时保留选择 |
| `items(std::initializer_list<const char *>, Notify)` | `Segmented &` | 设置纯文本选项 |
| `selectedIndex(int, Notify)` | `Segmented &` | 选择指定项；越界或禁用项无操作 |
| `selectedIndex()` | `int` | 当前索引；无可选项返回 `HIYUI_NO_SELECTION` |
| `itemData(int)` | `int` | 应用数据，越界返回 `0` |
| `itemText(int, const char *)`、`itemText(int, LocalizedText)` | `Segmented &` | 更新或绑定选项文字；普通字符串解除绑定 |
| `disableItem(int, bool = true, Notify)` | `Segmented &` | 设置单项禁用状态，并按需要调整选择 |
| `activeColor(ThemeRole)`、`activeBg(ThemeRole)`、`textColor(ThemeRole)` | `Segmented &` | 绑定选中项文字、滑块背景和未选中项文字色 |
| `onChange(callback, EventHandle * = nullptr)` | `Segmented &` | 回调接收变化后的索引 |

禁用当前项时，选择左侧首个可用项；左侧没有可用项时再选择右侧首个可用项。全部禁用后无选中项，再启用某项时选择该项。替换集合清除旧条目的翻译绑定；更新单项文字保留选中状态。

## C 接口

`<hiyui/c/nav.h>` 提供 Menu、MenuBar、Tabs、Pagination、Segmented；TabsEx 使用 `<hiyui/c/tabs_ex.h>`。创建函数的 Props 指针传 `NULL` 时使用组件默认配置；显式传入结构体时按 C 头文件设置各字段。

| 组件 | C 接口 |
| --- | --- |
| Menu | `hiyui_menu_create()`、`hiyui_menu_set_items()`、`hiyui_menu_set_selected()`、`hiyui_menu_get_selected()`、`hiyui_menu_item_data()`、`hiyui_menu_set_mode()`、`hiyui_menu_get_mode()`、`hiyui_menu_set_collapsed()`、`hiyui_menu_is_collapsed()`、`hiyui_menu_expand_item()`、`hiyui_menu_collapse_all()`；事件为 `hiyui_menu_on_change()`、`hiyui_menu_on_activate()`、`hiyui_menu_on_expand()`、`hiyui_menu_on_collapse()` |
| MenuBar | `hiyui_menu_bar_create()`、`hiyui_menu_bar_set_items()`；子项通过 `action` 或 `action_ex` 处理操作 |
| Tabs | `hiyui_tabs_create()`、`hiyui_tabs_set_items()`、`hiyui_tabs_append_items()`、`hiyui_tabs_content()`、`hiyui_tabs_set_active_index()`、`hiyui_tabs_get_active_index()`、`hiyui_tabs_set_position()`、`hiyui_tabs_item_data()`、`hiyui_tabs_on_change()` |
| TabsEx | `hiyui_tabs_ex_create()`、`hiyui_tabs_ex_set_items()`、`hiyui_tabs_ex_append()`、`hiyui_tabs_ex_remove()`、`hiyui_tabs_ex_set_active()`、`hiyui_tabs_ex_get_active()`；标题、Pin、连接状态与业务事件见 [TabsEx C 参考](/bindings/c/tabs_ex.h) |
| Pagination | `hiyui_pagination_create()`、`hiyui_pagination_set_current()`、`hiyui_pagination_get_current()`、`hiyui_pagination_get_total_pages()`、`hiyui_pagination_on_change()` |
| Segmented | `hiyui_segmented_create()`、`hiyui_segmented_set_items()`、`hiyui_segmented_set_selected_index()`、`hiyui_segmented_get_selected_index()`、`hiyui_segmented_disable_item()`、`hiyui_segmented_item_data()`、`hiyui_segmented_on_change()` |

C 的通知参数为 `HIYUI_NOTIFY_NO` / `HIYUI_NOTIFY_YES`。Tabs、Segmented、Pagination 的主题角色函数位于 `nav.h`；条目文字更新和翻译绑定位于 `<hiyui/c/i18n.h>`。面板句柄和回调中的事件数据为借用对象，不能在其所属组件销毁后继续使用。

## 相关页面

- [Widget](/core/widget)
- [事件](/core/event-system)
- [国际化](/core/i18n)
- [主题](/styling/theme)
- [动画](/widgets/animation)
- [导航组件 C 参考](/bindings/c/nav.h)
- [TabsEx C 参考](/bindings/c/tabs_ex.h)
