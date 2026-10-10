---
title: "ToolButton"
---

# ToolButton <Badge type="info" text="类" />

**头文件：** `#include <hiyui/widget/tool_bar.h>`

**命名空间：** `hiyui`

命令、选择、下拉与分裂按钮，可独立使用或挂载到 ToolBar。 状态、菜单及事件绑定属于控件，移动包装器或临时包装器析构不删除控件。 UI 线程调用；挂载前的配置与事件绑定在 init 时应用，销毁后的操作无效。 未挂载或已销毁对象的查询返回默认值。

**继承自：** `hiyui::Chainable< ToolButton >`

## 公开方法

### checked

```cpp
ToolButton & checked(ToolCheckState value, Notify notify=Notify::No) &
```

设置选择状态，同值不通知；Mixed 仅对 Toggle 有效，Radio 的 On 清除同组其他选择。

### menu

```cpp
bool menu(std::vector< ToolMenuItem > items)
```

替换菜单并关闭旧弹层；无效 id、重复 id 或不支持的 kind 拒绝整次替换。

### activate

```cpp
bool activate()
```

执行主命令；禁用、显式隐藏或正在激活时返回 false，Dropdown 仅展开菜单。

### activateMenu

```cpp
bool activateMenu(int id)
```

执行可见且启用的叶菜单命令，更新选择后发送 onActivate；无效 id 返回 false。

### openMenu

```cpp
ToolButton & openMenu() &
```

展开下拉或分裂按钮的菜单；重复调用保持展开，菜单为空时无操作。

### onActivate

```cpp
ToolButton & onActivate(F &&callback, EventHandle *handle=nullptr) &
```

绑定统一激活事件，重复绑定追加；参数为 const `ToolEvent`&amp; 或无参。

### onChange

```cpp
ToolButton & onChange(F &&callback, EventHandle *handle=nullptr) &
```

绑定按钮选择变化，重复绑定追加；参数为 ToolCheckState 或无参。

### shortcut

```cpp
ToolButton & shortcut(const HotkeySpec &value) &
```

替换桌面快捷键，键值 0 解除绑定；仅所属窗口获得焦点且按钮可用时执行。 同一窗口的工具按钮使用相同组合键时，最后绑定且可用的按钮响应。
