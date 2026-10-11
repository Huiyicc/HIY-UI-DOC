---
title: 组件语法
---

# 组件语法

HIY-UI 用三种表达方式构建界面。Props 聚合初始化（C++20 指定初始化器）配置静态属性，`operator()` 组合父子组件，链式成员方法修改运行时状态。

```cpp
VBox{.padding = 12, .gap = 8}(
    Label{.text = "Account"},
    Button{.text = "Save"}.onClick(save));
```

## Props

每个组件有对应的 Props 聚合类型。所有字段都有默认值，按声明顺序书写指定初始化器即可省略未变化的字段。

```cpp
ButtonProps props{
    .text = "Save",
    .width = 120,
    .bg = HIYUI_DEFAULT,
};
Button button(props);
```

颜色字段默认 `HIYUI_DEFAULT`，跟随当前主题；尺寸字段默认 `HIYUI_AUTO`，由内容决定。哨兵值定义见 [常量与哨兵值](/core/constants)。

## 组合

继承 `Container<T>` 的组件支持 `operator()` 挂载子组件。挂载后，子组件的底层对象由 LVGL 父对象持有。

```cpp
Card{.title = "Network"}(
    Label{.text = "Connected"},
    Switch{.checked = true});
```

## 运行时方法

链式方法返回当前组件，用于事件绑定、样式和状态设置。

```cpp
Button{.text = "Delete"}
    .bg(0xB3261E)
    .enabled(canDelete)
    .onClick(removeItem);
```

需要在挂载后继续访问组件时绑定 `Ref<T>`，见 [Container 与 Ref](/core/container-ref)。

## 覆盖顺序

同一字段多次设置时，后应用者覆盖先应用者。从低到高的完整顺序：

1. `themeStyle(WidgetType)` 组件主题
2. `themeStyle(provider)` 默认样式提供者
3. Props 显式字段
4. 链式方法与 `style()` 显式样式

显式设置默认状态背景（`bg()`、`style()` 的背景字段）解除 `surface()` 材质绑定。显式尺寸和内边距 setter 解除 `layoutRules()` 对应字段的控制，其他字段继续适配；`clearLayoutRules()` 不覆盖已解除的字段。

颜色字段接受 `HIYUI_DEFAULT` 恢复主题默认。`fontSize()`、`radius()`、`padding()`、`margin()`、`opacity()`、`borderWidth()` 和单边内边距/外边距方法接受 `HIYUI_DEFAULT_INT` 恢复组件默认。哨兵值定义见 [常量与哨兵值](/core/constants)。
