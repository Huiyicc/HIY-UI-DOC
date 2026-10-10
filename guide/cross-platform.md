---
title: 跨端任务与布局
---

# 跨端任务与布局

同一业务任务在不同设备上呈现方式不同。页面复用任务状态、输入校验和动作处理；排列由布局规则决定，导航由区域组件决定，精简任务展示哪些内容由应用显式选择。

## 对照表

| 差异 | 使用方式 | 应用负责的内容 |
|---|---|---|
| 相同任务，容器宽高变化 | `layoutRules()` 调整方向、间距、尺寸和显隐 | 选择内容需要的断点，分配容器尺寸和滚动范围 |
| 相同列表与详情，宽屏并排、窄屏逐页 | `ListDetail` 保留两棵区域子树并切换呈现 | 选择项、筛选、编辑草稿、保存和取消 |
| 主导航在宽屏停靠、窄屏抽屉显示 | `WindowFrame` 管理导航与内容区域 | 导航条目、当前页面和页面历史 |
| 手表或专用小屏只执行部分任务 | 应用挂载精简组件组合，共用任务动作 | 明确设备或对象 ID，以及保留的查看、确认或控制操作 |
| 输入方式或窗口可用区变化 | `layoutEnvironment()` 与 `onEnvironmentChange()` | 根据已知能力提供可到达的操作，处理内容与可用区的交集 |

屏幕宽度与显示形状不改变业务任务范围。窗口缩窄不会自动删除编辑能力；`hidden` 隐藏的子树仍保留组件和状态。需要精简任务时，由应用选择精简入口，不创建多余的筛选和编辑区域。

### 尺寸与输入

嵌套布局的断点取自宿主的 `contentWidth/contentHeight`，单位为逻辑像素，已扣除边框与内边距。参与断点的宽或高必须由外部布局或显式尺寸分配，不能依赖受规则控制的后代内容撑开。内容可能超出高度时，把容器设为滚动容器；详情阅读区可用 `maxWidth()` 限制行宽。

`WindowArea.availableArea` 描述窗口客户区内的可用区域。子容器使用该区域前，先与自身内容区求交集并换算坐标；库不会自动把该区域应用到普通容器。gallery 的精简设备页与 Picker 都按此方式处理交集。

宿主报告圆形屏幕时，安全区域与视口内接矩形求交。宿主未报告安全区或键盘遮挡时，对应字段保持未知，不能视为已完成避让。

指针、触摸、键盘和旋钮能力可以同时存在。`CapabilityState` 有 `Unknown`、`Unavailable`、`Available` 三个值；`Unknown` 表示后端未报告该能力，不能当作不可用处理，也不能据此移除唯一的操作入口。主动作由可见按钮承载，键盘和旋钮通过可聚焦组件到达同一动作。

### 状态与生命周期

业务状态（选择项、草稿）放在页面控制器或应用状态中，不放在组件里。布局规则重排和 ListDetail 宽窄切换保留组件，不提交或取消草稿。

应用内的返回入口调用 `Window::requestBack()`；需要确认未保存内容时，由应用绑定返回处理并管理确认结果。

回调访问控件使用已关联的 `Ref<T>`，目标销毁后引用失效。离开页面后仍需保留的业务状态，交给生命周期更长的所有者持有；组件引用不承担持久化。挂载和引用写法见 [Container 与 Ref](/core/container-ref)。

### 画廊中的职责划分

桌面与 Android C++ 画廊共用 `gallery_app.h/.cpp` 的应用框架。适配只改变区域呈现和边距，业务页不按平台复制；实际界面与构建入口见 [C++ 画廊窗口框架](/build/cpp-gallery#窗口框架)。

| 所有者 | 负责内容 | 保留边界 |
|---|---|---|
| `ComponentGalleryApp` | 当前页面、主题、背景和设置状态 | 窗口宽窄变化不重新选择或创建页面 |
| `WindowFrame` | 停靠目录、抽屉及其开关按钮 | 宽窄切换保留区域子树 |
| `LayoutRules` | 根据框架内容宽度调整页头和内容边距 | 更新布局，不执行页面构建函数 |
| 组件页与设置页 | 在同一内容区域内切换显隐 | 打开设置不销毁组件页；切换到其他组件时才重建 |
| 外层根组件 | 处理设置页的返回请求 | 位于框架之外，抽屉先消费返回后再到达设置处理 |
| `Application` 与 `Window` | 文档示例导航、未保存确认及关闭 | 共用 `navigate()` 与 `requestBack()`，由平台决定窗口或页面呈现 |

`ComponentGalleryApp` 是应用示例，不是库公共组件。新应用按自身任务选择断点、页面保留策略和工具入口。

### C 与 C++ 对应

| 用途 | C++ | C |
|---|---|---|
| 环境查询与订阅 | `layoutEnvironment()`、`onEnvironmentChange()` | `hiyui_wdg_layout_environment()`、`hiyui_wdg_on_environment_change()` |
| 内容布局规则 | `LayoutRules`、`layoutRules()` | `hiyui_layout_rules_t`、`hiyui_wdg_layout_rules()` |
| 列表详情 | `ListDetail` | `hiyui_list_detail_create()` |
| 窗口导航区域 | `WindowFrame` | `hiyui_window_frame_create()` |
| 窗口返回 | `Window::requestBack()` | `hiyui_win_request_back()` |

C 的规则和 ListDetail Props 使用各自的 `*_init()` 函数取得默认值；全零初始化不代表这些接口的默认配置。完整默认值、空值和通知契约见 [响应式布局](/core/responsive) 与 [列表详情](/widgets/list-detail)。

## 代码示例

使用 `<hiyui/hiyui.h>` 和 `hiyui` 命名空间。以下操作组在父内容宽度达到 320 逻辑像素时横向换行，其余情况纵向排列；`parent` 为已挂载且宽度由外部布局分配的组件。

```cpp
const LayoutRule rules[] = {
    {.minWidth = 320,
     .values = {.fields = LayoutField::Flow, .flow = FlexFlow::RowWrap}},
};
auto actions = VBox{.gap = 8}(
    Button{.text = "保存"}.minimumSize(0, 44),
    Button{.text = "取消"}.minimumSize(0, 44)
);
actions.init(parent).fillWidth().layoutRules({
    .base = {.fields = LayoutField::Flow, .flow = FlexFlow::Column},
    .rules = rules,
    .count = 1,
});
```

320 与 44 是示例选择的断点和按钮最小高度，单位为逻辑像素。规则数组在 `layoutRules()` 调用时复制；按钮回调仍通过 `.onClick()` 绑定到应用动作。

### 完整任务与精简任务

gallery 的「布局 → 本地设备控制」提供筛选、列表、详情和亮度编辑；「布局 → 本地设备开关」只显示指定设备的状态、已保存亮度和开关。两个页面共用任务逻辑和状态展示，每次挂载各自持有独立的内存状态。

从可执行文件所在目录启动 240×240 内容窗口的精简任务。

```powershell
.\demo_component_gallery.exe --compact-device 101
```

源码位于 `test/demo/component_gallery/pages/demo_adaptive_layout.cpp`。`buildAdaptiveLayoutPage(parent)` 与 `buildCompactDeviceView(parent, deviceId)` 是 gallery 专用构建入口，不属于库公共 API；后者对无效设备 ID 返回 false，不创建控件。设备清单和状态语义见 [设备任务示例](/build/cpp-gallery#设备任务示例)。

## 平台与发布边界

SDL 后端覆盖 Windows、Linux、macOS 桌面和 Android；Linux 小屏设备选择 FBDEV。输入与安全区域信息取决于宿主实际提供的数据。`HIYUI_BACKEND=EMBEDDED` 面向 MCU/RTOS，尚未提供：配置阶段报错并列出待补齐项。

C++ 应用链接 `hiyui-static`。C 应用启用 `HIYUI_BUILD_C_BINDING` 编译 C 接口后链接 `hiyui-c`；`HIYUI_C_STATIC` 使 `hiyui-c` 输出静态库。gallery 精简入口减少实际创建的控件树，仍使用同一可执行文件与资源；构建选项和字体边界见 [编译参数](/build/options)。

每个操作系统与处理器目标分别构建应用或固件；Android 使用系统安装包格式。不同目标不共用同一个可执行文件。

## 相关页面

- [响应式布局](/core/responsive)
- [布局组件](/widgets/layout)
- [列表详情](/widgets/list-detail)
- [返回请求](/window/multi-window#返回请求)
- [平台适配层](/advanced/pal)
- [C++ 画廊](/build/cpp-gallery)
